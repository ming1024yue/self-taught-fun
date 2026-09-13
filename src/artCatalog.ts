import {r,type Curriculum,type SubjectConfig,type Topic} from "./subjectTypes";

const t=(title:string,intro:string,resources:ReturnType<typeof r>[]):Topic=>({title,intro,resources});
const tc=(title:string,intro:string,resources:ReturnType<typeof r>[],curriculum:Curriculum):Topic=>({title,intro,resources,curriculum});
const start=["开始之前",[["intro","本站目的"],["how","如何使用本站"],["plan","学习规划"]]] as const;

const fineArtsTopics:Record<string,Topic>={
 tools:t("学习工具","工具只服务于观察、实验、记录和呈现。先建立手上功夫与视觉判断，再按媒介逐步增加软件和设备。",[]),
 curriculum:tc("本科课程地图","参考 RISD 的共同基础训练与 Yale 的工作室制美术本科目标：先跨媒介建立观察、形式和材料基础，再把创作与艺术史、理论及批评连接，最终在一个方向形成成熟作品。",[
  r("RISD Experimental and Foundation Studies","https://www.risd.edu/academics/experimental-and-foundation-studies","入门","公开讲义","无需前置","RISD 所有本科生共享的基础工作室结构，覆盖绘画、设计、空间动态、项目讲评与独立探索。"),
  r("Yale Undergraduate Art Program","https://art.yale.edu/program/undergraduate","进阶","公开讲义","基础造型与作品记录","官方培养目标强调跨媒介基础、艺术史与理论，以及在至少一个艺术方向达到较高熟练度。"),
  r("RISD Sculpture BFA","https://www.risd.edu/academics/sculpture/bachelors-program","高级","公开讲义","二维与三维基础","从木材、金属、铸造和装置等材料实验进入个人语言、当代议题与毕业展览。")
 ],{
  basis:"按每周 6–10 小时学习，完整核心约需 21–31 个月。美术无法只靠观看课程完成：每个阶段都要持续创作、记录过程、接受批评并重做作品。",
  reference:["RISD Experimental and Foundation Studies","https://www.risd.edu/academics/experimental-and-foundation-studies"],
  stages:[
   {title:"观察与二维基础",courses:"素描、构图、色彩、视觉语言与材料实验",practice:"建立一本持续使用的速写本，完成观察、记忆和抽象三组练习。"},
   {title:"空间、材料与时间",courses:"立体构成、雕塑、摄影、影像、声音与装置入门",practice:"用同一主题完成二维、三维和时间媒介三个版本。"},
   {title:"艺术史、理论与写作",courses:"全球艺术史、现代与当代艺术、美学、视觉文化和批评写作",practice:"完成作品形式分析、语境研究和展览评论各一篇。"},
   {title:"工作室方向深化",courses:"绘画与版画、雕塑与装置、摄影与影像中任选一个主方向",practice:"围绕一个问题连续创作 6–10 件相互关联的作品。"},
   {title:"独立创作与公开呈现",courses:"研究方法、工作室批评、策展、档案与职业伦理",practice:"完成毕业作品组、创作陈述、过程档案和线上或线下展览。"}
  ]
 }),
 foundations:t("观察、构图与材料基础","训练看见比例、空间、明暗、节奏、色彩和材料行为，并通过反复制作把视觉判断变成可控的表达。",[
  r("RISD Foundation Studios","https://www.risd.edu/academics/experimental-and-foundation-studies","入门","公开讲义","无需前置","以绘画、设计和空间动态三个工作室理解艺术与设计共同的观察和制作方法。"),
  r("清华大学：图案审美与创作","https://higher.smartedu.cn/course/69811b1995df98bb27c3bf6f","入门","公开课","无需前置","从自然素材、形式美、构思构图和手绘演示进入原创图案与视觉表达。"),
  r("Introduction to Art: Design, Context, and Meaning","https://open.umn.edu/opentextbooks/textbooks/introduction-to-art-design-context-and-meaning","入门","开放教材","无需前置","免费教材覆盖形式、材料、描述、意义、身份、权力与伦理，可作为视觉素养主教材。")
 ]),
 drawing:t("素描与观察","把素描作为研究世界和生成想法的方法，训练比例、透视、结构、明暗、动作与空间，而非只追求照片式再现。",[
  r("Yale ART 114: Basic Drawing","https://www.art.yale.edu/courses/art114","入门","公开讲义","无需前置","从观察绘画进入空间与画面语法，兼顾技术问题和概念问题。"),
  r("清华大学：山水写生","https://higher.smartedu.cn/course/6786ec9c225d72705e5dc395","进阶","公开课","基础素描","以中国画视角训练提炼、结构、形色、质地、空间、平衡和节奏。")
 ]),
 "color-form":t("色彩、形式与空间","理解色相、明度、纯度、对比、比例、节奏、层级和空间关系，并用系列实验形成自己的形式判断。",[
  r("清华大学：图案审美与创作","https://higher.smartedu.cn/course/69811b1995df98bb27c3bf6f","入门","公开课","无需前置","通过图案案例与绘制练习掌握形式语言、构图和原创思维。"),
  r("RISD Design Studio","https://www.risd.edu/academics/experimental-and-foundation-studies","进阶","公开讲义","基础素描","组织视觉与感官元素，通过对象、空间和体验传递意义。"),
  r("清华大学：空间形态构成","https://higher.smartedu.cn/course/68018782b836e5522a7c0db8","进阶","公开课","二维构成基础","从形态、结构、材料和空间关系进入立体构成实践。")
 ]),
 "art-history":t("全球艺术史与视觉文化","学习把作品放回技术、宗教、政治、经济和社会语境中，避免把单一西方时间线当成全部艺术史。",[
  r("Smarthistory","https://smarthistory.org/","入门","开放教材","无需前置","免费艺术史资源，按时期、地区、主题和博物馆组织文章与视频。"),
  r("Open Yale: Roman Architecture","https://oyc.yale.edu/history-of-art/hsar-252","进阶","公开课","世界史基础","完整课程以建筑、城市、壁画和社会生活研究罗马世界，并包含论文任务。"),
  r("MIT: Art Since 1940","https://ocw.mit.edu/courses/4-651-art-since-1940-fall-2010/","进阶","公开课","现代史与艺术史导论","通过讲义、阅读和写作任务讨论二战后的全球艺术、文化与政治。")
 ]),
 "painting-printmaking":t("绘画与版画","从颜料、底材、层次、边缘、笔触和复制机制出发，逐步形成图像、材料与观念之间的一致关系。",[
  r("RISD Painting BFA","https://www.risd.edu/academics/painting/bachelors-program","进阶","公开讲义","素描、色彩与构图","参考工作室、艺术史、理论、个别指导和毕业项目之间的完整培养关系。"),
  r("清华大学：山水写生","https://higher.smartedu.cn/course/6786ec9c225d72705e5dc395","进阶","公开课","基础素描","通过现场写生、作业点评和中国画空间语言训练观察与表达。"),
  r("The Met: Heilbrunn Timeline of Art History","https://www.metmuseum.org/toah/","高级","开放教材","艺术史基础","以馆藏作品、时间线和专题文章研究绘画媒介及其历史语境。")
 ]),
 "sculpture-installation":t("雕塑与装置","学习体量、结构、重力、场域、身体和时间，逐步从材料练习进入装置、行为与跨媒介创作。",[
  r("RISD Sculpture BFA","https://www.risd.edu/academics/sculpture/bachelors-program","入门","公开讲义","空间与材料基础","官方课程结构覆盖木材、金属、铸造、行为、装置、影像与毕业展。"),
  r("清华大学：空间形态构成","https://higher.smartedu.cn/course/68018782b836e5522a7c0db8","入门","公开课","无需前置","用材料、结构和空间练习建立三维形态的感知与表达。"),
  r("MIT: Introduction to the Visual Arts","https://ocw.mit.edu/courses/4-301-introduction-to-the-visual-arts-spring-2007/","高级","公开课","基础造型与材料实验","以影像、雕塑和公共空间项目连接概念、材料、历史语境与工作室批评。")
 ]),
 "photography-media":t("摄影、影像与新媒体","掌握曝光、光线、构图、编辑、声音和时间结构，同时分析图像如何被生产、传播和相信。",[
  r("MIT: Introduction to Photography and Related Media","https://ocw.mit.edu/courses/4-341-introduction-to-photography-and-related-media-fall-2007/","入门","公开课","无需前置","涵盖相机、曝光、暗房、数字成像、灯光、主题项目与持续讲评。"),
  r("MIT: Fundamentals of Computational Media Design","https://ocw.mit.edu/courses/mas-110-fundamentals-of-computational-media-design-fall-2008/pages/syllabus/","进阶","公开课","基础编程或数字媒介","用计算、交互、图像与声音探索新的表达系统。"),
  r("Smithsonian Open Access","https://www.si.edu/openaccess","进阶","项目平台","图像编辑与版权常识","使用可开放下载的馆藏图像进行再创作、视觉研究和策展实验。")
 ]),
 contemporary:t("现代、当代与跨媒介实践","从观念、制度、身份、技术、生态和公共空间理解当代艺术，并学会判断作品形式是否真正支撑其问题意识。",[
  r("MIT: Art Since 1940","https://ocw.mit.edu/courses/4-651-art-since-1940-fall-2010/","入门","公开课","艺术史导论","通过全球案例、讲义和写作任务理解战后艺术与批评。"),
  r("清华大学：艺术的启示","https://higher.smartedu.cn/course/6786ec4c225d72705e5dc29e","入门","公开课","无需前置","从作品、艺术家和文化语境进入艺术观看与思考。"),
  r("Tate Research","https://www.tate.org.uk/research","高级","公开讲义","现代与当代艺术史","通过研究项目、论文和档案追踪当代艺术的制度、媒介与社会问题。")
 ]),
 critique:t("工作室批评与艺术写作","练习描述作品、提出问题、给出可操作反馈，并用作品陈述、研究笔记和评论建立清晰而不过度解释的创作语言。",[
  r("RISD: In the Studio","https://www.risd.edu/academics/experimental-and-foundation-studies","入门","公开讲义","完成至少三件作品","理解项目讲评如何帮助创作者说明意图、检验过程并反思作品。"),
  r("MIT: Art Since 1940 Assignments","https://ocw.mit.edu/courses/4-651-art-since-1940-fall-2010/pages/assignments/","进阶","公开讲义","艺术史导论与写作基础","用短评、比较分析和研究论文训练证据充分的艺术写作。"),
  r("Purdue OWL: Art History","https://owl.purdue.edu/owl/subject_specific_writing/writing_in_art_history/index.html","进阶","公开讲义","基础英文阅读","学习形式分析、图像分析、理论应用、引用与艺术史论文结构。")
 ]),
 projects:t("独立创作、策展与作品集","把研究问题转化为连续作品；保存草图、失败版本、反馈和修改依据，最后以展览或数字档案公开呈现。",[
  r("Smithsonian Open Access","https://www.si.edu/openaccess","入门","项目平台","艺术史与版权基础","用开放馆藏策划主题展、重构档案或开展视觉研究。"),
  r("The Met Open Access","https://www.metmuseum.org/about-the-met/policies-and-documents/open-access","进阶","项目平台","图像研究与基础数据处理","使用公共领域图像和开放数据完成策展、图像或数据艺术项目。"),
  r("Harvard Art Museums API","https://harvardartmuseums.org/collections/api","高级","项目平台","基础编程","基于馆藏元数据制作数字展览、可视化或计算艺术史项目。")
 ]),
 books:t("书单与资源","集中查看开放美术教材、博物馆出版物与大学公开课程。",[])
};

