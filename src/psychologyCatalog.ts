import {r,type SubjectConfig,type Topic} from "./subjectTypes";

const t=(title:string,intro:string,resources:ReturnType<typeof r>[]):Topic=>({title,intro,resources});
const start=["开始之前",[["intro","本站目的"],["how","如何使用本站"],["plan","学习规划"]]] as const;
const mitIntro="https://ocw.mit.edu/courses/9-00sc-introduction-to-psychology-fall-2011/";

const topics:Record<string,Topic>={
 tools:t("学习工具","用文献、实验、统计、开放科学和神经数据工具，把直觉转化为透明、可复查的研究。",[]),
 methods:t("研究方法与统计","学习从研究问题到测量、设计、分析和报告的完整流程，区分描述、相关、因果与不确定性。",[
  r("Research Methods in Psychology","https://opentextbc.ca/researchmethods/","入门","开放教材","无需前置","从科学问题、伦理和测量开始，系统学习实验、观察、问卷、准实验与研究报告。"),
  r("MIT 9.07 Statistics for Brain and Cognitive Science","https://ocw.mit.edu/courses/9-07-statistics-for-brain-and-cognitive-science-fall-2016/","进阶","公开课","高中代数与心理学导论","通过讲义和习题学习概率、估计、假设检验、回归和心理学数据分析。"),
  r("Improving Your Statistical Inferences","https://lakens.github.io/statistical_inferences/","高级","开放教材","基础统计与 R 更佳","深入效应量、功效、误差控制、等效检验、贝叶斯思维和透明分析。"),
  r("APA Open Science Resources","https://www.apa.org/research-practice/open-science","高级","公开讲义","研究设计与统计","了解预注册、开放材料、数据共享和报告标准怎样提高心理学研究的可信度。")
 ]),
 measurement:t("心理测量与评估","理解构念如何被操作化，学习信度、效度、常模、量表设计和公平使用，避免把网络测试当作诊断。",[
  r("Research Methods: Psychological Measurement","https://opentextbc.ca/researchmethods/part/psychological-measurement/","入门","开放教材","心理学导论与基础统计","从构念、操作定义和测量尺度进入信度与效度。"),
  r("APA Reliability and Validity Guide","https://www.apa.org/ed/precollege/topss/assessment-guide.pdf","进阶","公开讲义","研究方法与描述统计","用 APA 教学材料辨别内部一致性、重测信度、内容效度和效标效度。"),
  r("APA Testing and Assessment","https://www.apa.org/science/programs/testing","高级","公开讲义","测量理论、统计与研究伦理","从专业标准理解测验开发、解释、文化公平、保密和适用边界。")
 ]),
 introduction:t("心理学导论","建立心理学的科学地图，认识脑、感知、学习、认知、发展、社会、人格、健康和临床等主要分支。",[
  r("OpenStax Psychology 2e","https://openstax.org/details/books/psychology-2e","入门","开放教材","无需前置","可免费在线阅读或下载，覆盖完整大学导论课程并附复习题。"),
  r("清华大学：心理学概论","https://v1-www.xuetangx.com/courses/course-v1%3ATsinghuaX%2B30700313X%2Bsp/about","入门","公开课","无需前置","自主模式中文课程，从科学方法进入认知、发展、社会、人格与学习。"),
  r("MIT 9.00SC Introduction to Psychology",mitIntro,"进阶","公开课","基础生物与统计更佳","为独立学习设计，包含完整视频、开放教材、讨论、练习和考试。"),
  r("Yale PSYC 110 Introduction to Psychology","https://oyc.yale.edu/introduction-psychology/psyc-110","进阶","公开课","无需前置","以清晰讲授串联知觉、发展、社会行为、人格和异常心理。")
 ]),
 biological:t("生物心理学与神经科学","从神经元、脑区、网络、激素与遗传机制理解行为，同时学习神经证据能够和不能说明什么。",[
  r("OpenStax Psychology 2e: Biopsychology","https://openstax.org/books/psychology-2e/pages/3-introduction","入门","开放教材","普通生物基础","建立神经元、神经系统、脑区、内分泌和遗传的基础语言。"),
  r("MIT 9.01 Neuroscience and Behavior","https://ocw.mit.edu/courses/9-01-neuroscience-and-behavior-fall-2003/","进阶","公开课","生物学与心理学导论","连接神经解剖、生理、感觉、运动、奖赏、情绪、学习和记忆。"),
  r("MIT 9.13 The Human Brain","https://ocw.mit.edu/courses/9-13-the-human-brain-spring-2019/","高级","公开课","神经科学、认知心理学与研究方法","通过视频、讲义和作业分析人脸、空间、语言、音乐与社会认知的脑网络。")
 ]),
 perception:t("感觉、知觉与意识","研究大脑如何从光、声音和身体信号构造经验，以及注意、意识和测量方法的关系。",[
  r("OpenStax Psychology 2e: Sensation and Perception","https://openstax.org/books/psychology-2e/pages/5-introduction","入门","开放教材","心理学导论","认识心理物理学、视觉、听觉、化学感觉、身体感觉和知觉组织。"),
  r("MIT 9.04 Sensory Systems","https://ocw.mit.edu/courses/9-04-sensory-systems-fall-2013/","进阶","公开课","神经科学基础","通过完整视频、讲义和作业研究视觉、听觉和躯体感觉的神经机制。"),
  r("MIT 9.10 Cognitive Neuroscience","https://ocw.mit.edu/courses/9-10-cognitive-neuroscience-spring-2006/","高级","公开课","认知心理学、神经科学与实验设计","比较行为、病损与成像证据，分析注意、知觉、语言、导航和记忆。")
 ]),
 "learning-memory":t("学习与记忆","理解条件作用、强化、技能学习以及工作记忆、情景记忆和长期记忆的行为与神经机制。",[
  r("OpenStax Psychology 2e: Learning","https://openstax.org/books/psychology-2e/pages/6-introduction","入门","开放教材","心理学导论","从经典条件作用、操作性条件作用和观察学习进入学习理论，并配合第 8 章学习记忆。"),
  r("MIT 9.00SC: Learning",`${mitIntro}pages/learning/`,"进阶","公开课","心理学导论","用视频、阅读、讨论和自测比较不同学习机制及其现实应用。"),
  r("MIT 9.03 Neural Basis of Learning and Memory","https://ocw.mit.edu/courses/9-03-neural-basis-of-learning-and-memory-fall-2007/","高级","公开课","神经科学、细胞生物学与认知心理学","连接突触与分子机制、海马系统、动物模型和人类记忆研究。")
 ]),
 cognitive:t("认知心理学","研究注意、表征、语言、问题解决、推理、智能与决策，并比较行为、计算和神经三种解释层次。",[
  r("OpenStax Psychology 2e: Thinking and Intelligence","https://openstax.org/books/psychology-2e/pages/7-introduction","入门","开放教材","心理学导论","从概念、语言、问题解决和智能测量建立认知心理学地图。"),
  r("MIT 9.69 Foundations of Cognition","https://ocw.mit.edu/courses/9-69-foundations-of-cognition-spring-2003/","进阶","公开课","一门心理学、哲学、语言学或人工智能课程","围绕颜色、数量、因果、推理、道德和意识比较哲学问题与实验研究。"),
  r("MIT 9.012 Brain and Cognitive Sciences II","https://ocw.mit.edu/courses/9-012-the-brain-and-cognitive-sciences-ii-spring-2006/","高级","公开课","认知心理学、神经科学、统计与论文阅读","从行为、计算和神经层面研读知觉、语言、记忆、学习与决策的研究。")
 ]),
 emotion:t("情绪、动机与自我调节","研究情绪如何被产生、表达和调节，以及奖赏、目标和自我控制怎样组织行为。",[
  r("OpenStax Psychology 2e: Motivation and Emotion","https://openstax.org/books/psychology-2e/pages/10-introduction","入门","开放教材","心理学导论","建立动机、饥饿、性、情绪理论和情绪表达的基础框架。"),
  r("MIT 9.00SC: Emotion and Motivation",`${mitIntro}pages/emotion-motivation/`,"进阶","公开课","心理学导论与生物基础","用课程视频和讨论连接生理唤醒、认知评价、脑机制与文化。"),
  r("Noba: Affective Neuroscience","https://nobaproject.com/modules/affective-neuroscience","高级","开放教材","神经科学、情绪理论与研究方法","综合人和动物研究，理解情绪系统、脑网络与神经递质，同时辨别证据限制。")
 ]),
 computational:t("计算心理学与认知建模","用概率模型、机器学习、神经网络和仿真表达心理理论，并比较模型预测与真实行为。",[
  r("Neuromatch Computational Neuroscience","https://compneuro.neuromatch.io/tutorials/intro.html","入门","公开课","Python、线性代数与概率基础","通过开放教材、视频和可运行代码学习神经数据分析与计算模型。"),
  r("MIT 9.66J Computational Cognitive Science","https://ocw.mit.edu/courses/9-66j-computational-cognitive-science-fall-2004/","进阶","公开课","概率统计与编程","用贝叶斯推断、图模型和知识表示解释概念学习、因果推理和语言。"),
  r("MIT BCS Computational Tutorial Series","https://ocw.mit.edu/courses/res-9-008-brain-and-cognitive-sciences-computational-tutorials/","高级","公开课","Python、统计与一种心理或神经研究方向","持续更新的视频、代码和数据教程，连接现代机器学习、神经成像与认知研究。")
 ]),
 development:t("发展心理学","研究身体、认知、语言、情绪、人格和社会关系如何从孕期到老年持续变化。",[
  r("OpenStax Lifespan Development","https://openstax.org/details/books/lifespan-development","入门","开放教材","无需前置","以生命历程组织发展理论、研究方法和各年龄阶段的变化。"),
  r("北京大学：发展心理学","https://www.icourse163.org/course/PKU-1206624828","进阶","公开课","心理学导论与研究方法","中文系统课程，纵向贯穿毕生发展并比较生理、认知和社会性变化。"),
  r("MIT 9.85 Infant and Early Childhood Cognition","https://ocw.mit.edu/courses/9-85-infant-and-early-childhood-cognition-fall-2012/","高级","公开课","发展心理学、实验设计与论文阅读","围绕物体、因果、代理人和知识起源完成研究提案、评论与海报练习。")
 ]),
 personality:t("人格与个体差异","学习特质、能力、自我与身份如何被定义和测量，区分连续维度、类型标签和临床诊断。",[
  r("OpenStax Psychology 2e: Personality","https://openstax.org/books/psychology-2e/pages/11-introduction","入门","开放教材","心理学导论","比较心理动力、学习、人本、生物与特质取向。"),
  r("Noba: Personality Traits","https://nobaproject.com/modules/personality-traits","进阶","开放教材","研究方法与心理测量","以五因素模型进入特质结构、稳定性和人格—情境争论。"),
  r("Noba: Personality Assessment","https://nobaproject.com/modules/personality-assessment","高级","开放教材","心理测量、统计与人格理论","比较自陈、他评、投射、内隐和行为测量的信效度及适用边界。")
 ]),
 "social-cultural":t("社会与文化心理学","研究情境、群体、关系、权力与文化如何塑造认知、情绪和行为，避免把单一文化样本当作普遍人性。",[
  r("OpenStax Psychology 2e: Social Psychology","https://openstax.org/books/psychology-2e/pages/12-introduction","入门","开放教材","心理学导论","介绍归因、态度、说服、从众、群际关系、亲社会行为和攻击。"),
  r("MIT 9.70 Social Psychology","https://ocw.mit.edu/courses/9-70-social-psychology-spring-2013/","进阶","公开课","研究方法与基础统计","通过活动、讲义和写作分析社会认知、态度、群体与关系。"),
  r("Noba: Culture","https://nobaproject.com/modules/culture","高级","开放教材","社会心理学与研究设计","理解文化作为心理过程，并学习跨文化比较中的概念、测量和解释风险。")
 ]),
 decision:t("判断、决策与行为科学","研究启发式、偏差、风险选择、社会影响和行为干预，连接心理学、经济学、管理与公共政策。",[
  r("MIT 9.00SC: Thinking",`${mitIntro}pages/thinking/`,"入门","公开课","心理学导论","从问题解决、功能固着、启发式、锚定和框架效应认识判断过程。"),
  r("Noba: Judgment and Decision Making","https://nobaproject.com/modules/judgment-and-decision-making","进阶","开放教材","认知心理学与概率直觉","系统学习有限理性、常见偏差、风险选择与框架效应。"),
  r("MIT 15.301 Managerial Psychology Laboratory","https://ocw.mit.edu/courses/15-301-managerial-psychology-laboratory-fall-2004/","高级","公开课","统计、实验设计与社会心理学","用问卷、现场实验和研究论文练习决策、金钱、群体与谈判问题。")
 ]),
 clinical:t("异常与临床心理学","理解心理障碍的分类、风险因素、评估与循证干预，也认识诊断体系、文化和专业资格的边界。",[
  r("OpenStax Psychology 2e: Psychological Disorders","https://openstax.org/books/psychology-2e/pages/15-introduction","入门","开放教材","心理学导论","概览障碍分类、症状、流行病学和生物—心理—社会解释。"),
  r("北京大学：医学心理学","https://www.icourse163.org/course/PKU-1461542169","进阶","公开课","心理学导论与生物基础","中文课程连接认知、人格、心理卫生、心身疾病、评估、治疗和医患关系。"),
  r("APA Standards and Clinical Practice Guidelines","https://www.apa.org/research-practice/standards-guidelines","高级","公开讲义","异常心理学、研究方法与统计","学习如何评估治疗建议背后的证据强度、适用人群和专业实践规范；不用于自行诊断。")
 ]),
 health:t("健康心理学","用生物—心理—社会模型研究压力、健康行为、慢性病、疼痛和医患沟通，并重视社会环境与健康不平等。",[
  r("OpenStax Psychology 2e: Stress, Lifestyle, and Health","https://openstax.org/books/psychology-2e/pages/14-introduction","入门","开放教材","心理学导论","认识压力反应、应对、社会支持、健康行为与身心关系。"),
  r("Noba: The Healthy Life","https://nobaproject.com/modules/the-healthy-life","进阶","开放教材","研究方法、生物与社会心理学","以实证研究理解压力、行为和社会因素如何影响身体健康。"),
  r("MIT 9.00SC: Stress",`${mitIntro}pages/stress/`,"高级","公开课","生物心理学与研究方法","结合视频、阅读和讨论分析应激生理、控制感、社会地位与健康。")
 ]),
 educational:t("教育心理学与学习科学","研究知识如何获得、练习如何设计、动机和反馈如何影响学习，以及研究结论怎样谨慎进入课堂。",[
  r("OpenStax Psychology 2e: Learning","https://openstax.org/books/psychology-2e/pages/6-introduction","入门","开放教材","心理学导论","先掌握条件作用、观察学习和认知因素，再把概念用于教学问题。"),
  r("北京师范大学：教育心理学","https://www.icourse163.org/course/0711BNU0144-1470417183","进阶","公开课","发展、学习与研究方法","系统学习学生发展、学习理论、动机、教学设计、测评和课堂情境。"),
  r("MIT 9.85 Infant and Early Childhood Cognition","https://ocw.mit.edu/courses/9-85-infant-and-early-childhood-cognition-fall-2012/","高级","公开课","发展心理学、统计与实验设计","从认知发展实验出发理解知识、因果推断、语言和学习，并练习把证据转化为研究提案。")
 ]),
 organizational:t("组织心理学与人因","研究人员选拔、绩效、领导、团队、组织文化、工作健康，以及人与技术系统如何安全协作。",[
  r("OpenStax Psychology 2e: Industrial-Organizational Psychology","https://openstax.org/books/psychology-2e/pages/13-introduction","入门","开放教材","心理学导论","概览工业、组织、职业健康与人因心理学的主要问题。"),
  r("MIT 15.301 Managerial Psychology","https://ocw.mit.edu/courses/15-301-managerial-psychology-fall-2006/","进阶","公开课","社会心理学与研究方法","通过行为研究、案例和写作学习团队、谈判、冲突、领导与组织分析。"),
  r("MIT 15.301 Managerial Psychology Laboratory","https://ocw.mit.edu/courses/15-301-managerial-psychology-laboratory-fall-2004/","高级","公开课","统计、问卷与实验设计","完成从问题、伦理、调查到现场实验和研究论文的应用心理项目。")
 ]),
 projects:t("项目与进阶方向","通过复现、实验、问卷、开放数据或计算模型练习透明、合乎伦理的心理学研究。",[
  r("PsyToolkit","https://www.psytoolkit.org/","入门","项目平台","研究方法","用浏览器搭建简单行为实验或问卷，并导出数据进行分析。"),
  r("Open Science Framework","https://osf.io/","进阶","项目平台","统计与研究设计","为项目预注册，管理材料、数据和分析代码，并公开可复查成果。"),
  r("OpenNeuro","https://openneuro.org/","进阶","项目平台","神经科学、统计与 Python","使用公开脑成像数据完成一个可复现分析，并记录数据处理与多重比较。"),
  r("Many Labs Replication Projects","https://osf.io/ct89g/","高级","项目平台","统计、实验、伦理和文献阅读","阅读多实验室复现材料，重建一个分析或设计小规模概念复现。")
 ]),
 books:t("书单与资源","集中查看开放教材、可运行教程和大学官方公开课程。",[])
};

