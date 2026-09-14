/* eslint-disable no-irregular-whitespace -- full-width spacing is intentional in Chinese prose */
import {mathGroups,mathTopics} from "./mathData";
import UniversalLearnerOnboarding from "./UniversalLearnerOnboarding";
import {buildCapabilityGraphFromPhases} from "./capabilityCore";
import GlobalHeader from "./GlobalHeader";
import LearningTimeline from "./LearningTimeline";
import type {Phase} from "./subjectTypes";
const b=import.meta.env.BASE_URL,u=(p:string)=>b+p.replace(/^\//,"");
const phases:(Phase&{n:string})[]=[
 {n:"01",time:"1–2 个月",title:"诊断并补齐基础",goal:"先确认算术、代数、函数和三角学哪里薄弱，不从最熟悉的内容重新刷起。",learn:"完成一次基础诊断；针对性复习分数、方程、不等式、函数图像、指数对数和三角函数；开始规范书写推导过程。",done:"能独立化简代数式、解常见方程，并从公式、图像和文字三种方式理解函数。",link:"foundations"},
 {n:"02",time:"2–3 个月",title:"学习证明与数学语言",goal:"尽早理解定义、命题和证明，并在后续所有阶段持续训练。",learn:"学习集合、逻辑、量词、反证法、归纳法、充分必要条件；每周完整写出至少两道证明题。",done:"能判断一个论证缺少哪一步，并用清楚的语言写出直接证明、反证和归纳证明。",link:"proofs"},
 {n:"03",time:"7–10 个月",title:"完成三门核心语言",goal:"先学单变量微积分与线性代数，再学习多变量微积分；计算与概念各占一半。",learn:"理解极限、导数、积分、级数；掌握向量、矩阵、线性映射、正交和特征值；配合几何图像与数值实验。",done:"能解释导数与积分的含义，解决基础优化问题，并用线性代数表达高维关系。",link:"calculus"},
 {n:"04",time:"5–7 个月",title:"进入不确定性与动态系统",goal:"用概率统计理解随机性，用微分方程理解随时间变化的系统。",learn:"学习随机变量、条件概率、期望、估计与检验；学习常微分方程、线性系统、稳定性和简单数值方法。",done:"能建立一个概率模型、解释统计结论，并为简单动态问题写出和分析微分方程。",link:"probability"},
 {n:"05",time:"按方向 4–8 个月",title:"选择严格理论与结构方向",goal:"从分析、代数、数论、拓扑或离散数学中选择一条主线，不要求同时全部推进。",learn:"可用分析深化极限与函数，用代数和数论研究结构，或用拓扑与几何研究空间和不变量。",done:"能持续阅读定义—定理—证明型教材，并独立完成一组中等难度证明题。",link:"real-analysis",mode:"choice"},
 {n:"06",time:"按方向 4–7 个月",title:"或选择现代应用数学方向",goal:"从理论方向与应用方向中选择更符合目标的一条，也可以日后再补另一条。",learn:"根据方向选择随机过程、信息论、偏微分方程、动力系统或网络科学，并用代码进行数值实验。",done:"能从现实问题定义状态、变量和假设，完成一次分析与计算相互验证的小型研究。",link:"stochastic-processes",mode:"choice"},
 {n:"07",time:"从核心阶段持续",title:"进入计算与交叉前沿",goal:"把数学变成可检验的证明、模型、程序或研究报告。",learn:"选择优化、数值计算、机器学习数学、密码学、网络科学、金融数学或物理建模；记录假设、推导、实现、验证和局限。",done:"完成一个别人能够复现、检查和提出反例的数学作品，并根据反馈迭代。",link:"projects",mode:"ongoing"}
];
const mathCapabilityGraph=buildCapabilityGraphFromPhases({
  subjectKey:"math",
  subjectName:"数学",
  phases,
  getResources:(link)=>mathTopics[link]?.resources??[],
});
export default function MathHome(){return <div className="shell"><MathHeader/><MathSide/><main><section id="intro" className="hero"><small>SELF-TAUGHT MATHEMATICS</small><h1>自学数学</h1><p>数学不是公式清单，而是一套描述结构、变化、信息与不确定性的语言。这里从零基础出发，经过大学核心与严格理论，再连接计算、人工智能和复杂系统等现代方向。</p><aside>不要用“看懂了”代替“会做了”，也不要为了追逐热门领域跳过基础。真正的理解需要你关掉答案，独立计算、证明、建模并解释每一步。</aside></section><section id="how"><h2>如何使用本站</h2><p>左侧目录按照知识依赖组织。先完成基础诊断，再为每个阶段选择一门主课；阅读定义和例题后必须做题，并定期用证明、代码或模型检验理解。</p><div className="legend" aria-label="资源类型图例"><div><i className="resource-mark course"/><span><b>公开课</b><small>绿色书签</small></span></div><div><i className="resource-mark paper"/><span><b>讲义与项目</b><small>红色书签</small></span></div><div><i className="resource-mark book"/><span><b>书籍与教材</b><small>蓝色书签</small></span></div></div></section><section id="plan"><h2>学习规划</h2>
<p className="plan-intro">目标是完成相当于本科数学专业教育的系统训练：掌握完整的核心知识与证明能力，能够继续学习前沿领域，并通过建模、计算或研究应用所学。以下时间按每周 6–10 小时估算。</p><UniversalLearnerOnboarding
  subjectName="数学"
  graph={mathCapabilityGraph}
/>
<div className="beginner-note"><strong>开始前先建立四个习惯</strong><ul><li>每一章至少完成一组不看答案的习题，错误题比收藏新资源更重要。</li><li>遇到定义时自己写例子与反例，遇到定理时先问条件为什么不能删除。</li><li>计算卡住就拆成更小步骤；证明卡住就从结论倒推需要什么条件。</li><li>保留一份错题与问题日志，每周复盘，而不是追求一次性全部理解。</li></ul></div><LearningTimeline phases={phases}/><div className="plan-steps">{phases.map(p=><article key={p.n}><div className="phase-meta"><span>{p.n}</span><small>建议用时<br/><b>{p.time}</b></small></div><div><h3>{p.title}</h3><p className="phase-goal">{p.goal}</p><dl><div><dt>主要学习内容</dt><dd>{p.learn}</dd></div><div><dt>完成标志</dt><dd>{p.done}</dd></div></dl><a href={u(`math/topics/${p.link}/`)}>进入相关章节 →</a></div></article>)}</div><div className="weekly"><h3>适合初学者的一周节奏</h3><p><b>2 小时课程</b>：理解新定义与例题　·　<b>3–4 小时练习</b>：独立计算和证明　·　<b>1 小时复盘</b>：整理错误与反例　·　<b>1–2 小时实验</b>：用图像、代码或现实问题验证概念。</p></div></section></main></div>}

export function MathHeader(){return <GlobalHeader sidebarLabel="数学"/>}
export function MathSide({active=""}:{active?:string}){return <aside className="sidebar"><nav>{mathGroups.map(([group,items])=><section key={group}><h3>{group}</h3>{items.map(([id,name])=><a className={id===active?"active":""} key={id} href={["intro","how","plan"].includes(id)?`${b}math/#${id}`:u(`math/topics/${id}/`)}>{name}</a>)}</section>)}</nav></aside>}