export const fineArts:SubjectConfig={
 slug:"fine-arts",name:"美术",en:"FINE ARTS",
 intro:"美术不是风格模仿，而是通过观察、材料、历史和持续创作建立独立的视觉语言。这条路径从素描、色彩与空间开始，连接艺术史、跨媒介实践和工作室批评，最终形成能够公开呈现的作品体系。",
 caution:"使用颜料、溶剂、粉尘、刀具、木工、金工或电气设备时，请先了解通风、防护和操作规范；尊重作品版权、肖像权、文化语境与展览场所，不把临摹或 AI 生成内容冒充原创。",
 groups:[start,["起点与课程地图",[["tools","学习工具"],["curriculum","本科课程地图"],["foundations","观察、构图与材料基础"]]],["视觉与历史基础",[["drawing","素描与观察"],["color-form","色彩、形式与空间"],["art-history","全球艺术史与视觉文化"]]],["工作室方向",[["painting-printmaking","绘画与版画"],["sculpture-installation","雕塑与装置"],["photography-media","摄影、影像与新媒体"]]],["当代实践",[["contemporary","现代、当代与跨媒介实践"],["critique","工作室批评与艺术写作"],["projects","独立创作、策展与作品集"],["books","书单与资源"]]]],
 topics:fineArtsTopics,
 phases:[
  {time:"3–4 个月",title:"建立观察与造型基础",goal:"能够分析比例、空间、明暗和构图，并用草图快速发展想法。",learn:"观察素描、透视、构图、黑白关系、速写和基础材料。",done:"完成 30 页以上速写本和三组经过修改的观察作品。",link:"drawing"},
  {time:"4–6 个月",title:"跨越二维、三维与时间媒介",goal:"理解不同材料如何改变形式、观看方式和意义。",learn:"色彩、图案、立体构成、摄影、影像、声音和基础装置。",done:"围绕同一主题完成三种媒介实验并进行一次公开讲评。",link:"color-form"},
  {time:"同步进行 4–6 个月",title:"贯穿艺术史、理论与写作",goal:"能够把作品放回历史和社会语境，而不只表达个人喜好。",learn:"全球艺术史、现代与当代艺术、视觉文化、形式分析和引用。",done:"完成三篇有图像、出处和论证的短文。",link:"art-history",mode:"parallel"},
  {time:"按方向 6–9 个月",title:"选择一个工作室主方向",goal:"在一种媒介上形成稳定技能和连续问题意识。",learn:"绘画与版画、雕塑与装置、摄影与影像中任选其一。",done:"完成 6–10 件相互关联的作品及过程档案。",link:"painting-printmaking",mode:"choice"},
  {time:"4–6 个月",title:"进入当代与跨媒介实践",goal:"让材料、观念、场域和受众形成清楚关系。",learn:"当代艺术、公共与数字媒介、策展、伦理和制度批评；项目主题可以自行选择。",done:"完成一个跨媒介或场域项目，并根据反馈至少迭代一次。",link:"contemporary"},
  {time:"从第一阶段持续",title:"持续创作、讲评与公开呈现",goal:"建立可回看、可讨论、可持续发展的个人实践。",learn:"工作室习惯、同伴讲评、艺术写作、作品摄影、档案和展览。",done:"发布毕业作品组、创作陈述、过程记录和线上或线下展览。",link:"projects",mode:"ongoing"}
 ],
 tools:[
  ["记录与研究",[["Zotero","https://www.zotero.org/","管理艺术史、理论和创作研究资料"],["PureRef","https://www.pureref.com/","整理视觉参考与情绪板"],["Notion","https://www.notion.so/","记录草图、实验、讲评和修改过程"]]],
  ["图像与版面",[["Krita","https://krita.org/","开源绘画与图像创作"],["GIMP","https://www.gimp.org/","开源图像编辑与合成"],["Inkscape","https://inkscape.org/","开源矢量图形与版面制作"]]],
  ["三维、影像与声音",[["Blender","https://www.blender.org/","开源三维建模、动画和渲染"],["DaVinci Resolve","https://www.blackmagicdesign.com/products/davinciresolve","视频剪辑、调色和声音后期"],["Audacity","https://www.audacityteam.org/","开源录音与声音编辑"]]],
  ["开放馆藏",[["Smithsonian Open Access","https://www.si.edu/openaccess","公共领域馆藏与开放数据"],["The Met Open Access","https://www.metmuseum.org/about-the-met/policies-and-documents/open-access","馆藏图像、元数据和 API"],["Harvard Art Museums","https://harvardartmuseums.org/collections","检索和研究开放艺术馆藏"]]]
 ],
 books:[
  ["Introduction to Art: Design, Context, and Meaning","https://open.umn.edu/opentextbooks/textbooks/introduction-to-art-design-context-and-meaning","视觉素养 · 入门","免费教材，涵盖形式、材料、意义、身份、权力与伦理。"],
  ["Smarthistory","https://smarthistory.org/","全球艺术史 · 入门","开放文章与视频，适合按地区、时期和主题补齐艺术史。"],
  ["The Met Heilbrunn Timeline of Art History","https://www.metmuseum.org/toah/","艺术史 · 进阶","用馆藏、时间线和专题文章连接作品与历史语境。"],
  ["Getty Publications Virtual Library","https://www.getty.edu/publications/virtuallibrary/","艺术史与保存 · 进阶","免费阅读 Getty 已数字化的艺术史、建筑与文物保护出版物。"],
  ["MetPublications","https://www.metmuseum.org/art/metpublications","博物馆出版 · 进阶","搜索并在线阅读大都会艺术博物馆的展览图录和研究出版物。"]
 ],
 portals:[
  ["清华","图案审美与创作","https://higher.smartedu.cn/course/69811b1995df98bb27c3bf6f","中文基础课程，连接审美、形式语言和原创图案实践。"],
  ["清华","山水写生","https://higher.smartedu.cn/course/6786ec9c225d72705e5dc395","从观察、提炼、结构、空间到中国画表达的完整训练。"],
  ["Yale","Undergraduate Art Program","https://art.yale.edu/program/undergraduate","工作室制本科目标、媒介方向和能力结构。"],
  ["RISD","Experimental and Foundation Studies","https://www.risd.edu/academics/experimental-and-foundation-studies","绘画、设计和空间动态共同构成的本科基础训练。"],
  ["MIT","Fine Arts on OpenCourseWare","https://ocw.mit.edu/search/?t=Fine%20Arts","艺术史、摄影、视觉研究和媒体艺术开放课程。"],
  ["Yale","Open Yale History of Art","https://oyc.yale.edu/history-of-art","可完整观看并配合讲义学习的艺术史课程。"]
 ]
};

