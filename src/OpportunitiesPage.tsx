import GlobalHeader from "./GlobalHeader";
import {pick,titleFromId,useLanguage} from "./i18n";

const base=import.meta.env.BASE_URL;

type Competition={
 name:string;
 url:string;
 access:string;
 cadence:string;
 format:string;
 cost:string;
 result:string;
 note:string;
};

type CompetitionGroup={id:string;title:string;en:string;description:string;items:Competition[]};

type Credential={
 name:string;
 url:string;
 field:string;
 level:string;
 format:string;
 requirement:string;
 result:string;
 note:string;
};

const competitionGroups:CompetitionGroup[]=[
 {id:"coding",title:"编程与算法",en:"PROGRAMMING",description:"适合用稳定排名和解题记录检验算法、实现与临场调试能力。",items:[
  {name:"Codeforces",url:"https://codeforces.com/contests",access:"多数轮次面向全球开放",cadence:"高频举办",format:"个人在线限时赛，可虚拟参赛",cost:"免费",result:"Rating、排名与公开提交记录",note:"Div. 3 和 Educational Round 更适合作为起点；先稳定完成简单题，再追求速度。"},
  {name:"AtCoder",url:"https://atcoder.jp/contests/",access:"面向全球开放",cadence:"每周及周期性举办",format:"个人在线限时赛",cost:"免费",result:"Rating、排名与公开提交记录",note:"AtCoder Beginner Contest 的难度梯度清楚，适合建立长期参赛节奏。"},
  {name:"LeetCode 周赛与双周赛",url:"https://leetcode.com/contest/",access:"注册用户可参加",cadence:"每周",format:"个人在线限时赛",cost:"免费参赛",result:"Contest Rating、排名与解题记录",note:"题型贴近常见算法面试；适合已经学过基础数据结构的学习者。"},
  {name:"Advent of Code",url:"https://adventofcode.com/events",access:"面向所有学习者",cadence:"每年 12 月",format:"每日编程谜题，可建私人排行榜",cost:"免费",result:"星级记录、代码仓库与私人排名",note:"可以使用任意语言，适合把连续完成记录整理成公开作品。"}
 ]},
 {id:"data",title:"数据科学与人工智能",en:"DATA & AI",description:"通过公开数据、统一指标和排行榜验证建模、实验与复现能力。",items:[
  {name:"Kaggle Competitions",url:"https://www.kaggle.com/competitions",access:"多数赛题公开，个别有限制",cadence:"常年滚动",format:"个人或团队在线提交",cost:"通常无报名费",result:"排行榜、奖牌、Notebook 与方案",note:"从 Getting Started 或 Playground 开始；参赛前逐项核对数据许可和组队规则。"},
  {name:"DrivenData",url:"https://www.drivendata.org/competitions/",access:"面向全球数据学习者",cadence:"常年有练习或正式赛",format:"在线建模与提交",cost:"通常免费",result:"排名、可复现代码与社会影响案例",note:"赛题集中在健康、教育、气候与公共服务，实践价值强。"},
  {name:"Zindi",url:"https://zindi.africa/competitions",access:"按赛题核对地区与身份",cadence:"常年滚动",format:"个人或团队在线提交",cost:"通常免费",result:"排行榜、积分与项目记录",note:"覆盖金融、农业、语言和公共服务，包含适合初学者的长期练习赛。"},
  {name:"阿里云天池竞赛",url:"https://tianchi.aliyun.com/competition/gameList/activeList",access:"按赛题核对实名、地区与组队规则",cadence:"常年滚动",format:"线上数据与算法竞赛",cost:"多数赛题免费",result:"排行榜、证书或获奖记录",note:"中文赛题较多，适合寻找国内产业数据、算法和应用型挑战。"}
 ]},
 {id:"math",title:"数学与建模",en:"MATHEMATICS",description:"既检验推理和计算，也检验如何把现实问题写成模型并清楚表达。",items:[
  {name:"Purple Comet! Math Meet",url:"https://www.purplecomet.org/",access:"全球中学生，需成人监督员",cadence:"每年一次",format:"中学或高中团队在线答题",cost:"免费",result:"国际排名与参赛记录",note:"团队在规定窗口内自行选择开赛时间，适合第一次参加国际在线数学竞赛。"},
  {name:"COMAP MCM / ICM",url:"https://comap.org/contests/mcm-icm",access:"高中或本科在校生，需学校指导教师",cadence:"每年一次",format:"1–3 人团队在线提交建模论文",cost:"付费",result:"评奖结果与完整研究报告",note:"强调开放问题、建模、数据分析和写作；报名费与当届日期以官方规则为准。"},
  {name:"Caribou Mathematics Competition",url:"https://www.cariboutests.com/public/about.php",access:"全球 K–12 学生",cadence:"每学年六轮",format:"个人在线数学竞赛",cost:"按年级和场次核对",result:"分数、全球排名与赛季积分",note:"覆盖多个年龄段，并提供往届题、互动题与在线练习。"},
  {name:"MathWorks Math Modeling Challenge",url:"https://m3challenge.siam.org/",access:"仅限官方列明地区的高中阶段学生",cadence:"每年一次",format:"团队在限定时间内线上完成报告",cost:"免费",result:"建模论文、评审结果与奖项",note:"完全在线，但地区和年级限制严格；报名前先阅读 Eligibility。"}
 ]},
 {id:"startup",title:"创业与社会创新",en:"ENTREPRENEURSHIP",description:"用真实问题、用户证据、商业模型和路演作品证明把想法推进到行动的能力。",items:[
  {name:"MIT Solve Challenges",url:"https://solve.mit.edu/challenges",access:"多数公开征集面向全球个人或团队",cadence:"年度与不定期挑战",format:"在线申请，多轮评审与路演",cost:"以当届规则为准",result:"入选记录、资金与加速支持",note:"更适合已经有原型、试点或真实影响证据的科技和社会创新项目。"},
  {name:"Hult Prize",url:"https://www.hultprize.org/",access:"在校学生团队",cadence:"每年一次",format:"线上申请、区域赛与全球决赛",cost:"按当届赛道核对",result:"路演、晋级记录与创业项目",note:"围绕社会问题建立可持续商业方案；先确认团队成员与参赛通道资格。"},
  {name:"Diamond Challenge",url:"https://diamondchallenge.org/",access:"全球高中生",cadence:"每年一次",format:"团队在线提交，优秀项目进入路演",cost:"以当届规则为准",result:"商业或社会创新方案与奖项",note:"适合从问题定义、用户研究、商业模型和演示文稿完整走一遍创业过程。"},
  {name:"Blue Ocean Student Entrepreneur Competition",url:"https://blueoceancompetition.org/",access:"全球高中生，可个人或组队",cadence:"每年一次",format:"提交 5 分钟视频路演",cost:"免费",result:"公开路演作品、评审与奖项",note:"全程虚拟，对只有早期创意、还没有正式公司的学生也友好。"}
 ]},
 {id:"games",title:"游戏设计与创作",en:"GAME DESIGN",description:"在明确主题和期限内完成可玩的作品，比只学习引擎和教程更能说明能力。",items:[
  {name:"GMTK Game Jam",url:"https://itch.io/jams/hosted-by/gmtk",access:"不限国家、年龄和经验",cadence:"每年一次",format:"个人或团队在线限时开发",cost:"公开加入",result:"可玩游戏、玩家评分与作品页",note:"规模大、反馈多；评分关注创意、体验、叙事、美术和音频。"},
  {name:"GitHub Game Off",url:"https://github.blog/tag/github-game-off/",access:"全球个人或团队",cadence:"通常每年 11 月",format:"在线开发并通过 GitHub、itch.io 提交",cost:"免费账号即可",result:"公开仓库、可玩作品与社区评分",note:"适合把代码、版本历史、说明文档和成品放在一起展示。"},
  {name:"js13kGames",url:"https://js13kgames.com/",access:"面向 Web 游戏开发者",cadence:"每年 8–9 月",format:"在线提交不超过 13KB 的网页游戏",cost:"免费参赛",result:"可玩作品、源代码与评审排名",note:"强约束会迫使参赛者理解浏览器、性能、压缩和游戏机制设计。"},
  {name:"itch.io Game Jams",url:"https://itch.io/jams",access:"各 Jam 规则不同",cadence:"全年持续更新",format:"在线比赛目录",cost:"多数免费",result:"作品页、社区反馈与排名",note:"它是赛事平台而非单一比赛；优先选择主办方清楚、规则完整、参与人数稳定的 Jam。"}
 ]}
];

