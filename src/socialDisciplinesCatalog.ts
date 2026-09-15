import {r,type SubjectConfig,type Topic} from "./subjectTypes";

const t=(title:string,intro:string,resources:ReturnType<typeof r>[]):Topic=>({title,intro,resources});
const start=["开始之前",[["intro","本站目的"],["how","如何使用本站"],["plan","学习规划"]]] as const;

const politicalTopics:Record<string,Topic>={
 tools:t("学习工具","检索法律、选举、政策与跨国数据，管理文献并保留可复核的研究过程。",[]),
 foundations:t("政治学导论","从权力、国家、合法性、集体行动和制度出发，建立政治学的整体框架。",[
  r("OpenStax Introduction to Political Science","https://openstax.org/details/books/introduction-political-science","入门","开放教材","无需前置","以个人、群体、制度、国家和国际关系为主线的免费完整教材。"),
  r("北京大学：政治学概论","https://www.icourse163.org/course/PKU-1002578003","进阶","公开课","政治学基本概念","系统连接政治学方法、比较政治、国际政治和政治哲学。"),
  r("MIT 17.20 Introduction to the American Political Process","https://ocw.mit.edu/courses/17-20-introduction-to-the-american-political-process-fall-2020/","高级","公开课","政治学导论与英文阅读","用制度、政治行为和实证研究分析一个具体政治体系。")
 ]),
 theory:t("政治思想与政治理论","讨论正义、自由、平等、权威、公民身份和理想制度，并训练规范论证。",[
  r("Yale PLSC 114: Introduction to Political Philosophy","https://oyc.yale.edu/political-science/plsc-114","入门","公开课","无需前置","通过柏拉图、霍布斯、洛克、卢梭和托克维尔进入西方政治思想。"),
  r("Harvard Justice","https://justiceharvard.org/","进阶","公开课","基础哲学阅读","围绕功利主义、权利、公平与公共选择练习规范推理。"),
  r("Stanford Encyclopedia of Philosophy: Political Authority","https://plato.stanford.edu/entries/authority/","高级","开放教材","政治哲学与学术英文","以权威、合法性和服从义务为中心，用同行评审条目梳理政治哲学争论与进一步阅读。")
 ]),
 comparative:t("比较政治","比较国家、政体、政党、选举、社会运动以及民主化与国家能力。",[
  r("MIT 17.50 Introduction to Comparative Politics","https://ocw.mit.edu/courses/17-50-introduction-to-comparative-politics-fall-2022/","入门","公开课","政治学导论","比较经济、文化和制度如何塑造不同国家的政治结果。"),
  r("V-Dem Dataset and Documentation","https://www.v-dem.net/data/","进阶","项目平台","基础统计与表格处理","使用公开的跨国民主指标提出并检验比较问题。"),
  r("MIT 17.588 Field Seminar in Comparative Politics","https://ocw.mit.edu/courses/17-588-field-seminar-in-comparative-politics-spring-2024/","高级","公开课","比较政治、研究方法与论文阅读","以经典和前沿文献进入研究生层级的比较政治研究。")
 ]),
 institutions:t("政治制度与政治行为","研究宪法、立法、行政、司法、政党、利益集团、选举和公共舆论。",[
  r("OpenStax Introduction to Political Science: Institutions","https://openstax.org/books/introduction-political-science/pages/11-introduction","入门","开放教材","政治学导论","从选举制度和政党开始理解制度如何聚合偏好。"),
  r("Constitute Project","https://www.constituteproject.org/","进阶","项目平台","比较政治与基础法律阅读","比较各国宪法条款、权利设计和制度差异。"),
  r("MIT 17.202 Graduate Seminar in American Politics II","https://ocw.mit.edu/courses/17-202-graduate-seminar-in-american-politics-ii-spring-2010/","高级","公开课","制度理论、方法与论文阅读","通过研究文献深入立法、行政、司法与官僚机构。")
 ]),
 international:t("国际关系","理解战争与和平、合作、国际制度、全球政治经济和跨国议题。",[
  r("MIT 17.41 Introduction to International Relations","https://ocw.mit.edu/courses/17-41-introduction-to-international-relations-spring-2023/","入门","公开课","无需前置","从利益、互动和制度解释国际冲突与合作，并配有政策备忘录作业。"),
  r("UN Audiovisual Library of International Law","https://legal.un.org/avl/","进阶","公开课","国际关系与基础法律概念","通过联合国讲座和原始法律文件理解国际规则。"),
  r("MIT Political Science: International Relations Courses","https://ocw.mit.edu/search/?d=Political%20Science&q=international%20relations","高级","公开课","国际关系理论与研究方法","按安全、国际组织、政治经济和地区专题继续学习。")
 ]),
 policy:t("公共政策与公共管理","学习界定政策问题、识别利益相关者、比较方案、实施和评估政策。",[
  r("MIT 11.002J Making Public Policy","https://ocw.mit.edu/courses/11-002j-making-public-policy-fall-2014/","入门","公开课","无需前置","用制度、倡议联盟和具体案例理解政策形成过程。"),
  r("MIT 11.003J Methods of Policy Analysis","https://ocw.mit.edu/courses/11-003j-methods-of-policy-analysis-spring-2016/","进阶","公开课","公共政策导论与基础经济学","学习方案设计、利益相关者分析、成本收益和实施评估。"),
  r("MIT 14.41 Public Finance and Public Policy","https://ocw.mit.edu/courses/14-41-public-finance-and-public-policy-fall-2024/","高级","公开课","中级微观经济学与统计","用现代实证研究分析税收、教育、社会保障和公共服务。")
 ]),
 economy:t("政治经济学","研究国家、市场、制度和利益集团如何共同决定经济与分配结果。",[
  r("CORE Econ: Economy, Society, and Public Policy","https://www.core-econ.org/espp/","入门","开放教材","高中代数","从不平等、权力、市场失灵和政策问题进入政治经济学。"),
  r("MIT 17.100J Political Economy I","https://ocw.mit.edu/courses/17-100j-political-economy-i-spring-2016/","进阶","公开课","政治学与经济学导论","比较自由主义、马克思主义、文化理论和新制度主义。"),
  r("MIT 14.770 Introduction to Political Economy","https://ocw.mit.edu/courses/14-770-introduction-to-political-economy-fall-2017/","高级","公开课","微观经济学、博弈论与计量经济学","进入制度、选举、集体选择和发展的前沿研究工具。")
 ]),
 methods:t("政治学研究方法","把政治问题转化为可检验的命题，学习比较、访谈、案例、实验和因果推断。",[
  r("Social Science Research: Principles, Methods, and Practices","https://digitalcommons.usf.edu/oa_textbooks/3/","入门","开放教材","无需前置","免费介绍理论、测量、抽样和定量定性研究设计。"),
  r("MIT 17.801 Political Science Scope and Methods","https://ocw.mit.edu/courses/17-801-political-science-scope-and-methods-fall-2017/","进阶","公开课","政治学导论与基础统计","训练文献评议、研究设计、资料收集、访谈和独立研究。"),
  r("Causal Inference: The Mixtape","https://mixtape.scunning.com/","高级","开放教材","概率、回归与编程","系统学习实验、匹配、断点、工具变量和双重差分。")
 ]),
 data:t("政治数据与计算方法","用选举、文本、网络和跨国指标研究政治行为，同时审视数据偏差。",[
  r("Our World in Data: Democracy","https://ourworldindata.org/democracy","入门","项目平台","基础图表阅读","从可追溯指标观察政体、权利和民主的长期变化。"),
  r("MIT Election Data + Science Lab","https://electionlab.mit.edu/data","进阶","项目平台","统计与数据清洗","使用官方研究团队整理的选举数据完成复现分析。"),
  r("Summer Institute in Computational Social Science","https://sicss.io/curriculum","高级","公开讲义","统计、Python 或 R、研究方法","学习文本分析、数字踪迹、网络分析、实验和研究伦理。")
 ]),
 projects:t("项目与进阶方向","以比较研究、政策备忘录、数据分析或文本研究回答一个明确的政治问题。",[
  r("Manifesto Project Dataset","https://manifesto-project.wzb.eu/datasets","入门","项目平台","政治学导论与表格工具","比较政党纲领在议题和立场上的长期变化。"),
  r("Harvard Dataverse","https://dataverse.harvard.edu/","进阶","项目平台","研究设计、统计与编程","寻找论文数据并完成一项可复现的政治学分析。"),
  r("Comparative Constitutions Project","https://comparativeconstitutionsproject.org/","高级","项目平台","比较政治、制度理论与数据分析","围绕宪法设计和制度变迁完成跨国研究。")
 ]),
 books:t("书单与资源","集中查看开放教材、大学公开课和政治数据入口。",[])
};

