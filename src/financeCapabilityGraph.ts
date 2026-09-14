export type LearningGoal =
  | "explore"
  | "foundation"
  | "career"
  | "project"
  | "gap";

export type Importance = "required" | "recommended" | "optional";
export type EvidenceType =
  | "exercise"
  | "project"
  | "essay"
  | "exam"
  | "portfolio"
  | "competition";

export type Source = {
  title: string;
  url: string;
  kind: "professional-framework" | "university-curriculum" | "course" | "project";
};

export type Evidence = {
  type: EvidenceType;
  title: string;
  description: string;
};

export type Capability = {
  id: string;
  name: string;
  description: string;
  transferable?: boolean;
  prerequisites: string[];
  learningOutcomes: string[];
  evidence: Evidence[];
  sources: Source[];
};

export type GoalProfile = {
  id: LearningGoal;
  name: string;
  description: string;
  capabilityWeights: Partial<Record<string, Importance>>;
};

const CFA_CURRICULUM = "https://www.cfainstitute.org/programs/cfa-program/curriculum";
const CFA_CBOK = "https://www.cfainstitute.org/programs/cfa-program/candidate-resources/cbok";
const CFA_FSA = "https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/introduction-financial-statement-analysis";
const CFA_MODELING = "https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/introduction-to-financial-statement-modeling";
const CFA_FORECASTING = "https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/company-analysis-forecasting";

const source = (title: string, url: string, kind: Source["kind"] = "professional-framework"): Source => ({
  title,
  url,
  kind,
});

