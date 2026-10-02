import {useLayoutEffect,useRef} from "react";
import KnowledgeGraph from "./KnowledgeGraph";

export default function KnowledgeGraphPlacement(){
  const container=useRef<HTMLDivElement>(null);
  useLayoutEffect(()=>{
    const nextSection=document.querySelector(".github-invite")??document.getElementById("about");
    if(nextSection&&container.current) nextSection.before(container.current);
  },[]);
  return <div className="knowledge-placement" ref={container}><KnowledgeGraph/></div>;
}