export const psychology:SubjectConfig={
 slug:"psychology",
 name:"心理学",
 en:"PSYCHOLOGY",
 intro:"心理学以可检验的方法研究心智与行为。这条路径从研究方法和心理测量出发，连接脑与认知、发展与社会、健康与临床，再进入计算建模、开放科学和真实研究。",
 caution:"心理学不是凭感觉分析他人，也不是网络量表或自助建议的集合。始终区分相关与因果，检查样本、测量、效应量、文化语境和复现；临床内容不能替代专业诊断与治疗。",
 groups:[
  start,
  ["科学基础",[["tools","学习工具"],["methods","研究方法与统计"],["measurement","心理测量与评估"],["introduction","心理学导论"]]],
  ["脑与认知",[["biological","生物心理学与神经科学"],["perception","感觉、知觉与意识"],["learning-memory","学习与记忆"],["cognitive","认知心理学"],["emotion","情绪、动机与自我调节"],["computational","计算心理学与认知建模"]]],
  ["个体与社会",[["development","发展心理学"],["personality","人格与个体差异"],["social-cultural","社会与文化心理学"],["decision","判断、决策与行为科学"]]],
  ["应用心理",[["clinical","异常与临床心理学"],["health","健康心理学"],["educational","教育心理学与学习科学"],["organizational","组织心理学与人因"]]],
  ["研究与实践",[["projects","项目与进阶方向"],["books","书单与资源"]]]
 ],
 topics,
 phases:[
  {time:"2–3 个月",title:"建立科学研究与测量基础",goal:"能把日常问题转成可操作、可证伪并符合伦理的研究问题。",learn:"变量、构念、信度、效度、实验、观察、抽样、相关、因果、效应量和研究伦理。",done:"能批判性阅读一则研究报道，并指出设计、测量和推断上的限制。",link:"methods"},
  {time:"2–3 个月",title:"完成一门完整心理学导论",goal:"先建立全景图，再决定深入方向。",learn:"脑、感觉、意识、学习、记忆、认知、情绪、发展、人格、社会、健康和临床。",done:"用概念图连接主要分支，并完成一套课程测验或章节练习。",link:"introduction"},
  {time:"4–6 个月",title:"学习脑、知觉、学习与认知",goal:"从多个证据层次解释心智，而不是把一个脑区等同于一种心理功能。",learn:"神经信号、感觉系统、注意、意识、学习、记忆、语言、推理与认知神经科学。",done:"能比较行为实验、病损、脑成像和计算模型各自能支持的结论。",link:"biological"},
  {time:"3–5 个月",title:"理解个体发展与社会文化",goal:"同时看到生命历程、稳定差异、具体情境和文化语境。",learn:"发展、人格、社会认知、群体、关系、文化、情绪动机与判断决策。",done:"围绕一个现实问题，使用至少两个理论视角和多项研究证据完成短评。",link:"development"},
  {time:"3–5 个月",title:"选择一条应用方向",goal:"从临床、健康、教育或组织人因中选择一条主线，不需要全部修完。",learn:"该领域的核心理论、测量工具、干预或设计方法、伦理和专业边界。",done:"完成一份案例证据评估、学习设计、健康行为方案或人因分析，并明确不能由数据推出什么。",link:"clinical"},
  {time:"3–6 个月",title:"进入计算与开放科学",goal:"让理论产生明确预测，让数据处理和分析能够被别人复查。",learn:"Python 或 R、认知建模、神经或行为数据、预注册、版本控制、开放材料和可复现报告。",done:"复现一个公开数据结果或实现一个基础模型，并报告失败结果与分析选择。",link:"computational"},
  {time:"持续",title:"完成独立且合乎伦理的研究",goal:"通过小而完整的项目形成研究判断，而不是追求宏大但无法验证的问题。",learn:"文献综述、研究方案、伦理与隐私、数据收集或二手数据、分析、可视化、写作和同行反馈。",done:"公开匿名化材料、分析代码、结果和限制；涉及真实参与者时遵守所在机构的伦理审查要求。",link:"projects"}
 ],
 tools:[
  ["文献与证据",[["Google Scholar","https://scholar.google.com/","检索论文、作者和引用关系"],["PubMed","https://pubmed.ncbi.nlm.nih.gov/","检索神经、健康与临床研究"],["APA PsycNet","https://psycnet.apa.org/","检索心理学论文与摘要"],["PsyArXiv","https://osf.io/preprints/psyarxiv","查找心理学开放预印本；引用前确认同行评审状态"],["Zotero","https://www.zotero.org/","管理文献、笔记和引用"]]],
  ["实验与问卷",[["PsyToolkit","https://www.psytoolkit.org/","在线创建行为实验和问卷"],["jsPsych","https://www.jspsych.org/","用 JavaScript 构建浏览器实验"],["PsychoPy","https://www.psychopy.org/","构建精确的实验室或在线实验"],["Pavlovia","https://pavlovia.org/","托管 PsychoPy、jsPsych 和调查研究"],["Qualtrics","https://www.qualtrics.com/","设计、分发和管理问卷；高级功能可能需要机构许可"]]],
  ["统计与建模",[["JASP","https://jasp-stats.org/","图形化完成常用频率学与贝叶斯分析"],["jamovi","https://www.jamovi.org/","开源统计界面，适合从表格过渡到可复现分析"],["R","https://www.r-project.org/","统计、心理测量、元分析和可视化"],["Python","https://www.python.org/","实验、数据处理、机器学习和计算建模"],["metafor","https://www.metafor-project.org/","在 R 中完成系统综述与元分析"]]],
  ["开放科学",[["OSF","https://osf.io/","预注册并管理材料、数据和项目版本"],["AsPredicted","https://aspredicted.org/","创建简洁的研究预注册"],["Zenodo","https://zenodo.org/","长期发布数据、代码和材料并获得 DOI"],["GitHub","https://github.com/","版本控制分析代码和可复现报告"]]],
  ["神经与开放数据",[["OpenNeuro","https://openneuro.org/","获取符合 BIDS 标准的公开神经影像数据"],["Neurosynth","https://neurosynth.org/","探索大规模神经影像元分析"],["Allen Brain Map","https://portal.brain-map.org/","查询人类和模式生物脑图谱与表达数据"],["Human Connectome Project","https://www.humanconnectome.org/","使用公开连接组和行为数据"]]]
 ],
 books:[
  ["OpenStax Psychology 2e","https://openstax.org/details/books/psychology-2e","心理学导论 · 入门","完整免费教材，覆盖研究、脑、认知、发展、社会、健康与临床。"],
  ["Research Methods in Psychology","https://opentextbc.ca/researchmethods/","研究方法 · 入门","从科学问题、测量和伦理到实验、调查、统计与报告。"],
  ["Introduction to Statistics in the Psychological Sciences","https://open.umn.edu/opentextbooks/textbooks/an-introduction-to-psychological-statistics","统计 · 入门","面向心理学学习者讲解推断、检验、方差分析、相关与回归。"],
  ["Neuroscience — NCBI Bookshelf","https://www.ncbi.nlm.nih.gov/books/NBK10799/","神经科学 · 进阶","免费系统教材，深入神经系统结构、功能和实验依据。"],
  ["Noba Psychology","https://nobaproject.com/textbooks/psychology","专题阅读 · 入门至进阶","由学者编写的开放模块，适合按认知、社会、人格和健康主题补充。"],
  ["Neuromatch Computational Neuroscience","https://compneuro.neuromatch.io/tutorials/intro.html","计算神经科学 · 进阶","开放教材、视频和代码练习，适合进入现代计算与数据方向。"]
 ],
 portals:[
  ["清华","清华大学：心理学概论（自主模式）","https://v1-www.xuetangx.com/courses/course-v1%3ATsinghuaX%2B30700313X%2Bsp/about","常年开放的中文国家级精品课程。"],
  ["北师大","北京师范大学：教育心理学","https://www.icourse163.org/course/0711BNU0144-1470417183","连接学习、动机、发展、教学设计和测评。"],
  ["北大","北京大学：医学心理学","https://www.icourse163.org/course/PKU-1461542169","覆盖心理基础、心理健康、评估、治疗与医患关系。"],
  ["MIT","MIT OCW Brain and Cognitive Sciences","https://ocw.mit.edu/search/?d=Brain%20and%20Cognitive%20Sciences","认知、神经、计算、发展和实验课程。"],
  ["Yale","Open Yale Psychology","https://oyc.yale.edu/psychology","完整心理学导论课程。"],
  ["Noba","Noba Project","https://nobaproject.com/","由各领域学者编写的免费心理学模块。"],
  ["Neuromatch","Neuromatch Computational Neuroscience","https://compneuro.neuromatch.io/","开放计算神经科学课程、教程和代码。"],
  ["APA","APA Research and Practice","https://www.apa.org/research-practice","研究规范、开放科学、测量和实践指南。"]
 ]
};
