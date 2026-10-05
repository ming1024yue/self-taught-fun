import {r,type SubjectConfig,type Topic} from "./subjectTypes";

const t=(title:string,intro:string,resources:ReturnType<typeof r>[]):Topic=>({title,intro,resources});
const start=["开始之前",[["plan","学习规划"]]] as const;

const topics:Record<string,Topic>={
 tools:t("学习工具","检索论文、序列、结构与组学数据，并用可复现的方法记录分析。",[]),
 foundations:t("化学、数学与生命基础","先掌握能量、化学键、大分子、概率和数据图表，再进入细胞与遗传。",[
  r("OpenStax Concepts of Biology","https://openstax.org/details/books/concepts-biology","入门","开放教材","无需前置","用较少数学建立生命科学全景，适合零基础学习者。"),
  r("MIT 7.016 Introductory Biology","https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/","进阶","公开课","高中化学与代数","MIT 本科导论，系统连接生物化学、遗传、分子与细胞生物学。"),
  r("MIT 7.01SC Fundamentals of Biology","https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/","高级","公开课","普通生物与高中化学","专为自学组织的视频、讲义、习题与测验，强调实验证据。")
 ]),
 cell:t("细胞生物学","理解膜、细胞器、能量转换、信号、细胞骨架与细胞周期。",[
  r("OpenStax Biology 2e: The Cell","https://openstax.org/books/biology-2e/pages/4-introduction","入门","开放教材","基础化学","用图文和练习建立细胞结构、膜运输与代谢直觉。"),
  r("MIT 7.06x Cell Biology","https://ocw.mit.edu/courses/res-7-007-7-06x-cell-biology/","进阶","公开课","普通生物与化学","从遗传、生化和成像实验理解细胞过程及其证据。"),
  r("Molecular Biology of the Cell","https://www.ncbi.nlm.nih.gov/books/NBK21054/","高级","开放教材","细胞与分子生物学","NCBI 免费收录的经典教材版本，适合作为机制参考书。")
 ]),
 genetics:t("遗传学","从孟德尔规律进入基因组、重组、复杂性状与群体遗传。",[
  r("OpenStax Biology 2e: Genetics","https://openstax.org/books/biology-2e/pages/12-introduction","入门","开放教材","细胞分裂","从遗传规律、染色体到现代遗传技术建立主线。"),
  r("MIT 7.03x Genetics","https://ocw.mit.edu/courses/res-7-006-7-03x-genetics/","进阶","公开课","普通生物与概率基础","通过遗传分析把基因、表型和分子机制连接起来。"),
  r("MIT 7.15 Experimental Molecular Genetics","https://ocw.mit.edu/courses/7-15-experimental-molecular-genetics-spring-2015/","高级","公开课","遗传、分子与实验设计","以研究项目训练假设、遗传筛选、证据链和科学表达。")
 ]),
 molecular:t("生物化学与分子生物学","理解蛋白质、酶、代谢、DNA、RNA 和基因表达。",[
  r("OpenStax Biology 2e: Molecular Biology","https://openstax.org/books/biology-2e/pages/14-introduction","入门","开放教材","细胞与基础化学","清晰介绍 DNA 复制、转录、翻译和基因调控。"),
  r("MIT 7.05 General Biochemistry","https://ocw.mit.edu/courses/7-05-general-biochemistry-spring-2020/","进阶","公开课","有机化学与普通生物","系统学习蛋白质、酶、代谢与生物能量。"),
  r("MIT 7.28x Molecular Biology","https://ocw.mit.edu/courses/res-7-008-7-28x-molecular-biology/","高级","公开课","遗传、生化与细胞生物学","以实验推理深入复制、修复、转录和表达调控。")
 ]),
 physiology:t("生理学","理解组织与器官系统如何通过反馈维持稳态。",[
  r("OpenStax Anatomy and Physiology 2e","https://openstax.org/details/books/anatomy-and-physiology-2e","入门","开放教材","细胞生物学","完整开放教材，覆盖人体结构与主要生理系统。"),
  r("OpenStax A&P: Regulation, Integration, and Control","https://openstax.org/books/anatomy-and-physiology-2e/pages/12-introduction","进阶","开放教材","细胞信号与基础物理","以神经、内分泌和反馈回路理解系统调节。"),
  r("NCBI Bookshelf: Medical Physiology","https://www.ncbi.nlm.nih.gov/books/?term=medical+physiology","高级","开放教材","生理、生化与基础物理","从开放专著继续学习心血管、呼吸、肾脏和内分泌机制。")
 ]),
 evolution:t("演化生物学","用变异、选择、漂变、系统发育与深时解释生命多样性。",[
  r("OpenStax Biology 2e: Evolution","https://openstax.org/books/biology-2e/pages/18-introduction","入门","开放教材","遗传学基础","建立演化证据、机制、物种形成和系统发育框架。"),
  r("Yale EEB 122: Evolution, Ecology and Behavior","https://oyc.yale.edu/ecology-and-evolutionary-biology/eeb-122","进阶","公开课","普通生物与遗传","Yale 完整视频课，把微演化、宏演化、生态和行为连成整体。"),
  r("OpenStax Population Genetics","https://openstax.org/books/biology-2e/pages/19-2-population-genetics","高级","开放教材","概率、微积分与遗传学","用等位基因频率、选择、漂变和迁移研究演化动力。")
 ]),
 ecology:t("生态学与保护生物学","研究个体、种群、群落和生态系统，以及全球变化下的保护决策。",[
  r("OpenStax Biology 2e: Ecology","https://openstax.org/books/biology-2e/pages/44-introduction","入门","开放教材","普通生物","从生物圈、种群、群落进入能量流和生物地球化学循环。"),
  r("Yale EEB 122: Ecology Lectures","https://oyc.yale.edu/ecology-and-evolutionary-biology/eeb-122","进阶","公开课","演化与基础统计","通过环境适应、种群增长、竞争和岛屿生物地理学习生态机制。"),
  r("GBIF Data Use","https://www.gbif.org/resource/search?contentType=dataUse","高级","项目平台","生态、统计、GIS 或 Python","利用全球开放物种记录研究分布、入侵、气候变化与保护问题。")
 ]),
 microbiology:t("微生物学与病毒学","理解细菌、古菌、真菌和病毒的结构、代谢、遗传与生态作用。",[
  r("OpenStax Microbiology","https://openstax.org/details/books/microbiology","入门","开放教材","细胞与基础化学","覆盖微生物结构、代谢、遗传、病毒、免疫和疾病。"),
  r("MIT 7.016 Introductory Biology","https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/","进阶","公开课","分子、细胞与遗传","以微生物和病毒案例连接核心机制与现代生物技术。"),
  r("NCBI Virus","https://www.ncbi.nlm.nih.gov/labs/virus/vssi/","高级","项目平台","微生物、遗传与序列分析","检索病毒序列与元数据，研究变异、宿主和演化关系。")
 ]),
 immunology:t("免疫学","理解先天与适应性免疫、抗原识别、免疫记忆、耐受和免疫疾病。",[
  r("OpenStax Microbiology: Immune System","https://openstax.org/books/microbiology/pages/17-introduction","入门","开放教材","细胞生物学","从屏障和炎症进入 B/T 细胞、抗体与免疫记忆。"),
  r("Immunobiology — NCBI Bookshelf","https://www.ncbi.nlm.nih.gov/books/NBK10757/","进阶","开放教材","细胞、遗传与生化","免费经典教材版本，系统解释免疫系统的细胞与分子机制。"),
  r("MIT HST.176 Cellular and Molecular Immunology","https://ocw.mit.edu/courses/hst-176-cellular-and-molecular-immunology-fall-2005/","高级","公开课","细胞、分子与生理学","通过讲义和临床案例深入抗原呈递、淋巴细胞发育及免疫病理。")
 ]),
 developmental:t("发育生物学与干细胞","研究单个细胞如何通过模式形成、分化和形态发生构建多细胞生物。",[
  r("OpenStax Biology 2e: Animal Reproduction and Development","https://openstax.org/books/biology-2e/pages/43-introduction","入门","开放教材","细胞与遗传","从受精、胚层到器官形成建立发育过程全景。"),
  r("MIT 7.22 Developmental Biology","https://ocw.mit.edu/courses/7-22-developmental-biology-fall-2005/","进阶","公开课","遗传、分子与细胞生物学","以模式生物、经典实验和论文讨论理解命运决定与形态发生。"),
  r("Stem Cell Basics — NIH","https://stemcells.nih.gov/info/basics/stc-basics/","高级","公开讲义","发育、细胞与分子生物学","用 NIH 权威资料理解干细胞类型、研究进展、伦理与临床边界。")
 ]),
 neuroscience:t("神经生物学","从膜电位和突触进入感觉、运动、学习、记忆与脑疾病。",[
  r("Neuroscience — NCBI Bookshelf","https://www.ncbi.nlm.nih.gov/books/NBK10799/","入门","开放教材","细胞生物学与基础物理","免费经典教材，以清晰图示连接神经元、回路和系统功能。"),
  r("MIT 9.01 Introduction to Neuroscience","https://ocw.mit.edu/courses/9-01-introduction-to-neuroscience-fall-2007/","进阶","公开课","细胞与生理学","MIT 本科课，覆盖神经细胞、感觉、运动、学习记忆和脑疾病。"),
  r("Allen Brain Atlas","https://portal.brain-map.org/","高级","项目平台","神经科学、统计与数据分析","用公开基因表达、细胞类型和连接数据提出可检验的脑科学问题。")
 ]),
 bioinformatics:t("生物信息学与计算生物学","用算法、统计和编程分析序列、结构、网络与演化数据。",[
  r("Rosalind","https://rosalind.info/","入门","项目平台","基础 Python","通过渐进题目学习序列处理、遗传模型和生物算法。"),
  r("MIT 7.91J Computational and Systems Biology","https://ocw.mit.edu/courses/7-91j-foundations-of-computational-and-systems-biology-spring-2014/","进阶","公开课","编程、概率、线性代数与分子生物学","系统学习序列、结构、基因组、网络和系统建模。"),
  r("MIT 6.047 Computational Biology","https://ocw.mit.edu/courses/6-047-computational-biology-fall-2015/","高级","公开课","算法、概率与分子生物学","深入基因组学、调控网络、系统发育和计算遗传学。")
 ]),
 genomics:t("基因组学、单细胞与空间组学","理解测序实验设计、变异、转录组、单细胞图谱和多组学整合。",[
  r("EMBL-EBI Functional Genomics II","https://www.ebi.ac.uk/training/online/courses/functional-genomics-ii-common-technologies-and-data-analysis-methods/","入门","公开课","遗传学与基础统计","免费自定进度课程，介绍测序、RNA-seq、实验设计和差异表达。"),
  r("EMBL-EBI Single-cell RNA-seq Materials","https://www.ebi.ac.uk/training/materials/single-cell-rna-seq-network-analysis-using-galaxy-and-cytoscape-materials/","进阶","公开讲义","R 或 Python、统计与转录组基础","从实验设计进入质控、聚类、注释、网络和空间信息。"),
  r("CZ CELLxGENE Discover","https://cellxgene.cziscience.com/","高级","项目平台","单细胞分析与 Python 或 R","交互探索并下载标准化单细胞数据，完成跨组织或细胞类型比较。")
 ]),
 "systems-synthetic":t("系统生物学与合成生物学","用网络、动力系统和工程设计理解并重构细胞功能。",[
  r("MIT 8.591J Systems Biology","https://ocw.mit.edu/courses/8-591j-systems-biology-fall-2014/","入门","公开课","微积分、概率与分子生物学","从基因网络、细胞互作和演化动力学建立定量直觉。"),
  r("MIT 7.91J Computational and Systems Biology","https://ocw.mit.edu/courses/7-91j-foundations-of-computational-and-systems-biology-spring-2014/","进阶","公开课","编程、线性代数、概率与分子生物学","把组学数据、网络推断和机制模型连接起来。"),
  r("BioModels","https://www.ebi.ac.uk/biomodels/","高级","项目平台","微分方程、系统生物学与编程","复现公开的生物过程模型，做参数敏感性和模型比较。")
 ]),
 structural:t("结构生物学与蛋白质设计","从序列、折叠和分子相互作用理解蛋白质功能及设计边界。",[
  r("EMBL-EBI Foundations of Protein Structure","https://www.ebi.ac.uk/training/online/courses/foundations-protein-structure","入门","公开课","生物化学基础","免费短课，从氨基酸进入折叠、结构层级、动力学和相互作用。"),
  r("EMBL-EBI Structural Bioinformatics Materials","https://www.ebi.ac.uk/training/materials/structural-bioinformatics-materials/course-content/","进阶","公开讲义","蛋白质结构、Linux 与基础生物信息学","含视频、讲义、练习与数据，训练结构检索、质量判断和功能推断。"),
  r("AlphaFold Protein Structure Database","https://alphafold.ebi.ac.uk/","高级","项目平台","结构生物学与生物信息学","比较实验结构与 AI 预测，并正确解释置信度和未解析区域。")
 ]),
 biotechnology:t("生物技术与基因编辑","理解重组 DNA、CRISPR、治疗与产业化中的设计、验证、安全和伦理。",[
  r("OpenStax Biology 2e: Biotechnology","https://openstax.org/books/biology-2e/pages/17-introduction","入门","开放教材","遗传与分子生物学","介绍克隆、测序、转基因、基因组学和生物技术应用。"),
  r("MIT 7.016 Introductory Biology","https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/","进阶","公开课","遗传、分子与细胞生物学","用现代分子遗传和治疗案例理解技术原理及证据。"),
  r("Genome Editing — NHGRI","https://www.genome.gov/about-genomics/policy-issues/what-is-Genome-Editing","高级","公开讲义","遗传学、分子生物学与研究伦理","从权威资料理解基因编辑的科学能力、医学应用和治理问题。")
 ]),
 research:t("实验设计与开放科学","学习对照、重复、随机化、测量、统计功效、数据管理与研究伦理。",[
  r("HHMI BioInteractive","https://www.biointeractive.org/","入门","项目平台","普通生物","通过真实数据和实验案例练习提出问题、解释图表和评价证据。"),
  r("MIT 7.003 Applied Molecular Biology Lab","https://ocw.mit.edu/courses/7-003-applied-molecular-biology-lab-spring-2022/","进阶","公开课","分子、细胞与遗传学","学习实验为何有效、如何设计对照以及怎样记录和交流结果。"),
  r("NCBI Datasets","https://www.ncbi.nlm.nih.gov/datasets/","高级","项目平台","统计、编程与领域知识","用公开基因组数据完成无需湿实验的可复现研究。")
 ]),
 projects:t("项目与进阶方向","用观察、公开数据或计算模型完成一个有问题、方法、结果与限制的研究作品。",[
  r("iNaturalist","https://www.inaturalist.org/","入门","项目平台","无需前置","记录物种观察并用时间、地点和分类信息提出生态问题。"),
  r("NCBI Datasets","https://www.ncbi.nlm.nih.gov/datasets/","进阶","项目平台","遗传、统计与编程","下载基因组或基因数据，建立可复现分析流程。"),
  r("RCSB Protein Data Bank","https://www.rcsb.org/","高级","项目平台","生化、结构生物学与编程","使用真实结构数据研究蛋白功能、突变或分子相互作用。")
 ]),
 books:t("书单与资源","集中查看开放教材、大学公开课程和权威科研平台。",[])
};

