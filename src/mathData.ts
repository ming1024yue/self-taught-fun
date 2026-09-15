export type MathResource={name:string;url:string;level:string;kind:string;pre:string;description:string};
export type MathTopic={title:string;intro:string;resources:MathResource[]};
const R=(name:string,url:string,level:string,kind:string,pre:string,description:string):MathResource=>({name,url,level,kind,pre,description});

export const mathGroups=[
 ["开始之前",[["intro","本站目的"],["how","如何使用本站"],["plan","学习规划"]]],
 ["起点",[["tools","学习工具"],["foundations","数学基础"],["proofs","证明与数学语言"]]],
 ["大学核心",[["calculus","微积分"],["linear-algebra","线性代数"],["probability","概率论"],["statistics","统计学"],["differential-equations","微分方程"]]],
 ["结构与理论",[["discrete","离散数学"],["real-analysis","实分析"],["complex-analysis","复分析"],["abstract-algebra","抽象代数"],["number-theory","数论"],["topology-geometry","拓扑与几何"],["cryptography","密码学"]]],
 ["随机、信息与计算",[["stochastic-processes","随机过程"],["information-theory","信息论与编码"],["optimization","优化"],["numerical","数值计算"],["pde","偏微分方程"]]],
 ["现代应用与交叉",[["dynamical-systems","动力系统与混沌"],["network-science","网络科学"],["math-ml","机器学习的数学"],["modeling","数学建模"],["projects","项目与进阶方向"],["books","书单与资源"]]]
] as const;

