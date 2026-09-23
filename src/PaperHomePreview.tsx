import GlobalHeader from "./GlobalHeader";
import KnowledgeGraph from "./KnowledgeGraph";
import {pick,useLanguage} from "./i18n";

export default function PaperHomePreview(){
 const {language}=useLanguage();
 return <div className="platform paper-preview paper-home-preview paper-home-original-layout">
  <GlobalHeader/>
  <main className="platform-main">
   <section className="platform-hero">
    <small>OPEN LEARNING PATHS</small>
    <h1>{pick(language,"为每一门学科，","A learning path for every discipline,")}<br/>{pick(language,"提供一条真正可走的自学路径。","built to be followed.")}</h1>
    <p>{pick(language,"本站希望减少优质教育资源与学习者之间的信息差。我们按照知识依赖关系，整理公开课、教材、论文、工具与实践项目，帮助零基础学习者逐步建立完整的知识体系。","We reduce the distance between learners and excellent educational resources. Open courses, textbooks, papers, tools, and projects are organized by knowledge dependencies so that beginners can build a complete foundation step by step.")}</p>
   </section>
   <div className="knowledge-placement"><KnowledgeGraph/></div>
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
 </div>;
}
