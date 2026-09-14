import {durationLabel,pick,useLanguage} from "./i18n";

type TimelinePhase={time:string;title:string;mode?:"core"|"parallel"|"choice"|"ongoing"};

const toMonths=(time:string):[number,number]|null=>{
 const match=time.match(/(\d+(?:\.\d+)?)\s*(?:[–—-]\s*(\d+(?:\.\d+)?))?\s*(周|个月|月|weeks?|months?)/i);
 if(!match)return null;
 const factor=match[3]==="周"||match[3].toLowerCase().startsWith("week")?1/4.345:1;
 const min=Number(match[1])*factor;
 return[min,Number(match[2]??match[1])*factor];
};

const totalLabel=(phases:readonly TimelinePhase[],english=false)=>{
 const core=phases.filter(phase=>phase.mode!=="parallel"&&phase.mode!=="choice"&&phase.mode!=="ongoing"&&!phase.time.includes("持续")).map(phase=>toMonths(phase.time)).filter((range):range is [number,number]=>Boolean(range));
 const choices=phases.filter(phase=>phase.mode==="choice").map(phase=>toMonths(phase.time)).filter((range):range is [number,number]=>Boolean(range));
 const parallels=phases.filter(phase=>phase.mode==="parallel").map(phase=>toMonths(phase.time)).filter((range):range is [number,number]=>Boolean(range));
 const chosen:[number,number]=choices.length?[Math.min(...choices.map(range=>range[0])),Math.max(...choices.map(range=>range[1]))]:[0,0];
 const parallel:[number,number]=parallels.length?[Math.max(...parallels.map(range=>range[0])),Math.max(...parallels.map(range=>range[1]))]:[0,0];
 const min=Math.max(1,Math.round(core.reduce((sum,range)=>sum+range[0],0)+chosen[0]+parallel[0]));
 const max=Math.max(min,Math.round(core.reduce((sum,range)=>sum+range[1],0)+chosen[1]+parallel[1]));
 return english?(min===max?`About ${min} months`:`About ${min}–${max} months`):(min===max?`约 ${min} 个月`:`约 ${min}–${max} 个月`);
};

export default function LearningTimeline({phases}:{phases:readonly TimelinePhase[]}){
 const {language}=useLanguage(),english=language==="en";
 const hasOngoing=phases.some(phase=>phase.mode==="ongoing"||phase.time.includes("持续"));
 const hasChoice=phases.some(phase=>phase.mode==="choice");
 return <section className="learning-timeline" aria-label={pick(language,"目标：完成相当于本科专业教育的系统训练，能够继续学习前沿领域，并应用所学","Goal: complete an undergraduate-equivalent core, continue into current fields, and apply what you learn")}>
  <header className="timeline-heading">
   <h3>{pick(language,"本科核心","Undergraduate core")} <span>→</span> {pick(language,"前沿","Frontiers")} <span>→</span> {pick(language,"应用","Application")}</h3>
   <p><strong>{totalLabel(phases,english)}</strong><span>{pick(language,"每周 6–10 小时","6–10 hours per week")}</span></p>
  </header>
  <div className="timeline-scroll" tabIndex={0} aria-label={pick(language,"横向滚动查看全部学习阶段","Scroll horizontally to see every stage")}>
   <ol>
    {phases.map((phase,index)=><li className={phase.time.includes("持续")?"ongoing":""} key={`${phase.title}-${index}`}>
     <span className="timeline-node">{String(index+1).padStart(2,"0")}</span>
     <div><b>{phase.title}</b><small>{english?durationLabel(phase.time):phase.time}</small></div>
    </li>)}
   </ol>
  </div>
  {(hasChoice||hasOngoing)&&<p className="timeline-note">{english?<>{hasChoice&&"Total time includes one elective direction"}{hasChoice&&hasOngoing&&"; "}{hasOngoing&&"ongoing practice is not counted twice"}.</>:<>{hasChoice&&"总时长按一条选修方向计算"}{hasChoice&&hasOngoing&&"；"}{hasOngoing&&"实践贯穿学习过程，不重复计时"}。</>}</p>}
 </section>;
}