const credentialGroups:{id:string;title:string;description:string;items:Credential[]}[]=[
 {id:"finance-credentials",title:"金融、会计与管理",description:"适合希望进入投资、风险、会计、精算或项目管理职业路径的学习者。",items:[
  {name:"CFA Program",url:"https://www.cfainstitute.org/programs/cfa-program",field:"投资分析与资产管理",level:"进阶至高级",format:"三个级别的英语机考",requirement:"Level I 有学历、在读或工作经历等报名条件",result:"通过考试不等于获得 CFA Charter；还需合格工作经验和会员资格",note:"课程覆盖伦理、财务分析、权益、固收、衍生品、组合管理和实务模块。投入和费用都很高，建议完成金融本科核心后再决定。"},
  {name:"FRM Certification",url:"https://www.garp.org/frm",field:"金融风险管理",level:"进阶",format:"两部分计算机考试",requirement:"考试可先参加；认证还需两年相关全职经验",result:"通过两部分考试并满足经验要求后获得 FRM 认证",note:"适合风险、量化、市场、信用和资金管理方向；数学、金融市场与估值基础很重要。"},
  {name:"ACCA Qualification",url:"https://www.accaglobal.com/gb/en/qualifications/glance/acca/how.html",field:"会计、审计与财务",level:"基础至高级",format:"分阶段考试、伦理模块与实践经验",requirement:"入学资格和免考取决于既有学历",result:"完成考试、伦理模块和 36 个月相关经验后申请会员",note:"体系完整但路线较长；适合明确从事会计、审计、税务或企业财务的人。"},
  {name:"SOA ASA Pathway",url:"https://www.soa.org/education/exam-req/edu-asa-req/",field:"精算、概率与风险",level:"进阶至高级",format:"多门考试、在线模块、VEE 与专业课程",requirement:"微积分、概率、统计、经济与金融基础",result:"完成完整路径并获批后取得 ASA 资格",note:"Exam P 和 FM 可以作为早期能力检验，但 ASA 是长期职业资格，不应把单科通过写成完整认证。"},
  {name:"PMI CAPM",url:"https://www.pmi.org/certifications/certified-associate-capm/",field:"项目管理",level:"入门至进阶",format:"150 题、180 分钟，多语言考试",requirement:"高中或同等学历，并完成 23 小时项目管理教育",result:"通过考试获得 CAPM 认证",note:"适合尚未满足 PMP 工作经验、但希望验证项目管理基础的学习者。"}
 ]},
 {id:"tech-credentials",title:"计算机与云基础设施",description:"优先选择有监考、明确考试大纲，或直接考查真实操作的认证。",items:[
  {name:"Linux Foundation LFCS",url:"https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/",field:"Linux 系统管理",level:"中级",format:"在线监考、命令行实操考试",requirement:"无形式前置要求，但需真实 Linux 管理经验",result:"通过后获得可验证的数字证书",note:"不是选择题，而是在 Linux 环境中解决实际任务，适合系统、运维和云计算方向。"},
  {name:"Linux Foundation CKA",url:"https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",field:"Kubernetes 与云原生",level:"高级",format:"在线监考、命令行实操考试",requirement:"Linux、容器、网络与 Kubernetes 管理基础",result:"通过后获得 CKA 认证",note:"适合已经部署和排障过真实集群的人；不建议把它作为第一次接触云计算的起点。"},
  {name:"AWS Certification",url:"https://aws.amazon.com/certification/",field:"云计算、架构、数据与 AI",level:"基础至专业",format:"在线监考或考试中心",requirement:"无强制前置认证，按级别建议相应实践经验",result:"通过对应考试获得可验证认证",note:"先按目标选择 Foundational、Associate、Professional 或 Specialty，不必从每一级逐个收集。"},
  {name:"Cisco CCNA",url:"https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",field:"计算机网络",level:"入门至进阶",format:"一门 200-301 CCNA 考试",requirement:"无强制前置要求",result:"通过后获得有效期三年的 CCNA 认证",note:"覆盖网络基础、IP、网络服务、安全和自动化；最好配合抓包、路由和网络配置实验。"}
 ]},
 {id:"language-credentials",title:"语言能力考试",description:"语言考试证明特定时间点的听、说、读、写水平，不能代替长期使用能力。",items:[
  {name:"IELTS",url:"https://ielts.org/take-a-test",field:"学术英语与通用英语",level:"按目标分数",format:"计算机考试，口语由考官进行",requirement:"无学历前置要求",result:"获得 Test Report Form；通常建议两年内使用",note:"用于留学、工作或移民时，应先确认接收机构要求 Academic、General Training 或特定考试类型。"},
  {name:"TOEFL iBT",url:"https://www.ets.org/toefl/test-takers/ibt/about.html",field:"学术英语",level:"按目标分数",format:"考试中心或符合地区政策的 Home Edition",requirement:"无学历前置要求",result:"官方成绩自考试日起有效两年",note:"2026 年起成绩报告采用新的 1–6 分制，并在过渡期提供可比总分；申请前查看院校最新要求。"},
  {name:"JLPT 日本语能力测试",url:"https://www.jlpt.jp/e/about/levelsummary.html",field:"日语",level:"N5 至 N1",format:"语言知识、阅读与听力的分级考试",requirement:"无学历前置要求；按当前能力选择级别",result:"获得对应级别的成绩单，合格者获得认定书",note:"N5 为基础起点，N1 要求理解较复杂、抽象且语速自然的日语；考试不直接测试口语和写作，准备时仍需单独训练输出能力。"},
  {name:"DELF / DALF",url:"https://www.france-education-international.fr/en/diplome/delf-tout-public",field:"法语",level:"A1 至 C2",format:"按级别测试听、说、读、写四项能力",requirement:"无学历前置要求；根据 CEFR 水平选择 DELF 或 DALF",result:"通过后获得对应级别的法国国家文凭",note:"DELF 覆盖 A1–B2，DALF 覆盖 C1–C2，适合用完整的四项技能检验法语水平。"},
  {name:"Goethe-Zertifikat",url:"https://www.goethe.de/ins/cn/zh/spr/prf.html",field:"德语",level:"A1 至 C2",format:"按级别和考试类型测试听、说、读、写",requirement:"无学历前置要求；部分级别可按模块参加",result:"通过相应考试或模块后获得歌德学院证书",note:"级别与欧洲语言共同参考框架对应；报名前应根据留学、工作或签证用途确认所需考试和最低等级。"},
  {name:"DELE",url:"https://examenes.cervantes.es/es/dele/que-es",field:"西班牙语",level:"A1 至 C2",format:"按级别测试阅读、听力、写作与口语",requirement:"无学历前置要求；按当前水平选择级别",result:"通过后获得对应级别的 DELE 西班牙语文凭",note:"由塞万提斯学院组织，适合需要长期、正式西班牙语能力证明的学习者；具体考期和考点以当届公告为准。"}
 ]}
];

