import {r,type Curriculum,type SubjectConfig,type Topic} from "./subjectTypes";

const t=(title:string,intro:string,resources:ReturnType<typeof r>[]):Topic=>({title,intro,resources});
const tc=(title:string,intro:string,resources:ReturnType<typeof r>[],curriculum:Curriculum):Topic=>({title,intro,resources,curriculum});
const start=["开始之前",[["plan","学习规划"]]] as const;

const exerciseTopics:Record<string,Topic>={
 tools:t("学习工具","用文献、统计、运动测量和开放数据工具记录过程、检验假设，而不是依靠主观体感下结论。",[]),
 curriculum:tc("本科课程地图","参考密歇根大学 Movement Science 与科罗拉多大学 Integrative Physiology 的当前本科结构，先完成生命科学与定量基础，再进入运动生理、生物力学、运动控制和实验实践。",[
  r("University of Michigan Movement Science","https://www.kines.umich.edu/academics/movement-science/undergraduate","入门","公开讲义","无需前置","官方本科项目说明，明确以运动生理学、生物力学和运动控制为三条核心主线。"),
  r("CU Boulder Integrative Physiology BS","https://catalog.colorado.edu/undergraduate/colleges-schools/arts-sciences/programs-study/integrative-physiology/integrative-physiology-bachelor-science-bs/","进阶","公开讲义","高中生物与化学","当前培养方案包含生物、化学、物理、统计、人体生理及多门高级整合生理课程。")
 ],{
  basis:"按每周 6–10 小时学习，完整核心通常需要约 20–30 个月。以下结构保留本科专业的科学基础、实验训练与应用能力，但不替代医学、康复或教练执业资格。",
  reference:["University of Michigan Movement Science","https://www.kines.umich.edu/academics/movement-science/undergraduate"],
  stages:[
   {title:"生命科学与定量基础",courses:"普通生物、普通化学、物理、统计与科学写作",practice:"完成数据记录、单位换算、图表解释和一份短研究评述。"},
   {title:"人体结构与功能",courses:"人体解剖、生理学、生物化学与神经肌肉基础",practice:"用系统图解释运动时肌肉、循环、呼吸和内分泌系统如何协同。"},
   {title:"运动科学核心",courses:"运动生理、运动代谢、生物力学与运动控制",practice:"分析一次运动任务的供能、动作力学和神经控制。"},
   {title:"测量与干预",courses:"体适能测试、训练适应、运动处方、运动营养与特殊人群",practice:"基于公开指南设计并论证一个低风险训练观察方案。"},
   {title:"前沿与毕业项目",courses:"可穿戴传感、恢复与睡眠、环境生理、开放数据研究",practice:"完成可复现的数据分析、文献综述或小型实验报告。"}
  ]
 }),
 foundations:t("生命科学与定量基础","补齐生物、化学、物理和统计，为理解能量转换、物质运输、力学与实验结果建立共同语言。",[
  r("MIT 7.01SC Fundamentals of Biology","https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/","入门","公开课","高中生物","完整视频、习题和考试覆盖细胞、遗传、分子生物学与生理基础。"),
  r("MIT 5.111SC Principles of Chemical Science","https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/","进阶","公开课","高中代数与化学","用热力学、平衡、动力学和分子结构理解运动代谢中的化学过程。"),
  r("Harvard Statistics and R","https://pll.harvard.edu/course/statistics-and-r","进阶","公开课","高中代数","面向生命科学数据学习概率、推断、探索分析和 R；课程可免费旁听。")
 ]),
 anatomy:t("人体解剖与生理学","掌握肌肉骨骼、神经、循环、呼吸、内分泌和体液调节，先理解静息功能，再分析运动变化。",[
  r("OpenStax Anatomy and Physiology 2e","https://openstax.org/details/books/anatomy-and-physiology-2e","入门","开放教材","普通生物","可免费在线阅读或下载，适合作为完整的人体解剖生理主教材。"),
  r("University of Pennsylvania: Vital Signs","https://www.coursera.org/learn/vital-signs","入门","公开课","无需前置","从心率、血压、体温、呼吸和疼痛进入人体系统的测量与解释。"),
  r("MIT Quantitative Physiology","https://ocw.mit.edu/courses/hst-542j-quantitative-physiology-organ-transport-systems-spring-2004/","高级","公开课","微积分、物理与人体生理","以质量和能量传输模型定量分析心血管、呼吸、肾脏等器官系统。")
 ]),
 methods:t("研究方法与运动统计","学习问题设计、测量误差、实验与观察研究、效应量、统计推断和可复现报告。",[
  r("Harvard Data Analysis for Life Sciences","https://pll.harvard.edu/series/data-analysis-life-sciences","入门","公开课","高中代数","以真实生命科学数据学习 R、统计推断、线性模型和可复现分析。"),
  r("OpenIntro Statistics","https://www.openintro.org/book/os/","入门","开放教材","高中代数","免费统计教材和数据集，适合建立抽样、区间估计、检验和回归基础。"),
  r("Stanford OpenSim Tutorials","https://opensimconfluence.atlassian.net/wiki/spaces/OpenSim/pages/53089380/Tutorials","高级","项目平台","解剖、生物力学与基础编程","学习模型验证、运动学、动力学和肌肉骨骼仿真的可复现工作流。")
 ]),
 "exercise-physiology":t("运动生理学核心","系统理解急性运动反应、长期训练适应以及代谢、心肺、神经肌肉和内分泌系统之间的整合。",[
  r("University of Colorado Boulder: Science of Exercise","https://www.coursera.org/learn/science-exercise/","入门","公开课","无需前置","从供能、肌肉、心肺反应讲到训练、疲劳和运动与慢性病；部分内容可免费旁听。"),
  r("北京体育大学：运动生理学","https://www.icourse163.org/course/BSU-1456661164","进阶","公开课","人体解剖与基础生理","中文系统课程，覆盖骨骼肌、能量代谢、氧运输、训练适应与机能评定。"),
  r("Michigan MOVESCI 340 Exercise Physiology","https://www.kines.umich.edu/academics/course-catalog/movesci-340","进阶","公开讲义","人体生理、解剖与运动科学基础","用官方课程要求核对本科运动生理应覆盖的系统、实验和先修关系。")
 ]),
 bioenergetics:t("运动代谢与生物能量学","理解 ATP 再合成、糖脂蛋白代谢、乳酸动力学、氧耗和不同强度下的底物选择。",[
  r("MIT 7.05 General Biochemistry","https://ocw.mit.edu/courses/7-05-general-biochemistry-spring-2020/","进阶","公开课","普通化学与细胞生物学","通过完整视频和习题深入酶、代谢途径、能量耦联与代谢调控。"),
  r("MIT Chemistry of Sports","https://ocw.mit.edu/courses/es-010-chemistry-of-sports-spring-2013/","入门","公开课","高中化学","用运动饮料、能量代谢和训练恢复把化学、生理与日常运动连接起来。"),
  r("Human Nutrition 2e: Energy Balance","https://pressbooks.oer.hawaii.edu/humannutrition2e22/chapter/8-weight-management/","进阶","开放教材","基础生物化学","从能量摄入、消耗和体重调节复习运动代谢的营养背景。")
 ]),
 systems:t("心肺、神经肌肉与内分泌","研究氧运输、肌肉收缩、运动单位募集、疲劳和激素信号在运动中的协同。",[
  r("OpenStax A&P: Cardiovascular System","https://openstax.org/books/anatomy-and-physiology-2e/pages/19-introduction","入门","开放教材","人体生理基础","结合呼吸和肌肉章节建立循环、气体交换与组织供能基础。"),
  r("LouvainX: Respiration in the Human Body","https://www.edx.org/learn/human-anatomy/universite-catholique-de-louvain-respiration-in-the-human-body/","进阶","公开课","人体生理","涵盖呼吸机制、运动、高海拔、氧合和常见呼吸问题。"),
  r("MIT 9.01 Neuroscience and Behavior","https://ocw.mit.edu/courses/9-01-neuroscience-and-behavior-fall-2003/","高级","公开课","普通生物","学习神经信号、感觉运动系统、行为与可塑性，为运动控制打底。")
 ]),
 movement:t("生物力学与运动控制","用运动学、动力学、材料力学、神经控制和建模解释人体动作与技能学习。",[
  r("MIT Molecular, Cellular and Tissue Biomechanics","https://ocw.mit.edu/courses/20-310j-molecular-cellular-and-tissue-biomechanics-spring-2015/","进阶","公开课","微积分、物理与基础生物","通过讲义、习题和项目把力学应用到细胞、组织和器官。"),
  r("Stanford OpenSim Tutorials","https://opensimconfluence.atlassian.net/wiki/spaces/OpenSim/pages/53089380/Tutorials","进阶","项目平台","人体解剖与基础力学","用开放人体模型完成逆运动学、逆动力学和肌肉分析。"),
  r("MIT Motor Control Notes","https://ocw.mit.edu/courses/16-423j-aerospace-biomedical-and-life-support-engineering-spring-2006/867c0e3a2ea74bdd1d312c40949acc24_motorcontrol2006.pdf","高级","公开讲义","动力学、线性代数与控制","以优化、肌骨动力学和感觉反馈理解动作组织。")
 ]),
 application:t("测试、训练与运动处方","学习测量体适能与负荷，比较训练适应，并依据公开指南和风险边界设计干预。",[
  r("University of Toronto: Physical Therapy and Exercise","https://www.coursera.org/learn/physical-therapy-exercise","入门","公开课","无需前置","从身体活动、慢性病、骨质疏松和常见损伤理解运动干预边界。"),
  r("WHO Guidelines on Physical Activity","https://www.who.int/publications/i/item/9789240015128","进阶","公开讲义","运动生理基础","公开指南总结不同年龄和人群的身体活动与久坐证据。"),
  r("McMaster: Hacking Exercise for Health","https://www.coursera.org/learn/hacking-exercise-health","进阶","公开课","人体生理","由运动生理学者讲解心肺与力量训练适应，并评估常见健身主张。")
 ]),
 "sports-nutrition":t("运动营养","把供能、蛋白质、水合和补充剂证据放回训练目标与个体情境。",[
  r("Wageningen: Nutrition, Exercise and Sports","https://courses.edx.org/asset-v1%3AWageningenX%2BNUTR107x%2B1T2022%2Btype%40asset%2Bblock%40NUTR107x-1T2022-CourseSyllabus.pdf","入门","公开讲义","基础营养与人体生理","覆盖运动供能、蛋白质、能量需求、体温调节、水合、微量营养素和补充剂。"),
  r("NIH Dietary Supplement Fact Sheets","https://ods.od.nih.gov/factsheets/list-all/","高级","公开讲义","营养学与文献阅读","查阅常见营养素和补充剂的证据、剂量、安全性与相互作用。")
 ]),
 frontiers:t("可穿戴数据、睡眠与环境生理","用传感器和开放数据研究心率、活动、睡眠、热应激与高海拔适应，辨别设备误差和因果限制。",[
  r("PhysioNet","https://physionet.org/","入门","项目平台","统计与一种编程语言","获取开放 ECG、PPG、睡眠和活动数据，完成可复现的信号分析。"),
  r("Open mHealth","https://www.openmhealth.org/","进阶","项目平台","数据结构与健康测量","学习移动健康数据的标准化表示、交换和可复现分析。"),
  r("CU Boulder Advanced IPHY Courses","https://www.colorado.edu/iphy/undergrad/courses/iphy-core-courses","高级","公开讲义","运动生理与研究方法","从当前课程说明进入睡眠、神经、内分泌、免疫和环境研究方向。")
 ]),
 projects:t("项目与研究实践","以低风险、可重复、尊重隐私的方式完成文献综述、开放数据分析、动作建模或训练观察项目。",[
  r("PhysioNet Databases","https://physionet.org/about/database/","入门","项目平台","统计与 Python 或 R","选择开放生理数据集，写清变量、缺失、分析流程和结论边界。"),
  r("OpenSim Examples","https://opensimconfluence.atlassian.net/wiki/spaces/OpenSim/pages/53089380/Tutorials","进阶","项目平台","解剖、生物力学与编程","完成一个步态或动作的肌骨建模项目并报告模型假设。"),
  r("Open Science Framework","https://osf.io/","高级","项目平台","研究方法与统计","预注册问题、保存材料与代码，并公开可复查的项目报告。")
 ]),
 books:t("书单与资源","集中查看开放教材、大学公开课程和权威公共指南。",[])
};