const designTopics:Record<string,Topic>={
 tools:t("学习工具","工具不是设计能力本身。先用纸笔表达结构，再选择适合研究、排版、原型、三维或协作的工具，并保存每次决策依据。",[]),
 curriculum:tc("本科课程地图","参考 Carnegie Mellon B.Des 的当前课程结构：从视觉化、设计研究、历史、经验与心理学基础开始，再进入传播、产品和环境方向，并以研究、系统和真实项目贯穿。",[
  r("CMU Design B.Des","https://coursecatalog.web.cmu.edu/schools-colleges/collegeoffinearts/schoolofdesign/design-bdes/","入门","公开讲义","无需前置","2026–27 官方目录列出基础年、设计研究、视觉化、摄影、心理学，以及传播、产品和环境方向。"),
  r("CMU B.Des Learning Outcomes","https://www.design.cmu.edu/about-our-programs/undergraduate-degrees/learning-outcomes-bdes-degree-program","进阶","公开讲义","设计基础","用官方学习成果检查研究、方法、制作、批评、协作和系统思维是否完整。"),
  r("RISD Experimental and Foundation Studies","https://www.risd.edu/academics/experimental-and-foundation-studies","入门","公开讲义","无需前置","以绘画、设计与空间动态建立所有设计方向共享的感知、构成和制作基础。")
 ],{
  basis:"按每周 6–10 小时学习，完整核心约需 20–30 个月。每个阶段必须包含真实问题、用户或场景、原型、测试和复盘；软件熟练度不能代替设计判断。",
  reference:["CMU Design B.Des","https://coursecatalog.web.cmu.edu/schools-colleges/collegeoffinearts/schoolofdesign/design-bdes/"],
  stages:[
   {title:"形式与视觉化基础",courses:"素描、构成、色彩、摄影、设计史与视觉表达",practice:"用文字、图像、对象和空间分别表达同一信息。"},
   {title:"研究、心理与原型",courses:"用户研究、人因、认知、定性与定量方法、原型和测试",practice:"观察一个真实场景，建立证据链并完成两轮原型迭代。"},
   {title:"传播、产品与环境",courses:"信息与交互、产品形态与制造、空间与服务触点",practice:"在三个尺度各完成一个小项目，再选择主方向。"},
   {title:"系统、服务与未来",courses:"服务设计、系统映射、可持续、政策、商业和未来情景",practice:"围绕复杂问题绘制系统图，比较不同干预的副作用。"},
   {title:"综合毕业项目",courses:"项目定义、跨专业协作、实施、评估、伦理与作品集",practice:"完成研究、方案、原型、测试、迭代和反思闭环。"}
  ]
 }),
 foundations:t("设计基础与视觉化","训练观察、构图、色彩、形态、摄影、手绘和模型制作，使想法能够被迅速外化、比较和修改。",[
  r("CalArts: Fundamentals of Graphic Design","https://www.coursera.org/learn/fundamentals-of-graphic-design","入门","公开课","无需前置","通过图像、字体、形状、色彩和构图项目建立视觉沟通基础；完整访问以平台当期政策为准。"),
  r("清华大学：图案审美与创作","https://higher.smartedu.cn/course/69811b1995df98bb27c3bf6f","入门","公开课","无需前置","用图案、文化、形式美和手绘演示训练观察、原创和视觉组织。"),
  r("RISD Foundation Studios","https://www.risd.edu/academics/experimental-and-foundation-studies","进阶","公开讲义","无需前置","参考绘画、设计和空间动态三类工作室组织自己的基础项目。")
 ]),
 "visual-communication":t("视觉传达与信息设计","学习图像、文字、色彩、网格、叙事和数据如何建立层级、引导注意并准确传递信息。",[
  r("CalArts: Fundamentals of Graphic Design","https://www.coursera.org/learn/fundamentals-of-graphic-design","入门","公开课","设计基础","围绕图像生成、字体、形状色彩和构图完成实践；完整访问以平台当期政策为准。"),
  r("MIT: Fundamentals of Computational Media Design","https://ocw.mit.edu/courses/mas-110-fundamentals-of-computational-media-design-fall-2008/pages/syllabus/","进阶","公开课","视觉基础与基础编程","探索图像、文字、交互、声音和计算媒介的组合方式。"),
  r("Data Visualization: A Practical Introduction","https://socviz.co/","高级","开放教材","基础统计","免费在线教材，学习从数据、图形语法到可复现信息表达。")
 ]),
 typography:t("字体、版式与信息层级","从字形、可读性、网格、节奏和多屏适配理解文字系统，并用内容结构而非装饰决定版面。",[
  r("CalArts: Introduction to Typography","https://www.coursera.org/learn/typography","入门","公开课","视觉设计基础","学习字形、字体史、排版实践和同伴反馈；完整访问以平台当期政策为准。"),
  r("Practical Typography","https://practicaltypography.com/","入门","开放教材","无需前置","免费在线参考书，用清楚规则改善正文、层级、间距和页面可读性。"),
  r("W3C: Making Content Usable","https://www.w3.org/WAI/cognitive/","高级","公开讲义","排版与无障碍基础","把文字、结构、导航和认知负担放进更广义的可用性框架。")
 ]),
 "research-ux":t("设计研究、用户体验与人因","从观察、访谈、任务分析和可用性测试获得证据；区分用户说什么、做什么和真正需要什么。",[
  r("Stanford d.school: Design Thinking Bootleg","https://dschool.stanford.edu/tools/design-thinking-bootleg","入门","公开讲义","无需前置","可下载的方法卡覆盖同理、定义、发想、原型和测试。"),
  r("清华大学：设计的人因与文化","https://higher.smartedu.cn/course/69811b4495df98bb27c3bfc3","进阶","公开课","设计基础","从人因理论进入用户研究、任务分析、界面评估、跨文化和人机交互。"),
  r("CalArts: UX Design Fundamentals","https://www.coursera.org/learn/ux-design-fundamentals","进阶","公开课","视觉设计基础","通过用户体验流程、线框、原型和测试完成项目；完整访问以平台当期政策为准。")
 ]),
 interaction:t("交互设计与无障碍","设计状态、反馈、导航、错误恢复和多模态交互，并把键盘、屏幕阅读器、低视力和认知差异纳入基本要求。",[
  r("MIT: User Interface Design and Implementation","https://ocw.mit.edu/courses/6-831-user-interface-design-and-implementation-spring-2011/","进阶","公开课","基础编程与用户研究","学习人机交互原则、原型、实现、评估和团队项目。"),
  r("W3C Web Content Accessibility Guidelines","https://www.w3.org/WAI/standards-guidelines/wcag/","进阶","公开讲义","网页或产品设计基础","用国际标准检查感知、操作、理解与兼容性。"),
  r("清华大学：设计的人因与文化","https://higher.smartedu.cn/course/69811b4495df98bb27c3bfc3","高级","公开课","研究方法与交互基础","连接跨文化、医疗、人机协作和机器人交互等前沿场景。")
 ]),
 "game-design":t("游戏设计","把游戏视为规则、反馈、选择和玩家体验组成的系统。先用纸面原型验证核心玩法，再进入叙事、关卡、平衡、数字实现和团队制作。",[
  r("MIT: Introduction to Game Design Methods","https://ocw.mit.edu/courses/cms-301-introduction-to-game-design-methods-spring-2016/","入门","公开课","无需前置","从玩家中心的方法出发，练习快速原型、试玩测试和设计迭代，最终把概念发展为可玩的原型。"),
  r("CalArts: Introduction to Game Design","https://www.coursera.org/learn/game-design","入门","公开课","无需前置","通过纸面游戏学习核心机制、规则传达、平衡、叙事和角色；完整访问以平台当期政策为准。"),
  r("MIT: Introduction to Videogame Studies","https://ocw.mit.edu/courses/cms-300-introduction-to-videogame-studies-fall-2011/","进阶","公开课","基础游戏分析与英文阅读","从叙事、能动性、空间、系统、模拟、身份和文化角度分析游戏，并配有讲义与写作任务。"),
  r("MIT: Creating Video Games","https://ocw.mit.edu/courses/cms-611j-creating-video-games-fall-2014/","高级","公开课","一种编程语言、游戏设计基础与团队协作","完整视频、讲义和学生项目覆盖跨专业制作、视觉与声音、编程、焦点测试和数据驱动迭代。")
 ]),
 product:t("产品、工业与制造设计","把需求、人体尺寸、形态、机构、材料、制造、成本和生命周期连接起来，通过实体原型检验方案。",[
  r("MIT: Product Design and Development","https://ocw.mit.edu/courses/15-783j-product-design-and-development-spring-2006/","进阶","公开课","设计基础与工程常识","项目制课程涵盖用户需求、概念生成、产品架构、工业设计和面向制造。"),
  r("MIT D-Lab II: Design","https://ocw.mit.edu/courses/ec-720j-d-lab-ii-design-spring-2010/","进阶","公开课","基础制作与团队协作","围绕资源受限社区的问题学习设计、实验、原型和负责任实施。"),
  r("CMU Design B.Des","https://coursecatalog.web.cmu.edu/schools-colleges/collegeoffinearts/schoolofdesign/design-bdes/","高级","公开讲义","形式、研究与原型基础","参考产品方向和跨尺度课程安排构建系统化选修。")
 ]),
 "service-systems":t("服务设计与系统思维","研究多个角色、触点、流程、制度和激励如何共同塑造体验，避免只优化界面而转移问题。",[
  r("GOV.UK Service Manual","https://www.gov.uk/service-manual","入门","开放教材","用户研究基础","公开说明如何理解需求、组建团队、设计端到端服务、测量表现与保障无障碍。"),
  r("Design Kit: Methods","https://www.designkit.org/methods","进阶","公开讲义","基础设计研究","IDEO.org 的开放方法库，覆盖研究、发想、原型和实施。"),
  r("CMU B.Des Learning Outcomes","https://www.design.cmu.edu/about-our-programs/undergraduate-degrees/learning-outcomes-bdes-degree-program","高级","公开讲义","传播、产品或环境方向基础","用系统关系、社会影响、协作和研究成果检查项目深度。")
 ]),
 futures:t("可持续设计与未来情景","用系统图、趋势、情景和转型路径研究长期变化，明确谁受益、谁承担成本以及方案可能产生的反作用。",[
  r("清华大学：设计未来导论","https://higher.smartedu.cn/course/687eb75c16c43a09c0e58aea","入门","公开课","设计基础","清华与 CMU 合作的开放课程，把未来学、系统思维、人类学和可持续转型结合。"),
  r("UNEP: Life Cycle Initiative","https://www.lifecycleinitiative.org/","进阶","公开讲义","环境科学或产品基础","学习生命周期思维、评价资料和可持续生产消费方法。"),
  r("CMU Transition Design","https://transitiondesign.net/","高级","项目平台","系统与服务设计","以复杂社会技术问题、长期愿景和多层级干预组织转型设计研究。")
 ]),
 "computational-ai":t("计算、生成式 AI 与新媒介设计","学习用代码、传感器和生成模型扩展设计空间，同时评估数据来源、偏差、版权、隐私和自动化边界。",[
  r("MIT: Fundamentals of Computational Media Design","https://ocw.mit.edu/courses/mas-110-fundamentals-of-computational-media-design-fall-2008/pages/syllabus/","入门","公开课","基础设计与编程","通过计算媒介项目连接视觉、声音、交互和算法。"),
  r("MIT: Introduction to Computational Thinking","https://computationalthinking.mit.edu/","进阶","公开课","高中数学与基础编程","用交互式材料训练模型、模拟、数据和计算表达。"),
  r("NIST AI Risk Management Framework","https://www.nist.gov/itl/ai-risk-management-framework","高级","公开讲义","研究方法、统计与 AI 基础","用公开框架识别生成式与智能产品的可靠性、公平、透明和治理风险。")
 ]),
 projects:t("综合项目与作品集","选择真实问题，完整呈现研究证据、取舍、原型、测试、迭代、影响和失败，而不是只展示漂亮终稿。",[
  r("Stanford d.school: Design Thinking Bootleg","https://dschool.stanford.edu/tools/design-thinking-bootleg","入门","公开讲义","无需前置","按方法卡完成一轮从研究到测试的小型项目。"),
  r("MIT D-Lab II: Design","https://ocw.mit.edu/courses/ec-720j-d-lab-ii-design-spring-2010/","进阶","公开课","设计研究与原型","参考课程项目将利益相关者、环境与实施约束纳入设计。"),
  r("W3C WAI Evaluation Tools","https://www.w3.org/WAI/test-evaluate/tools/","高级","项目平台","交互设计与无障碍基础","对真实网页或产品完成自动与人工相结合的无障碍评估。")
 ]),
 books:t("书单与资源","集中查看开放设计教材、方法库、标准与大学公开课程。",[])
};