export const biology:SubjectConfig={
 slug:"biology",name:"生物",en:"BIOLOGY",
 intro:"生物学从分子、细胞和遗传机制出发，解释个体、种群与生态系统如何运作和演化；在完整本科核心之后，再进入组学、合成生物学、蛋白质结构等现代方向。",
 caution:"生物事实很多，但主线是机制和证据。持续追问现象如何测量、结论由什么实验支持、是否存在替代解释。涉及微生物培养、基因编辑、人体样本或化学试剂的实验必须在合规实验室和专业指导下进行；个人实践优先选择模拟、观察和公开数据。",
 groups:[start,["起点",[["tools","学习工具"],["foundations","化学、数学与生命基础"]]],["大学核心",[["cell","细胞生物学"],["genetics","遗传学"],["molecular","生物化学与分子生物学"],["physiology","生理学"],["evolution","演化生物学"],["ecology","生态学与保护生物学"]]],["生命系统",[["microbiology","微生物学与病毒学"],["immunology","免疫学"],["developmental","发育生物学与干细胞"],["neuroscience","神经生物学"]]],["定量与前沿",[["bioinformatics","生物信息学与计算生物学"],["genomics","基因组学、单细胞与空间组学"],["systems-synthetic","系统与合成生物学"],["structural","结构生物学与蛋白质设计"],["biotechnology","生物技术与基因编辑"]]],["研究与实践",[["research","实验设计与开放科学"],["projects","项目与进阶方向"],["books","书单与资源"]]]],
 topics,
 phases:[
  {time:"2–3 个月",title:"建立生命科学语言",goal:"补齐化学、数据和普通生物基础。",learn:"化学键、能量、大分子、细胞概念、概率、图表和科学方法。",done:"能用机制图解释细胞基本过程，并正确阅读实验图表。",link:"foundations"},
  {time:"6–9 个月",title:"完成分子与细胞核心",goal:"理解生命信息如何保存、表达、调控和传递。",learn:"细胞、生物化学、分子生物学、遗传学，以及对应的经典实验。",done:"能从遗传或分子数据提出机制解释，并设计基本对照。",link:"molecular"},
  {time:"5–7 个月",title:"连接个体、演化与生态",goal:"跨越分子、个体、种群和生态系统解释生命。",learn:"生理、演化、生态、微生物和生物多样性。",done:"能区分近因与演化解释，并完成一次真实数据分析。",link:"evolution"},
  {time:"按方向 4–6 个月",title:"选择一个生命系统深化",goal:"形成接近本科高年级课程的领域理解。",learn:"免疫、发育、神经或微生物四选一，并阅读综述和原始论文。",done:"完成一篇机制综述或一个领域数据项目。",link:"immunology",mode:"choice"},
  {time:"同步进行 4–6 个月",title:"贯穿定量与计算训练",goal:"让统计、编程和数据成为日常研究工具。",learn:"实验设计、统计推断、序列分析、组学流程和可复现计算。",done:"发布带数据字典、代码、环境和误差说明的分析。",link:"bioinformatics",mode:"parallel"},
  {time:"按方向 4–6 个月",title:"进入现代前沿",goal:"在本科核心上理解仍在快速发展的研究方向。",learn:"单细胞与空间组学、系统与合成生物学、结构预测、蛋白质设计或基因编辑。",done:"复现一篇论文中的图、模型或公开数据结论，并说明技术边界。",link:"genomics",mode:"choice"},
  {time:"从第二阶段持续",title:"通过研究项目形成能力",goal:"把知识转化为可检查、可复现、可交流的成果。",learn:"问题定义、文献、方法、伦理、分析、可视化和科学写作。",done:"完成一份包含问题、方法、结果、限制、数据和引用的研究报告。",link:"projects",mode:"ongoing"}
 ],
 tools:[
  ["文献与知识",[["PubMed","https://pubmed.ncbi.nlm.nih.gov/","检索生命与医学文献"],["Zotero","https://www.zotero.org/","管理论文、教材和引用"],["NCBI Bookshelf","https://www.ncbi.nlm.nih.gov/books/","查找免费生物医学教材"],["bioRxiv","https://www.biorxiv.org/","跟踪预印本并区分未经同行评审的结论"]]],
  ["序列与组学",[["NCBI","https://www.ncbi.nlm.nih.gov/","访问基因、基因组和文献数据库"],["BLAST","https://blast.ncbi.nlm.nih.gov/Blast.cgi","比较 DNA 或蛋白质序列"],["Ensembl","https://www.ensembl.org/","浏览基因组、变异和比较基因组信息"],["Galaxy","https://usegalaxy.org/","在浏览器中运行可复现的组学流程"],["CELLxGENE","https://cellxgene.cziscience.com/","探索和下载单细胞数据"]]],
  ["蛋白质与结构",[["UniProt","https://www.uniprot.org/","检索蛋白序列、功能与证据"],["RCSB PDB","https://www.rcsb.org/","查看实验测定的三维结构"],["AlphaFold DB","https://alphafold.ebi.ac.uk/","查看 AI 预测结构与置信度"]]],
  ["分析与观察",[["Python","https://www.python.org/","处理序列、图像和实验数据"],["R","https://www.r-project.org/","统计、组学分析和可视化"],["Jupyter","https://jupyter.org/","整合代码、结果与说明"],["iNaturalist","https://www.inaturalist.org/","记录物种观察和参与公民科学"],["ImageJ / Fiji","https://fiji.sc/","分析显微图像和生物影像"]]]
 ],
 books:[
  ["OpenStax Biology 2e","https://openstax.org/details/books/biology-2e","普通生物 · 入门","覆盖两学期本科普通生物，适合作为第一套主教材。"],
  ["OpenStax Microbiology","https://openstax.org/details/books/microbiology","微生物与免疫 · 入门","免费完整教材，包含练习与临床案例。"],
  ["Molecular Biology of the Cell","https://www.ncbi.nlm.nih.gov/books/NBK21054/","细胞与分子 · 进阶","NCBI 免费提供的经典教材版本。"],
  ["Immunobiology","https://www.ncbi.nlm.nih.gov/books/NBK10757/","免疫学 · 进阶","从细胞与分子层面系统理解免疫系统。"],
  ["Neuroscience","https://www.ncbi.nlm.nih.gov/books/NBK10799/","神经科学 · 进阶","连接神经元、回路和系统功能的开放教材。"],
  ["MIT Computational Biology: Genomes, Networks, Evolution","https://ocw.mit.edu/courses/6-047-computational-biology-fall-2015/mit6_047f15_compiled.pdf","计算生物 · 高级","MIT 汇编讲义，覆盖基因组、网络和演化算法。"]
 ],
 portals:[
  ["MIT","MIT OCW Biology","https://ocw.mit.edu/search/?d=Biology","从普通生物到细胞、遗传、分子、发育与计算生物学。"],
  ["Yale","Open Yale: Evolution, Ecology and Behavior","https://oyc.yale.edu/ecology-and-evolutionary-biology/eeb-122","完整视频连接演化、生态和行为。"],
  ["OpenStax","OpenStax Biology","https://openstax.org/subjects/science","合法免费阅读普通生物、微生物和解剖生理教材。"],
  ["NCBI","NCBI Bookshelf","https://www.ncbi.nlm.nih.gov/books/","生物医学教材与专题资料库。"],
  ["EMBL-EBI","EMBL-EBI Training","https://www.ebi.ac.uk/training/online/","免费学习基因组、转录组、结构和生物信息数据库。"],
  ["HHMI","HHMI BioInteractive","https://www.biointeractive.org/","以真实数据、实验和案例训练科学推理。"]
 ]
};