export const financeCapabilities: Capability[] = [
  {
    id: "quant-reasoning",
    name: "金融定量推理",
    description: "用时间价值、概率、统计与基础回归表达和分析金融问题。",
    transferable: true,
    prerequisites: [],
    learningOutcomes: [
      "能计算并解释货币时间价值、收益率与折现",
      "能用概率分布和描述统计表达风险",
      "能读懂基础回归结果并说明其局限",
    ],
    evidence: [
      { type: "exercise", title: "定量基础题组", description: "独立完成 TVM、概率、统计与基础回归题组，并解释每个量的经济含义。" },
    ],
    sources: [source("CFA Curriculum — Quantitative Methods", CFA_CURRICULUM), source("CFA Candidate Body of Knowledge", CFA_CBOK)],
  },
  {
    id: "economics",
    name: "经济环境分析",
    description: "理解供需、企业与行业、商业周期、通胀、利率、政策和汇率如何影响企业与资产。",
    transferable: true,
    prerequisites: [],
    learningOutcomes: [
      "能解释宏观变量变化对企业和资产价格的主要传导机制",
      "能区分行业结构、周期因素与公司特有因素",
    ],
    evidence: [
      { type: "essay", title: "宏观—公司传导分析", description: "选择一次利率、通胀或汇率变化，写一页分析说明其如何影响某行业和公司。" },
    ],
    sources: [source("CFA Curriculum — Economics", CFA_CURRICULUM), source("CFA Candidate Body of Knowledge", CFA_CBOK)],
  },
  {
    id: "accounting",
    name: "财务报表理解",
    description: "理解利润表、资产负债表和现金流量表，以及三张表之间的联系。",
    prerequisites: [],
    learningOutcomes: [
      "能解释三张核心财务报表的结构与相互关系",
      "能区分利润、现金流、资产、负债与权益",
    ],
    evidence: [
      { type: "exercise", title: "三表串联练习", description: "从一组交易出发构造三张表，并解释关键项目如何相互传递。" },
    ],
    sources: [source("CFA — Introduction to Financial Statement Analysis", CFA_FSA), source("CFA CBOK — Financial Statement Analysis", CFA_CBOK)],
  },
  {
    id: "fsa",
    name: "财务报表分析",
    description: "通过比率、共同比报表、现金流和会计质量判断公司的经营表现与财务状况。",
    prerequisites: ["accounting", "quant-reasoning"],
    learningOutcomes: [
      "能计算并解释主要盈利、偿债、效率和现金流指标",
      "能比较公司自身历史与同业表现",
      "能识别部分会计政策和非经常项目对分析的影响",
    ],
    evidence: [
      { type: "project", title: "上市公司财务体检", description: "分析一家公司的三年报表、关键比率和现金流，并写出结论与风险点。" },
    ],
    sources: [source("CFA — Financial Statement Analysis", CFA_FSA), source("CFA CBOK", CFA_CBOK)],
  },
  {
    id: "corporate-finance",
    name: "公司金融决策",
    description: "理解企业融资、资本成本、投资决策、资本结构和公司治理。",
    prerequisites: ["quant-reasoning", "accounting"],
    learningOutcomes: [
      "能用 NPV/IRR 分析基础资本预算问题",
      "能解释债务与股权融资的权衡",
      "能理解资本成本如何进入企业决策",
    ],
    evidence: [
      { type: "project", title: "资本预算案例", description: "为一个真实或模拟投资项目建立现金流、折现率和 NPV 分析。" },
    ],
    sources: [source("CFA Curriculum — Corporate Finance", CFA_CURRICULUM), source("CFA CBOK — Corporate Issuers", CFA_CBOK)],
  },
  {
    id: "markets-instruments",
    name: "金融市场与证券",
    description: "理解股票、债券、基金和主要交易市场的基本结构、权利与风险。",
    prerequisites: ["economics"],
    learningOutcomes: [
      "能区分主要金融工具的现金流、权利与风险来源",
      "能解释一级市场、二级市场和市场指数的基本作用",
    ],
    evidence: [
      { type: "exercise", title: "证券结构比较", description: "比较同一企业的股权和债务融资工具，并说明投资者承担的不同风险。" },
    ],
    sources: [source("CFA Curriculum — Equity & Fixed Income", CFA_CURRICULUM), source("CFA CBOK", CFA_CBOK)],
  },
  {
    id: "financial-modeling",
    name: "财务建模与预测",
    description: "将历史财务数据、业务驱动因素和情景假设转化为可检查的预测模型。",
    prerequisites: ["fsa", "corporate-finance"],
    learningOutcomes: [
      "能建立收入、成本、营运资本和资本开支预测",
      "能生成联动的预测利润表、资产负债表和现金流量表",
      "能用情景分析表达不确定性",
    ],
    evidence: [
      { type: "portfolio", title: "三表预测模型", description: "为一家上市公司建立至少三年的可复现预测模型，并记录关键假设。" },
    ],
    sources: [source("CFA — Introduction to Financial Statement Modeling", CFA_MODELING), source("CFA — Company Analysis: Forecasting", CFA_FORECASTING)],
  },
  {
    id: "valuation",
    name: "企业与证券估值",
    description: "使用折现现金流、相对估值等方法将经营预测转化为价值判断。",
    prerequisites: ["financial-modeling", "corporate-finance", "markets-instruments"],
    learningOutcomes: [
      "能完成基础 DCF 并解释终值、折现率和关键假设",
      "能使用可比公司倍数进行相对估值",
      "能进行敏感性分析并解释估值区间",
    ],
    evidence: [
      { type: "portfolio", title: "DCF + Comparable Valuation", description: "完成一家公司的 DCF、可比公司估值和敏感性分析，形成可检查模型与短报告。" },
    ],
    sources: [source("CFA Curriculum — Equity Investments", CFA_CURRICULUM), source("CFA CBOK — Equity Valuation", CFA_CBOK)],
  },
  {
    id: "fixed-income",
    name: "固定收益分析",
    description: "分析债券收益率、期限结构、利率风险、信用风险及其估值。",
    prerequisites: ["quant-reasoning", "markets-instruments"],
    learningOutcomes: [
      "能计算债券价格与收益率",
      "能解释久期、利率变化和信用风险的影响",
    ],
    evidence: [
      { type: "project", title: "债券风险分析", description: "对一组债券进行收益率、久期和信用风险比较。" },
    ],
    sources: [source("CFA Curriculum — Fixed Income", CFA_CURRICULUM), source("CFA CBOK — Fixed Income", CFA_CBOK)],
  },
  {
    id: "derivatives-risk",
    name: "衍生品与风险管理",
    description: "理解远期、期货、期权、互换如何定价并用于风险管理。",
    prerequisites: ["quant-reasoning", "markets-instruments"],
    learningOutcomes: [
      "能解释主要衍生工具的收益结构",
      "能建立简单对冲并说明基差、波动率等风险",
    ],
    evidence: [
      { type: "exercise", title: "对冲设计", description: "为一个利率、汇率或股票风险暴露设计基础对冲方案并说明剩余风险。" },
    ],
    sources: [source("CFA Curriculum — Derivatives and Risk Management", CFA_CURRICULUM), source("CFA CBOK — Derivatives", CFA_CBOK)],
  },
  {
    id: "portfolio",
    name: "投资组合构建",
    description: "把风险收益、资产相关性和投资目标整合为组合配置与评估决策。",
    prerequisites: ["quant-reasoning", "markets-instruments"],
    learningOutcomes: [
      "能解释分散化与相关性的作用",
      "能计算并比较基础组合的收益与风险",
      "能根据目标与约束提出简单资产配置",
    ],
    evidence: [
      { type: "project", title: "投资组合实验", description: "用历史数据构建多个组合，比较风险收益并解释约束和局限。" },
    ],
    sources: [source("CFA Curriculum — Portfolio Construction", CFA_CURRICULUM), source("CFA CBOK", CFA_CBOK)],
  },
  {
    id: "research-methods",
    name: "金融实证研究",
    description: "用统计、计量和可复现数据分析检验金融问题，而不只停留在描述。",
    transferable: true,
    prerequisites: ["quant-reasoning", "economics"],
    learningOutcomes: [
      "能把金融问题写成可检验假设",
      "能选择数据与识别策略并说明局限",
      "能复现基础回归、事件研究或时间序列分析",
    ],
    evidence: [
      { type: "portfolio", title: "论文复现 / 小型实证研究", description: "复现一篇公开金融实证研究或完成一个小型事件研究，公开代码与说明。" },
    ],
    sources: [source("CFA CBOK — Regression, Time Series, Back-testing", CFA_CBOK)],
  },
  {
    id: "investment-thesis",
    name: "投资观点形成与沟通",
    description: "把行业、公司、财务、估值和风险分析整合为清晰、可证伪的结论。",
    prerequisites: ["fsa", "valuation", "economics"],
    learningOutcomes: [
      "能区分事实、假设和判断",
      "能形成包含催化剂、估值与主要风险的投资观点",
      "能把分析压缩成清晰的书面或口头建议",
    ],
    evidence: [
      { type: "portfolio", title: "Equity Research Memo", description: "完成一份 2–5 页研究简报，包含 thesis、关键驱动、估值、风险和反方情景。" },
    ],
    sources: [source("CFA — Financial Analysis Techniques", "https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/financial-analysis-techniques")],
  },
  {
    id: "ethics",
    name: "金融伦理与专业判断",
    description: "识别利益冲突、信息披露、公平交易等金融实践中的伦理和专业责任。",
    transferable: true,
    prerequisites: [],
    learningOutcomes: [
      "能识别常见利益冲突和专业责任问题",
      "能在不确定场景中解释决策依据与披露要求",
    ],
    evidence: [
      { type: "essay", title: "伦理案例分析", description: "分析一个投资或公司金融伦理案例，列出利益相关者、冲突、可选行动和理由。" },
    ],
    sources: [source("CFA Curriculum — Ethical and Professional Standards", CFA_CURRICULUM)],
  },
];

