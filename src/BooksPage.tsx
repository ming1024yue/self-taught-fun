import {Header,Side} from "./Home";
import {institutionLabel,pick,useLanguage} from "./i18n";
const books=[
 ["CORE Econ — The Economy 2.0","https://www.core-econ.org/ebooks/","经济学 · 入门","免费的互动式微观与宏观经济学教材，以现实问题和数据组织内容。"],
 ["OpenStax Principles of Economics 3e","https://openstax.org/details/books/principles-economics-3e","经济学 · 入门","体系完整，包含微观、宏观、例题与章节练习，可在线阅读或下载。"],
 ["OpenStax Principles of Finance","https://openstax.org/details/books/principles-finance","金融学 · 入门","覆盖货币时间价值、风险收益、证券与公司金融。"],
 ["OpenStax Financial Accounting","https://openstax.org/details/books/principles-financial-accounting","会计 · 入门","从会计等式、交易记录到三张报表，配有例题与练习。"],
 ["Causal Inference: The Mixtape","https://mixtape.scunning.com/","计量 · 进阶","以直觉、案例和代码介绍因果推断方法。"],
 ["Python Data Science Handbook","https://jakevdp.github.io/PythonDataScienceHandbook/","数据分析 · 入门","系统介绍 NumPy、Pandas、可视化与机器学习工具。"],
 ["An Introduction to Statistical Learning","https://www.statlearning.com/","机器学习 · 入门","作者官网免费提供教材，并配有课程视频与 R / Python 实验。"],
 ["Forecasting: Principles and Practice","https://otexts.com/fpp3/","时间序列 · 进阶","以可运行案例讲解预测、评估、回归、指数平滑和时间序列模型。"],
 ["Bitcoin and Cryptocurrency Technologies","https://bitcoinbook.cs.princeton.edu/","数字资产 · 进阶","Princeton 作者开放教材，从密码学、共识和激励机制理解区块链。"],
 ["Asset Pricing — John Cochrane","https://www.johnhcochrane.com/asset-pricing","资产定价 · 高级","以随机贴现因子统一现代资产定价理论与实证。"]
];
const portals=[
 ["复旦","复旦大学：货币经济学","https://www.icourse163.org/course/FUDAN-1206694808","结合中国与主要经济体的央行实践，系统讲解货币、经济活动与货币政策。"],
 ["MIT","MIT OpenCourseWare — Economics","https://ocw.mit.edu/search/?d=Economics","讲义、视频、习题、考试和答案非常完整。"],
 ["MIT Sloan","MIT Sloan Finance Courses","https://ocw.mit.edu/search/?d=Sloan%20School%20of%20Management&q=finance","查找公司金融、投资、会计和金融理论课程。"],
 ["MIT Sloan","FinTech: Shaping the Financial World","https://ocw.mit.edu/courses/15-s08-fintech-shaping-the-financial-world-spring-2020/","覆盖人工智能、支付、信贷、开放 API、交易和保险科技。"],
 ["MIT Sloan","Blockchain and Money","https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/","通过完整视频和讲义理解区块链的金融应用与政策问题。"],
 ["MIT Sloan","Entrepreneurial Finance","https://ocw.mit.edu/courses/15-431-entrepreneurial-finance-spring-2011/","系统学习创业融资、风险投资、契约、估值和退出。"],
 ["Georgia Tech","Machine Learning for Trading","https://quantsoftware.gatech.edu/Machine_Learning_for_Trading_Course","公开课程视频、讲义与代码连接机器学习、市场数据和策略评估。"],
 ["Yale","Open Yale Courses — Economics","https://oyc.yale.edu/economics","提供 Financial Markets、Financial Theory 和 Game Theory。"],
 ["Harvard","Harvard Free Online Courses","https://pll.harvard.edu/catalog/free","可筛选经济、商业、统计与数据科学课程。"],
 ["Stanford","Stanford Online Free Courses","https://online.stanford.edu/free-courses","适合补充统计、编程、数据科学与政策内容。"],
 ["Princeton","Princeton Online","https://online.princeton.edu/","查找经济、金融、数学和公共政策课程。"]
];
export default function BooksPage(){const{language}=useLanguage(),english=language==="en";return <div className="shell"><Header/><Side active="books"/><main><section className="hero"><small>SELF-TAUGHT FINANCE / {pick(language,"书单与资源","BOOKS & RESOURCES")}</small><h1>{pick(language,"书单与资源","Books & Resources")}</h1><p>{pick(language,"优先收录可免费在线阅读的电子书，以及大学官方公开课平台。先选一本主教材，再用公开课补充讲解和练习。","Priority is given to open books and official university course platforms. Choose one main textbook, then use courses for additional explanations and practice.")}</p></section><section><h2>{pick(language,"公开电子书","Open Books")}</h2><p className="section-note">{pick(language,"以下资源均可通过官方网站免费阅读，部分支持 PDF、EPUB 或离线下载。","These resources can be read free of charge through their official sites; some also support PDF, EPUB, or offline access.")}</p><div className="library-list">{books.map(([n,url,tag,text])=><article key={n}><i className="resource-mark book"/><div><small>{english?"Open finance resource":tag}</small><h3><a href={url} target="_blank" rel="noreferrer">{n}</a></h3><p>{english?"An open textbook or reference selected for the finance learning path.":text}</p></div></article>)}</div></section><section><h2>{pick(language,"名校公开课入口","University Open-Course Portals")}</h2><p className="section-note">{pick(language,"中文资源仅选择学科实力突出且课程材料可公开访问的顶尖高校；也可使用 economics、finance、accounting、statistics 等关键词搜索。","Chinese-language resources are limited to leading universities with publicly accessible materials. Search with terms such as economics, finance, accounting, and statistics.")}</p><div className="course-portals">{portals.map(([tag,n,url,text])=><article key={n}><span>{english?institutionLabel(tag):tag}</span><h3><a href={url} target="_blank" rel="noreferrer">{n}</a></h3><p>{english?"An official course or resource portal selected for finance learners.":text}</p></article>)}</div></section></main></div>}
