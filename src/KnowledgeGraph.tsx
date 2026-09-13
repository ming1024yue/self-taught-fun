import {useEffect,useRef,useState} from "react";
type Node={id:string;label:string;group:string;x:number;y:number;size:number};
type View={x:number;y:number;scale:number};
const colors:Record<string,string>={数学:"#8794ad",计算机:"#789b96",经济学:"#aa9474",金融:"#78977f",物理:"#9187a5",化学:"#9a8f78",生物:"#7f9b86",心理学:"#a58c9d",社会科学:"#a28f7c",历史:"#9b8875",工程学:"#8d8379",运动科学:"#77958c",营养学:"#a29072",艺术:"#a7837d",设计:"#788d9c",语言:"#8f829d",文学:"#9d7f86",交叉领域:"#505860"};
const initialNodes:Node[]=[
 {id:"math",label:"数学",group:"数学",x:.14,y:.17,size:9},{id:"cs",label:"计算机",group:"计算机",x:.43,y:.1,size:9},{id:"physics",label:"物理",group:"物理",x:.72,y:.15,size:9},{id:"chemistry",label:"化学",group:"化学",x:.9,y:.13,size:9},{id:"biology",label:"生物",group:"生物",x:.93,y:.3,size:9},{id:"exercise",label:"运动生理学",group:"运动科学",x:.91,y:.44,size:9},{id:"psychology",label:"心理学",group:"心理学",x:.94,y:.58,size:9},{id:"nutrition",label:"营养学",group:"营养学",x:.9,y:.72,size:9},{id:"social",label:"社会科学",group:"社会科学",x:.72,y:.87,size:9},{id:"history",label:"历史",group:"历史",x:.2,y:.91,size:9},{id:"econ",label:"经济学",group:"经济学",x:.09,y:.65,size:9},{id:"finance",label:"金融",group:"金融",x:.43,y:.89,size:10},{id:"engineering",label:"工程学",group:"工程学",x:.92,y:.91,size:9},{id:"language",label:"语言",group:"语言",x:.05,y:.39,size:9},{id:"literature",label:"文学",group:"文学",x:.06,y:.81,size:9},{id:"finearts",label:"美术",group:"艺术",x:.12,y:.73,size:9},{id:"design",label:"设计",group:"设计",x:.67,y:.74,size:9},
 {id:"stats",label:"概率统计",group:"数学",x:.26,y:.35,size:5},{id:"opt",label:"优化",group:"数学",x:.34,y:.19,size:5},{id:"crypto",label:"密码学",group:"数学",x:.3,y:.27,size:6},{id:"algo",label:"算法",group:"计算机",x:.55,y:.3,size:5},{id:"data",label:"数据科学",group:"计算机",x:.39,y:.4,size:5},{id:"blockchain",label:"区块链",group:"计算机",x:.51,y:.55,size:7},{id:"graphics",label:"计算机图形学",group:"计算机",x:.64,y:.32,size:7},{id:"mechanics",label:"力学",group:"物理",x:.75,y:.38,size:5},{id:"dynamics",label:"动力系统",group:"物理",x:.68,y:.52,size:5},{id:"micro",label:"微观经济学",group:"经济学",x:.25,y:.66,size:5},{id:"macro",label:"宏观经济学",group:"经济学",x:.24,y:.82,size:5},{id:"pricing",label:"资产定价",group:"金融",x:.4,y:.68,size:5},{id:"corp",label:"公司金融",x:.59,y:.73,size:5,group:"金融"},
 {id:"ml",label:"机器学习",group:"交叉领域",x:.45,y:.39,size:8},{id:"metrics",label:"计量经济学",group:"交叉领域",x:.29,y:.54,size:8},{id:"quant",label:"量化研究",group:"交叉领域",x:.43,y:.61,size:8},{id:"fineng",label:"金融工程",group:"交叉领域",x:.56,y:.65,size:8},{id:"complex",label:"复杂系统",group:"交叉领域",x:.61,y:.39,size:8},{id:"robot",label:"机器人",group:"交叉领域",x:.77,y:.45,size:8},
 {id:"compbio",label:"计算生物学",group:"交叉领域",x:.69,y:.29,size:7},
 {id:"biophysics",label:"生物物理",group:"交叉领域",x:.82,y:.36,size:7},
 {id:"cogsci",label:"认知科学",group:"交叉领域",x:.76,y:.54,size:7},
 {id:"behavecon",label:"行为经济学",group:"交叉领域",x:.47,y:.72,size:7},
 {id:"neuroecon",label:"神经经济学",group:"交叉领域",x:.66,y:.67,size:6},
 {id:"compsocial",label:"计算社会科学",group:"交叉领域",x:.59,y:.79,size:7},
 {id:"network",label:"网络科学",group:"交叉领域",x:.56,y:.51,size:7},
 {id:"econophysics",label:"经济物理",group:"交叉领域",x:.47,y:.32,size:6},
 {id:"quantumcomp",label:"量子计算",group:"交叉领域",x:.57,y:.19,size:7},
 {id:"psychometrics",label:"心理测量学",group:"交叉领域",x:.78,y:.71,size:6},
 {id:"mathbio",label:"数学生物学",group:"交叉领域",x:.58,y:.25,size:6},
 {id:"epidemiology",label:"流行病学",group:"交叉领域",x:.81,y:.79,size:7},
 {id:"hci",label:"人机交互",group:"交叉领域",x:.66,y:.46,size:6},
 {id:"compneuro",label:"计算神经科学",group:"交叉领域",x:.69,y:.59,size:7}
];
const edges=[
 ["math","stats"],["math","opt"],["math","crypto"],["cs","crypto"],["algo","crypto"],["crypto","quantumcomp"],["cs","algo"],["cs","data"],["cs","blockchain"],["crypto","blockchain"],["algo","blockchain"],["finance","blockchain"],["econ","blockchain"],["cs","graphics"],["math","graphics"],["physics","graphics"],["algo","graphics"],["graphics","hci"],["graphics","robot"],["physics","mechanics"],["physics","dynamics"],["biology","data"],["biology","complex"],["psychology","stats"],["psychology","biology"],["psychology","micro"],["social","metrics"],["social","micro"],["social","macro"],["history","social"],["history","macro"],["econ","micro"],["econ","macro"],["finance","pricing"],["finance","corp"],
 ["stats","metrics"],["data","metrics"],["micro","metrics"],["stats","ml"],["opt","ml"],["algo","ml"],["data","ml"],["stats","quant"],["data","quant"],["metrics","quant"],["pricing","quant"],["opt","fineng"],["algo","fineng"],["pricing","fineng"],["dynamics","complex"],["macro","complex"],["algo","complex"],["mechanics","robot"],["algo","robot"],["complex","robot"],
 ["biology","compbio"],["data","compbio"],["algo","compbio"],["stats","compbio"],["ml","compbio"],
 ["biology","biophysics"],["physics","biophysics"],["dynamics","biophysics"],
 ["psychology","cogsci"],["biology","cogsci"],["cs","cogsci"],["ml","cogsci"],
 ["psychology","behavecon"],["micro","behavecon"],["metrics","behavecon"],
 ["psychology","neuroecon"],["biology","neuroecon"],["micro","neuroecon"],["behavecon","neuroecon"],
 ["social","compsocial"],["data","compsocial"],["stats","compsocial"],["algo","compsocial"],
 ["stats","network"],["algo","network"],["complex","network"],["social","network"],["biology","network"],["compsocial","network"],
 ["physics","econophysics"],["stats","econophysics"],["macro","econophysics"],["complex","econophysics"],
 ["physics","quantumcomp"],["math","quantumcomp"],["cs","quantumcomp"],["algo","quantumcomp"],
 ["psychology","psychometrics"],["stats","psychometrics"],["data","psychometrics"],
 ["math","mathbio"],["biology","mathbio"],["dynamics","mathbio"],["stats","mathbio"],
 ["biology","epidemiology"],["stats","epidemiology"],["social","epidemiology"],["network","epidemiology"],
 ["cs","hci"],["psychology","hci"],["social","hci"],
 ["cs","compneuro"],["psychology","compneuro"],["biology","compneuro"],["ml","compneuro"],["cogsci","compneuro"],
 ["chemistry","physics"],["chemistry","biology"],["chemistry","biophysics"],["chemistry","compbio"],
 ["engineering","math"],["engineering","physics"],["engineering","cs"],["engineering","robot"],["engineering","complex"],["engineering","quantumcomp"],
 ["language","psychology"],["language","social"],["language","history"],["language","cogsci"],["language","hci"],["language","compsocial"],
 ["literature","language"],["literature","history"],["literature","social"],
 ["exercise","biology"],["exercise","physics"],["exercise","psychology"],["exercise","stats"],["exercise","data"],["exercise","mechanics"],
 ["nutrition","biology"],["nutrition","chemistry"],["nutrition","psychology"],["nutrition","social"],["nutrition","stats"],["nutrition","exercise"],["nutrition","epidemiology"],
 ["finearts","literature"],["finearts","history"],["finearts","psychology"],["finearts","design"],["design","psychology"],["design","social"],["design","engineering"],["design","cs"],["design","hci"],["design","graphics"]
];
const descriptions:Record<string,string>={
 crypto:"数学 × 计算机 × 信息安全",blockchain:"计算机 × 密码学 × 分布式系统 × 经济激励",graphics:"计算机 × 数学 × 光学 × 视觉交互",ml:"数学 × 计算机 × 统计",metrics:"经济学 × 数学 × 统计",quant:"金融 × 统计 × 计算机",fineng:"金融 × 数学 × 计算机",complex:"数学 × 物理 × 生物 × 社会科学",robot:"计算机 × 物理",
 compbio:"生物 × 计算机 × 统计",biophysics:"生物 × 物理",cogsci:"心理学 × 生物 × 计算机",behavecon:"心理学 × 经济学",neuroecon:"神经科学 × 心理学 × 经济学",compsocial:"社会科学 × 计算机 × 统计",network:"数学 × 计算机 × 自然与社会系统",econophysics:"经济学 × 统计物理",quantumcomp:"物理 × 数学 × 计算机",psychometrics:"心理学 × 统计",mathbio:"数学 × 生物",epidemiology:"生物 × 统计 × 社会科学",hci:"计算机 × 心理学 × 社会科学",compneuro:"神经科学 × 数学 × 计算机",exercise:"生物 × 生理 × 物理 × 心理 × 数据科学",nutrition:"生物 × 化学 × 心理 × 公共健康 × 运动科学",finearts:"视觉艺术 × 历史 × 文学 × 心理",design:"艺术 × 心理 × 工程 × 计算机 × 社会科学"
};