export const financeGoals: GoalProfile[] = [
  {
    id: "explore",
    name: "探索金融",
    description: "先建立领域地图与直觉，不要求完整职业训练。",
    capabilityWeights: {
      "economics": "recommended",
      "accounting": "required",
      "markets-instruments": "required",
      "corporate-finance": "recommended",
      "fsa": "recommended",
      "valuation": "optional",
      "portfolio": "optional",
      "ethics": "recommended",
    },
  },
  {
    id: "foundation",
    name: "系统建立金融基础",
    description: "接近本科金融核心训练，强调完整性与长期可迁移能力。",
    capabilityWeights: {
      "quant-reasoning": "required",
      "economics": "required",
      "accounting": "required",
      "fsa": "required",
      "corporate-finance": "required",
      "markets-instruments": "required",
      "financial-modeling": "recommended",
      "valuation": "required",
      "fixed-income": "required",
      "derivatives-risk": "recommended",
      "portfolio": "required",
      "research-methods": "recommended",
      "investment-thesis": "recommended",
      "ethics": "required",
    },
  },
  {
    id: "career",
    name: "准备金融分析相关职业",
    description: "优先可直接形成工作能力与作品的分析、建模、估值和表达能力。",
    capabilityWeights: {
      "quant-reasoning": "required",
      "economics": "recommended",
      "accounting": "required",
      "fsa": "required",
      "corporate-finance": "required",
      "markets-instruments": "recommended",
      "financial-modeling": "required",
      "valuation": "required",
      "fixed-income": "optional",
      "portfolio": "recommended",
      "investment-thesis": "required",
      "ethics": "required",
    },
  },
  {
    id: "project",
    name: "为一个金融项目补知识",
    description: "从项目所需能力反向补课，允许大量跳过非必要知识。",
    capabilityWeights: {
      "quant-reasoning": "recommended",
      "accounting": "recommended",
      "fsa": "recommended",
      "financial-modeling": "required",
      "valuation": "recommended",
      "research-methods": "recommended",
      "investment-thesis": "optional",
    },
  },
  {
    id: "gap",
    name: "补一个具体能力缺口",
    description: "先选目标能力，再自动补齐其前置能力。",
    capabilityWeights: {},
  },
];

