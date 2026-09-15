import {r,type SubjectConfig,type Topic} from "./subjectTypes";

const t=(title:string,intro:string,resources:ReturnType<typeof r>[]):Topic=>({title,intro,resources});
const start=["开始之前",[["intro","本站目的"],["how","如何使用本站"],["plan","学习规划"]]] as const;

const topics:Record<string,Topic>={
 tools:t("学习工具","用结构绘图、权威数据库、计算和实验记录理解物质变化。",[]),
 foundations:t("数学、物理与化学基础","补齐单位、代数、函数、微积分、能量、原子和守恒的共同语言。",[
  r("OpenStax Chemistry 2e: Essential Ideas","https://openstax.org/books/chemistry-2e/pages/1-introduction","入门","开放教材","无需前置","从测量、单位、物质分类和化学计量开始。"),
  r("MIT 5.111SC Review Materials","https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-i-the-atom/lecture-1/","进阶","公开课","高中代数","用问题和讲解检查方程、摩尔、有效数字和原子基础。"),
  r("MIT Mathematics Courses","https://ocw.mit.edu/search/?d=Mathematics","高级","公开课","微积分学习意愿","为物理化学补充微积分、微分方程、线性代数和概率。")
 ]),
 general:t("普通化学","理解原子结构、化学键、热力学、平衡、酸碱、氧化还原和动力学。",[
  r("OpenStax Chemistry 2e","https://openstax.org/details/books/chemistry-2e","入门","开放教材","高中代数","免费两学期普通化学教材，例题、练习和答案完整。"),
  r("MIT 5.111SC Principles of Chemical Science","https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/","进阶","公开课","高中化学与代数","包含视频、讲义、习题及解答的自学型课程。"),
  r("MIT 5.112 Principles of Chemical Science","https://ocw.mit.edu/courses/5-112-principles-of-chemical-science-fall-2005/","高级","公开课","普通化学与微积分","以更深入的量子、热力学和结构视角学习化学原理。")
 ]),
 organic:t("有机化学","从结构、立体化学和电子流理解反应机理、光谱与合成。",[
  r("Organic Chemistry with a Biological Emphasis","https://open.umn.edu/opentextbooks/textbooks/228","入门","开放教材","普通化学","开放教材，以生物分子连接官能团、酸碱和反应机理。"),
  r("MIT 5.12 Organic Chemistry I","https://ocw.mit.edu/courses/5-12-organic-chemistry-i-spring-2005/","进阶","公开课","普通化学","系统学习结构、立体化学、取代、消除和电子推动。"),
  r("Yale CHEM 125b Freshman Organic Chemistry II","https://oyc.yale.edu/chemistry/chem-125b","高级","公开课","有机化学 I","用完整视频深入羰基化学、芳香体系、机理证据和合成策略。")
 ]),
 inorganic:t("无机与配位化学","研究周期规律、对称性、成键、配位场、反应性和主族/过渡金属化学。",[
  r("Chemistry LibreTexts: Inorganic Chemistry","https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry","入门","开放教材","普通化学","按主题补充周期性、分子对称、晶体和配位化学。"),
  r("MIT 5.111SC: Transition Metals","https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/","进阶","公开课","普通化学与基础量子概念","用电子结构、成键和氧化还原理解过渡金属。"),
  r("MIT 5.05 Principles of Inorganic Chemistry III","https://ocw.mit.edu/courses/5-05-principles-of-inorganic-chemistry-iii-spring-2005/","高级","公开课","量子化学、对称性与无机化学基础","深入电子结构、金属—配体成键和无机反应机理。")
 ]),
 physical:t("物理化学","用热力学、量子力学、统计力学和动力学解释化学系统。",[
  r("OpenStax Chemistry 2e: Thermodynamics","https://openstax.org/books/chemistry-2e/pages/16-introduction","入门","开放教材","普通化学与代数","先建立能量、熵、自由能和平衡的直觉。"),
  r("MIT 5.60 Thermodynamics & Kinetics","https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/","进阶","公开课","微积分与普通化学","系统学习热力学定律、相平衡、统计观点和反应速率。"),
  r("MIT 5.61 Physical Chemistry","https://ocw.mit.edu/courses/5-61-physical-chemistry-fall-2017/","高级","公开课","微积分、线性代数与基础量子","进入波动力学、矩阵力学、分子轨道、光谱和光化学。")
 ]),
 analytical:t("分析化学与仪器分析","学习采样、校准、误差、分离、电化学和仪器方法，建立可信测量。",[
  r("Analytical Chemistry 2.1","https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Analytical_Chemistry_2.1_(Harvey)","入门","开放教材","普通化学与基础统计","免费教材，覆盖平衡、定量分析、采样和方法验证。"),
  r("MIT 5.310 Laboratory Chemistry","https://ocw.mit.edu/courses/5-310-laboratory-chemistry-fall-2019/","进阶","公开课","普通化学；实验须有合规条件","包含实验技术、仪器、数据分析和报告规范。"),
  r("NIST Chemistry WebBook","https://webbook.nist.gov/chemistry/","高级","项目平台","分析化学、光谱与数据处理","使用权威光谱和热化学数据进行鉴定、比较与验证。")
 ]),
 spectroscopy:t("光谱学与结构鉴定","用光与物质相互作用解析分子组成、结构、动力学和反应过程。",[
  r("Chemistry LibreTexts: Spectroscopic Methods","https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Supplemental_Modules_%28Analytical_Chemistry%29/Analytical_Sciences_Digital_Library/Courseware/CHEM355%3A_A_Flipped_Analytical_Chemistry_Course_%28Fitzgerald%29/Chapter_10%3A_Spectroscopic_Methods","入门","开放教材","普通化学与波的基础","从吸收、发射和散射进入 UV-Vis、IR 与原子光谱方法。"),
  r("MIT 5.35 Introduction to Experimental Chemistry","https://ocw.mit.edu/courses/5-35-introduction-to-experimental-chemistry-fall-2012/","进阶","公开课","有机、物化与基础实验","通过光谱和实验模块理解信号、仪器与结构信息。"),
  r("MIT 5.61 Physical Chemistry","https://ocw.mit.edu/courses/5-61-physical-chemistry-fall-2017/","高级","公开课","量子力学与物理化学","从量子态、跃迁和对称性深入分子光谱与光化学。")
 ]),
 biochem:t("生物化学与化学生物学","理解蛋白质、酶、代谢和分子识别，并用化学工具研究生命过程。",[
  r("OpenStax Biology 2e: Biological Macromolecules","https://openstax.org/books/biology-2e/pages/3-introduction","入门","开放教材","普通化学","从大分子结构和非共价作用进入生命化学。"),
  r("MIT 5.07SC Biological Chemistry I","https://ocw.mit.edu/courses/5-07sc-biological-chemistry-i-fall-2013/","进阶","公开课","有机化学与普通生物","系统学习蛋白质、酶、代谢、生物能量和信息传递。"),
  r("MIT 20.201 Mechanisms of Drug Actions","https://ocw.mit.edu/courses/20-201-mechanisms-of-drug-actions-fall-2013/","高级","公开课","有机、生化、细胞与生理学","从靶点、结合、药代和毒理理解小分子与生物药作用机制。")
 ]),
 materials:t("材料化学与纳米科学","把原子结构、缺陷、相变和界面连接到材料的电、磁、光与力学性质。",[
  r("MIT 3.091 Introduction to Solid-State Chemistry","https://ocw.mit.edu/courses/3-091-introduction-to-solid-state-chemistry-fall-2018/","入门","公开课","普通化学与基础物理","从原子结构、晶体和缺陷进入金属、半导体、聚合物与电池。"),
  r("Materials Project Workshop Materials","https://docs.materialsproject.org/community/community-resources","进阶","公开讲义","固体化学、Python 与基础量子","用公开录像、讲义和 Python 示例检索并比较计算材料数据。"),
  r("MIT 3.024 Electronic, Optical and Magnetic Properties","https://ocw.mit.edu/courses/3-024-electronic-optical-and-magnetic-properties-of-materials-spring-2013/","高级","公开课","量子、固体化学与线性代数","以电子结构解释功能材料的电学、光学和磁学性质。")
 ]),
 computational:t("量子化学与分子模拟","用电子结构、分子力学和统计采样计算分子结构、能量与动力学。",[
  r("MolSSI: Getting Started in Computational Chemistry","https://education.molssi.org/getting-started-computational-chemistry/","入门","公开课","无需编程经验","面向本科新手介绍终端、远程计算、环境和计算化学工作流。"),
  r("MolSSI Quantum Mechanics Tools","https://education.molssi.org/resources.html","进阶","公开讲义","Python、物理化学与量子基础","通过几何优化、势能扫描和能量计算完成量子化学练习。"),
  r("MolSSI Molecular Mechanics Tools","https://education.molssi.org/resources.html","高级","公开讲义","统计力学、Python 与量子化学基础","使用 OpenMM 和 MDTraj 运行并分析分子动力学模拟。")
 ]),
 catalysis:t("催化与反应工程","理解活化能、反应路径、催化循环、传递过程和反应器尺度放大。",[
  r("MIT 5.111SC: Kinetics and Catalysts","https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/resources/lecture-34-kinetics-catalysts/","入门","公开课","普通化学与动力学基础","从能垒和速率解释均相、异相与酶催化。"),
  r("MIT 10.37 Chemical and Biological Reaction Engineering","https://ocw.mit.edu/courses/10-37-chemical-and-biological-reaction-engineering-spring-2007/","进阶","公开课","动力学、微分方程和传递过程","连接反应网络、催化、反应器模型和生物反应。"),
  r("Open Reaction Database","https://docs.open-reaction-database.org/en/latest/","高级","项目平台","有机化学、数据科学与反应机理","使用机器可读的开放反应数据研究条件、产率和反应预测。")
 ]),
 energy:t("电化学与能源化学","研究电极、离子传输、界面反应，并连接电池、燃料电池和能源转化。",[
  r("OpenStax Chemistry 2e: Electrochemistry","https://openstax.org/books/chemistry-2e/pages/17-introduction","入门","开放教材","普通化学与氧化还原","从电池、电势和 Nernst 方程建立电化学基础。"),
  r("MIT 3.091 Solid-State Chemistry","https://ocw.mit.edu/courses/3-091-introduction-to-solid-state-chemistry-fall-2018/","进阶","公开课","普通化学与材料基础","用材料结构、缺陷和扩散理解电池与固态能源材料。"),
  r("MIT 10.626 Electrochemical Energy Systems","https://ocw.mit.edu/courses/10-626-electrochemical-energy-systems-spring-2014/","高级","公开课","热力学、动力学、传输与微分方程","系统建模电池、燃料电池、超级电容器和电动过程。")
 ]),
 sustainable:t("绿色化学与环境化学","用毒性、生命周期、原子经济性和系统思维设计更安全可持续的化学过程。",[
  r("ACS Green Chemistry Teaching Modules","https://www.acs.org/green-chemistry-sustainability/education/teaching-modules.html","入门","公开讲义","普通化学","免费本科模块，把化学计量、动力学和有机反应连接到可持续问题。"),
  r("ACS Green Chemistry Case Studies","https://www.acs.org/green-chemistry-sustainability/education/case-studies.html","进阶","项目平台","普通、有机与分析化学","用真实案例练习生命周期、风险、伦理和工艺权衡。"),
  r("EPA CompTox Chemicals Dashboard","https://comptox.epa.gov/dashboard/","高级","项目平台","分析化学、毒理与数据分析","用官方开放数据比较化学品暴露、危害和结构信息。")
 ]),
 "chem-ai":t("化学信息学、AI 与实验自动化","把分子和反应转化为数据，用机器学习辅助性质预测、合成规划和实验决策。",[
  r("MolSSI Introduction to Cheminformatics","https://education.molssi.org/resources.html","入门","公开讲义","Python 与有机化学基础","学习分子表示、子结构检索、性质计算和机器学习起点。"),
  r("DeepChem Tutorials","https://deepchem.io/tutorials/","进阶","公开讲义","Python、机器学习与化学基础","通过开放教程建立分子数据集、图表示和性质预测模型。"),
  r("Open Reaction Database","https://docs.open-reaction-database.org/en/latest/","高级","项目平台","有机化学、数据工程与机器学习","用开放反应数据研究反应预测、合成规划和实验设计。")
 ]),
 research:t("实验、安全与开放科学","学习风险评估、实验设计、质量控制、数据管理、复现与科学写作。",[
  r("ACS Guidelines for Chemical Laboratory Safety","https://institute.acs.org/acs-center/lab-safety/education-training/college-univ-guidelines/laboratory-safety-for-chemistry-students-etextbook.html","入门","公开讲义","无需前置","建立风险识别、个人防护、废物处置和应急意识。"),
  r("MIT 5.310 Laboratory Chemistry","https://ocw.mit.edu/courses/5-310-laboratory-chemistry-fall-2019/","进阶","公开课","核心化学；实验须有合规条件","从操作、仪器和数据处理进入规范的研究记录与报告。"),
  r("NIST Chemistry WebBook","https://webbook.nist.gov/chemistry/","高级","项目平台","分析、物化与数据处理","用标准参考数据验证计算或实验结果并追踪来源。")
 ]),
 projects:t("项目与进阶方向","通过安全模拟、开放数据或合规实验完成可复查的化学研究作品。",[
  r("PhET Chemistry Simulations","https://phet.colorado.edu/en/simulations/filter?subjects=chemistry&type=html","入门","项目平台","普通化学基础","改变变量并记录对平衡、酸碱或气体行为的影响。"),
  r("NIST Chemistry WebBook Project","https://webbook.nist.gov/chemistry/","进阶","项目平台","普通化学、统计与绘图","比较同系物的光谱或热化学性质并解释趋势。"),
  r("Materials Project","https://next-gen.materialsproject.org/","高级","项目平台","固体化学、量子与 Python","使用开放计算数据研究材料结构—性质关系。")
 ]),
 books:t("书单与资源","集中查看开放教材、大学公开课程和权威化学数据。",[])
};

