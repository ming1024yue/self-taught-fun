import type {CSSProperties} from "react";
import {topics} from "./data";
import {kindLabel,levelLabel,pick,prerequisiteLabel,resourceSummary,useLanguage} from "./i18n";

const base=import.meta.env.BASE_URL;

export default function PaperCoursePreview(){
 const {language}=useLanguage(),english=language==="en",topic=topics.micro;
 const title=pick(language,"微观经济学","Microeconomics");
 const steps=english?[
  ["01","Build intuition","Scarcity, incentives, supply and demand"],
  ["02","Learn the models","Consumers, firms, markets and welfare"],
  ["03","Use the ideas","Explain a real decision with evidence"]
 ]:[
  ["01","建立直觉","稀缺、激励、供给与需求"],
  ["02","掌握模型","消费者、企业、市场与福利"],
  ["03","完成应用","用证据解释一个真实决策"]
 ];
 const descriptions=[
  "以完整讲义、视频与习题建立供需、消费者选择、企业决策和市场结构的基础框架。",
  "用更严格的数学模型连接偏好、生产、一般均衡、博弈与信息问题。",
  "进入研究生层级的微观理论，训练证明、优化与严谨的经济学论证。"
 ];
 return <div className="paper-preview">
  <header className="paper-topbar">
   <a className="paper-brand" href={base}><span>S</span><b>{pick(language,"自学坊","Self-Taught Fun")}</b></a>
   <nav aria-label={pick(language,"视觉样板导航","Preview navigation")}>
    <a href="#paper-route">{pick(language,"学习路径","Study path")}</a>
    <a href="#paper-resources">{pick(language,"课程资源","Resources")}</a>
    <a href="#paper-practice">{pick(language,"实践任务","Practice")}</a>
   </nav>
   <a className="paper-preview-badge" href={`${base}finance/topics/micro/`}>{pick(language,"返回正式页面","Original page")} ↗</a>
  </header>

  <main className="paper-main">
   <div className="paper-crumb"><a href={base}>{pick(language,"首页","Home")}</a><span>/</span><a href={`${base}finance/`}>{pick(language,"金融","Finance")}</a><span>/</span><b>{title}</b></div>
   <section className="paper-hero">
    <div className="paper-hero-copy">
     <small>SELF-TAUGHT COURSE · 01</small>
     <h1><span>{title}</span></h1>
     <p>{english?"Understand how people, firms, and markets make choices under constraints—and turn the models into explanations of the real world.":topic.intro+" 从直觉、模型到现实应用，建立一条能够真正完成的本科级学习路径。"}</p>
     <div className="paper-hero-actions"><a href="#paper-route">{pick(language,"开始这门课","Start here")} ↓</a><span>{pick(language,"建议 12–16 周 · 每周 6–8 小时","12–16 weeks · 6–8 hours/week")}</span></div>
    </div>
    <aside className="paper-sticky" aria-label={pick(language,"课程目标","Course goal")}><i aria-hidden="true"/><small>{pick(language,"完成标准","DONE WHEN")}</small><strong>{pick(language,"不只“看懂”，而是能够解释。","Do more than follow—explain.")}</strong><p>{pick(language,"能画图、能推导、能分析现实案例，并完成一份小型研究报告。","Draw the model, derive the result, analyze a case, and finish a short research note.")}</p></aside>
   </section>

   <div className="paper-layout">
    <aside className="paper-side">
     <p>{pick(language,"本页目录","ON THIS PAGE")}</p>
     <a href="#paper-route"><b>01</b>{pick(language,"学习路径","Study path")}</a>
     <a href="#paper-resources"><b>02</b>{pick(language,"精选资源","Resources")}</a>
     <a href="#paper-practice"><b>03</b>{pick(language,"实践检验","Practice")}</a>
     <div className="paper-speech">{pick(language,"每阶段只选一套主课，避免重复收集。","Choose one main course per stage. Stop collecting duplicates.")}</div>
    </aside>

    <div className="paper-content">
     <section id="paper-route" className="paper-section">
      <header><div><small>01 / ROUTE</small><h2>{pick(language,"一条清晰的学习路径","One clear route")}</h2></div><span>{pick(language,"基础 → 模型 → 应用","FOUNDATION → MODELS → USE")}</span></header>
      <div className="paper-steps">{steps.map(([number,name,note],index)=><article key={number} style={{"--tilt":`${index%2?".5":"-.45"}deg`} as CSSProperties}><b>{number}</b><div><h3>{name}</h3><p>{note}</p></div><label><input type="checkbox" aria-label={name}/><span/></label></article>)}</div>
     </section>

     <section id="paper-resources" className="paper-section">
      <header><div><small>02 / RESOURCES</small><h2>{pick(language,"三段难度，只选最好的","Three levels, carefully selected")}</h2></div><span>{pick(language,"公开可得","OPEN ACCESS")}</span></header>
      <div className="paper-resource-list">{topic.resources.map((resource,index)=><article className={`paper-resource paper-accent-${index+1}`} key={resource.name}>
       <div className="paper-resource-index"><span>0{index+1}</span><i aria-hidden="true"/></div>
       <div className="paper-resource-copy"><small>{english?`${kindLabel(resource.kind)} · ${levelLabel(resource.level)}`:`${resource.kind} · ${resource.level}`}</small><h3><a href={resource.url} target="_blank" rel="noreferrer">{resource.name}</a></h3><p>{english?resourceSummary(resource.name,title,resource.kind):resource.description??descriptions[index]}</p><dl><div><dt>{pick(language,"前置要求","PREREQUISITES")}</dt><dd>{english?prerequisiteLabel(resource.level):resource.pre}</dd></div><div><dt>{pick(language,"建议用法","HOW TO USE")}</dt><dd>{pick(language,index===0?"跟课完成习题":"选读重点章节并做笔记",index===0?"Follow the course and finish problems":"Read selectively and take notes")}</dd></div></dl></div>
       <a className="paper-resource-open" href={resource.url} target="_blank" rel="noreferrer" aria-label={`${pick(language,"打开","Open")} ${resource.name}`}>↗</a>
      </article>)}</div>
     </section>

     <section id="paper-practice" className="paper-section paper-practice">
      <header><div><small>03 / PRACTICE</small><h2>{pick(language,"用一个问题检验理解","Prove it with one question")}</h2></div></header>
      <div className="paper-assignment"><div><span>{pick(language,"结课任务","FINAL TASK")}</span><h3>{pick(language,"为什么同一杯咖啡，在不同地点价格不同？","Why does the same coffee cost more in one place than another?")}</h3><p>{pick(language,"用供需、弹性、成本与市场结构解释价格差异。加入一张图、一组真实数据和不超过 1,500 字的分析。","Explain the price difference using supply and demand, elasticity, costs, and market structure. Include one chart, one real dataset, and no more than 1,500 words.")}</p></div><ul><li>{pick(language,"模型是否画对","Correct model")}</li><li>{pick(language,"证据是否可靠","Reliable evidence")}</li><li>{pick(language,"结论是否能被反驳","Falsifiable claim")}</li></ul></div>
     </section>
    </div>
   </div>
  </main>
  <footer className="paper-footer"><span>{pick(language,"视觉方向样板 · 不影响正式课程页面","Visual direction preview · the live course page is unchanged")}</span><a href="https://www.figma.com/community/file/1075811850250564922/paper-wireframe-kit" target="_blank" rel="noreferrer">Paper Wireframe Kit by Method ↗</a></footer>
 </div>;
}