export const politicalScience:SubjectConfig={
 slug:"political-science",name:"政治学",en:"POLITICAL SCIENCE",
 intro:"政治学系统研究权力、国家、制度、集体选择与国际秩序，既讨论政治应当如何，也用证据解释现实政治为何如此。",
 caution:"学习政治学不是积累立场。先区分规范判断与经验判断，再核对概念、比较对象、因果证据和资料来源。",
 groups:[start,["共同基础",[["tools","学习工具"],["foundations","政治学导论"],["methods","政治学研究方法"]]],["核心领域",[["theory","政治思想与政治理论"],["comparative","比较政治"],["international","国际关系"]]],["制度、政策与交叉",[["institutions","政治制度与政治行为"],["policy","公共政策与公共管理"],["economy","政治经济学"],["data","政治数据与计算方法"]]],["实践资源",[["projects","项目与进阶方向"],["books","书单与资源"]]]],
 topics:politicalTopics,
 phases:[
  {time:"1–2 个月",title:"建立政治学框架",goal:"理解权力、国家、合法性、制度与集体行动。",learn:"完成一门导论课；每周用概念解释一个现实案例。",done:"能区分政治事实、因果解释和价值判断。",link:"foundations"},
  {time:"2–3 个月",title:"学习理论与研究方法",goal:"同时建立规范论证和经验研究能力。",learn:"政治思想、研究设计、测量、比较与基础统计。",done:"能提出可研究的问题并写出变量、证据和替代解释。",link:"methods"},
  {time:"3–5 个月",title:"完成三大核心领域",goal:"比较国内制度、跨国政治与国际体系。",learn:"政治理论、比较政治和国际关系各选一套主课程。",done:"完成一篇跨国家或跨理论的比较短文。",link:"comparative"},
  {time:"2–4 个月",title:"进入政策与政治经济学",goal:"把制度、激励和证据用于现实公共问题。",learn:"公共政策、政治经济学、成本收益与政策评估。",done:"写一份有备选方案、证据和风险说明的政策备忘录。",link:"policy"},
  {time:"持续",title:"开展可复核研究",goal:"形成从问题到公开成果的完整闭环。",learn:"数据清洗、文本或比较分析、可视化、引用与限制说明。",done:"发布数据、方法、分析和结论均可追溯的项目。",link:"projects"}
 ],
 tools:[
  ["文献与引用",[["Google Scholar","https://scholar.google.com/","检索研究和引用关系"],["JSTOR Open Content","https://about.jstor.org/oa-and-free/","查找开放论文与图书"],["Zotero","https://www.zotero.org/","管理来源、笔记和引用"]]],
  ["政治与政策数据",[["V-Dem","https://www.v-dem.net/data/","获取跨国民主指标"],["World Bank Data","https://data.worldbank.org/","获取发展与治理指标"],["Manifesto Project","https://manifesto-project.wzb.eu/","分析政党纲领和立场"]]],
  ["分析与写作",[["R","https://www.r-project.org/","统计、可视化和复现"],["RStudio","https://posit.co/download/rstudio-desktop/","组织 R 分析项目"],["Quarto","https://quarto.org/","发布带代码和引用的研究报告"]]]
 ],
 books:[
  ["OpenStax Introduction to Political Science","https://openstax.org/details/books/introduction-political-science","政治学 · 入门","覆盖政治行为、制度、比较政治与国际关系的完整开放教材。"],
  ["CORE Econ: Economy, Society, and Public Policy","https://www.core-econ.org/espp/","政治经济学 · 入门","用现实问题、数据和制度理解经济与公共政策。"],
  ["Causal Inference: The Mixtape","https://mixtape.scunning.com/","研究方法 · 高级","可免费阅读的现代因果推断教材。"]
 ],
 portals:[
  ["MIT","MIT OCW Political Science","https://ocw.mit.edu/search/?d=Political%20Science","比较政治、国际关系、政治经济学和研究方法课程。"],
  ["Yale","Open Yale Political Science","https://oyc.yale.edu/political-science","完整视频、音频、讲稿和阅读安排。"],
  ["OpenStax","OpenStax Political Science","https://openstax.org/details/books/introduction-political-science","经过同行评审、可合法免费阅读的导论教材。"]
 ]
};