function PageHeader(){return <GlobalHeader/>}

function CompetitionCard({item}:{item:Competition}){const{language}=useLanguage(),english=language==="en";return <article className="opportunity-card"><div className="opportunity-card-head"><span>{english?"See official eligibility rules":item.access}</span><small>{english?"See current schedule":item.cadence}</small></div><h3><a href={item.url} target="_blank" rel="noreferrer">{item.name}</a></h3><p>{english?"Check the official page for the current theme, eligibility, deadlines, submission format, and AI-use policy.":item.note}</p><dl><div><dt>{pick(language,"形式","Format")}</dt><dd>{english?"Online or hybrid; see the current rules":item.format}</dd></div><div><dt>{pick(language,"费用","Cost")}</dt><dd>{english?"See the current official rules":item.cost}</dd></div><div><dt>{pick(language,"可留下的证明","Evidence")}</dt><dd>{english?"A submission, ranking, review, award, or portfolio project":item.result}</dd></div></dl></article>}

function CredentialCard({item}:{item:Credential}){const{language}=useLanguage(),english=language==="en";return <article className="opportunity-card credential-card"><div className="opportunity-card-head"><span>{english?"Professional or academic qualification":item.field}</span><small>{english?"Level varies":item.level}</small></div><h3><a href={item.url} target="_blank" rel="noreferrer">{item.name}</a></h3><p>{english?"Review the official syllabus, eligibility, fees, experience requirements, validity period, and certification conditions before registering.":item.note}</p><dl><div><dt>{pick(language,"考试形式","Exam format")}</dt><dd>{english?"See the current official exam guide":item.format}</dd></div><div><dt>{pick(language,"前置与资格","Eligibility")}</dt><dd>{english?"Requirements vary by level and credential":item.requirement}</dd></div><div><dt>{pick(language,"完成结果","Outcome")}</dt><dd>{english?"A verifiable result or credential after all official requirements are met":item.result}</dd></div></dl></article>}

