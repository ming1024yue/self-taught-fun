import {useState} from "react";
import {pick,topicLabel,useLanguage} from "./i18n";
import type {SubjectConfig} from "./subjectTypes";

type TreeTone="core"|"systems"|"software"|"ai"|"creative"|"security";
type PlanNode={id:string;tone:TreeTone;children?:PlanNode[];branchPoint?:boolean};
type TreeSubject=Pick<SubjectConfig,"slug"|"groups">&{topics:Record<string,{title:string;intro:string}>};

const planTree:PlanNode={
 id:"programming",tone:"core",children:[{
  id:"discrete",tone:"core",children:[{
   id:"algorithms",tone:"core",branchPoint:true,children:[
    {id:"architecture",tone:"systems",children:[{id:"systems",tone:"systems",children:[{id:"networks",tone:"systems",children:[
     {id:"databases",tone:"systems",children:[{id:"data",tone:"systems"}]},
     {id:"distributed",tone:"systems",children:[{id:"cloud",tone:"systems"}]}
    ]}]}]},
    {id:"software",tone:"software",children:[{id:"compilers",tone:"software"},{id:"hci",tone:"software"}]},
    {id:"ai",tone:"ai",children:[{id:"machine-learning",tone:"ai",children:[
     {id:"deep-learning",tone:"ai",children:[{id:"vision",tone:"ai"},{id:"nlp",tone:"ai"}]},
     {id:"robotics",tone:"ai",children:[{id:"autonomous-driving",tone:"ai"}]}
    ]}]},
    {id:"graphics",tone:"creative"},
    {id:"security",tone:"security",children:[{id:"blockchain",tone:"security"}]}
   ]
  }]
 }]
};

const englishDetails:Record<string,string>={
 programming:"Learn to express problems in code, debug independently, write tests, and use the command line and Git.",
 discrete:"Build the logic, proof, combinatorics, graphs, and probability needed across computer science.",
 algorithms:"Study data structures, correctness, complexity, graph algorithms, and dynamic programming.",
 architecture:"Understand how instructions, processors, memory, and storage execute programs.",
 systems:"Learn processes, concurrency, virtual memory, file systems, and low-level programming.",
 networks:"Understand layered protocols, TCP/IP, routing, reliability, and networked applications.",
 databases:"Learn data modeling, SQL, indexes, transactions, and reliable storage systems.",
 data:"Build reproducible data pipelines and connect statistics with scalable computation.",
 distributed:"Study replication, consensus, fault tolerance, and coordination across machines.",
 cloud:"Deploy observable, containerized services and operate them reliably.",
 software:"Practice requirements, design, testing, review, maintenance, and team delivery.",
 compilers:"Learn parsing, type systems, intermediate representations, optimization, and runtimes.",
 hci:"Design and evaluate interfaces around real human goals, constraints, and evidence.",
 ai:"Study search, reasoning, uncertainty, planning, and the foundations of intelligent systems.",
 "machine-learning":"Learn supervised and unsupervised learning, evaluation, generalization, and responsible experimentation.",
 "deep-learning":"Understand neural networks, optimization, representation learning, and modern foundation models.",
 vision:"Learn image formation, visual recognition, geometry, and evaluation on real data.",
 nlp:"Study language representation, sequence models, transformers, and careful language evaluation.",
 robotics:"Connect perception, planning, control, and physical interaction in complete robot systems.",
 "autonomous-driving":"Integrate sensing, prediction, planning, control, simulation, and safety validation.",
 graphics:"Learn geometry, rendering, animation, simulation, and interactive visual computing.",
 security:"Build a threat-model mindset across software, systems, networks, and cryptography.",
 blockchain:"Study distributed ledgers, consensus, smart contracts, incentives, and their limits."
};

const base=import.meta.env.BASE_URL;
const route=(slug:string,id:string)=>base+slug+"/topics/"+id+"/";
const excludedIds=new Set(["plan","tools","books"]);
const branchTones:TreeTone[]=["systems","software","ai","creative","security"];

function buildChain(ids:string[],tone:TreeTone){
 let next:PlanNode|undefined;
 for(let index=ids.length-1;index>=0;index-=1)next={id:ids[index],tone,children:next?[next]:undefined};
 return next;
}

function generatedTree(subject:TreeSubject){
 const groups=subject.groups.map(([,items])=>items.map(([id])=>id).filter(id=>!excludedIds.has(id)&&Boolean(subject.topics[id]))).filter(items=>items.length);
 const root=buildChain(groups[0]??[],"core");
 if(!root)return null;
 const branches=groups.slice(1).map((ids,index)=>buildChain(ids,branchTones[index%branchTones.length])).filter((node):node is PlanNode=>Boolean(node));
 if(branches.length){
  let terminal=root;
  while(terminal.children?.length===1)terminal=terminal.children[0];
  terminal.children=branches;
  terminal.branchPoint=true;
 }
 return root;
}

export default function SubjectPlanTree({subject}:{subject:TreeSubject}){
 const {language}=useLanguage(),english=language==="en";
 const [selectedId,setSelectedId]=useState<string|null>(null);
 const [previewId,setPreviewId]=useState<string|null>(null);
 const activeId=previewId??selectedId;
 const tree=subject.slug==="computer-science"?planTree:generatedTree(subject);

 const renderNode=(node:PlanNode,depth=0,isBranch=false)=>{
  const topic=subject.topics[node.id];
  const name=english?topicLabel(node.id,topic.title):topic.title;
  const description=english?(englishDetails[node.id]??"Build a working understanding of "+name+"."):topic.intro;
  const detailId="cs-plan-detail-"+node.id;
  const isActive=activeId===node.id;
  return <li key={node.id} data-depth={depth} data-branch={isBranch||undefined}>
   <div
    className={"cs-plan-node-wrap"+(isActive?" is-active":"")}
    onMouseEnter={()=>setPreviewId(node.id)}
    onMouseLeave={()=>setPreviewId(null)}
    onFocus={()=>setPreviewId(node.id)}
    onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node))setPreviewId(null)}}
   >
    <button
     className="cs-plan-node"
     data-tone={node.tone}
     type="button"
     aria-controls={detailId}
     aria-expanded={isActive}
     aria-pressed={selectedId===node.id}
     onClick={()=>setSelectedId(current=>current===node.id?null:node.id)}
    >
     {name}
    </button>
    {isActive?<aside id={detailId} className="cs-plan-popover" aria-label={pick(language,"科目简介","Course description")}>
     <strong>{name}</strong>
     <p>{description}</p>
     <a href={route(subject.slug,node.id)}>{pick(language,"进入科目 →","Open course →")}</a>
    </aside>:null}
   </div>
   {node.children?.length?<ul className={node.branchPoint?"cs-plan-branches":undefined}>{node.children.map(child=>renderNode(child,depth+1,Boolean(node.branchPoint)))}</ul>:null}
  </li>;
 };

 if(!tree)return null;
 return <div className="cs-plan-tree">
  <div className="cs-plan-tree-canvas">
   <ul className="cs-plan-tree-root" aria-label={pick(language,"课程规划树","Course planning tree")}>
    {renderNode(tree)}
   </ul>
  </div>
 </div>;
}