const managementTopics:Record<string,Topic>={
 tools:t("学习工具","用表格、数据、流程图、项目管理和协作工具记录假设、决策与执行结果。",[]),
 foundations:t("管理学原理","理解计划、组织、领导、控制以及管理者如何在约束下协调资源。",[
  r("OpenStax Principles of Management","https://openstax.org/details/books/principles-management","入门","开放教材","无需前置","以计划、组织、领导和控制为主线的免费完整教材。"),
  r("MIT Sloan MBA First-Semester Core","https://ocw.mit.edu/collections/sloan-mba-first-semester-core/","进阶","公开课","基础经济学与大学数学","按 MIT Sloan 核心课程组合管理、经济、数据、财务和组织知识。"),
  r("MIT 15.311 Organizational Processes","https://ocw.mit.edu/courses/15-311-organizational-processes-fall-2003/","高级","公开课","管理学导论与案例阅读","用政治、文化和战略设计三种视角分析复杂组织。")
 ]),
 organization:t("组织行为与领导力","研究个体、团队、文化、激励、权力、沟通、组织设计和变革。",[
  r("OpenStax Organizational Behavior","https://openstax.org/details/books/organizational-behavior","入门","开放教材","无需前置","从个人、群体到组织系统建立行为科学框架。"),
  r("MIT 15.311 Organizational Processes","https://ocw.mit.edu/courses/15-311-organizational-processes-fall-2003/","进阶","公开课","管理学原理","用案例和田野项目分析组织文化、政治与结构。"),
  r("MIT 15.668 People and Organizations","https://ocw.mit.edu/courses/15-668-people-and-organizations-fall-2010/","高级","公开课","组织行为与研究方法","深入理解工作设计、激励、团队、领导和组织变革。")
 ]),
 accounting:t("会计、财务与绩效","读懂财务报表、成本、预算、现金流和投资决策，连接经营活动与绩效。",[
  r("OpenStax Principles of Accounting, Volume 1","https://openstax.org/details/books/principles-financial-accounting","入门","开放教材","高中代数","从交易、分录到三张报表建立会计基础。"),
  r("MIT 15.515 Financial Accounting","https://ocw.mit.edu/courses/15-515-financial-accounting-fall-2003/","进阶","公开课","基础会计与代数","从决策者视角理解财务、管理和税务报告。"),
  r("MIT 15.401 Finance Theory I","https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/","高级","公开课","概率、统计、微观经济学与会计","学习估值、风险收益、资本预算和公司融资。")
 ]),
 strategy:t("战略管理","分析行业、竞争优势、能力边界、商业模式和战略执行。",[
  r("OpenStax Principles of Management: Strategic Analysis","https://openstax.org/books/principles-management/pages/8-introduction","入门","开放教材","管理学原理","从外部环境、内部资源和竞争定位进入战略分析。"),
  r("MIT 15.902 Strategic Management I","https://ocw.mit.edu/courses/15-902-strategic-management-i-fall-2006/","进阶","公开课","管理学、经济学与案例阅读","学习企业、业务和职能战略的制定与实施。"),
  r("MIT 15.904 Strategic Management II","https://ocw.mit.edu/courses/15-904-strategic-management-ii-fall-2005/","高级","公开课","战略管理与案例分析","通过真实应用深化战略框架、选择和执行。")
 ]),
 marketing:t("市场营销","从顾客问题出发，学习市场研究、细分定位、产品、定价、渠道、传播和品牌。",[
  r("OpenStax Principles of Marketing","https://openstax.org/details/books/principles-marketing","入门","开放教材","无需前置","免费覆盖顾客价值、市场研究、STP 和营销组合。"),
  r("MIT 15.810 Marketing Management","https://ocw.mit.edu/courses/15-810-marketing-management-fall-2010/","进阶","公开课","管理学与基础统计","通过讲义、案例和项目训练市场分析与策略设计。"),
  r("MIT 15.810 Marketing Analytics, Frameworks, and Applications","https://ocw.mit.edu/courses/15-810-marketing-management-analytics-frameworks-and-applications-fall-2015/","高级","公开课","营销基础、统计与表格工具","把定位、顾客行为、联合分析和实验用于营销决策。")
 ]),
 operations:t("运营与供应链","设计和改进生产、服务、库存、质量、产能和供应网络。",[
  r("MIT 15.760A Operations Management","https://ocw.mit.edu/courses/15-760a-operations-management-spring-2002/","入门","公开课","高中代数与基础概率","建立流程、产能、库存、排程、质量和产品开发框架。"),
  r("MIT 15.763J Manufacturing System and Supply Chain Design","https://ocw.mit.edu/courses/15-763j-manufacturing-system-and-supply-chain-design-spring-2005/","进阶","公开课","运营管理、概率与优化","学习供应链网络、库存、风险共担和系统设计。"),
  r("MIT 15.769 Operations Strategy","https://ocw.mit.edu/courses/15-769-operations-strategy-fall-2010/","高级","公开课","运营管理与战略管理","把流程选择、能力、供应网络和竞争战略联系起来。")
 ]),
 decisions:t("数据分析与管理决策","用概率、统计、预测、优化和实验在不确定条件下做出透明决策。",[
  r("OpenIntro Statistics","https://www.openintro.org/book/os/","入门","开放教材","高中代数","免费建立描述统计、概率、推断和回归基础。"),
  r("MIT 15.060 Data, Models, and Decisions","https://ocw.mit.edu/courses/15-060-data-models-and-decisions-fall-2014/","进阶","公开课","微积分、概率和表格工具","用回归、模拟和优化解决管理决策问题。"),
  r("MIT 15.053 Optimization Methods in Management Science","https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/","高级","公开课","线性代数、微积分与编程","系统学习线性、整数、网络和非线性优化。")
 ]),
 innovation:t("创新与创业","从问题发现、市场验证和产品设计走向商业模式、团队、融资与规模化。",[
  r("MIT 15.390 New Enterprises","https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/","入门","公开课","无需前置；建议组队","按市场细分、价值主张、竞争和财务完成一份创业计划。"),
  r("MIT Entrepreneurship Course Collection","https://ocw.mit.edu/pages/entrepreneurship/","进阶","公开课","管理学与基础财务","按法律、营销、运营、领导、融资和战略继续学习。"),
  r("MIT 15.392 Scaling Entrepreneurial Ventures","https://ocw.mit.edu/courses/15-392-scaling-entrepreneurial-ventures-spring-2026/","高级","公开课","创业基础或 New Enterprises","研究创始人转型、组织设计、文化、治理和规模化运营。")
 ]),
 governance:t("商业伦理与公司治理","理解利益相关者、代理问题、责任边界、合规、可持续性和决策伦理。",[
  r("OpenStax Business Ethics","https://openstax.org/details/books/business-ethics","入门","开放教材","无需前置","以案例讨论员工、消费者、环境、全球经营和企业责任。"),
  r("MIT 15.269 Leadership Stories: Literature, Ethics, and Authority","https://ocw.mit.edu/courses/15-269-leadership-stories-literature-ethics-and-authority-fall-2015/","进阶","公开课","管理学与批判性阅读","通过文学和案例训练领导者面对权威与伦理冲突的判断。"),
  r("MIT 15.649 The Law of Mergers and Acquisitions","https://ocw.mit.edu/courses/15-649-the-law-of-mergers-and-acquisitions-spring-2003/","高级","公开课","公司财务与基础商法","从交易、受托义务和控制权理解公司治理的制度约束。")
 ]),
 projects:t("项目与进阶方向","通过组织诊断、市场研究、运营改进、数据决策或创业验证形成可执行成果。",[
  r("MIT Sloan Teaching Resources Library","https://mitsloan.mit.edu/teaching-resources-library","入门","项目平台","管理学导论","选择开放案例练习问题界定、分析与建议表达。"),
  r("MIT 15.810 Action Learning Assignment","https://ocw.mit.edu/courses/15-810-marketing-management-analytics-frameworks-and-applications-fall-2015/pages/assignments/action-learning-assignment/","进阶","项目平台","营销、统计与访谈","以真实产品完成顾客研究、定位和营销方案。"),
  r("MIT 15.390 New Enterprises Assignments","https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/pages/assignments/","高级","项目平台","市场、财务、运营与团队协作","按完整作业链完成目标客户、竞争、渠道、财务和商业计划。")
 ]),
 books:t("书单与资源","集中查看开放管理教材和顶尖商学院公开课程。",[])
};

