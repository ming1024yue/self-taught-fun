import {useEffect,useRef,useState} from "react";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";
import {subjectCategories,type SubjectCategory} from "./subjectNavigation";

const base=import.meta.env.BASE_URL;

function MenuItems({category,onSelect}:{category:SubjectCategory;onSelect:()=>void}){
 return <>{category.items.map(item=><a href={item.href} key={item.name} onClick={onSelect}>{item.name}<small>进入学科</small></a>)}</>;
}

export default function GlobalHeader({sidebarLabel}:{sidebarLabel?:string}){
 const [openCategory,setOpenCategory]=useState<string|null>(null),headerRef=useRef<HTMLElement>(null);
 useEffect(()=>{const close=(event:PointerEvent)=>{if(!headerRef.current?.contains(event.target as Node))setOpenCategory(null)},escape=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpenCategory(null)};document.addEventListener("pointerdown",close);document.addEventListener("keydown",escape);return()=>{document.removeEventListener("pointerdown",close);document.removeEventListener("keydown",escape);document.body.classList.remove("menu-open")}},[]);
 const active=subjectCategories.find(category=>category.name===openCategory);
 const closeSidebar=()=>document.body.classList.remove("menu-open");
 const toggleSidebar=(button:HTMLButtonElement)=>{const open=document.body.classList.toggle("menu-open");button.setAttribute("aria-expanded",String(open))};
 const closeCategory=()=>setOpenCategory(null);
 return <>
  <header className={`platform-header${sidebarLabel?" subject-global-header":""}`} ref={headerRef}>
   <div className="platform-brand-row">
    {sidebarLabel&&<button className="menu-button" aria-label={`打开${sidebarLabel}目录`} aria-expanded="false" onClick={event=>toggleSidebar(event.currentTarget)}><span/><span/><span/></button>}
    <a className="platform-brand" href={base} aria-label="自学坊首页"><BrandLogo/><b>自学坊</b></a>
   </div>
   <nav className="platform-nav" aria-label="学科分类导航">
    {subjectCategories.map(category=><div className={`subject-menu${openCategory===category.name?" open":""}`} key={category.name}>
     <button type="button" aria-expanded={openCategory===category.name} onClick={()=>setOpenCategory(current=>current===category.name?null:category.name)}>{category.name}<i aria-hidden="true"/></button>
     <div className="subject-menu-panel"><MenuItems category={category} onSelect={closeCategory}/></div>
    </div>)}
    <a className="platform-simple-link" href={`${base}opportunities/`} onClick={closeCategory}>比赛和资质</a>
    <a className="platform-simple-link" href={`${base}#about`} onClick={closeCategory}>关于</a>
   </nav>
   <ThemeToggle/>
   {active&&<div className="mobile-subject-panel"><strong>{active.name}</strong><MenuItems category={active} onSelect={closeCategory}/></div>}
  </header>
  {sidebarLabel&&<button className="mobile-overlay" aria-label={`关闭${sidebarLabel}目录`} onClick={closeSidebar}/>} 
 </>;
}
