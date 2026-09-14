import type {Phase, Resource, SubjectConfig} from "./subjectTypes";

export type LearnerType = "explore" | "foundation" | "career" | "project" | "gap";
export type CapabilityImportance = "required" | "recommended" | "optional";

export type CapabilityResource = Pick<Resource,"name"|"url"|"level"|"kind"|"pre"|"description">;

export type UniversalCapability = {
  id: string;
  name: string;
  description: string;
  link: string;
  mode: NonNullable<Phase["mode"]>;
  prerequisites: string[];
  learningOutcomes: string[];
  evidence: {
    title: string;
    description: string;
  }[];
  resources: CapabilityResource[];
};

export type CapabilityGraph = {
  subjectKey: string;
  subjectName: string;
  capabilities: UniversalCapability[];
};

export type PersonalizedPlanStep = {
  capability: UniversalCapability;
  status: "known" | "learn";
  importance: CapabilityImportance;
};

const modeOf=(phase:Phase):NonNullable<Phase["mode"]>=>phase.mode??"core";

function evidenceFor(phase:Phase){
  const projectLike=/项目|作品|报告|研究|实验|原型|复现|代码|模型/.test(`${phase.done}${phase.learn}`);
  return [{
    title:projectLike?"阶段成果":"能力检查",
    description:phase.done,
  }];
}

export function buildCapabilityGraphFromPhases(args:{
  subjectKey:string;
  subjectName:string;
  phases:readonly Phase[];
  getResources:(link:string)=>readonly CapabilityResource[];
}):CapabilityGraph{
  const {subjectKey,subjectName,phases,getResources}=args;
  let lastCore:string|undefined;
  const capabilities:UniversalCapability[]=[];

  for(const phase of phases){
    const mode=modeOf(phase);
    const id=phase.link;
    const prerequisites=lastCore?[lastCore]:[];

    capabilities.push({
      id,
      name:phase.title.replace(/^学习/,""),
      description:phase.goal,
      link:phase.link,
      mode,
      prerequisites,
      learningOutcomes:[phase.done],
      evidence:evidenceFor(phase),
      resources:[...getResources(phase.link)],
    });

    if(mode==="core") lastCore=id;
  }

  validateCapabilityGraph({subjectKey,subjectName,capabilities});
  return {subjectKey,subjectName,capabilities};
}

export function buildSubjectCapabilityGraph(subject:SubjectConfig):CapabilityGraph{
  return buildCapabilityGraphFromPhases({
    subjectKey:subject.slug,
    subjectName:subject.name,
    phases:subject.phases,
    getResources:(link)=>subject.topics[link]?.resources??[],
  });
}

export function validateCapabilityGraph(graph:CapabilityGraph){
  const ids=new Set(graph.capabilities.map(item=>item.id));
  if(ids.size!==graph.capabilities.length) throw new Error(`${graph.subjectKey}: duplicate capability id`);
  for(const node of graph.capabilities){
    for(const prerequisite of node.prerequisites){
      if(!ids.has(prerequisite)) throw new Error(`${graph.subjectKey}: missing prerequisite ${prerequisite}`);
      if(prerequisite===node.id) throw new Error(`${graph.subjectKey}: self-loop ${node.id}`);
    }
  }
  topologicalOrder(graph);
}

function topologicalOrder(graph:CapabilityGraph,subset?:Set<string>):string[]{
  const included=subset??new Set(graph.capabilities.map(item=>item.id));
  const byId=new Map(graph.capabilities.map(item=>[item.id,item]));
  const visiting=new Set<string>();
  const visited=new Set<string>();
  const order:string[]=[];

  const visit=(id:string)=>{
    if(!included.has(id)||visited.has(id))return;
    if(visiting.has(id))throw new Error(`${graph.subjectKey}: capability graph contains a cycle at ${id}`);
    visiting.add(id);
    const node=byId.get(id);
    node?.prerequisites.forEach(visit);
    visiting.delete(id);
    visited.add(id);
    order.push(id);
  };

  graph.capabilities.forEach(node=>visit(node.id));
  return order;
}