export const exercisePhysiology:SubjectConfig={
 slug:"exercise-physiology",name:"运动生理学",en:"EXERCISE PHYSIOLOGY",
 intro:"运动生理学研究人体如何对一次运动作出反应，又如何在长期训练中发生适应。这条路径把生命科学、人体系统、生物力学、运动控制、训练与数据分析连接起来，最终能够读懂证据并完成真实项目。",
 caution:"本站内容用于教育，不构成个体化训练、康复、营养或医疗建议。出现疼痛、疾病、妊娠或其他风险因素时，应由合格专业人员评估；不要把可穿戴设备读数当成诊断。",
 groups:[start,["起点与课程地图",[["tools","学习工具"],["curriculum","本科课程地图"],["foundations","生命科学与定量基础"]]],["人体与运动核心",[["anatomy","人体解剖与生理学"],["methods","研究方法与运动统计"],["exercise-physiology","运动生理学核心"],["bioenergetics","运动代谢与生物能量学"],["systems","心肺、神经肌肉与内分泌"],["movement","生物力学与运动控制"]]],["应用与前沿",[["application","测试、训练与运动处方"],["sports-nutrition","运动营养"],["frontiers","可穿戴数据、睡眠与环境生理"]]],["实践与资源",[["projects","项目与研究实践"],["books","书单与资源"]]]],
 topics:exerciseTopics,
 phases:[
  {time:"3–4 个月",title:"补齐生命科学与定量基础",goal:"能够用生物、化学、物理和统计语言描述人体运动。",learn:"细胞、代谢、化学平衡、力与运动、概率、图表和测量误差。",done:"完成一门基础课的习题，并分析一组简单生理数据。",link:"foundations"},
  {time:"3–5 个月",title:"掌握人体结构与系统生理",goal:"理解肌肉、神经、循环、呼吸和内分泌系统的静息功能与联系。",learn:"解剖定位、组织功能、稳态、神经肌肉、血流、通气和激素调节。",done:"绘制运动时多系统协同图，并解释关键指标的来源。",link:"anatomy"},
  {time:"4–6 个月",title:"完成运动生理与生物能量核心",goal:"解释不同运动强度和训练方式下的急性反应与慢性适应。",learn:"供能系统、氧耗、乳酸、疲劳、心肺反应、肌肉与内分泌适应。",done:"完成课程测验，并用证据分析一种训练方法的机制与边界。",link:"exercise-physiology"},
  {time:"4–6 个月",title:"学习生物力学与运动控制",goal:"从力学和神经控制两个层次分析动作。",learn:"运动学、动力学、组织力学、运动单位、感觉反馈、技能学习与建模。",done:"用视频或 OpenSim 完成动作分析并说明误差来源。",link:"movement"},
  {time:"3–5 个月",title:"进入测试、训练与运动处方",goal:"能够选择合适指标，并依据公开指南提出低风险、可验证的方案。",learn:"体适能测试、负荷监控、训练适应、恢复、特殊人群与运动营养。",done:"完成包含筛查、指标、进阶规则和停止条件的案例方案。",link:"application"},
  {time:"按方向 4–6 个月",title:"选择一个现代方向",goal:"深入可穿戴数据、睡眠恢复、环境生理或运动营养。",learn:"传感器有效性、信号处理、睡眠、热与高海拔、生理个体差异或营养证据。",done:"完成可复现分析或系统综述，并陈述因果限制。",link:"frontiers",mode:"choice"},
  {time:"从第三阶段持续",title:"持续完成研究与应用项目",goal:"把课程知识转化为透明、可审查的成果。",learn:"研究问题、伦理、预注册、数据字典、版本控制、报告和公开展示。",done:"发布含数据来源、方法、代码、结果和限制说明的完整项目。",link:"projects",mode:"ongoing"}
 ],
 tools:[
  ["文献与证据",[["PubMed","https://pubmed.ncbi.nlm.nih.gov/","检索运动生理、训练与健康研究"],["Google Scholar","https://scholar.google.com/","追踪论文、综述与引用"],["Zotero","https://www.zotero.org/","管理文献和研究笔记"]]],
  ["数据与统计",[["R","https://www.r-project.org/","统计建模和可复现报告"],["Python","https://www.python.org/","处理传感器、生理信号和开放数据"],["JASP","https://jasp-stats.org/","用图形界面学习频率与贝叶斯统计"]]],
  ["运动测量与建模",[["OpenSim","https://opensimconfluence.atlassian.net/wiki/spaces/OpenSim/pages/53089847/Introducing+OpenSim","肌肉骨骼建模和运动仿真"],["Kinovea","https://www.kinovea.org/","开源视频动作分析"],["PhysioNet","https://physionet.org/","开放生理信号和分析工具"]]],
  ["开放研究",[["OSF","https://osf.io/","预注册并管理研究材料"],["GitHub","https://github.com/","版本控制分析代码与报告"],["Quarto","https://quarto.org/","生成可复现的研究文档"]]]
 ],
 books:[
  ["OpenStax Anatomy and Physiology 2e","https://openstax.org/details/books/anatomy-and-physiology-2e","人体基础 · 入门","完整免费的人体解剖与生理主教材。"],
  ["OpenStax Biology 2e","https://openstax.org/details/books/biology-2e","生命科学 · 入门","补齐细胞、遗传、进化与生理基础。"],
  ["OpenIntro Statistics","https://www.openintro.org/book/os/","统计 · 入门","免费教材、习题和数据，适合建立研究方法基础。"],
  ["WHO Guidelines on Physical Activity","https://www.who.int/publications/i/item/9789240015128","运动健康 · 进阶","公开、循证的身体活动与久坐指南。"],
  ["OpenSim Documentation","https://opensimconfluence.atlassian.net/wiki/spaces/OpenSim/overview","生物力学 · 进阶","肌骨建模、验证、教程和案例的开放文档。"]
 ],
 portals:[
  ["北体","北京体育大学：运动生理学","https://www.icourse163.org/course/BSU-1456661164","中文系统公开课，覆盖本科运动生理学主要模块。"],
  ["Michigan","University of Michigan Movement Science","https://www.kines.umich.edu/academics/movement-science/undergraduate","当前本科结构、核心能力与课程样例。"],
  ["CU Boulder","Integrative Physiology BS","https://catalog.colorado.edu/undergraduate/colleges-schools/arts-sciences/programs-study/integrative-physiology/integrative-physiology-bachelor-science-bs/","从基础科学到运动、神经、内分泌和生物力学的培养方案。"],
  ["Colorado","Science of Exercise","https://www.coursera.org/learn/science-exercise/","高质量运动生理入门公开课，部分内容可旁听。"],
  ["MIT","Health and Exercise Science","https://ocw.mit.edu/search/?t=Health%20and%20Exercise%20Science","运动、人体生理、生物力学和健康相关开放课程。"],
  ["Stanford","OpenSim","https://opensimconfluence.atlassian.net/wiki/spaces/OpenSim/pages/53089847/Introducing+OpenSim","Stanford 发起的开放肌肉骨骼建模平台与教学材料。"]
 ]
};

