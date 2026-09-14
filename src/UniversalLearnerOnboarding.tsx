import {useMemo,useState} from "react";
import {
  buildPersonalizedPlan,
  recommendedResources,
  type CapabilityGraph,
  type LearnerType,
} from "./capabilityCore";
import "./universal-learner-onboarding.css";

type ScoreMap=Record<LearnerType,number>;
type Answers=Record<string,string>;
type Option={id:string;label:string;scores:Partial<ScoreMap>};
type Question={id:string;title:string;options:Option[]};

type Props={
  subjectName:string;
  graph:CapabilityGraph;
};

const learnerMeta:Record<LearnerType,{name:string;short:string;description:string}>={
  explore:{name:"Explorer · 探索型",short:"探索型",description:"先建立领域地图、理解关键问题，再决定是否深入。"},
  foundation:{name:"Foundation Builder · 系统学习型",short:"系统学习型",description:"重视完整知识结构、前置关系和长期可迁移的基础。"},
  career:{name:"Career Switcher · 职业目标型",short:"职业目标型",description:"优先学习能转化为岗位能力、作品和外部证明的内容。"},
  project:{name:"Project-first · 项目驱动型",short:"项目驱动型",description:"从真实项目倒推必要知识，减少暂时用不到的内容。"},
  gap:{name:"Gap Filler · 能力补缺型",short:"能力补缺型",description:"跳过已经掌握的内容，围绕一个具体能力补齐最短前置路径。"},
};

const questionsFor=(subjectName:string):Question[]=>[
  {id:"problem",title:"你现在最想解决的问题是什么？",options:[
    {id:"explore",label:`我对${subjectName}感兴趣，想先看看这个领域到底在研究什么。`,scores:{explore:3}},
    {id:"foundation",label:`我想系统地把${subjectName}学扎实，不想东一榔头西一棒槌。`,scores:{foundation:3}},
    {id:"career",label:"我希望这些学习最终能帮助我进入一个职业、岗位或行业。",scores:{career:3}},
    {id:"project",label:"我现在有具体项目、研究、作品或产品，需要边做边学。",scores:{project:3}},
    {id:"gap",label:"我已经有基础，但缺某一块能力，想尽快补上。",scores:{gap:3}},
  ]},
  {id:"three-months",title:"如果三个月后学习有效果，你最希望看到什么？",options:[
    {id:"explore",label:"我知道这个领域有哪些重要问题、方向和概念。",scores:{explore:2}},
    {id:"foundation",label:"我建立了一套完整、连贯的知识框架。",scores:{foundation:2}},
    {id:"career",label:"我的简历、作品集或求职能力明显增强。",scores:{career:2}},
    {id:"project",label:"我真正完成了一个项目、论文、作品或产品。",scores:{project:2}},
    {id:"gap",label:"我能独立完成一个以前不会做的具体任务。",scores:{gap:2}},
  ]},
  {id:"ask-site",title:"面对陌生领域，你最希望自学坊先告诉你什么？",options:[
    {id:"explore",label:"这个领域有意思在哪里？有哪些方向值得探索？",scores:{explore:2}},
    {id:"foundation",label:"从零开始，完整的学习顺序是什么？",scores:{foundation:2}},
    {id:"career",label:"为了目标岗位，哪些能力最值得学？",scores:{career:2}},
    {id:"project",label:"为了做成手上的项目，我还缺哪些知识？",scores:{project:2}},
    {id:"gap",label:"我已经会这些，剩下最关键的缺口在哪里？",scores:{gap:2}},
  ]},
  {id:"route",title:"哪一种学习路径最吸引你？",options:[
    {id:"explore",label:"给我多个入口，我想自由探索。",scores:{explore:2}},
    {id:"foundation",label:"给我一条完整主线，我愿意循序渐进。",scores:{foundation:2}},
    {id:"career",label:"只保留与目标职业高度相关的内容。",scores:{career:2}},
    {id:"project",label:"从最终项目倒推需要学习什么。",scores:{project:2}},
    {id:"gap",label:"跳过我会的，只学习必要缺口。",scores:{gap:2}},
  ]},
  {id:"done",title:"你怎么判断“我学会了”？",options:[
    {id:"explore",label:"我理解这个领域，并知道自己是否还想继续深入。",scores:{explore:2}},
    {id:"foundation",label:"我掌握核心知识，并能解释它们之间的关系。",scores:{foundation:2}},
    {id:"career",label:"我能完成岗位相关任务、面试、案例或作品集项目。",scores:{career:2}},
    {id:"project",label:"我的项目已经真正运行、完成或产生结果。",scores:{project:2}},
    {id:"gap",label:"我能解决那个原来卡住我的具体问题。",scores:{gap:2}},
  ]},
  {id:"irrelevant",title:"如果一个知识点与你当前目标关系不大，你希望怎么办？",options:[
    {id:"explore",label:"如果它很有意思，我可能还是想看看。",scores:{explore:1}},
    {id:"foundation",label:"如果属于这个领域的核心基础，我还是应该学习。",scores:{foundation:1}},
    {id:"career",label:"如果对目标岗位帮助不大，可以降级为选修。",scores:{career:1}},
    {id:"project",label:"如果当前项目用不到，就先不学。",scores:{project:1}},
    {id:"gap",label:"如果不是当前能力缺口的前置要求，就跳过。",scores:{gap:1}},
  ]},
  {id:"clarity",title:"你现在对自己的学习目标有多明确？",options:[
    {id:"explore",label:"很不明确，我主要想探索有什么值得学。",scores:{explore:2}},
    {id:"foundation",label:`我知道想学${subjectName}，但还没有更具体的应用目标。`,scores:{foundation:2}},
    {id:"career",label:"我知道未来想做什么职业，但不知道能力要求。",scores:{career:2}},
    {id:"project",label:"我已经有具体项目、论文、产品或任务。",scores:{project:2}},
    {id:"gap",label:"我很清楚缺什么，只想找到最短补齐路径。",scores:{gap:2}},
  ]},
];