function VerificationNote({kind}:{kind:"赛事"|"考试"}){const{language}=useLanguage();return <section className="verification-note"><small>LAST REVIEWED / 2026.09</small><h2>{pick(language,"使用前请再次核对","Verify Before You Apply")}</h2><p>{language==="en"?"Schedules, eligibility, fees, regional restrictions, and rules can change. This directory is a guide, not a substitute for the organizer’s announcement; always read the current official rules before registering or paying.":`${kind}会调整时间、资格、费用、地区限制与规则。本站只负责筛选和说明，不代替主办方公告；报名和付款前务必阅读当届官方规则。`}</p></section>}

export default function OpportunitiesPage(){const{language}=useLanguage();return <div className="opportunity-page"><PageHeader/><main className="opportunity-main opportunity-landing">
 <section className="opportunity-hero"><small>COMPETITIONS & CREDENTIALS</small><h1>{pick(language,"比赛和资质","Competitions & Credentials")}</h1><p>{pick(language,"选择一种方式，把学习成果变成可以被看见、被验证的能力证明。","Choose a way to turn learning into visible, verifiable evidence of capability.")}</p></section>
 <section className="path-chooser" aria-label={pick(language,"选择验证路径","Choose a verification path")}>
  <a href={`${base}opportunities/competitions/`}><small>01 / COMPETITIONS</small><div><h2>{pick(language,"比赛","Competitions")}</h2><span>{pick(language,"用公开题目、排名和作品检验应用能力。","Test applied ability through open problems, rankings, and completed work.")}</span></div><b>{pick(language,"进入比赛目录","Open competition directory")}</b></a>
  <a href={`${base}opportunities/credentials/`}><small>02 / CREDENTIALS</small><div><h2>{pick(language,"资质","Credentials")}</h2><span>{pick(language,"用规范考试和职业认证证明专业能力。","Demonstrate professional knowledge through structured exams and certifications.")}</span></div><b>{pick(language,"进入资质目录","Open credential directory")}</b></a>
 </section>
 <section className="path-note"><p>{pick(language,"比赛和证书都不是学习的终点。选择与你的目标直接相关、规则透明，并能留下可验证成果的一条路径即可。","Neither a competition nor a certificate is the end of learning. Choose one transparent path that matches your goal and leaves verifiable evidence.")}</p></section>
 </main></div>}