const nutritionTopics:Record<string,Topic>={
 tools:t("学习工具","用权威营养数据库、文献、膳食调查和统计工具分析证据；不要依赖成分不透明的商业应用。",[]),
 curriculum:tc("本科课程地图","参考 Cornell 2025+ Nutritional Sciences 本科核心：化学、生物、生物化学与生理为前置，随后学习营养与社会、食物理化、营养素代谢、研究方法和高级选修。",[
  r("Cornell Nutritional Sciences BS","https://catalog.cornell.edu/programs/nutritional-sciences-bs/","入门","公开讲义","无需前置","当前官方培养方案列出营养健康与社会、食品理化、营养素代谢、研究方法和高级选修。"),
  r("Cornell Human Ecology: Nutritional Sciences","https://human.cornell.edu/degrees/nutritional-sciences","进阶","公开讲义","高中生物与化学","说明生物、化学、有机化学、生物化学、生理、数学与社会科学的基础关系。")
 ],{
  basis:"按每周 6–10 小时学习，完整核心通常需要约 20–30 个月。路径同时覆盖生物医学、行为与公共健康视角，但不授予注册营养师或临床执业资格。",
  reference:["Cornell Nutritional Sciences BS","https://catalog.cornell.edu/programs/nutritional-sciences-bs/"],
  stages:[
   {title:"自然与社会科学基础",courses:"普通生物、普通与有机化学、生物化学、生理、统计和社会科学",practice:"用化学结构与人体功能解释一种营养素的消化、吸收和代谢。"},
   {title:"营养学核心",courses:"营养健康与社会、宏量和微量营养素、营养素代谢、食品理化",practice:"完成一周膳食记录，讨论测量误差而非给出诊断。"},
   {title:"研究与评估",courses:"营养评估、膳食调查、流行病学、生物统计和研究设计",practice:"使用公开调查数据复现一张结果表并说明混杂因素。"},
   {title:"人群与应用",courses:"生命周期营养、公共营养、临床基础、运动营养和食品系统",practice:"为一个明确人群撰写基于指南的教育材料。"},
   {title:"前沿与毕业项目",courses:"微生物组、代谢组、个性化营养、可持续膳食与政策",practice:"完成开放数据分析、系统综述或公共营养方案。"}
  ]
 }),
 foundations:t("生物、化学与人体生理","理解营养素的分子结构、反应、消化吸收与器官调节，为代谢和疾病风险研究建立基础。",[
  r("MIT 7.01SC Fundamentals of Biology","https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/","入门","公开课","高中生物","系统补齐细胞、遗传、分子生物学与生命系统基础。"),
  r("MIT 5.111SC Principles of Chemical Science","https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/","进阶","公开课","高中代数与化学","学习结构、热力学、平衡和动力学，为食品化学和代谢打底。"),
  r("OpenStax Anatomy and Physiology 2e","https://openstax.org/details/books/anatomy-and-physiology-2e","进阶","开放教材","普通生物","重点学习消化、内分泌、循环、肾脏和能量代谢相关章节。")
 ]),
 introduction:t("营养学导论","建立从食物、营养素、消化吸收、能量平衡到膳食模式与健康的完整地图。",[
  r("Human Nutrition 2e — University of Hawaiʻi","https://pressbooks.oer.hawaii.edu/humannutrition2e22/","入门","开放教材","无需前置","大学营养学导论开放教材，覆盖营养素、评估、生命周期与疾病预防。"),
  r("Stanford Introduction to Food and Health","https://www.coursera.org/learn/food-and-health/","入门","公开课","无需前置","从营养基础、加工食品、膳食选择和行为改变进入日常食品与健康。"),
  r("Harvard Nutrition Source","https://nutritionsource.hsph.harvard.edu/","进阶","公开讲义","基础营养学","以研究证据解释营养素、食物、膳食模式和常见健康议题。")
 ]),
 nutrients:t("宏量与微量营养素","学习碳水、脂质、蛋白质、维生素、矿物质和水的消化吸收、代谢、食物来源与安全边界。",[
  r("MIT 7.05 General Biochemistry","https://ocw.mit.edu/courses/7-05-general-biochemistry-spring-2020/","进阶","公开课","普通化学与细胞生物学","通过完整课程深入酶、糖脂氨基酸代谢、能量耦联和调控。"),
  r("Human Nutrition 2e: Macronutrients","https://pressbooks.oer.hawaii.edu/humannutrition2e22/","入门","开放教材","营养学导论","通过开放教材的宏量营养素章节系统学习其功能、来源、消化与代谢。"),
  r("NIH Dietary Supplement Fact Sheets","https://ods.od.nih.gov/factsheets/list-all/","高级","公开讲义","基础营养学","查询微量营养素的推荐量、来源、缺乏、过量和相互作用。")
 ]),
 assessment:t("营养评估与研究方法","学习膳食调查、人体测量、生化指标、研究设计、测量误差、混杂和统计推断。",[
  r("NHANES Dietary Data Tutorials","https://wwwn.cdc.gov/nchs/nhanes/tutorials/dietary.aspx","进阶","公开讲义","基础统计","学习 24 小时膳食回忆、权重、数据库结构和复杂抽样分析。"),
  r("Harvard Statistics and R","https://pll.harvard.edu/course/statistics-and-r","入门","公开课","高中代数","建立描述统计、抽样、推断和 R 分析基础。"),
  r("CDC Principles of Epidemiology","https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/index.html","高级","开放教材","基础统计","学习研究设计、关联指标、偏倚和公共健康调查。")
 ]),
 lifecycle:t("生命周期与临床营养基础","研究孕期、婴幼儿、儿童、成年与老年阶段的营养需求，以及营养支持和疾病情境的证据边界。",[
  r("Human Nutrition 2e: Life Cycle","https://pressbooks.oer.hawaii.edu/humannutrition2e22/chapter/13-introduction/","入门","开放教材","营养学导论","从孕期到老年系统梳理能量、营养素与生长发育需求。"),
  r("LMU: Nutrition and Lifestyle in Pregnancy","https://www.coursera.org/learn/nutrition-pregnancy","进阶","公开课","基础营养与人体生理","由慕尼黑大学课程讲解孕期营养、生活方式和证据评估。"),
  r("Stanford Child Nutrition and Cooking","https://www.coursera.org/learn/childnutrition","进阶","公开课","营养学导论","把儿童营养、食物环境和家庭实践连接起来。")
 ]),
 public:t("公共营养、行为与政策","研究食物环境、社会决定因素、行为、传播和政策如何影响人群膳食与健康不平等。",[
  r("Open Yale: Psychology, Biology and Politics of Food","https://oyc.yale.edu/psychology/psyc-123","入门","公开课","无需前置","完整视频课程从生物、心理、文化、产业和政策分析饮食。"),
  r("Johns Hopkins: An Introduction to the U.S. Food System","https://www.coursera.org/learn/food-system","进阶","公开课","营养学或公共健康基础","连接食品生产、环境、公平、政策和公共健康。"),
  r("University of Illinois: Nutrition Policy","https://www.coursera.org/learn/introtonutritionpolicyframeworks","高级","公开课","公共营养与研究方法","学习营养政策框架、政策形成、实施和评价。")
 ]),
 "food-science":t("食品科学、安全与可持续系统","理解食品结构、加工、微生物、安全、环境和政策怎样影响营养价值与人群健康。",[
  r("MIT Kitchen Chemistry","https://ocw.mit.edu/courses/es-287-kitchen-chemistry-spring-2009/","入门","公开课","高中化学","通过可食实验理解食品中的化学、生物化学、微生物和物理。"),
  r("国家智慧教育平台：食品营养学","https://higher.smartedu.cn/course/62354d779906eace0490a4b7","进阶","公开课","基础营养与食品化学","暨南大学中文课程，覆盖食品营养、加工与中国膳食情境。"),
  r("Johns Hopkins Food System","https://www.coursera.org/learn/food-system","高级","公开课","公共营养","从生产、生态、食品动物、政策和公平分析完整食品系统。")
 ]),
 "sports-nutrition":t("运动营养","研究训练与比赛中的能量可用性、底物、蛋白质、水合、补充剂与恢复。",[
  r("Wageningen: Nutrition, Exercise and Sports","https://courses.edx.org/asset-v1%3AWageningenX%2BNUTR107x%2B1T2022%2Btype%40asset%2Bblock%40NUTR107x-1T2022-CourseSyllabus.pdf","入门","公开讲义","营养学与人体生理","覆盖供能、蛋白质、体温、水合、微量营养素和补充剂。"),
  r("University of Colorado: Science of Exercise","https://www.coursera.org/learn/science-exercise/","进阶","公开课","营养代谢与人体生理","用运动生理框架理解营养选择、训练适应和健康。"),
  r("NIH Dietary Supplements","https://ods.od.nih.gov/factsheets/list-all/","高级","公开讲义","文献阅读与营养学","核查补充剂的证据、安全性和相互作用。")
 ]),
 frontiers:t("微生物组与个性化营养","结合微生物组、代谢组、遗传和连续测量研究个体差异，避免把相关性夸大为个人处方。",[
  r("UC San Diego: Gut Check","https://www.coursera.org/learn/microbiome","入门","公开课","普通生物","从人体微生物组、测序和饮食关系进入该领域。"),
  r("EMBL-EBI Metagenomics Bioinformatics","https://www.ebi.ac.uk/training/online/courses/metagenomics-bioinformatics/","进阶","公开课","微生物学、统计与命令行","学习宏基因组实验设计、数据质控、分类和功能分析。"),
  r("Metabolomics Workbench","https://www.metabolomicsworkbench.org/","高级","项目平台","生物化学与统计","获取开放代谢组数据、分析工具和标准，用于营养代谢项目。")
 ]),
 projects:t("项目与研究实践","通过公开膳食调查、食品成分、代谢组或文献完成可复现项目，不对个人进行诊断或治疗建议。",[
  r("NHANES","https://wwwn.cdc.gov/nchs/nhanes/Default.aspx","入门","项目平台","统计与 R 或 Python","研究膳食、身体测量和健康指标的关联，并正确处理抽样与混杂。"),
  r("USDA FoodData Central API","https://fdc.nal.usda.gov/api-guide.html","进阶","项目平台","基础编程与营养学","构建食物成分查询、膳食记录或数据质量分析项目。"),
  r("Open Science Framework","https://osf.io/","高级","项目平台","研究方法与统计","预注册问题，管理数据字典、代码、材料和研究报告。")
 ]),
 books:t("书单与资源","集中查看开放营养教材、大学公开课程和权威资料入口。",[])
};

