import {MathHeader,MathSide} from "./MathHome";
import {institutionLabel,pick,useLanguage} from "./i18n";
const books=[
 ["OpenStax Algebra and Trigonometry 2e","https://openstax.org/details/books/algebra-and-trigonometry-2e","基础数学 · 入门","覆盖函数、方程、指数对数与三角学，适合补齐大学前基础。"],
 ["Calculus — Gilbert Strang","https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/","微积分 · 入门至进阶","MIT OCW 发布的完整开放教材，兼顾单变量、多变量和实际应用。"],
 ["Linear Algebra — Jim Hefferon","https://hefferon.net/linearalgebra/","线性代数 · 入门","从消元逐步进入向量空间和线性映射，提供完整习题。"],
 ["Book of Proof — Richard Hammack","https://richardhammack.github.io/BookOfProof/","证明 · 入门","从集合与逻辑开始训练直接证明、反证法和数学归纳法。"],
 ["OpenIntro Statistics","https://www.openintro.org/book/os/","统计学 · 入门","使用真实数据和练习介绍描述统计、抽样与统计推断。"],
 ["Basic Analysis — Jiří Lebl","https://www.jirka.org/ra/","实分析 · 进阶","两卷开放教材，从实数、序列与连续进入度量空间和多变量分析。"],
 ["Abstract Algebra: Theory and Applications","https://judsonbooks.org/abstract-algebra-theory-and-applications/","抽象代数 · 进阶","开放教材，覆盖群、环、域及密码学等应用。"],
 ["Convex Optimization","https://web.stanford.edu/~boyd/cvxbook/","优化 · 进阶","Boyd 与 Vandenberghe 的经典教材，由 Stanford 官方免费提供。"],
 ["Topology Without Tears","https://www.topologywithouttears.net/","拓扑 · 进阶","从点集拓扑进入紧致性、连通性与度量空间，配有练习和视频。"],
 ["Information Theory, Inference, and Learning Algorithms","https://www.inference.org.uk/itprnn/book.pdf","信息论 · 进阶","把信息、编码、贝叶斯推断和机器学习放在同一框架中。"],
 ["Network Science","https://networksciencebook.com/","网络科学 · 入门至进阶","免费在线教材，用真实网络解释连接结构、传播和鲁棒性。"],
 ["Mathematics for Machine Learning","https://mml-book.github.io/","机器学习数学 · 入门","连接线性代数、概率、优化与典型机器学习模型。"]
];
const portals=[
 ["清华","清华大学：微积分","https://v1-www.xuetangx.com/courses/course-v1%3ATsinghuaX%2BAP000005X%2B2016_T2/about","从极限、导数与积分进入级数和常微分方程，适合大学数学起步。"],
 ["南大","南京大学：近世代数","https://www.icourse163.org/course/NJU-1462062161","以初学者可进入的方式系统讲解群、环、域，并提供持续自学入口。"],
 ["MIT","MIT OpenCourseWare — Mathematics","https://ocw.mit.edu/search/?d=Mathematics","覆盖本科到研究生数学，讲义、作业和考试资料丰富。"],
 ["Harvard","Harvard Mathematics Courses","https://pll.harvard.edu/subject/mathematics","查找概率、统计、数据科学和数学基础公开课程。"],
 ["Stanford","Stanford Engineering Everywhere","https://see.stanford.edu/Course","包含线性系统、机器学习及相关数学课程资料。"],
 ["Yale","Open Yale Courses","https://oyc.yale.edu/courses","可查找基础物理、经济学和数学相关公开课程。"],
 ["Carnegie Mellon","CMU Open Learning Initiative","https://oli.cmu.edu/","提供统计、逻辑和定量推理等交互课程。"],
 ["MIT","MIT 18.01SC Self-study Calculus","https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/","专为独立学习整理的视频、讲义、习题、考试与完整答案。"]
];
export default function MathBooksPage(){const{language}=useLanguage(),english=language==="en";return <div className="shell"><MathHeader/><MathSide active="books"/><main><section className="hero"><small>SELF-TAUGHT MATHEMATICS / {pick(language,"书单与资源","BOOKS & RESOURCES")}</small><h1>{pick(language,"书单与资源","Books & Resources")}</h1><p>{pick(language,"优先收录可以合法免费阅读的完整教材和大学官方公开课程。每个阶段选择一本主教材，课程用于补充讲解，习题用于检验理解。","Priority is given to complete, legally accessible open textbooks and official university courses. Select one main textbook for each stage and use exercises to test understanding.")}</p></section><section><h2>{pick(language,"公开电子书","Open Books")}</h2><p className="section-note">{pick(language,"以下教材均可通过作者、学校或开放教育平台免费阅读。","These books are freely available from their authors, universities, or open-education platforms.")}</p><div className="library-list">{books.map(([name,url,tag,text])=><article key={name}><i className="resource-mark book"/><div><small>{english?"Open mathematics resource":tag}</small><h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3><p>{english?"An open textbook or reference selected for the mathematics learning path.":text}</p></div></article>)}</div></section><section><h2>{pick(language,"名校公开课入口","University Open-Course Portals")}</h2><p className="section-note">{pick(language,"中文资源仅选择学科实力突出且课程材料可公开访问的顶尖高校。进入课程后先阅读教学大纲与前置要求，再决定是否作为主课。","Chinese-language resources are limited to leading universities with publicly accessible materials. Review the syllabus and prerequisites before choosing a main course.")}</p><div className="course-portals">{portals.map(([tag,name,url,text])=><article key={name}><span>{english?institutionLabel(tag):tag}</span><h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3><p>{english?"An official course or resource portal selected for mathematics learners.":text}</p></article>)}</div></section></main></div>}