export const mathTopics:Record<string,MathTopic>={
 tools:{title:"学习工具",intro:"用合适的书写、计算、绘图与编程工具验证直觉，但不让工具代替推理。",resources:[]},
 foundations:{title:"数学基础",intro:"补齐算术、代数、函数、方程和三角学，为大学数学建立稳定起点。",resources:[
  R("OpenStax Prealgebra 2e","https://openstax.org/details/books/prealgebra-2e","入门","开放教材","无需前置","从数与运算开始，适合长期未接触数学或基础薄弱的学习者。"),
  R("OpenStax Algebra and Trigonometry 2e","https://openstax.org/details/books/algebra-and-trigonometry-2e","进阶","开放教材","基础算术","系统覆盖函数、方程、指数对数和三角学，并配有大量练习。"),
  R("MIT 18.01SC Single Variable Calculus — 预备内容","https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/","衔接","公开课","高中代数与三角学","用 MIT 自学型课程检验代数与函数基础是否足以进入微积分。")
 ]},
 proofs:{title:"证明与数学语言",intro:"学习集合、逻辑、量词、归纳和常见证明方法，从“会计算”走向“会论证”。",resources:[
  R("Book of Proof — Richard Hammack","https://richardhammack.github.io/BookOfProof/","入门","开放教材","基础代数","面向第一次接触证明的学习者，例子清楚且可免费下载。"),
  R("MIT 6.042J Mathematics for Computer Science","https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/","进阶","公开课","高中代数","通过逻辑、归纳、图论与计数训练严格证明和问题求解。"),
  R("MIT 18.100A Real Analysis","https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/","高级","公开课","微积分与证明基础","在分析课程中系统检验证明书写、极限语言和抽象推理能力。")
 ]},
 calculus:{title:"微积分",intro:"用极限、导数和积分描述变化与累积，并进入多变量空间。",resources:[
  R("OpenStax Calculus Volume 1","https://openstax.org/details/books/calculus-volume-1","入门","开放教材","代数、函数与三角学","免费教材，适合先建立极限、导数和积分的直觉并完成基础练习。"),
  R("MIT 18.01SC Single Variable Calculus","https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/","进阶","公开课","高中代数与三角学","为独立学习设计，包含视频、讲义、例题、习题及考试答案。"),
  R("MIT 18.02SC Multivariable Calculus","https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/","高级","公开课","单变量微积分","学习向量、偏导、多重积分和向量分析，连接物理、统计与优化。")
 ]},
 "linear-algebra":{title:"线性代数",intro:"用向量、矩阵、线性映射和特征结构理解高维问题。",resources:[
  R("Linear Algebra — Jim Hefferon","https://hefferon.net/linearalgebra/","入门","开放教材","高中代数","可免费获取的完整教材，从消元与向量空间逐步进入抽象概念。"),
  R("MIT 18.06SC Linear Algebra","https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/","进阶","公开课","高中代数","Gilbert Strang 的经典课程，强调列空间、正交、特征值与应用。"),
  R("MIT 18.700 Linear Algebra","https://ocw.mit.edu/courses/18-700-linear-algebra-fall-2013/","高级","公开课","证明基础与初等线性代数","以证明为主，深入线性映射、对偶空间、谱理论和标准形。")
 ]},
 probability:{title:"概率论",intro:"为不确定性建立数学模型，理解随机变量、分布、条件概率与极限定理。",resources:[
  R("Harvard Stat 110: Probability","https://stat110.hsites.harvard.edu/","入门","公开课","单变量微积分与基础计数","完整视频、讲义和习题，以大量例子建立概率直觉。"),
  R("MIT 18.05 Introduction to Probability and Statistics","https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/","进阶","公开课","多变量微积分","同时覆盖概率、贝叶斯推断、假设检验、回归和 R 模拟。"),
  R("MIT 18.440 Probability and Random Variables","https://ocw.mit.edu/courses/18-440-probability-and-random-variables-spring-2014/","高级","公开课","多变量微积分与证明基础","更严格地处理联合分布、条件期望、大数定律和中心极限定理。")
 ]},
 statistics:{title:"统计学",intro:"从数据出发进行描述、估计、检验与建模，并理解结论的边界。",resources:[
  R("OpenIntro Statistics","https://www.openintro.org/book/os/","入门","开放教材","基础代数","免费教材，以真实数据、可视化和练习介绍统计推断。"),
  R("MIT 18.05 Introduction to Probability and Statistics","https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/","进阶","公开课","概率论与多变量微积分","把概率基础连接到贝叶斯与频率学派推断、Bootstrap 和线性回归。"),
  R("MIT 18.650 Statistics for Applications","https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/","高级","公开课","概率论、微积分与线性代数","进入参数估计、假设检验、回归、广义线性模型和主成分分析。")
 ]},
 "differential-equations":{title:"微分方程",intro:"研究变化规律如何决定系统行为，并学习解析、定性和数值方法。",resources:[
  R("MIT 18.03SC Differential Equations","https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/","入门","公开课","单变量微积分","自学型课程，覆盖一阶方程、线性系统、傅里叶级数与拉普拉斯变换。"),
  R("MIT ES.1803 Differential Equations","https://ocw.mit.edu/courses/es-1803-differential-equations-spring-2024/","进阶","公开课","微积分与线性代数","更现代的课程材料，将建模、计算和线性代数贯穿始终。"),
  R("MIT 18.155 Differential Analysis","https://ocw.mit.edu/courses/18-155-differential-analysis-fall-2004/","高级","公开课","实分析、线性代数与常微分方程","进入分布、Sobolev 空间和偏微分方程的分析工具。")
 ]},
 discrete:{title:"离散数学",intro:"研究有限与可数结构，为计算机科学、组合优化和网络分析打基础。",resources:[
  R("MIT 6.042J Mathematics for Computer Science","https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/","入门","公开课","高中代数","覆盖证明、集合、图论、计数、递推与离散概率。"),
  R("Mathematics for Computer Science — Open Textbook","https://courses.csail.mit.edu/6.042/spring18/mcs.pdf","进阶","开放教材","证明基础","MIT 课程配套完整教材，适合系统做题和查漏补缺。"),
  R("MIT 18.200 Principles of Discrete Applied Mathematics","https://ocw.mit.edu/courses/18-200-principles-of-discrete-applied-mathematics-spring-2024/","高级","公开课","离散数学与线性代数","研究计数、生成函数、信息论、编码与离散优化中的应用方法。")
 ]},
 "real-analysis":{title:"实分析",intro:"为微积分建立严格基础，训练极限、连续、紧致与一致收敛的证明能力。",resources:[
  R("Basic Analysis — Jiří Lebl","https://www.jirka.org/ra/","入门","开放教材","微积分与证明基础","可免费阅读的分析教材，结构清晰，适合第一次系统学习严格分析。"),
  R("MIT 18.100A Real Analysis","https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/","进阶","公开课","微积分、线性代数与证明基础","包含视频和完整讲义，从实数、序列进入微分与积分理论。"),
  R("MIT 18.100B Real Analysis","https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/","高级","公开课","成熟的证明能力","更抽象地处理度量空间、紧致性与函数序列，适合理论方向。")
 ]},
 "abstract-algebra":{title:"抽象代数",intro:"通过群、环、域和同态研究结构与对称性。",resources:[
  R("Abstract Algebra: Theory and Applications","https://judsonbooks.org/abstract-algebra-theory-and-applications/","入门","开放教材","线性代数与证明基础","开放教材，用大量例子和练习引入群、环、域及应用。"),
  R("MIT Algebra I Student Notes","https://ocw.mit.edu/courses/res-18-011-algebra-i-student-notes-fall-2021/","进阶","开放讲义","证明基础与线性代数","MIT 18.701 学生讲义，系统覆盖群作用、线性群和表示的起点。"),
  R("MIT 18.703 Modern Algebra","https://ocw.mit.edu/courses/18-703-modern-algebra-spring-2013/","高级","公开课","群论、线性代数与证明能力","更深入学习群、环、模、域扩张和 Galois 理论。")
 ]},
 "complex-analysis":{title:"复分析",intro:"研究复可微函数、共形映射和留数，把分析、几何、数论与物理连接起来。",resources:[
  R("Complex Analysis — Elias Wegert","https://complex-analysis.com/","入门","开放教材","多变量微积分与证明基础","免费交互教材用相图和可视化建立复函数、解析性与映射的几何直觉。"),
  R("MIT 18.04 Complex Variables with Applications","https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-fall-1999/","进阶","公开课","多变量微积分与微分方程","通过 Cauchy 定理、级数、留数、共形映射和应用系统进入复分析。"),
  R("MIT 18.112 Functions of a Complex Variable","https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/","高级","公开课","实分析与成熟的证明能力","从严格分析角度学习解析函数、调和函数、亚纯函数和 Riemann 映射。")
 ]},
 "number-theory":{title:"数论",intro:"研究整数、素数、同余和算术结构，并连接密码学、代数几何与理论计算机科学。",resources:[
  R("Elementary Number Theory — William Stein","https://wstein.org/ent/","入门","开放教材","高中代数与基础证明","免费教材从整除、同余和二次剩余进入密码学与计算实验。"),
  R("MIT 18.781 Theory of Numbers","https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/","进阶","公开课","证明、离散数学与抽象代数基础","系统学习素数、二次互反、连分数、丢番图方程和解析方法。"),
  R("MIT 18.785 Number Theory I","https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/","高级","公开课","抽象代数、实分析与复分析","进入代数数论、局部域、zeta 函数和现代算术工具。")
 ]},
 "topology-geometry":{title:"拓扑与几何",intro:"研究空间在连续变形下保持的结构，并从曲率、流形和不变量理解形状。",resources:[
  R("Topology Without Tears","https://www.topologywithouttears.net/","入门","开放教材","集合、函数与证明基础","免费的点集拓扑教材，配有大量练习、视频和自测材料。"),
  R("MIT 18.901 Introduction to Topology","https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/","进阶","公开课","实分析与成熟的证明能力","学习拓扑空间、连续性、紧致性、连通性、分离公理和基本群。"),
  R("MIT 18.950 Differential Geometry","https://ocw.mit.edu/courses/18-950-differential-geometry-fall-2008/","高级","公开课","多变量微积分、线性代数与实分析","从曲线曲面进入曲率、测地线、Gauss–Bonnet 定理和流形思想。")
 ]},
 cryptography:{title:"密码学",intro:"用概率、数论、代数和复杂性理论定义并证明信息系统的安全性。",resources:[
  R("The Joy of Cryptography","https://joyofcryptography.com/","入门","开放教材","离散数学、概率与证明基础","面向高年级本科生的开放教材，从一次一密进入可证明安全、对称加密、公钥密码和零知识证明。"),
  R("Stanford CS255: Introduction to Cryptography","https://crypto.stanford.edu/~dabo/courses/cs255_winter25/","进阶","公开课","概率、模运算、证明与基础编程","系统学习加密、消息完整性、数字签名、认证、密钥管理和零知识协议，并提供作业与编程项目。"),
  R("MIT 18.783 Elliptic Curves","https://ocw.mit.edu/courses/18-783-elliptic-curves-fall-2025/","高级","公开课","抽象代数、数论与算法","从有限域上的椭圆曲线、群结构和计算方法进入椭圆曲线密码学所需的数学理论。")
 ]},
 optimization:{title:"优化",intro:"在约束下寻找最佳决策，连接数学、机器学习、经济学与工程。",resources:[
  R("Convex Optimization — Boyd & Vandenberghe","https://web.stanford.edu/~boyd/cvxbook/","入门","开放教材","微积分与线性代数","Stanford 官方免费教材，以几何直觉和应用建立凸优化框架。"),
  R("Stanford EE364A Convex Optimization","https://web.stanford.edu/class/ee364a/","进阶","公开课","多变量微积分与线性代数","课程资料、作业与软件练习完整，适合系统掌握建模和对偶。"),
  R("MIT 15.093J Optimization Methods","https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/","高级","公开课","线性代数、概率与算法基础","覆盖线性、非线性、离散和动态优化方法。")
 ]},
 numerical:{title:"数值计算",intro:"理解计算机如何近似求解数学问题，并分析误差、稳定性和复杂度。",resources:[
  R("Fundamentals of Numerical Computation","https://fncbook.com/","入门","开放教材","微积分、线性代数与基础编程","可在线阅读并配有 Julia、MATLAB 和 Python 版本代码。"),
  R("MIT 18.330 Introduction to Numerical Analysis","https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/","进阶","公开课","微积分、线性代数与编程","学习插值、数值积分、线性系统、ODE 与误差分析。"),
  R("MIT 18.335J Introduction to Numerical Methods","https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/","高级","公开课","数值分析与成熟编程能力","深入大型线性系统、特征问题、迭代法与高性能计算。")
 ]},
 "stochastic-processes":{title:"随机过程",intro:"研究随时间演化的随机系统，为金融、通信、排队、生态和机器学习提供模型。",resources:[
  R("Introduction to Probability, Statistics, and Random Processes","https://www.probabilitycourse.com/","入门","开放教材","微积分与基础概率","免费教材从随机变量逐步进入随机过程、Markov 链和统计推断。"),
  R("MIT 18.445 Introduction to Stochastic Processes","https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/","进阶","公开课","概率论、条件期望与线性代数","学习 Markov 链、Poisson 过程、鞅、随机游走和分支过程。"),
  R("MIT 6.262 Discrete Stochastic Processes","https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/","高级","公开课","概率论、证明与微积分","深入更新过程、可数状态 Markov 链、随机过程极限和排队模型。")
 ]},
 "information-theory":{title:"信息论与编码",intro:"用熵和互信息刻画信息、压缩与通信的极限，并理解可靠编码的数学基础。",resources:[
  R("Information Theory, Inference, and Learning Algorithms","https://www.inference.org.uk/itprnn/book.pdf","入门","开放教材","概率、微积分与线性代数","David MacKay 免费教材用压缩、纠错码和学习问题建立信息论直觉。"),
  R("Stanford EE376A Information Theory","https://web.stanford.edu/class/ee376a/","进阶","公开课","概率论与证明基础","系统学习熵、典型集、信源编码、信道容量和有损压缩。"),
  R("MIT 6.441 Information Theory","https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/","高级","公开课","概率论、随机过程与证明能力","从二元假设检验进入有限码长、信道编码与现代信息论。")
 ]},
 pde:{title:"偏微分方程",intro:"用方程描述场、波、扩散和连续介质，并结合分析与数值方法研究解。",resources:[
  R("MIT 18.303 Linear Partial Differential Equations","https://ocw.mit.edu/courses/18-303-linear-partial-differential-equations-analysis-and-numerics-fall-2014/","入门","公开课","微分方程、线性代数与多变量微积分","连接 Poisson、热和波方程的分析、有限差分、有限元与谱方法。"),
  R("MIT 18.152 Introduction to Partial Differential Equations","https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/","进阶","公开课","实分析、复分析与常微分方程","学习一阶方程、椭圆型、抛物型和双曲型 PDE 的基本理论。"),
  R("MIT 18.155 Differential Analysis","https://ocw.mit.edu/courses/18-155-differential-analysis-fall-2004/","高级","公开课","实分析、泛函分析与 PDE 基础","进入分布、Fourier 分析、Sobolev 空间和线性偏微分算子。")
 ]},
 "dynamical-systems":{title:"动力系统与混沌",intro:"研究系统如何随时间演化，理解稳定性、分岔、吸引子、混沌与复杂行为。",resources:[
  R("MIT 12.006J Nonlinear Dynamics: Chaos","https://ocw.mit.edu/courses/12-006j-nonlinear-dynamics-chaos-fall-2022/","入门","公开课","微分方程与线性代数","用现代讲义、Python 实验和项目学习相图、分岔、吸引子与 Lyapunov 指数。"),
  R("MIT 18.353J Nonlinear Dynamics I","https://ocw.mit.edu/courses/18-353j-nonlinear-dynamics-i-chaos-fall-2012/","进阶","公开课","常微分方程、线性代数与数值计算","通过振子、映射、Poincaré 截面和计算实验建立非线性系统方法。"),
  R("MIT 18.385J Nonlinear Dynamics and Chaos","https://ocw.mit.edu/courses/18-385j-nonlinear-dynamics-and-chaos-fall-2014/","高级","公开课","微分方程、分析与成熟计算能力","深入 Hopf 分岔、Hamilton 系统、遍历性、KAM 理论和普适性。")
 ]},
 "network-science":{title:"网络科学",intro:"用图、概率和动力系统研究连接结构，以及传播、鲁棒性和集体现象。",resources:[
  R("Network Science — Albert-László Barabási","https://networksciencebook.com/","入门","开放教材","概率、线性代数与基础编程","免费在线教材从随机网络、无标度结构进入社区、传播和网络鲁棒性。"),
  R("MIT 1.022 Introduction to Network Models","https://ocw.mit.edu/courses/1-022-introduction-to-network-models-fall-2018/","进阶","公开课","概率、图论与微积分","研究网络流、中心性、随机图、级联与流行病传播，并通过项目分析真实网络。"),
  R("Santa Fe Institute Complexity Explorer","https://www.complexityexplorer.org/courses","高级","课程库","概率、动力系统与编程","通过复杂系统课程把网络、涌现、信息和多主体模型连接起来。")
 ]},
 "math-ml":{title:"机器学习的数学",intro:"从线性代数、概率、优化与统计学习理论理解模型为何有效、何时失效。",resources:[
  R("Mathematics for Machine Learning","https://mml-book.github.io/","入门","开放教材","微积分、线性代数与概率基础","作者免费提供教材和笔记本，把数学概念直接连接到回归、PCA、密度估计和分类。"),
  R("MIT 18.065 Matrix Methods in Data Analysis, Signal Processing, and Machine Learning","https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/","进阶","公开课","线性代数、概率与基础编程","用矩阵分解、低秩近似、优化和神经网络建立现代数据方法的数学框架。"),
  R("Caltech Learning From Data","https://work.caltech.edu/telecourse.html","高级","公开课","概率、线性代数、微积分与证明能力","从泛化、VC 维、偏差方差、正则化和验证理解统计学习理论。")
 ]},
 modeling:{title:"数学建模",intro:"把现实问题转化为变量、假设、方程和可以检验的结论。",resources:[
  R("MIT 18.085 Computational Science and Engineering I","https://ocw.mit.edu/courses/18-085-computational-science-and-engineering-i-fall-2008/","入门","公开课","微积分与线性代数","从网络、平衡方程和微分方程出发连接模型与计算。"),
  R("MIT 18.086 Mathematical Methods for Engineers II","https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/","进阶","公开课","线性代数、微分方程与编程","围绕有限差分、有限元和优化建立计算模型。"),
  R("The Modeling Commons","https://modelingcommons.org/","实践","项目平台","掌握一种编程语言","浏览、运行和改写公开模型，通过复现实验理解建模假设。")
 ]},
 projects:{title:"项目与进阶方向",intro:"用证明、计算和模型形成可检查的成果，并探索纯数学或跨学科方向。",resources:[
  R("MIT OpenCourseWare Mathematics","https://ocw.mit.edu/search/?d=Mathematics","入门","课程库","完成至少两门核心课程","根据兴趣查找数论、几何、拓扑、分析、代数与应用数学课程。"),
  R("Project Euler","https://projecteuler.net/","进阶","项目平台","基础编程与离散数学","用代码解决逐步加深的数学问题，训练建模、算法和验证。"),
  R("MIT PRIMES: Recommended OCW Courses","https://math.mit.edu/research/highschool/primes/YuliasDream/courses.html","高级","学习指南","证明基础和大学核心数学","MIT 数学研究项目整理的高阶课程清单，可用于选择理论方向。")
 ]},
 books:{title:"书单与资源",intro:"集中查看合法公开电子书和大学官方课程入口。",resources:[]}
};