const emptyScores=():ScoreMap=>({explore:0,foundation:0,career:0,project:0,gap:0});

function classify(questions:Question[],answers:Answers){
  const scores=emptyScores();
  for(const question of questions){
    const selected=question.options.find(option=>option.id===answers[question.id]);
    if(!selected)continue;
    for(const [type,score] of Object.entries(selected.scores) as [LearnerType,number][]){scores[type]+=score;}
  }
  const ranking=(Object.entries(scores) as [LearnerType,number][]).sort((a,b)=>b[1]-a[1]);
  const primary=ranking[0][0];
  const secondary=ranking[1][1]>=ranking[0][1]*0.7?ranking[1][0]:undefined;
  return {scores,primary,secondary};
}

export default function UniversalLearnerOnboarding({subjectName,graph}:Props){
  const questions=useMemo(()=>questionsFor(subjectName),[subjectName]);
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState<Answers>({});
  const [finished,setFinished]=useState(false);
  const [known,setKnown]=useState<string[]>([]);
  const [targetCapability,setTargetCapability]=useState(graph.capabilities.at(-1)?.id??graph.capabilities[0]?.id??"");
  const classification=useMemo(()=>classify(questions,answers),[questions,answers]);
  const current=questions[step];
  const selected=current?answers[current.id]:undefined;

  const plan=useMemo(()=>finished?buildPersonalizedPlan({
    graph,
    primary:classification.primary,
    secondary:classification.secondary,
    knownCapabilities:known,
    targetCapability,
  }):[],[finished,graph,classification,known,targetCapability]);

  const toggleKnown=(id:string)=>setKnown(items=>items.includes(id)?items.filter(item=>item!==id):[...items,id]);
  const restart=()=>{setStep(0);setAnswers({});setFinished(false);setKnown([]);};

  if(!graph.capabilities.length)return null;

  if(!finished){
    return <section className="universal-onboarding" aria-labelledby={`onboarding-${graph.subjectKey}`}>
      <header className="uo-head">
        <small>PERSONALIZED LEARNING PATH · 1–2 MIN</small>
        <h2 id={`onboarding-${graph.subjectKey}`}>帮你生成更合适的{subjectName}学习路径</h2>
        <p>先判断你此刻的学习目的，再从能力图里抽出真正需要走的路径。</p>
        <div className="uo-progress"><span style={{width:`${((step+1)/questions.length)*100}%`}}/></div>
      </header>
      <div className="uo-question">
        <span>{String(step+1).padStart(2,"0")} / {String(questions.length).padStart(2,"0")}</span>
        <h3>{current.title}</h3>
        <div className="uo-options">{current.options.map((option,index)=><button type="button" key={option.id} className={selected===option.id?"selected":""} onClick={()=>setAnswers(prev=>({...prev,[current.id]:option.id}))}><b>{String.fromCharCode(65+index)}</b><span>{option.label}</span></button>)}</div>
      </div>
      <footer className="uo-actions">
        <button type="button" onClick={()=>setStep(value=>Math.max(0,value-1))} disabled={step===0}>上一题</button>
        <button type="button" className="primary" disabled={!selected} onClick={()=>step===questions.length-1?setFinished(true):setStep(value=>value+1)}>{step===questions.length-1?"生成我的路径":"下一题"}</button>
      </footer>
    </section>;
  }

  const primaryMeta=learnerMeta[classification.primary];
  const secondaryMeta=classification.secondary?learnerMeta[classification.secondary]:undefined;
  const needsTarget=classification.primary==="gap"||classification.secondary==="gap"||classification.primary==="project";

  return <section className="universal-onboarding uo-result">
    <header className="uo-result-head">
      <small>YOUR LEARNING MODE</small>
      <h2>{primaryMeta.name}</h2>
      <p>{primaryMeta.description}</p>
      {secondaryMeta&&<p className="uo-secondary">同时具有 <strong>{secondaryMeta.short}</strong> 特征：{secondaryMeta.description}</p>}
    </header>

    {needsTarget&&<label className="uo-target"><span>{classification.primary==="project"?"你最想围绕哪个阶段或能力形成成果":"你最想补齐的具体能力"}</span><select value={targetCapability} onChange={(event:{target:{value:string}})=>setTargetCapability(event.target.value)}>{graph.capabilities.map(item=><option value={item.id} key={item.id}>{item.name}</option>)}</select></label>}

    <details className="uo-known"><summary>告诉我们你已经会什么，让路径更短（可选）</summary><div>{graph.capabilities.map(item=><label key={item.id}><input type="checkbox" checked={known.includes(item.id)} onChange={()=>toggleKnown(item.id)}/><span>{item.name}</span></label>)}</div></details>

    <section className="uo-path">
      <div className="uo-path-heading"><div><small>PERSONALIZED CAPABILITY PATH</small><h3>建议学习路径</h3></div><span>{plan.filter(item=>item.status==="learn").length} 个待学习能力</span></div>
      <div className="uo-path-list">{plan.map((item,index)=>{
        const resources=recommendedResources(item.capability,classification.primary,2);
        return <article key={item.capability.id} className={item.status==="known"?"known":""}>
          <div className="uo-index">{String(index+1).padStart(2,"0")}</div>
          <div className="uo-path-body">
            <div className="uo-title-row"><h4>{item.capability.name}</h4><span>{item.status==="known"?"已掌握":item.importance==="required"?"核心":"推荐"}</span></div>
            <p>{item.capability.description}</p>
            <dl><div><dt>学会标志</dt><dd>{item.capability.learningOutcomes[0]}</dd></div><div><dt>成果证据</dt><dd>{item.capability.evidence[0]?.description}</dd></div></dl>
            {item.status==="learn"&&resources.length>0&&<div className="uo-resources"><strong>建议从这里学</strong>{resources.map((resource,resourceIndex)=><a key={resource.url} href={resource.url} target="_blank" rel="noreferrer"><small>{resourceIndex===0?"首选":"备选"} · {resource.kind} · {resource.level}</small><b>{resource.name}</b><span>{resource.description}</span></a>)}</div>}
          </div>
        </article>;
      })}</div>
    </section>

    <footer className="uo-actions"><button type="button" onClick={()=>setFinished(false)}>修改答案</button><button type="button" onClick={restart}>重新测试</button></footer>
  </section>;
}
