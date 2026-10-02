import GlobalHeader from "./GlobalHeader";
import {pick,useLanguage} from "./i18n";

const base=import.meta.env.BASE_URL;

export default function PlatformHome(){
 const {language}=useLanguage();
 return <div className="platform">
  <GlobalHeader/>
  <main className="platform-main">
   <section className="platform-hero">
    <small>OPEN LEARNING PATHS</small>
    <h1>{pick(language,"为每一门学科，","A learning path for every discipline,")}<br/>{pick(language,"提供一条真正可走的自学路径。","built to be followed.")}</h1>
    <p>{pick(language,"本站希望减少优质教育资源与学习者之间的信息差。我们按照知识依赖关系，整理公开课、教材、论文、工具与实践项目，帮助零基础学习者逐步建立完整的知识体系。","We reduce the distance between learners and excellent educational resources. Open courses, textbooks, papers, tools, and projects are organized by knowledge dependencies so that beginners can build a complete foundation step by step.")}</p>
    <a className="home-planner-note" href={`${base}calendar/`} aria-label={pick(language,"开始规划课程","Start planning courses")}>
     <strong>{pick(language,"把想学的内容，安排进自己的时间。","Put the courses you want to learn into your own schedule.")}</strong>
     <span>{pick(language,"开始规划","Start planning")} <b aria-hidden="true">→</b></span>
    </a>
   </section>
   <section className="github-invite" aria-labelledby="github-invite-title">
    <h2 id="github-invite-title">{pick(language,"一起建设自学坊","Build Self-Taught Fun together")}</h2>
    <p>{pick(language,"查看代码，提出建议，参与贡献。","Explore the code, share ideas, and contribute.")}</p>
    <a className="github-invite-link" href="https://github.com/ming1024yue/self-taught-fun" target="_blank" rel="noopener noreferrer">
     <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.104.768-.244.768-.542 0-.267-.01-.975-.015-1.913-3.13.68-3.791-1.508-3.791-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.023-.7.078-.686.078-.686 1.13.08 1.725 1.16 1.725 1.16 1.005 1.722 2.637 1.225 3.279.936.102-.727.393-1.225.715-1.507-2.499-.285-5.126-1.25-5.126-5.563 0-1.229.44-2.234 1.16-3.021-.117-.285-.503-1.429.11-2.978 0 0 .945-.303 3.094 1.154A10.78 10.78 0 0 1 12 6.18c.957.004 1.921.13 2.821.379 2.148-1.457 3.092-1.154 3.092-1.154.615 1.55.229 2.693.113 2.978.722.787 1.158 1.792 1.158 3.021 0 4.324-2.631 5.275-5.138 5.553.404.35.765 1.04.765 2.097 0 1.515-.014 2.738-.014 3.11 0 .301.203.652.774.541A11.251 11.251 0 0 0 12 .75Z"/></svg>
     <span>View on GitHub</span>
    </a>
   </section>
   <section id="about" className="platform-about">
    <h2>{pick(language,"愿景","Vision")}</h2>
    <p className="platform-vision">{pick(language,"我们相信，科技终将抹平知识的边界，让每个人都能自由、免费地学习一切。","We believe technology will dissolve the boundaries of knowledge, so everyone can learn anything—freely and at no cost.")}</p>
    <div>
     <p><b>{pick(language,"系统","Systematic")}</b><br/>{pick(language,"沿知识依赖建立完整框架，而非零散积累。","Build a coherent framework through knowledge dependencies, not fragmented facts.")}</p>
     <p><b>{pick(language,"公开","Open")}</b><br/>{pick(language,"善用公开课、开放教材和原始资料，自主获取知识。","Learn independently through open courses, textbooks, and primary sources.")}</p>
     <p><b>{pick(language,"实践","Practical")}</b><br/>{pick(language,"通过习题、报告、代码和项目，把理解转化为能力。","Turn understanding into capability through exercises, reports, code, and projects.")}</p>
    </div>
   </section>
   <section className="platform-contact">
    <small>CONTACT</small>
    <p>{pick(language,"如果你有建议、想推荐优质资源，或希望参与共建，欢迎发送邮件至 ","To suggest a resource, share feedback, or contribute, email ")}<a href="mailto:mingyueoct24@gmail.com">mingyueoct24@gmail.com</a></p>
   </section>
  </main>
 </div>
}