const byId = new Map(financeCapabilities.map((capability) => [capability.id, capability]));

export function getCapability(id: string): Capability {
  const capability = byId.get(id);
  if (!capability) throw new Error(`Unknown capability: ${id}`);
  return capability;
}

export function prerequisiteClosure(ids: Iterable<string>): Set<string> {
  const result = new Set<string>();
  const visit = (id: string) => {
    if (result.has(id)) return;
    const capability = getCapability(id);
    capability.prerequisites.forEach(visit);
    result.add(id);
  };
  for (const id of ids) visit(id);
  return result;
}

/**
 * Topological sort = a legal learning order for a DAG.
 * Throws if we accidentally introduce a cycle such as A -> B -> C -> A.
 */
export function topologicalSort(ids: Iterable<string>): Capability[] {
  const selected = prerequisiteClosure(ids);
  const indegree = new Map<string, number>();
  const children = new Map<string, string[]>();

  selected.forEach((id) => {
    indegree.set(id, 0);
    children.set(id, []);
  });

  selected.forEach((id) => {
    const capability = getCapability(id);
    capability.prerequisites
      .filter((pre) => selected.has(pre))
      .forEach((pre) => {
        indegree.set(id, (indegree.get(id) ?? 0) + 1);
        children.get(pre)?.push(id);
      });
  });

  const queue = [...selected].filter((id) => indegree.get(id) === 0);
  const result: Capability[] = [];

  while (queue.length) {
    const id = queue.shift()!;
    result.push(getCapability(id));
    for (const child of children.get(id) ?? []) {
      const next = (indegree.get(child) ?? 0) - 1;
      indegree.set(child, next);
      if (next === 0) queue.push(child);
    }
  }

  if (result.length !== selected.size) {
    throw new Error("Capability graph contains a cycle; it is not a DAG.");
  }

  return result;
}

export type LearningPlanStep = {
  capability: Capability;
  importance: Importance;
  status: "known" | "learn";
};

