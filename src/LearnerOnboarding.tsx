import {useMemo, useState} from "react";
import {
  buildBlendedGoalPlan,
  financeCapabilities,
  type LearningGoal,
  type LearningPlanStep,
} from "./financeCapabilityGraph";
import "./learner-onboarding.css";

type LearnerType = LearningGoal;
type ScoreMap = Record<LearnerType, number>;

type Option = {
  id: string;
  label: string;
  scores: Partial<ScoreMap>;
};

type Question = {
  id: string;
  title: string;
  help?: string;
  options: Option[];
};

const learnerMeta: Record<LearnerType, {name:string; short:string; description:string}> = {
  explore: {
    name: "Explorer · 探索型",
    short: "探索型",
    description: "先建立领域地图、理解关键问题，再决定是否深入。",
  },
  foundation: {
    name: "Foundation Builder · 系统学习型",
    short: "系统学习型",
    description: "重视完整知识结构、前置关系和长期可迁移的基础。",
  },
  career: {
    name: "Career Switcher · 职业目标型",
    short: "职业目标型",
    description: "优先学习能够转化为岗位能力、作品和外部证明的内容。",
  },
  project: {
    name: "Project-first · 项目驱动型",
    short: "项目驱动型",
    description: "从真实项目倒推必要知识，减少暂时用不到的内容。",
  },
  gap: {
    name: "Gap Filler · 能力补缺型",
    short: "能力补缺型",
    description: "跳过已经掌握的内容，围绕一个具体能力补齐最短前置路径。",
  },
};

const questions: Question[] = [
  {
    id: "problem",
    title: "你现在最想解决的问题是什么？",
    options: [
      {id:"explore",label:"我对金融感兴趣，想先看看它到底在研究什么。",scores:{explore:3}},
      {id:"foundation",label:"我想系统地把金融学扎实，不想东一榔头西一棒槌。",scores:{foundation:3}},
      {id:"career",label:"我希望学习最终能帮助我进入一个职业、岗位或行业。",scores:{career:3}},
      {id:"project",label:"我现在有具体项目、研究或产品，需要边做边学。",scores:{project:3}},
      {id:"gap",label:"我已经有基础，但缺某一块能力，想尽快补上。",scores:{gap:3}},
    ],
  },
  {
    id: "three-months",
    title: "如果三个月后学习有效果，你最希望看到什么？",
    options: [
      {id:"explore",label:"我知道这个领域有哪些重要问题、方向和概念。",scores:{explore:2}},
      {id:"foundation",label:"我建立了一套完整、连贯的知识框架。",scores:{foundation:2}},
      {id:"career",label:"我的简历、作品集或求职能力明显增强。",scores:{career:2}},
      {id:"project",label:"我真正完成了一个项目、论文、作品或产品。",scores:{project:2}},
      {id:"gap",label:"我能独立完成一个以前不会做的具体任务。",scores:{gap:2}},
    ],
  },
  {
    id: "ask-site",
    title: "面对陌生领域，你最希望自学坊先告诉你什么？",
    options: [
      {id:"explore",label:"这个领域有意思在哪里？有哪些方向值得探索？",scores:{explore:2}},
      {id:"foundation",label:"从零开始，完整的学习顺序是什么？",scores:{foundation:2}},
      {id:"career",label:"为了目标岗位，哪些能力最值得学？",scores:{career:2}},
      {id:"project",label:"为了做成手上的项目，我还缺哪些知识？",scores:{project:2}},
      {id:"gap",label:"我已经会这些，剩下最关键的缺口在哪里？",scores:{gap:2}},
    ],
  },
  {
    id: "route",
    title: "哪一种学习路径最吸引你？",
    options: [
      {id:"explore",label:"给我多个入口，我想自由探索。",scores:{explore:2}},
      {id:"foundation",label:"给我一条完整主线，我愿意循序渐进。",scores:{foundation:2}},
      {id:"career",label:"只保留与目标职业高度相关的内容。",scores:{career:2}},
      {id:"project",label:"从最终项目倒推需要学习什么。",scores:{project:2}},
      {id:"gap",label:"跳过我会的，只学习必要缺口。",scores:{gap:2}},
    ],
  },
  {
    id: "done",
    title: "你怎么判断“我学会了”？",
    options: [
      {id:"explore",label:"我理解这个领域，并知道自己是否还想继续深入。",scores:{explore:2}},
      {id:"foundation",label:"我掌握核心知识，并能解释它们之间的关系。",scores:{foundation:2}},
      {id:"career",label:"我能完成岗位相关任务、面试、案例或作品集项目。",scores:{career:2}},
      {id:"project",label:"我的项目已经真正运行、完成或产生结果。",scores:{project:2}},
      {id:"gap",label:"我能解决那个原来卡住我的具体问题。",scores:{gap:2}},
    ],
  },
  {
    id: "irrelevant",
    title: "如果一个知识点与你当前目标关系不大，你希望怎么办？",
    options: [
      {id:"explore",label:"如果它很有意思，我可能还是想看看。",scores:{explore:1}},
      {id:"foundation",label:"如果属于领域核心基础，我还是应该学习。",scores:{foundation:1}},
      {id:"career",label:"如果对目标岗位帮助不大，可以降级为选修。",scores:{career:1}},
      {id:"project",label:"如果当前项目用不到，就先不学。",scores:{project:1}},
      {id:"gap",label:"如果不是当前能力缺口的前置要求，就跳过。",scores:{gap:1}},
    ],
  },
  {
    id: "clarity",
    title: "你现在对自己的学习目标有多明确？",
    options: [
      {id:"explore",label:"很不明确，我主要想探索有什么值得学。",scores:{explore:2}},
      {id:"foundation",label:"我知道想学金融，但还没有更具体的应用目标。",scores:{foundation:2}},
      {id:"career",label:"我知道未来想做什么职业，但不知道能力要求。",scores:{career:2}},
      {id:"project",label:"我已经有具体项目、论文、产品或任务。",scores:{project:2}},
      {id:"gap",label:"我很清楚缺什么，只想找到最短补齐路径。",scores:{gap:2}},
    ],
  },
];