function prerequisiteClosure(graph:CapabilityGraph,targetIds:string[]):Set<string>{
  const byId=new Map(graph.capabilities.map(item=>[item.id,item]));
  const result=new Set<string>();
  const visit=(id:string)=>{
    if(result.has(id))return;
    const node=byId.get(id);
    if(!node)return;
    result.add(id);
    node.prerequisites.forEach(visit);
  };
  targetIds.forEach(visit);
  return result;
}

function idsForGoal(graph:CapabilityGraph,goal:LearnerType,targetCapability?:string):Set<string>{
  const nodes=graph.capabilities;
  const core=nodes.filter(node=>node.mode==="core");
  const ongoing=nodes.filter(node=>node.mode==="ongoing");
  const parallel=nodes.filter(node=>node.mode==="parallel");
  const choices=nodes.filter(node=>node.mode==="choice");

  if(goal==="gap"&&targetCapability){
    return prerequisiteClosure(graph,[targetCapability]);
  }

  if(goal==="project"){
    const target=targetCapability??ongoing.at(-1)?.id??core.at(-1)?.id;
    return target?prerequisiteClosure(graph,[target]):new Set<string>();
  }

  if(goal==="explore"){
    const targets=[...core.slice(0,Math.min(2,core.length)),...parallel.slice(0,1),...choices.slice(0,1)].map(node=>node.id);
    return prerequisiteClosure(graph,targets);
  }

  if(goal==="foundation"){
    return new Set([...core,...parallel,...choices,...ongoing].map(node=>node.id));
  }

  // Career: preserve the common core, practical/parallel work and a visible set of branches.
  return new Set([...core,...parallel,...choices,...ongoing].map(node=>node.id));
}

function importanceFor(node:UniversalCapability,primary:LearnerType):CapabilityImportance{
  if(primary==="gap") return "required";
  if(primary==="project") return node.mode==="ongoing"?"required":node.mode==="choice"?"optional":"recommended";
  if(primary==="explore") return node.mode==="core"?"recommended":"optional";
  if(primary==="career") return node.mode==="ongoing"||node.mode==="core"?"required":"recommended";
  return node.mode==="core"?"required":"recommended";
}

export function buildPersonalizedPlan(args:{
  graph:CapabilityGraph;
  primary:LearnerType;
  secondary?:LearnerType;
  knownCapabilities?:string[];
  targetCapability?:string;
}):PersonalizedPlanStep[]{
  const {graph,primary,secondary,targetCapability}=args;
  const known=new Set(args.knownCapabilities??[]);
  const selected=idsForGoal(graph,primary,targetCapability);
  if(secondary){
    idsForGoal(graph,secondary,targetCapability).forEach(id=>selected.add(id));
  }

  // If a selected node has prerequisites, always include them.
  prerequisiteClosure(graph,[...selected]).forEach(id=>selected.add(id));

  const byId=new Map(graph.capabilities.map(item=>[item.id,item]));
  return topologicalOrder(graph,selected)
    .map(id=>byId.get(id))
    .filter((item):item is UniversalCapability=>Boolean(item))
    .map(capability=>({
      capability,
      status:known.has(capability.id)?"known":"learn",
      importance:importanceFor(capability,primary),
    }));
}

const levelScore=(level:string,goal:LearnerType)=>{
  if(goal==="explore") return level.includes("入门")?30:level.includes("进阶")?15:0;
  if(goal==="foundation") return level.includes("进阶")?30:level.includes("入门")?22:15;
  if(goal==="career"||goal==="project"||goal==="gap") return level.includes("进阶")?30:level.includes("高级")?22:18;
  return 0;
};

const kindScore=(kind:string,goal:LearnerType)=>{
  if(goal==="project"||goal==="career"||goal==="gap"){
    if(kind.includes("项目"))return 25;
    if(kind.includes("公开课"))return 20;
  }
  if(kind.includes("公开课"))return 25;
  if(kind.includes("教材"))return 18;
  return 12;
};

export function recommendedResources(capability:UniversalCapability,goal:LearnerType,limit=2){
  return [...capability.resources]
    .map(resource=>({resource,score:levelScore(resource.level,goal)+kindScore(resource.kind,goal)}))
    .sort((a,b)=>b.score-a.score)
    .slice(0,limit)
    .map(item=>item.resource);
}