export default function KnowledgeGraph(){
 const canvasRef=useRef<HTMLCanvasElement>(null),nodesRef=useRef(initialNodes.map(node=>({...node}))),viewRef=useRef<View>({x:0,y:0,scale:1}),activeId=useRef<string|null>(null),dragRef=useRef<{kind:"node";id:string}|{kind:"pan";x:number;y:number;ox:number;oy:number}|null>(null),drawRef=useRef<()=>void>(()=>{});
 const [active,setActive]=useState<Node|null>(null),[zoom,setZoom]=useState(100);
 useEffect(()=>{const canvas=canvasRef.current;if(!canvas)return;const draw=()=>{
  const rect=canvas.getBoundingClientRect(),dpr=devicePixelRatio||1;
  if(canvas.width!==Math.round(rect.width*dpr)||canvas.height!==Math.round(rect.height*dpr)){canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr)}
  const c=canvas.getContext("2d")!;c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,rect.width,rect.height);
  const v=viewRef.current,selectedId=activeId.current,pos=(n:Node)=>({x:n.x*rect.width*v.scale+v.x,y:n.y*rect.height*v.scale+v.y});
  for(const [a,b] of edges){const related=!selectedId||a===selectedId||b===selectedId,p=pos(nodesRef.current.find(n=>n.id===a)!),q=pos(nodesRef.current.find(n=>n.id===b)!);c.strokeStyle=selectedId?(related?"#8e9691":"rgba(174,180,176,.2)"):"#d8dcda";c.lineWidth=selectedId&&related?1.6:1;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(q.x,q.y);c.stroke()}
  for(const n of nodesRef.current){const p=pos(n),selected=selectedId===n.id;c.beginPath();c.arc(p.x,p.y,n.size+(selected?3:0),0,Math.PI*2);c.fillStyle=colors[n.group];c.fill();if(selected){c.strokeStyle="#fff";c.lineWidth=2;c.stroke()}if(n.size>=7||selected){c.font=`${selected?600:500} 12px -apple-system, sans-serif`;c.fillStyle="#343a40";c.fillText(n.label,p.x+n.size+7,p.y+4)}}
 };drawRef.current=draw;draw();const observer=new ResizeObserver(draw);observer.observe(canvas);return()=>observer.disconnect()},[]);
 const local=(e:{currentTarget:HTMLCanvasElement;clientX:number;clientY:number})=>{const r=e.currentTarget.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top,r}};
 const hit=(x:number,y:number,r:DOMRect)=>{const v=viewRef.current;let found:Node|null=null,best=24;for(const n of nodesRef.current){const d=Math.hypot(x-(n.x*r.width*v.scale+v.x),y-(n.y*r.height*v.scale+v.y));if(d<best){best=d;found=n}}return found};
 const activate=(node:Node|null)=>{if(activeId.current===node?.id)return;activeId.current=node?.id??null;setActive(node?{...node}:null);drawRef.current()};
 const onPointerDown=(e:React.PointerEvent<HTMLCanvasElement>)=>{const {x,y,r}=local(e),node=hit(x,y,r);e.currentTarget.setPointerCapture(e.pointerId);if(node){dragRef.current={kind:"node",id:node.id};activate(node);e.currentTarget.classList.add("dragging-node")}else{const v=viewRef.current;dragRef.current={kind:"pan",x:e.clientX,y:e.clientY,ox:v.x,oy:v.y};e.currentTarget.classList.add("panning")}};
 const onPointerMove=(e:React.PointerEvent<HTMLCanvasElement>)=>{const {x,y,r}=local(e),drag=dragRef.current,v=viewRef.current;if(drag?.kind==="node"){const node=nodesRef.current.find(n=>n.id===drag.id)!;node.x=Math.max(.02,Math.min(.98,(x-v.x)/(r.width*v.scale)));node.y=Math.max(.03,Math.min(.97,(y-v.y)/(r.height*v.scale)));activate(node);drawRef.current();return}if(drag?.kind==="pan"){v.x=drag.ox+e.clientX-drag.x;v.y=drag.oy+e.clientY-drag.y;drawRef.current();return}activate(hit(x,y,r))};
 const finish=(e:React.PointerEvent<HTMLCanvasElement>)=>{dragRef.current=null;e.currentTarget.classList.remove("dragging-node","panning");if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId)};
 const changeZoom=(value:number)=>{const canvas=canvasRef.current;if(!canvas)return;const r=canvas.getBoundingClientRect(),v=viewRef.current,next=value/100,ratio=next/v.scale,cx=r.width/2,cy=r.height/2;v.x=cx-(cx-v.x)*ratio;v.y=cy-(cy-v.y)*ratio;v.scale=next;setZoom(value);drawRef.current()};
 return <section className="knowledge-section" id="knowledge-graph">
  <div className="knowledge-heading"><small>KNOWLEDGE GRAPH</small><h2>知识不是孤立的章节</h2><p>每个点代表一个知识，线表示真实的知识依赖或方法交汇。高阶领域通常位于多个基础学科之间。</p></div>
  <div className="graph-shell">
   <canvas ref={canvasRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={finish} onPointerCancel={finish} onPointerLeave={e=>{if(!dragRef.current)activate(null);e.currentTarget.classList.remove("dragging-node","panning")}} role="img" aria-label="包含艺术、设计、计算生物学、认知科学、网络科学等领域的可拖拽跨学科知识图谱"/>
   <label className="graph-zoom"><span>缩放</span><input type="range" min="70" max="220" step="5" value={zoom} onChange={e=>changeZoom(Number(e.currentTarget.value))} aria-label="调整知识图谱缩放比例"/><output>{zoom}%</output></label>
   <div className="graph-tooltip" aria-live="polite">{active?<><b>{active.label}</b><span>{descriptions[active.id]??active.group}</span></>:<><b>探索知识图谱</b><span>悬停查看学科构成 · 拖动节点调整位置</span></>}</div>
  </div>
  <div className="graph-legend">{Object.entries(colors).map(([name,color])=><span key={name}><i style={{background:color}}/>{name}</span>)}</div>
  <p className="graph-note">交叉领域依据其实际使用的理论与方法连接；悬停节点时，与它直接相关的连线会被突出显示。</p>
 </section>
}