export function CompetitionsPage(){const{language}=useLanguage(),english=language==="en";return <div className="opportunity-page"><PageHeader/><main className="opportunity-main">
 <section className="opportunity-detail-hero"><a href={`${base}opportunities/`}>{pick(language,"← 返回比赛和资质","← Back to competitions & credentials")}</a><small>COMPETITIONS</small><h1>{pick(language,"比赛","Competitions")}</h1><p>{pick(language,"通过统一题目、明确期限、公开排名或完整作品，检验自己能否真正运用所学知识。","Use shared problems, clear deadlines, rankings, or completed work to test whether you can apply what you have learned.")}</p></section>
 <section className="opportunity-section"><div className="opportunity-heading"><small>COMPETITION DIRECTORY</small><h2>{pick(language,"公开比赛","Open Competitions")}</h2><p>{pick(language,"优先收录可以线上参与、规则稳定且有官方入口的比赛。身份、地区、费用和 AI 使用规则可能逐届变化。","Priority is given to competitions with online participation, stable rules, and an official entry point. Eligibility, region, fees, and AI policies may change each year.")}</p></div><nav className="anchor-list" aria-label={pick(language,"比赛分类","Competition categories")}>{competitionGroups.map(group=><a href={`#${group.id}`} key={group.id}>{english?group.en:group.title}</a>)}</nav>{competitionGroups.map(group=><section className="opportunity-group" id={group.id} key={group.id}><div className="group-heading"><div><small>{group.en}</small><h2>{english?group.en:group.title}</h2></div><p>{english?"Open challenges selected to help learners test knowledge through a concrete submission or project.":group.description}</p></div><div className="opportunity-grid">{group.items.map(item=><CompetitionCard item={item} key={item.name}/>)}</div></section>)}</section>
 <VerificationNote kind="赛事"/>
 </main></div>}