export const management:SubjectConfig={
 slug:"management",name:"管理学",en:"MANAGEMENT",
 intro:"管理学研究组织如何设定目标、协调人和资源、做出决策并持续创造价值；理解框架只是起点，真正的检验来自行动和结果。",
 caution:"管理案例没有脱离情境的标准答案。区分事实、假设和建议，写清目标、约束、利益相关者、衡量指标与潜在副作用。",
 groups:[start,["共同基础",[["tools","学习工具"],["foundations","管理学原理"],["decisions","数据分析与管理决策"]]],["组织与资源",[["organization","组织行为与领导力"],["accounting","会计、财务与绩效"],["governance","商业伦理与公司治理"]]],["价值创造",[["strategy","战略管理"],["marketing","市场营销"],["operations","运营与供应链"],["innovation","创新与创业"]]],["实践资源",[["projects","项目与进阶方向"],["books","书单与资源"]]]],
 topics:managementTopics,
 phases:[
  {time:"1–2 个月",title:"建立管理全景",goal:"理解管理者、组织、环境和四项基本职能。",learn:"完成管理学原理；每章用一个真实组织做案例笔记。",done:"能把模糊问题拆成目标、约束、角色、流程和指标。",link:"foundations"},
  {time:"2–3 个月",title:"掌握组织与数字语言",goal:"同时理解人的行为和组织的财务结果。",learn:"组织行为、基础会计、财务报表和商业伦理。",done:"完成一次组织诊断和一份基础经营分析。",link:"organization"},
  {time:"3–5 个月",title:"完成核心职能",goal:"理解企业如何选择市场并稳定交付价值。",learn:"战略、营销、运营与供应链各完成一套主课程。",done:"能解释一项战略如何落实到顾客、流程、资源和指标。",link:"strategy"},
  {time:"2–4 个月",title:"建立数据决策能力",goal:"用模型支持判断，而不是用数字包装结论。",learn:"概率、统计、回归、模拟、优化和实验。",done:"完成一份包含假设、敏感性和局限的决策模型。",link:"decisions"},
  {time:"持续",title:"用项目检验管理能力",goal:"在真实约束下形成可执行、可衡量的方案。",learn:"访谈、市场验证、流程改进、团队协作、复盘与沟通。",done:"交付一个有基线、方案、实施计划、指标和复盘的项目。",link:"projects"}
 ],
 tools:[
  ["分析与表达",[["Google Sheets","https://www.google.com/sheets/about/","建模、协作和记录假设"],["R","https://www.r-project.org/","统计分析与可复现报告"],["Tableau Public","https://public.tableau.com/","制作和公开交互式商业分析"]]],
  ["项目与流程",[["Notion","https://www.notion.so/","组织研究、任务和决策记录"],["Trello","https://trello.com/","管理看板、责任人与进度"],["diagrams.net","https://www.diagrams.net/","绘制流程、组织和系统图"]]],
  ["研究与引用",[["Google Scholar","https://scholar.google.com/","检索管理研究和引用关系"],["Zotero","https://www.zotero.org/","管理论文、案例和引用"],["SEC EDGAR","https://www.sec.gov/edgar/search/","查阅上市公司原始披露文件"]]]
 ],
 books:[
  ["OpenStax Principles of Management","https://openstax.org/details/books/principles-management","管理学 · 入门","覆盖计划、组织、领导、控制和战略的开放教材。"],
  ["OpenStax Organizational Behavior","https://openstax.org/details/books/organizational-behavior","组织行为 · 入门","从个体、团队到组织层面的免费教材。"],
  ["OpenStax Principles of Marketing","https://openstax.org/details/books/principles-marketing","市场营销 · 入门","完整覆盖市场研究、STP、产品、定价、传播和渠道。"],
  ["OpenStax Business Ethics","https://openstax.org/details/books/business-ethics","商业伦理 · 入门","通过案例理解企业责任和管理决策中的伦理边界。"]
 ],
 portals:[
  ["MIT Sloan","MIT Sloan MBA Core","https://ocw.mit.edu/collections/sloan-mba-first-semester-core/","管理经济学、数据决策、会计、组织和沟通核心课程。"],
  ["MIT OCW","MIT Management Courses","https://ocw.mit.edu/search/?d=Sloan%20School%20of%20Management","战略、营销、运营、创业和组织课程。"],
  ["OpenStax","OpenStax Business","https://openstax.org/subjects/business","合法免费的管理、会计、营销和商业伦理教材。"]
 ]
};