export const design:SubjectConfig={
 slug:"design",name:"设计",en:"DESIGN",
 intro:"设计把人的需要、视觉表达、技术与社会系统转化为可以检验的方案。这条路径从形式与视觉化开始，经过研究、原型和评价，再选择传播、交互、产品、服务或未来设计方向，最终完成真实而负责任的项目。",
 caution:"设计涉及真实用户时，应取得知情同意并保护隐私；不得用诱导界面操纵用户。使用生成式 AI 时要核查来源、偏差和版权，并清楚标注其参与方式。产品与公共服务还需遵守安全、无障碍及所在地区法规。",
 groups:[start,["起点与课程地图",[["tools","学习工具"],["curriculum","本科课程地图"],["foundations","设计基础与视觉化"]]],["沟通与体验",[["visual-communication","视觉传达与信息设计"],["typography","字体、版式与信息层级"],["research-ux","设计研究、用户体验与人因"],["interaction","交互设计与无障碍"],["game-design","游戏设计"]]],["产品与系统",[["product","产品、工业与制造设计"],["service-systems","服务设计与系统思维"],["futures","可持续设计与未来情景"],["computational-ai","计算、生成式 AI 与新媒介设计"]]],["综合实践",[["projects","综合项目与作品集"],["books","书单与资源"]]]],
 topics:designTopics,
 phases:[
  {time:"3–4 个月",title:"建立形式与视觉化基础",goal:"能够迅速表达、比较和修改想法，而不是依赖软件模板。",learn:"观察、构成、色彩、摄影、手绘、模型、设计史和视觉语言。",done:"完成一组图像、版面、对象和空间的小型基础练习。",link:"foundations"},
  {time:"4–6 个月",title:"掌握研究、原型与测试",goal:"从真实证据定义问题，并用低成本原型验证假设。",learn:"观察、访谈、任务分析、综合、发想、原型、可用性测试和迭代。",done:"完成一个两轮以上迭代、包含研究记录和失败分析的项目。",link:"research-ux"},
  {time:"同步进行 3–5 个月",title:"贯穿心理、伦理与无障碍",goal:"理解人的能力差异、认知限制和设计权力。",learn:"人因、认知、隐私、无障碍、跨文化、包容性和研究伦理。",done:"依据 WCAG 或适用规范审查作品，并邀请真实用户测试。",link:"interaction",mode:"parallel"},
  {time:"按方向 6–9 个月",title:"选择一个专业方向",goal:"在视觉传达、交互、游戏、产品或服务设计中形成完整方法链。",learn:"根据方向深化字体与信息、界面与体验、游戏机制与试玩、材料与制造，或服务与系统。",done:"完成 2–3 个从研究到验证的方向项目。",link:"visual-communication",mode:"choice"},
  {time:"4–6 个月",title:"进入系统与前沿设计",goal:"能够处理长期、多角色和技术快速变化的问题。",learn:"系统映射、可持续、未来情景、计算媒介、生成式 AI 和治理；项目主题可以自行选择。",done:"完成一个系统图、多个未来情景及可检验的干预原型。",link:"futures"},
  {time:"从第二阶段持续",title:"持续完成真实项目与作品集",goal:"让作品集呈现判断过程、证据和影响，而不只是终稿。",learn:"项目定义、协作、实施、测试、写作、展示和复盘。",done:"发布 3–5 个完整案例，其中至少一个来自真实用户或组织。",link:"projects",mode:"ongoing"}
 ],
 tools:[
  ["视觉与版面",[["Figma","https://www.figma.com/","界面、版面、组件和协作原型"],["Penpot","https://penpot.app/","开源界面设计与交互原型"],["Inkscape","https://inkscape.org/","开源矢量图形、图标和版面"]]],
  ["研究与协作",[["Zotero","https://www.zotero.org/","管理研究、案例和引用"],["Miro","https://miro.com/","整理访谈、流程、服务蓝图和系统图"],["Dovetail","https://dovetail.com/","编码访谈材料并追踪研究证据"]]],
  ["原型与制作",[["Framer","https://www.framer.com/","制作高保真交互网页原型"],["Blender","https://www.blender.org/","开源三维建模、动画与渲染"],["Arduino","https://www.arduino.cc/","实体交互和电子原型"]]],
  ["游戏原型",[["Godot","https://godotengine.org/","开源二维与三维游戏引擎"],["Twine","https://twinery.org/","无需编程制作互动叙事原型"],["itch.io","https://itch.io/","发布原型、参加 Game Jam 并收集玩家反馈"]]],
  ["验证与无障碍",[["WAVE","https://wave.webaim.org/","辅助检查网页无障碍问题"],["Lighthouse","https://developer.chrome.com/docs/lighthouse/overview","检查性能、无障碍与最佳实践"],["WebAIM Contrast Checker","https://webaim.org/resources/contrastchecker/","检查文字和背景色彩对比度"]]]
 ],
 books:[
  ["Introduction to Art: Design, Context, and Meaning","https://open.umn.edu/opentextbooks/textbooks/introduction-to-art-design-context-and-meaning","形式与语境 · 入门","免费教材，补齐视觉元素、材料、意义和伦理。"],
  ["Practical Typography","https://practicaltypography.com/","字体与版式 · 入门","免费在线参考书，建立清晰、可读的排版习惯。"],
  ["Design Kit: Methods","https://www.designkit.org/methods","设计方法 · 入门","开放方法库，适合在研究、发想、原型和实施阶段查用。"],
  ["GOV.UK Service Manual","https://www.gov.uk/service-manual","服务设计 · 进阶","公开的端到端服务、研究、敏捷、度量和无障碍实践手册。"],
  ["Data Visualization: A Practical Introduction","https://socviz.co/","信息设计 · 进阶","免费在线书，以 R 和图形语法训练数据表达。"],
  ["W3C WCAG","https://www.w3.org/WAI/standards-guidelines/wcag/","无障碍 · 进阶","数字产品无障碍的核心国际标准与配套说明。"]
 ],
 portals:[
  ["清华","图案审美与创作","https://higher.smartedu.cn/course/69811b1995df98bb27c3bf6f","从审美、形式和文化进入原创视觉实践。"],
  ["清华","设计的人因与文化","https://higher.smartedu.cn/course/69811b4495df98bb27c3bfc3","连接用户研究、人因、跨文化和交互设计。"],
  ["清华","设计未来导论","https://higher.smartedu.cn/course/687eb75c16c43a09c0e58aea","清华与 CMU 合作的系统、未来和可持续设计课程。"],
  ["CMU","Design B.Des","https://coursecatalog.web.cmu.edu/schools-colleges/collegeoffinearts/schoolofdesign/design-bdes/","当前本科课程、方向、研究与系统能力结构。"],
  ["MIT","Design on OpenCourseWare","https://ocw.mit.edu/search/?q=design","产品、交互、计算媒介、工程与社会设计开放课程。"],
  ["Stanford","d.school Resources","https://dschool.stanford.edu/resources","设计思维、研究、原型和教学方法的开放资源。"]
 ]
};