export function buildGoalPlan(
  goalId: Exclude<LearningGoal, "gap">,
  knownCapabilities: string[] = [],
): LearningPlanStep[] {
  const goal = financeGoals.find((item) => item.id === goalId);
  if (!goal) throw new Error(`Unknown goal: ${goalId}`);

  const targetIds = Object.entries(goal.capabilityWeights)
    .filter(([, importance]) => importance === "required" || importance === "recommended")
    .map(([id]) => id);

  const known = new Set(prerequisiteClosure(knownCapabilities));
  const ordered = topologicalSort(targetIds);

  return ordered.map((capability) => ({
    capability,
    importance: goal.capabilityWeights[capability.id] ?? "required",
    status: known.has(capability.id) ? "known" : "learn",
  }));
}

export function buildGapPlan(targetCapabilityId: string, knownCapabilities: string[] = []): LearningPlanStep[] {
  const known = new Set(prerequisiteClosure(knownCapabilities));
  return topologicalSort([targetCapabilityId]).map((capability) => ({
    capability,
    importance: capability.id === targetCapabilityId ? "required" : "recommended",
    status: known.has(capability.id) ? "known" : "learn",
  }));
}


export type BlendedPlanInput = {
  primary: LearningGoal;
  secondary?: LearningGoal;
  knownCapabilities?: string[];
  gapTarget?: string;
};

/**
 * Build a path from the learner questionnaire result.
 *
 * Rules:
 * - Primary goal drives the path: its required capabilities stay required.
 * - A secondary goal enriches the path, but is treated as recommended so it
 *   does not overwhelm the learner's main intent.
 * - If Gap Filler is primary or secondary, the selected gap target and its
 *   prerequisite closure are merged into the same DAG query.
 * - Prerequisites inherit the importance of the capability that needs them.
 */
export function buildBlendedGoalPlan({
  primary,
  secondary,
  knownCapabilities = [],
  gapTarget = "valuation",
}: BlendedPlanInput): LearningPlanStep[] {
  const rank = new Map<string, 1 | 2>(); // 1 = recommended, 2 = required

  const promote = (id: string, value: 1 | 2) => {
    const current = rank.get(id) ?? 0;
    if (value > current) rank.set(id, value);
  };

  const addGoal = (goalId: LearningGoal, isPrimary: boolean) => {
    if (goalId === "gap") {
      promote(gapTarget, isPrimary ? 2 : 1);
      return;
    }
    const goal = financeGoals.find((item) => item.id === goalId);
    if (!goal) throw new Error(`Unknown goal: ${goalId}`);
    for (const [id, importance] of Object.entries(goal.capabilityWeights)) {
      if (importance === "optional" || !importance) continue;
      if (isPrimary) promote(id, importance === "required" ? 2 : 1);
      else promote(id, 1);
    }
  };

  addGoal(primary, true);
  if (secondary && secondary !== primary) addGoal(secondary, false);

  // Push importance backward through prerequisites. A required capability
  // makes its true prerequisites required as well.
  const propagate = (id: string, value: 1 | 2, visiting = new Set<string>()) => {
    if (visiting.has(id)) throw new Error(`Cycle detected while propagating from ${id}`);
    const nextVisiting = new Set(visiting);
    nextVisiting.add(id);
    const capability = getCapability(id);
    for (const prerequisite of capability.prerequisites) {
      promote(prerequisite, value);
      propagate(prerequisite, value, nextVisiting);
    }
  };

  for (const [id, value] of [...rank.entries()]) propagate(id, value);

  const known = new Set(prerequisiteClosure(knownCapabilities));
  const ordered = topologicalSort(rank.keys());

  return ordered.map((capability) => ({
    capability,
    importance: (rank.get(capability.id) ?? 1) === 2 ? "required" : "recommended",
    status: known.has(capability.id) ? "known" : "learn",
  }));
}

/** Convenience structure for graph renderers. */
export const financeCapabilityEdges = financeCapabilities.flatMap((capability) =>
  capability.prerequisites.map((prerequisite) => ({
    from: prerequisite,
    to: capability.id,
    type: "requires" as const,
  })),
);
