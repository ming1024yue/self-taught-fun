import {useEffect,useRef,useState} from "react";
import BrandLogo from "./BrandLogo";
import CourseSearch from "./CourseSearch";
import LanguageToggle from "./LanguageToggle";
import {categoryLabel,pick,subjectLabel,useLanguage} from "./i18n";
import {subjectCategories,type SubjectCategory} from "./subjectNavigation";

const base=import.meta.env.BASE_URL;

function MenuItems({category,onSelect}:{category:SubjectCategory;onSelect:()=>void}){
 const {language}=useLanguage(),english=language==="en";
 return <>{category.items.map(item=><a href={item.href} key={item.name} onClick={onSelect}>{english?subjectLabel(item.id,item.name):item.name}<small>{pick(language,"进入学科","Open path")}</small></a>)}</>;
}

export default function GlobalHeader({sidebarLabel}:{sidebarLabel?:string}){
 const {language}=useLanguage(),english=language==="en";
 const [openCategory,setOpenCategory]=useState<string|null>(null),headerRef=useRef<HTMLElement>(null);
 useEffect(()=>{const close=(event:PointerEvent)=>{if(!headerRef.current?.contains(event.target as Node))setOpenCategory(null)},escape=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpenCategory(null)};document.addEventListener("pointerdown",close);document.addEventListener("keydown",escape);return()=>{document.removeEventListener("pointerdown",close);document.removeEventListener("keydown",escape);document.body.classList.remove("menu-open")}},[]);
 const active=subjectCategories.find(category=>category.name===openCategory);
 const closeSidebar=()=>document.body.classList.remove("menu-open");
 const toggleSidebar=(button:HTMLButtonElement)=>{const open=document.body.classList.toggle("menu-open");button.setAttribute("aria-expanded",String(open))};
 const closeCategory=()=>setOpenCategory(null);
 return <>
  <header className={`platform-header${sidebarLabel?" subject-global-header":""}`} ref={headerRef}>
   <div className="platform-brand-row">
    {sidebarLabel&&<button className="menu-button" aria-label={english?`Open ${subjectLabel(sidebarLabel,sidebarLabel)} contents`:`打开${sidebarLabel}目录`} aria-expanded="false" onClick={event=>toggleSidebar(event.currentTarget)}><span/><span/><span/></button>}
    <a className="platform-brand" href={base} aria-label={pick(language,"自学坊首页","Self-Taught Fun home")}><BrandLogo/><b>{pick(language,"自学坊","Self-Taught Fun")}</b></a>
   </div>
   <nav className="platform-nav" aria-label={pick(language,"学科分类导航","Discipline navigation")}>
    {subjectCategories.map(category=><div className={`subject-menu${openCategory===category.name?" open":""}`} key={category.name}>
     <button type="button" aria-expanded={openCategory===category.name} onClick={()=>setOpenCategory(current=>current===category.name?null:category.name)}>{english?categoryLabel(category.name):category.name}<i aria-hidden="true"/></button>
     <div className="subject-menu-panel"><MenuItems category={category} onSelect={closeCategory}/></div>
    </div>)}
    <a className="platform-simple-link" href={`${base}calendar/`} onClick={closeCategory}>{pick(language,"时间表","Schedule")}</a>
    <a className="platform-simple-link" href={`${base}opportunities/`} onClick={closeCategory}>{pick(language,"比赛和资质","Competitions & Credentials")}</a>
    <a className="platform-simple-link" href={`${base}#about`} onClick={closeCategory}>{pick(language,"关于","About")}</a>
   </nav>
   <div className="header-controls"><CourseSearch onOpen={closeCategory}/><LanguageToggle/></div>
   {active&&<div className="mobile-subject-panel"><strong>{english?categoryLabel(active.name):active.name}</strong><MenuItems category={active} onSelect={closeCategory}/></div>}
  </header>
  {sidebarLabel&&<button className="mobile-overlay" aria-label={english?`Close ${subjectLabel(sidebarLabel,sidebarLabel)} contents`:`关闭${sidebarLabel}目录`} onClick={closeSidebar}/>}
 </>;
}
