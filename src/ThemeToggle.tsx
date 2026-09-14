import {useEffect,useState} from "react";

type SiteTheme="light"|"dark";
const storageKey="selftaught-theme";

function storedTheme():SiteTheme|null{
 try{
  const value=localStorage.getItem(storageKey);
  return value==="light"||value==="dark"?value:null;
 }catch{return null}
}

function currentTheme():SiteTheme{
 return document.documentElement.dataset.theme==="dark"?"dark":"light";
}

function applyTheme(theme:SiteTheme,persist=true){
 const root=document.documentElement;
 root.dataset.theme=theme;
 root.style.colorScheme=theme;
 document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute("content",theme==="dark"?"#151515":"#f5f5f7");
 window.dispatchEvent(new CustomEvent("site-theme-change",{detail:{theme}}));
 if(persist)try{localStorage.setItem(storageKey,theme)}catch{return}
}

export default function ThemeToggle(){
 const [theme,setTheme]=useState<SiteTheme>(currentTheme);
 useEffect(()=>{
  const media=matchMedia("(prefers-color-scheme: dark)");
  const followSystem=()=>{if(storedTheme())return;const next:SiteTheme=media.matches?"dark":"light";applyTheme(next,false);setTheme(next)};
  const sync=(event:Event)=>setTheme((event as CustomEvent<{theme:SiteTheme}>).detail.theme);
  media.addEventListener("change",followSystem);
  window.addEventListener("site-theme-change",sync);
  return()=>{media.removeEventListener("change",followSystem);window.removeEventListener("site-theme-change",sync)};
 },[]);
 const dark=theme==="dark",next=dark?"light":"dark";
 return <button className="theme-toggle" type="button" aria-label={`切换为${dark?"浅色":"深色"}主题`} aria-pressed={dark} title={`切换为${dark?"浅色":"深色"}主题`} onClick={()=>applyTheme(next)}><span className="theme-toggle-icon" aria-hidden="true"/></button>;
}