export const chemistry:SubjectConfig={
 slug:"chemistry",name:"化学",en:"CHEMISTRY",
 intro:"化学研究物质的组成、结构、性质与转化。这条路径覆盖本科化学专业的普通、有机、无机、物理和分析化学核心，再进入材料、能源、化学生物学、计算化学与 AI 等现代方向。",
 caution:"化学不能只背反应：先检查守恒，再分析结构、能量、动力学和证据。实验可能涉及毒性、腐蚀、易燃、高压或高温风险；不要在家复现实验，所有湿实验必须在合规实验室、完成风险评估并由专业人员指导。个人项目优先使用模拟和开放数据。",
 groups:[start,["起点",[["tools","学习工具"],["foundations","数学、物理与化学基础"],["general","普通化学"]]],["大学核心",[["organic","有机化学"],["inorganic","无机与配位化学"],["physical","物理化学"],["analytical","分析化学与仪器分析"],["spectroscopy","光谱学与结构鉴定"]]],["分子、材料与生命",[["biochem","生物化学与化学生物学"],["materials","材料化学与纳米科学"],["computational","量子化学与分子模拟"]]],["能源与现代化学",[["catalysis","催化与反应工程"],["energy","电化学与能源化学"],["sustainable","绿色化学与环境化学"],["chem-ai","化学信息学、AI 与实验自动化"]]],["研究与实践",[["research","实验、安全与开放科学"],["projects","项目与进阶方向"],["books","书单与资源"]]]],
 topics,
 phases:[
  {time:"2–3 个月",title:"补齐定量与原子基础",goal:"建立单位、摩尔、守恒和微观模型。",learn:"代数、微积分直觉、测量、化学计量、原子、周期表和化学键。",done:"能独立完成定量计算并解释模型假设。",link:"foundations"},
  {time:"4–6 个月",title:"完成普通化学",goal:"用结构、能量、平衡和速率解释反应。",learn:"气体、溶液、热化学、平衡、酸碱、氧化还原和动力学。",done:"完成一套大学普通化学习题并分析常见实验数据。",link:"general"},
  {time:"8–12 个月",title:"完成结构与反应核心",goal:"建立本科专业所需的分子结构和反应语言。",learn:"有机反应机理与合成、无机成键与配位、材料结构。",done:"能画电子流、提出机理并用结构解释性质与反应性。",link:"organic"},
  {time:"6–9 个月",title:"完成物化与分析核心",goal:"把定量理论连接到可验证的测量。",learn:"热力学、量子、统计、动力学、分离、光谱、误差和校准。",done:"完成计算或数据报告，包含不确定度、校准和来源。",link:"physical"},
  {time:"按方向 4–6 个月",title:"选择一个应用方向",goal:"将核心化学用于真实分子或材料问题。",learn:"化学生物学、材料化学、催化或能源化学四选一。",done:"完成一篇机制综述或一个公开数据研究。",link:"materials",mode:"choice"},
  {time:"按方向 4–6 个月",title:"进入现代方法",goal:"掌握现代化学的计算、数据和可持续视角。",learn:"量子化学、分子模拟、化学信息学、机器学习、自动化或绿色化学。",done:"复现一个计算流程或建立带基线与误差分析的预测模型。",link:"computational",mode:"choice"},
  {time:"从第二阶段持续",title:"通过研究项目形成判断",goal:"把知识转化为安全、可复现、可交流的成果。",learn:"文献、风险评估、方法、质量控制、数据、可视化和科学写作。",done:"发布包含问题、方法、数据、结果、限制和安全说明的项目报告。",link:"projects",mode:"ongoing"}
 ],
 tools:[
  ["结构与权威数据",[["PubChem","https://pubchem.ncbi.nlm.nih.gov/","查询化合物结构、性质和安全信息"],["NIST Chemistry WebBook","https://webbook.nist.gov/chemistry/","检索标准光谱和热化学数据"],["IUPAC Gold Book","https://goldbook.iupac.org/","核对化学术语与定义"],["Ketcher","https://lifescience.opensource.epam.com/ketcher/index.html","在浏览器中绘制结构和反应"]]],
  ["分子与材料计算",[["Avogadro","https://avogadro.cc/","开源分子建模与可视化"],["MolView","https://molview.org/","在线查看分子三维结构"],["Psi4","https://psicode.org/","开源量子化学计算"],["Materials Project","https://next-gen.materialsproject.org/","检索和分析计算材料数据"]]],
  ["数据与自动化",[["Python","https://www.python.org/","分析实验和计算数据"],["Jupyter","https://jupyter.org/","整合代码、图表和说明"],["RDKit","https://www.rdkit.org/","进行化学信息学与分子机器学习"],["GitHub","https://github.com/","保存代码、数据处理与版本历史"]]],
  ["文献、安全与记录",[["Google Scholar","https://scholar.google.com/","检索化学研究"],["Zotero","https://www.zotero.org/","管理论文和引用"],["ACS Laboratory Safety","https://institute.acs.org/acs-center/lab-safety/education-training/college-univ-guidelines/laboratory-safety-for-chemistry-students-etextbook.html","查阅实验室安全教育资料"],["PubChem Safety","https://pubchem.ncbi.nlm.nih.gov/","检查化学品危害和处理信息"]]]
 ],
 books:[
  ["OpenStax Chemistry 2e","https://openstax.org/details/books/chemistry-2e","普通化学 · 入门","完整免费两学期教材，适合作为第一套主教材。"],
  ["Organic Chemistry with a Biological Emphasis","https://open.umn.edu/opentextbooks/textbooks/228","有机化学 · 入门","开放教材，以机理和生物应用组织内容。"],
  ["Organic Chemistry — John McMurry","https://openstax.org/details/books/organic-chemistry","有机化学 · 进阶","OpenStax 免费完整教材，含大量练习与结构推理。"],
  ["Analytical Chemistry 2.1","https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Analytical_Chemistry_2.1_(Harvey)","分析化学 · 进阶","从平衡、采样和校准进入现代分析方法。"],
  ["Chemistry LibreTexts: Inorganic Chemistry","https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry","无机化学 · 进阶","按成键、对称性、固体和配位化学查阅。"],
  ["MIT 5.60 Thermodynamics & Kinetics","https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/","物理化学 · 进阶","讲义、习题和考试组成的完整公开课程。"],
  ["MolSSI Education Resources","https://education.molssi.org/resources.html","计算化学 · 进阶","免费教程覆盖量子化学、分子动力学、编程与化学 AI。"]
 ],
 portals:[
  ["MIT","MIT OCW Chemistry","https://ocw.mit.edu/courses/chemistry/","覆盖普通、有机、无机、物化、生化和实验课程。"],
  ["Yale","Open Yale Organic Chemistry","https://oyc.yale.edu/chemistry","以完整视频和历史实验建立有机结构与机理理解。"],
  ["OpenStax","OpenStax Chemistry","https://openstax.org/subjects/science","合法免费阅读普通化学和有机化学教材。"],
  ["NIST","NIST Chemistry WebBook","https://webbook.nist.gov/chemistry/","权威开放的光谱与热化学数据。"],
  ["ACS","ACS Green Chemistry Education","https://www.acs.org/green-chemistry-sustainability/education.html","免费本科教学模块、案例与可持续化学工具。"],
  ["MolSSI","MolSSI Education","https://education.molssi.org/","面向计算分子科学的编程、模拟和软件实践。"]
 ]
};