type Answers = Record<string,string>;

type Classification = {
  scores: ScoreMap;
  primary: LearnerType;
  secondary?: LearnerType;
};

const emptyScores = (): ScoreMap => ({explore:0,foundation:0,career:0,project:0,gap:0});

export function classifyLearner(answers: Answers): Classification {
  const scores=emptyScores();
  for(const question of questions){
    const selected=question.options.find(option=>option.id===answers[question.id]);
    if(!selected) continue;
    for(const [type,score] of Object.entries(selected.scores) as [LearnerType,number][]){
      scores[type]+=score;
    }
  }

  const ranking=(Object.entries(scores) as [LearnerType,number][])
    .sort((a,b)=>b[1]-a[1]);
  const [primaryEntry,secondaryEntry]=ranking;
  const primary=primaryEntry[0];
  const secondary=secondaryEntry && secondaryEntry[1]>=primaryEntry[1]*0.7
    ? secondaryEntry[0]
    : undefined;

  return {scores,primary,secondary};
}

export default function LearnerOnboarding(){
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState<Answers>({});
  const [finished,setFinished]=useState(false);
  const [known,setKnown]=useState<string[]>([]);
  const [targetCapability,setTargetCapability]=useState("valuation");

  const classification=useMemo(()=>classifyLearner(answers),[answers]);
  const current=questions[step];
  const selected=current?answers[current.id]:undefined;

  const plan: LearningPlanStep[]=useMemo(()=>{
    if(!finished) return [];
    return buildBlendedGoalPlan({
      primary: classification.primary,
      secondary: classification.secondary,
      knownCapabilities: known,
      gapTarget: targetCapability,
    });
  },[classification,finished,known,targetCapability]);

  const choose=(optionId:string)=>{
    setAnswers(previous=>({...previous,[current.id]:optionId}));
  };

  const next=()=>{
    if(!selected) return;
    if(step===questions.length-1){
      setFinished(true);
      return;
    }
    setStep(value=>value+1);
  };

  const back=()=>{
    if(finished){setFinished(false);return;}
    setStep(value=>Math.max(0,value-1));
  };

  const restart=()=>{
    setAnswers({});
    setStep(0);
    setFinished(false);
    setKnown([]);
  };

  const toggleKnown=(id:string)=>setKnown(currentKnown=>
    currentKnown.includes(id)?currentKnown.filter(item=>item!==id):[...currentKnown,id]
  );

  if(!finished){
    return <section className="learner-onboarding" aria-labelledby="learner-onboarding-title">
      <header className="onboarding-head">
        <small>LEARNING PATH · 1–2 MIN</small>
        <h2 id="learner-onboarding-title">帮你生成更合适的金融学习路径</h2>
        <p>我们不判断“学习人格”，只判断你此刻最需要哪一种学习策略。</p>
        <div className="progress" aria-label={`第 ${step+1} 题，共 ${questions.length} 题`}>
          <span style={{width:`${((step+1)/questions.length)*100}%`}}/>
        </div>
      </header>

      <div className="question-card">
        <div className="question-number">{String(step+1).padStart(2,"0")} / {String(questions.length).padStart(2,"0")}</div>
        <h3>{current.title}</h3>
        {current.help&&<p>{current.help}</p>}
        <div className="answer-list">
          {current.options.map((option,index)=><button
            type="button"
            key={option.id}
            className={selected===option.id?"selected":""}
            onClick={()=>choose(option.id)}
          >
            <span className="answer-letter">{String.fromCharCode(65+index)}</span>
            <span>{option.label}</span>
          </button>)}
        </div>
      </div>

      <footer className="onboarding-actions">
        <button type="button" className="quiet" onClick={back} disabled={step===0}>上一题</button>
        <button type="button" className="primary" onClick={next} disabled={!selected}>
          {step===questions.length-1?"生成我的路径":"下一题"}
        </button>
      </footer>
    </section>;
  }

  const primaryMeta=learnerMeta[classification.primary];
  const secondaryMeta=classification.secondary?learnerMeta[classification.secondary]:undefined;
  const needsTarget=classification.primary==="gap"||classification.secondary==="gap";

  return <section className="learner-onboarding result" aria-labelledby="learner-result-title">
    <header className="result-head">
      <small>YOUR LEARNING MODE</small>
      <h2 id="learner-result-title">{primaryMeta.name}</h2>
      <p>{primaryMeta.description}</p>
      {secondaryMeta&&<p className="secondary-result">同时具有 <strong>{secondaryMeta.short}</strong> 特征：{secondaryMeta.description}</p>}
    </header>

    {needsTarget&&<label className="target-picker">
      <span>你最想补齐的具体能力</span>
      <select value={targetCapability} onChange={(event:{target:{value:string}})=>setTargetCapability(event.target.value)}>
        {financeCapabilities.map(capability=><option key={capability.id} value={capability.id}>{capability.name}</option>)}
      </select>
    </label>}

    <details className="known-capabilities">
      <summary>告诉我们你已经会什么，让路径更短（可选）</summary>
      <div>
        {financeCapabilities.map(capability=><label key={capability.id}>
          <input type="checkbox" checked={known.includes(capability.id)} onChange={()=>toggleKnown(capability.id)}/>
          <span>{capability.name}</span>
        </label>)}
      </div>
    </details>

    <section className="generated-path" aria-labelledby="generated-path-title">
      <div className="path-heading">
        <div>
          <small>PERSONALIZED CAPABILITY PATH</small>
          <h3 id="generated-path-title">建议学习路径</h3>
        </div>
        <span>{plan.filter(item=>item.status==="learn").length} 个待学习能力</span>
      </div>

      <div className="path-list">
        {plan.map((stepItem,index)=><article key={stepItem.capability.id} className={stepItem.status==="known"?"known":""}>
          <div className="path-index">{String(index+1).padStart(2,"0")}</div>
          <div>
            <div className="path-title-row">
              <h4>{stepItem.capability.name}</h4>
              <span>{stepItem.status==="known"?"已掌握":stepItem.importance==="required"?"核心":"推荐"}</span>
            </div>
            <p>{stepItem.capability.description}</p>
            <div className="path-proof">
              <strong>学会标志</strong>
              <span>{stepItem.capability.learningOutcomes[0]}</span>
            </div>
            {stepItem.capability.evidence[0]&&<div className="path-proof">
              <strong>成果证据</strong>
              <span>{stepItem.capability.evidence[0].title}</span>
            </div>}
          </div>
        </article>)}
      </div>
    </section>

    <footer className="onboarding-actions">
      <button type="button" className="quiet" onClick={back}>修改答案</button>
      <button type="button" className="quiet" onClick={restart}>重新测试</button>
    </footer>
  </section>;
}
