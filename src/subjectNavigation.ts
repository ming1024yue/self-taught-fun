const base=import.meta.env.BASE_URL;

export type SubjectLink={id:string;name:string;href:string};
export type SubjectCategory={name:string;items:SubjectLink[]};


export const subjectCategories:SubjectCategory[]=[
 {name:"数学与计算机科学",items:[{id:"math",name:"数学",href:`${base}math/`},{id:"computer-science",name:"计算机科学",href:`${base}computer-science/`}]},
 {name:"自然科学",items:[{id:"physics",name:"物理",href:`${base}physics/`},{id:"chemistry",name:"化学",href:`${base}chemistry/`},{id:"biology",name:"生物",href:`${base}biology/`}]},
 {name:"社会科学",items:[{id:"finance",name:"金融",href:`${base}finance/`},{id:"psychology",name:"心理学",href:`${base}psychology/`},{id:"political-science",name:"政治学",href:`${base}political-science/`},{id:"management",name:"管理学",href:`${base}management/`},{id:"history",name:"历史",href:`${base}history/`}]},
 {name:"工程学",items:[{id:"engineering-electrical",name:"电子与电气工程",href:`${base}engineering/electrical/`},{id:"engineering-mechanical",name:"机械工程",href:`${base}engineering/mechanical/`},{id:"engineering-computer",name:"计算机工程",href:`${base}engineering/computer/`},{id:"engineering-aerospace",name:"航空航天工程",href:`${base}engineering/aerospace/`},{id:"engineering-systems",name:"控制与系统工程",href:`${base}engineering/systems/`},{id:"engineering-materials",name:"材料工程",href:`${base}engineering/materials/`}]},
 {name:"运动与营养",items:[{id:"exercise-physiology",name:"运动生理学",href:`${base}exercise-physiology/`},{id:"nutrition",name:"营养学",href:`${base}nutrition/`}]},
 {name:"艺术",items:[{id:"fine-arts",name:"美术",href:`${base}fine-arts/`},{id:"design",name:"设计",href:`${base}design/`}]},
 {name:"语言",items:[{id:"language-linguistics",name:"语言学",href:`${base}language/linguistics/`},{id:"language-chinese",name:"汉语",href:`${base}language/chinese/`},{id:"language-english",name:"英语",href:`${base}language/english/`}]},
 {name:"文学",items:[{id:"literature-writing",name:"写作",href:`${base}literature/topics/writing/`},{id:"literature-theory",name:"文学理论",href:`${base}literature/topics/theory/`},{id:"literature-world",name:"中外文学",href:`${base}literature/topics/world/`}]}
];

export const subjectLinks=subjectCategories.flatMap(category=>category.items);
