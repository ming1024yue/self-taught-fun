import type {SubjectConfig} from "./subjectTypes";
import GlobalHeader from "./GlobalHeader";
import LearningTimeline from "./LearningTimeline";
import UniversalLearnerOnboarding from "./UniversalLearnerOnboarding";
import {buildSubjectCapabilityGraph} from "./capabilityCore";
const b=import.meta.env.BASE_URL,u=(p:string)=>b+p.replace(/^\//,"");
const mark=(kind:string)=>kind.includes("教材")?"book":kind.includes("讲义")||kind.includes("项目")?"paper":"course";
type Portal=readonly [string,string,string,string];
function TopicCurriculum({curriculum}:{curriculum:NonNullable<SubjectConfig["topics"][string]["curriculum"]>}){return <section className="topic-curriculum"><h2>核心课程地图</h2><p>{curriculum.basis}</p><div className="curriculum-grid">{curriculum.stages.map((stage,index)=><article id={`curriculum-${index+1}`} key={stage.title}><span>{String(index+1).padStart(2,"0")}</span><h3>{stage.title}</h3><p>{stage.courses}</p><p><b>实践：</b>{stage.practice}</p></article>)}</div><a className="curriculum-source" href={curriculum.reference[1]} target="_blank" rel="noreferrer">参考培养方案：{curriculum.reference[0]} ↗</a></section>}
const chinesePortals:Partial<Record<string,Portal[]>>={
 biology:[["北大","北京大学：生物学概念与途径","https://www.icourse163.org/course/PKU-1002533002","从生物学史上的关键概念、实验与研究方法理解学科如何发展。"],["北大","北京大学：生物化学实验","https://www.icourse163.org/course/PKU-1449775172","以本科主干实验理解定量分析、层析、电泳、酶学和免疫学技术。"]],
 psychology:[["北大","北京大学：发展心理学","https://www.icourse163.org/course/PKU-1206624828","沿毕生发展主线学习生理、认知、人格与社会性变化。"]],
 "political-science":[["北大","北京大学：政治学概论","https://www.icourse163.org/course/PKU-1002578003","系统理解政治概念、现代国家、制度与政治学研究方法。"]],
 management:[["浙大","浙江大学：管理概论","https://www.icourse163.org/course/ZJU-19001","围绕管理者、组织、科学决策、计划、领导与控制建立系统框架。"]],
 history:[["复旦","复旦大学：《资治通鉴》导读","https://www.icourse163.org/course/fudan-1205930801","以经典史书训练语境化、史料辨析和思想史阅读方法。"]],
 chemistry:[["南大","南京大学：化学原理与测量","https://www.icourse163.org/course/NJU-1485609161","把物理化学、仪器分析、实验操作和数据处理连接起来。"],["南大","南京大学：物理化学","https://www.icourse163.org/course/NJU-1002580002","系统理解热力学、动力学、电化学和物质结构的定量基础。"]],
 engineering:[["清华","清华大学：电路原理","https://www.xuetangx.com/course/THU08061000294","从基础分析方法进入元器件、电路模型及工程应用。"],["清华","清华大学：自动控制理论","https://www.xuetangx.com/course/THU08081000909/","系统学习状态空间、稳定性、反馈与最优控制。"]],
 language:[["北大","北京大学：语言学概论","https://www.icourse163.org/course/PKU-1205727813","系统介绍语言的结构、演变、文字及其社会功能。"]],
 literature:[["复旦","复旦大学：中国现代文学名著选讲","https://www.icourse163.org/course/FUDAN-1205931801","通过代表作家的文本细读，理解现代文学的语言、叙事与历史语境。"]]
};
const portalsFor=(subject:SubjectConfig):Portal[]=>[...(chinesePortals[subject.slug]??[]),...subject.portals];

export function SubjectHeader({subject}:{subject:SubjectConfig}){return <GlobalHeader sidebarLabel={subject.name}/>}
export function SubjectSide({subject,active=""}:{subject:SubjectConfig;active?:string}){
 const curriculum=subject.topics[active]?.curriculum;
 return <aside className="sidebar"><nav>{subject.groups.map(([group,items])=><section key={group}><h3>{group}</h3>{items.flatMap(([id,name])=>[
  <a className={id===active?"active":""} key={id} href={["intro","how","plan"].includes(id)?u(`${subject.slug}/#${id}`):u(`${subject.slug}/topics/${id}/`)}>{name}</a>,
  id===active&&curriculum?<div className="sidebar-curriculum" key={`${id}-curriculum`}>{curriculum.stages.map((stage,index)=><a href={`#curriculum-${index+1}`} key={stage.title}><span>{String(index+1).padStart(2,"0")}</span>{stage.title}</a>)}</div>:null
 ])}</section>)}</nav></aside>;
}
export function SubjectHome({subject}:{subject:SubjectConfig}){return <div className="shell"><SubjectHeader subject={subject}/><SubjectSide subject={subject}/><main><section id="intro" className="hero"><small>SELF-TAUGHT {subject.en}</small><h1>自学{subject.name}</h1><p>{subject.intro}</p><aside>{subject.caution}</aside></section><section id="how"><h2>如何使用本站</h2><p>左侧目录按照知识依赖组织。每个阶段只选择一套主资源，先理解概念与方法，再通过练习、写作、实验或项目检验学习成果。</p><div className="legend"><div><i className="resource-mark course"/><span><b>公开课</b><small>绿色书签</small></span></div><div><i className="resource-mark paper"/><span><b>讲义与项目</b><small>红色书签</small></span></div><div><i className="resource-mark book"/><span><b>书籍与教材</b><small>蓝色书签</small></span></div></div></section><section id="plan"><h2>学习规划</h2>
<p className="plan-intro">目标是完成相当于本科{subject.name}专业教育的系统训练：掌握完整的核心知识，能够继续学习前沿领域，并通过项目或研究应用所学。以下时间按每周 6–10 小时估算。</p><UniversalLearnerOnboarding
  subjectName={subject.name}
  graph={buildSubjectCapabilityGraph(subject)}
/>
<div className="beginner-note"><strong>判断自己是否真正学会</strong><ul><li>能不用原文，用自己的语言解释核心概念。</li><li>能独立完成习题、分析材料或小型项目。</li><li>能指出方法的假设、证据来源与适用边界。</li></ul></div><LearningTimeline phases={subject.phases}/><div className="plan-steps">{subject.phases.map((p,index)=><article key={p.title}><div className="phase-meta"><span>{String(index+1).padStart(2,"0")}</span><small>建议用时<br/><b>{p.time}</b></small></div><div><h3>{p.title}</h3><p className="phase-goal">{p.goal}</p><dl><div><dt>主要学习内容</dt><dd>{p.learn}</dd></div><div><dt>完成标志</dt><dd>{p.done}</dd></div></dl><a href={u(`${subject.slug}/topics/${p.link}/`)}>进入相关章节 →</a></div></article>)}</div></section></main></div>}
export function SubjectTopicPage({subject,topicSlug}:{subject:SubjectConfig;topicSlug:string}){const topic=subject.topics[topicSlug];if(!topic)return <main><h1>页面不存在</h1></main>;return <div className="shell"><SubjectHeader subject={subject}/><SubjectSide subject={subject} active={topicSlug}/><main><section className="hero"><small>SELF-TAUGHT {subject.en} / {topic.title}</small><h1>{topic.title}</h1><p>{topic.intro}</p></section>{topic.curriculum&&<TopicCurriculum curriculum={topic.curriculum}/>} {topicSlug==="tools"?<div className="tool-sections">{subject.tools.map(([title,items])=><section key={title}><h2>{title}</h2><div className="tool-list">{items.map(([name,url,note])=><p key={name}><a href={url} target="_blank" rel="noreferrer">{name}</a><span>：{note}</span></p>)}</div></section>)}</div>:<section><h2>分级精选资源</h2><div className="cards">{topic.resources.map(x=><article className="card" key={x.name}><i className={`resource-mark ${mark(x.kind)}`}/><div><small>{x.kind} · {x.level}</small><h3><a href={x.url} target="_blank" rel="noreferrer">{x.name}</a></h3><p>{x.description}</p><dl><div><dt>难度</dt><dd>{x.level}</dd></div><div><dt>前置要求</dt><dd>{x.pre}</dd></div></dl></div></article>)}</div></section>}</main></div>}
export function SubjectBooksPage({subject}:{subject:SubjectConfig}){return <div className="shell"><SubjectHeader subject={subject}/><SubjectSide subject={subject} active="books"/><main><section className="hero"><small>SELF-TAUGHT {subject.en} / 书单与资源</small><h1>书单与资源</h1><p>优先收录可以合法免费阅读的教材、原始资料和大学官方公开课程。先选一套主资源，再用其他材料补充视角。</p></section><section><h2>公开电子书</h2><div className="library-list">{subject.books.map(([name,url,tag,text])=><article key={name}><i className="resource-mark book"/><div><small>{tag}</small><h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3><p>{text}</p></div></article>)}</div></section><section><h2>公开课程与资料入口</h2><p className="section-note">中文资源仅选择学科实力突出且课程材料可公开访问的顶尖高校；课程轮次结束后，部分平台仍可继续自学。</p><div className="course-portals">{portalsFor(subject).map(([tag,name,url,text])=><article key={name}><span>{tag}</span><h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3><p>{text}</p></article>)}</div></section></main></div>}