export const nutrition:SubjectConfig={
 slug:"nutrition",name:"营养学",en:"NUTRITION SCIENCE",
 intro:"营养学研究食物与营养素如何影响人体功能、行为和群体健康。这条路径从化学与生命科学出发，经过营养素代谢、评估和流行病学，再进入运动营养、微生物组、个性化营养与食品系统。",
 caution:"本站内容用于教育，不构成个体化膳食、补充剂或医疗建议。疾病、妊娠、儿童营养、进食障碍或用药情境应咨询合格专业人员；单项研究和网络意见不能替代系统证据。",
 groups:[start,["起点与课程地图",[["tools","学习工具"],["curriculum","本科课程地图"],["foundations","生物、化学与人体生理"]]],["营养学核心",[["introduction","营养学导论"],["nutrients","宏量与微量营养素"],["assessment","营养评估与研究方法"]]],["人群与应用",[["lifecycle","生命周期与临床营养基础"],["public","公共营养、行为与政策"],["food-science","食品科学、安全与可持续系统"],["sports-nutrition","运动营养"]]],["前沿与实践",[["frontiers","微生物组与个性化营养"],["projects","项目与研究实践"],["books","书单与资源"]]]],
 topics:nutritionTopics,
 phases:[
  {time:"4–6 个月",title:"完成自然科学基础",goal:"能够从分子、细胞和人体系统解释营养素的作用。",learn:"普通生物、普通与有机化学、生物化学、消化、内分泌和基础统计。",done:"完成一门生物或化学主课，并解释一种营养素从食物到代谢的全过程。",link:"foundations"},
  {time:"4–6 个月",title:"掌握营养素与能量代谢",goal:"建立完整的营养学核心框架，而不是记忆食物好坏清单。",learn:"宏量和微量营养素、消化吸收、能量平衡、膳食参考值与安全边界。",done:"完成主教材练习，并能比较营养素、食物和膳食模式三个证据层次。",link:"nutrients"},
  {time:"同步进行 3–5 个月",title:"贯穿营养评估与研究方法",goal:"能够判断膳食研究测量了什么、遗漏了什么以及能否支持因果结论。",learn:"膳食调查、测量误差、人体与生化指标、流行病学、统计、偏倚和混杂。",done:"使用 NHANES 或其他公开数据复现一张结果表，并写出限制。",link:"assessment",mode:"parallel"},
  {time:"4–6 个月",title:"学习生命周期与公共营养",goal:"理解个体需求与食物环境、文化、经济和政策之间的联系。",learn:"孕期至老年营养、健康行为、公共营养、食品系统、公平和政策评价。",done:"为一个明确人群制作有引用、可读且不过度推断的营养教育材料。",link:"public"},
  {time:"按方向 4–6 个月",title:"选择一个应用方向",goal:"在运动营养、食品科学或生命周期营养中形成可以实践的专长。",learn:"根据方向学习供能与恢复、食品加工与安全，或特定生命阶段的需求。",done:"完成案例分析、实验设计或循证综述。",link:"sports-nutrition",mode:"choice"},
  {time:"按方向 4–6 个月",title:"进入一个现代前沿",goal:"学习微生物组、代谢组和个性化营养的数据与因果问题。",learn:"组学测量、高维数据、预测、干预、可重复性、伦理和隐私。",done:"用开放数据完成分析，或系统比较一个前沿主张的证据。",link:"frontiers",mode:"choice"},
  {time:"从第三阶段持续",title:"持续完成研究与应用项目",goal:"把营养知识转化为透明、可复查的成果。",learn:"预注册、数据字典、代码、版本控制、科学写作和公众传播。",done:"发布包含数据来源、方法、结果、不确定性和适用边界的完整项目。",link:"projects",mode:"ongoing"}
 ],
 tools:[
  ["文献与指南",[["PubMed","https://pubmed.ncbi.nlm.nih.gov/","检索营养与健康研究"],["Cochrane Library","https://www.cochranelibrary.com/","查找系统综述和临床证据"],["Zotero","https://www.zotero.org/","管理论文、指南和引用"]]],
  ["食品与膳食数据",[["USDA FoodData Central","https://fdc.nal.usda.gov/","查询食品成分与数据来源"],["NHANES","https://wwwn.cdc.gov/nchs/nhanes/Default.aspx","获取膳食、人体测量与健康调查数据"],["FAOSTAT","https://www.fao.org/faostat/","分析全球食物供给、农业与营养相关数据"]]],
  ["统计与复现",[["R","https://www.r-project.org/","营养流行病学与可复现分析"],["Python","https://www.python.org/","清洗食品、组学和开放调查数据"],["Quarto","https://quarto.org/","将代码、结果和解释合成研究报告"]]],
  ["前沿数据",[["Metabolomics Workbench","https://www.metabolomicsworkbench.org/","开放代谢组数据与标准"],["EMBL-EBI Training","https://www.ebi.ac.uk/training/online/","微生物组和组学分析教程"],["DAGitty","https://www.dagitty.net/","绘制因果图并检查调整策略"]]]
 ],
 books:[
  ["Human Nutrition 2e","https://pressbooks.oer.hawaii.edu/humannutrition2e22/","营养学 · 入门","夏威夷大学开放本科教材，覆盖营养素、评估和生命周期。"],
  ["OpenStax Anatomy and Physiology 2e","https://openstax.org/details/books/anatomy-and-physiology-2e","人体生理 · 入门","理解消化、循环、内分泌、肾脏和代谢的免费主教材。"],
  ["OpenStax Biology 2e","https://openstax.org/details/books/biology-2e","生命科学 · 入门","补齐细胞、遗传、进化和生命系统基础。"],
  ["OpenIntro Statistics","https://www.openintro.org/book/os/","统计 · 入门","免费教材、习题与数据，为营养研究方法打底。"],
  ["NIH Dietary Supplement Fact Sheets","https://ods.od.nih.gov/factsheets/list-all/","营养素 · 进阶","公开查询摄入量、来源、安全性和相互作用。"],
  ["Harvard Nutrition Source","https://nutritionsource.hsph.harvard.edu/","循证专题 · 进阶","用公共健康研究解释食物、营养素和膳食模式。"]
 ],
 portals:[
  ["Cornell","Nutritional Sciences BS","https://catalog.cornell.edu/programs/nutritional-sciences-bs/","2025+ 本科核心、基础要求和高级选修结构。"],
  ["Stanford","Introduction to Food and Health","https://www.coursera.org/learn/food-and-health/","面向初学者的食品、健康和行为公开课。"],
  ["Harvard","The Nutrition Source","https://nutritionsource.hsph.harvard.edu/","Harvard T.H. Chan 的循证营养专题入口。"],
  ["Yale","Psychology, Biology and Politics of Food","https://oyc.yale.edu/psychology/psyc-123","完整视频、讲义和阅读材料连接营养、行为和政策。"],
  ["暨南大学","食品营养学","https://higher.smartedu.cn/course/62354d779906eace0490a4b7","国家智慧教育平台上的中文本科课程。"],
  ["Wageningen","Nutrition, Exercise and Sports","https://courses.edx.org/asset-v1%3AWageningenX%2BNUTR107x%2B1T2022%2Btype%40asset%2Bblock%40NUTR107x-1T2022-CourseSyllabus.pdf","运动营养、供能、水合和补充剂课程框架。"]
 ]
};