export function CredentialsPage(){const{language}=useLanguage(),english=language==="en";return <div className="opportunity-page"><PageHeader/><main className="opportunity-main">
 <section className="opportunity-detail-hero"><a href={`${base}opportunities/`}>{pick(language,"← 返回比赛和资质","← Back to competitions & credentials")}</a><small>CREDENTIALS</small><h1>{pick(language,"资质","Credentials")}</h1><p>{pick(language,"通过规范考试取得可验证的成绩或职业资格，证明某一领域的知识与实践水平。","Use structured exams to earn a verifiable result or professional credential in a specific field.")}</p><aside>{pick(language,"通过单门考试不一定等于取得完整资格。报名前请确认学历、工作经验、会员资格与证书有效期要求。","Passing one exam may not grant the full credential. Confirm education, experience, membership, and validity requirements before registering.")}</aside></section>
 <section className="opportunity-section"><div className="opportunity-heading"><small>CREDENTIAL DIRECTORY</small><h2>{pick(language,"资格与能力考试","Qualifications & Skills Exams")}</h2><p>{pick(language,"只收录考试要求、认证条件和官方验证方式较清楚的体系。费用、考期、有效期与地区政策以报名时的官方页面为准。","Only systems with reasonably clear exam, certification, and verification requirements are included. Use the official page for current fees, dates, validity, and regional policies.")}</p></div><nav className="anchor-list" aria-label={pick(language,"资质分类","Credential categories")}>{credentialGroups.map(group=><a href={`#${group.id}`} key={group.id}>{english?titleFromId(group.id.replace("-credentials","")):group.title}</a>)}</nav>{credentialGroups.map(group=><section className="opportunity-group" id={group.id} key={group.id}><div className="group-heading"><h2>{english?titleFromId(group.id.replace("-credentials","")):group.title}</h2><p>{english?"Credentials selected to provide a structured and verifiable way to demonstrate capability in this field.":group.description}</p></div><div className="opportunity-grid">{group.items.map(item=><CredentialCard item={item} key={item.name}/>)}</div></section>)}</section>
 <VerificationNote kind="考试"/>
 </main></div>}
