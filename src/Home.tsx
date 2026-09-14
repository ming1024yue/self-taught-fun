/* eslint-disable no-irregular-whitespace -- full-width spacing is intentional in Chinese prose */
import {groups} from "./data";
import GlobalHeader from "./GlobalHeader";
import LearningTimeline from "./LearningTimeline";
import LearnerOnboarding from "./LearnerOnboarding";
import type {Phase} from "./subjectTypes";
const b=import.meta.env.BASE_URL,u=(p:string)=>b+p.replace(/^\//,"");
const phases:(Phase&{n:string})[]=[
 {n:"01",time:"2 周",title:"熟悉工具与学习方法",goal:"先建立一个能长期坚持的学习环境，不必一开始就学习编程。",learn:"选择一个笔记工具，安装 Zotero；用 Excel 或 Google Sheets 完成简单计算；学会寻找课程大纲、教材和原始数据。",done:"能整理一门课程的笔记、保存引用，并独立找到可靠资料。",link:"tools",mode:"parallel"},
 {n:"02",time:"4–6 个月",title:"补齐数学、统计与会计基础",goal:"零基础最容易在这里着急。目标不是一次学完全部数学，而是获得后续课程够用的语言。",learn:"学习函数、微积分直觉、线性代数和概率统计；同时认识会计等式、三张财务报表及其联系。",done:"能读懂基础公式、均值与回归概念，并解释企业利润与现金流为什么不同。",link:"math"},
 {n:"03",time:"6–8 个月",title:"建立经济学与计量核心框架",goal:"先微观、后宏观，再进入计量。每门只选择一套主课，跟随课程顺序完成。",learn:"微观学习供需、消费者与企业决策；宏观理解增长、通胀、就业和政策；计量学习回归与因果识别。",done:"能用经济学概念解释现实问题，并知道一个数据结论可能受到哪些因素干扰。",link:"micro"},
 {n:"04",time:"6–9 个月",title:"进入金融学核心",goal:"把会计、经济学和统计连接起来，理解金融市场与企业决策，而不是追逐交易技巧。",learn:"依次学习公司金融、投资学、资产定价和固定收益；练习货币时间价值、估值、组合风险与债券定价。",done:"能完成基础 DCF、计算组合收益和风险，并解释利率变化对债券价格的影响。",link:"corporate"},
 {n:"05",time:"按方向 3–5 个月",title:"选择一个专业方向",goal:"核心课程完成后再分流，不必把所有方向都学一遍。根据兴趣、职业目标和已有能力只选择一条主线。",learn:"可从企业估值、衍生品与金融工程、市场微观结构、风险管理、私募股权与风险投资中选择；先核对前置要求，再完成一套主课。",done:"能解释该方向解决的问题、常用模型、数据来源与主要风险，并完成一项针对性练习。",link:"derivatives",mode:"choice"},
 {n:"06",time:"同步进行 2–4 个月",title:"连接金融科技与前沿议题",goal:"把前沿专题与专业主线并行学习，而不是只记住热门名词或跟随资产价格。",learn:"从金融机器学习、支付与开放金融、数字资产、气候金融、金融稳定中选择一个专题；同时补齐需要的编程、机制设计或监管知识。",done:"能基于官方数据、技术机制或监管文件完成一份有证据、有边界的专题分析。",link:"fintech",mode:"parallel"},
 {n:"07",time:"从核心阶段持续",title:"用项目形成真正的能力",goal:"从一个小而明确的问题开始，用可复现成果代替“看完了很多课程”。",learn:"选择企业估值、宏观数据分析、事件研究、压力测试、另类数据或论文复现；记录问题、数据、方法、结果和局限。",done:"完成一份别人能够检查的报告、代码仓库或数据作品，并根据反馈迭代。",link:"projects",mode:"ongoing"}
];
export default function Home(){return <div className="shell"><Header/><Side/><main><section id="intro" className="hero"><small>SELF-TAUGHT FINANCE</small><h1>自学金融</h1><p>本站希望减少优质教育资源与学习者之间的信息差，让每一个愿意学习的人，都能找到清晰、可靠且循序渐进的路径，建立系统的金融与经济学知识框架。</p><aside>这里不提供快速致富的方法。我们更关心原理与实践，也相信好的知识不该被门槛和信息差阻隔。</aside></section><section id="how"><h2>如何使用本站</h2><p>左侧目录按照知识依赖关系组织。每个主题提供不同难度的公开课、论文与书籍；选定一门主课，坚持完成作业与项目。</p><div className="legend" aria-label="资源类型图例"><div><i className="resource-mark course"/><span><b>公开课</b><small>绿色书签</small></span></div><div><i className="resource-mark paper"/><span><b>论文</b><small>红色书签</small></span></div><div><i className="resource-mark book"/><span><b>书籍与教材</b><small>蓝色书签</small></span></div></div></section><section id="plan"><h2>学习规划</h2>  <LearnerOnboarding />
<p className="plan-intro">目标是完成相当于本科金融专业教育的系统训练：掌握完整的经济与金融核心知识，能够继续学习前沿领域，并通过项目或研究应用所学。以下时间按每周 6–10 小时估算。</p>
<div className="beginner-note"><strong>开始前先记住三件事</strong><ul><li>每个知识点只选一门主课，资源越多不代表学得越好。</li><li>至少把一半时间留给习题、复述和项目，遇到公式先理解它在回答什么问题。</li><li>卡住超过两天时，退回前置知识或换一种讲解，不要把困难理解为没有天赋。</li></ul></div><LearningTimeline phases={phases}/><div className="plan-steps">{phases.map(p=><article key={p.n}><div className="phase-meta"><span>{p.n}</span><small>建议用时<br/><b>{p.time}</b></small></div><div><h3>{p.title}</h3><p className="phase-goal">{p.goal}</p><dl><div><dt>主要学习内容</dt><dd>{p.learn}</dd></div><div><dt>完成标志</dt><dd>{p.done}</dd></div></dl><a href={u(`topics/${p.link}/`)}>进入相关章节 →</a></div></article>)}</div><div className="weekly"><h3>适合初学者的一周节奏</h3><p><b>3 小时课程</b>：跟随一门主课学习新内容　·　<b>2 小时练习</b>：不看答案完成习题　·　<b>1 小时整理</b>：用自己的话总结概念与疑问　·　<b>1–2 小时应用</b>：分析一家公司、一组数据或一个现实问题。</p></div></section></main></div>}
export function Header(){return <GlobalHeader sidebarLabel="金融"/>}
export function Side({active=""}:{active?:string}){return <aside className="sidebar"><nav>{groups.map(([g,items])=><section key={g}><h3>{g}</h3>{items.map(([id,n])=><a className={id===active?"active":""} key={id} href={["intro","how","plan"].includes(id)?`${b}finance/#${id}`:u(`finance/topics/${id}/`)}>{n}</a>)}</section>)}</nav></aside>}
