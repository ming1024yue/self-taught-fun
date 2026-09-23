import {useEffect,useMemo,useRef,useState} from "react";
import {searchCourseItems} from "./courseSearchData";
import {levelLabel,pick,useLanguage} from "./i18n";

export default function CourseSearch({onOpen}:{onOpen?:()=>void}){
 const {language}=useLanguage(),english=language==="en";
 const [open,setOpen]=useState(false),[query,setQuery]=useState("");
 const inputRef=useRef<HTMLInputElement>(null),triggerRef=useRef<HTMLButtonElement>(null);
 const results=useMemo(()=>searchCourseItems(query),[query]);
 const close=(restoreFocus=true)=>{setOpen(false);if(restoreFocus)requestAnimationFrame(()=>triggerRef.current?.focus())};
 const show=()=>{onOpen?.();setOpen(true)};

 useEffect(()=>{
  const shortcut=(event:KeyboardEvent)=>{
   if((event.metaKey||event.ctrlKey)&&event.key.toLocaleLowerCase()==="k"){
    event.preventDefault();
    setOpen(current=>!current);
   }
  };
  document.addEventListener("keydown",shortcut);
  return()=>document.removeEventListener("keydown",shortcut);
 },[]);

 useEffect(()=>{
  if(!open)return;
  document.body.classList.add("course-search-open");
  const escape=(event:KeyboardEvent)=>{if(event.key==="Escape")close()};
  document.addEventListener("keydown",escape);
  requestAnimationFrame(()=>inputRef.current?.focus());
  return()=>{document.removeEventListener("keydown",escape);document.body.classList.remove("course-search-open")};
 },[open]);

 const suggestions=english?["Linear Algebra","Data Structures & Algorithms","Machine Learning","Microeconomics","Corporate Finance","Quantum Mechanics","Organic Chemistry","Genetics","Cognitive Psychology","Control Systems","Game Design","Composition"]:["线性代数","数据结构与算法","机器学习","微观经济学","公司金融","量子力学","有机化学","遗传学","认知心理学","控制系统","游戏设计","作曲"];
 const label=pick(language,"搜索课程","Search courses");
 return <>
  <button ref={triggerRef} className="course-search-trigger" type="button" aria-label={label} title={`${label} · ⌘K`} aria-expanded={open} onClick={show}>
   <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m15.5 15.5 4.2 4.2"/></svg>
  </button>
  {open&&<div className="course-search-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)close()}}>
   <section className="course-search-dialog" role="dialog" aria-modal="true" aria-labelledby="course-search-title">
    <header className="course-search-heading">
     <div><small>{pick(language,"全站检索","SITE SEARCH")}</small><h2 id="course-search-title">{pick(language,"搜索课程与学习资源","Search courses and learning resources")}</h2></div>
     <button type="button" className="course-search-close" aria-label={pick(language,"关闭搜索","Close search")} onClick={()=>close()}><span aria-hidden="true"/></button>
    </header>
    <label className="course-search-input">
     <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m15.5 15.5 4.2 4.2"/></svg>
     <input ref={inputRef} type="search" value={query} onChange={event=>setQuery(event.target.value)} aria-label={pick(language,"搜索课程、学科、主题或院校","Search courses, subjects, topics, or universities")} placeholder={pick(language,"输入课程、学科、主题或院校","Course, subject, topic, or university")} autoComplete="off" spellCheck="false"/>
     <kbd>ESC</kbd>
    </label>
    {!query.trim()?<div className="course-search-start">
     <p>{pick(language,"可搜索全站现有的公开课、开放教材、课程主题与大学课程目录。","Search the site's open courses, textbooks, course topics, and university catalogs.")}</p>
     <div>{suggestions.map(suggestion=><button type="button" key={suggestion} onClick={()=>setQuery(suggestion)}>{suggestion}</button>)}</div>
    </div>:<div className="course-search-results" aria-live="polite">
     <p className="course-search-count">{results.length?pick(language,`找到 ${results.length} 个相关结果`,`Showing ${results.length} relevant results`):pick(language,"没有找到相关课程","No matching courses found")}</p>
     {results.length>0&&<div className="course-search-list">{results.map(item=><a key={item.id} href={item.href} target={item.external?"_blank":undefined} rel={item.external?"noreferrer":undefined} onClick={()=>close(false)}>
      <span className="course-search-meta"><b>{english?item.subjectEn:item.subjectZh}</b><i>{english?item.topicEn:item.topicZh}</i><em>{english?item.kindEn:item.kindZh}{item.level?` · ${english?levelLabel(item.level):item.level}`:""}</em></span>
      <strong>{english?item.titleEn:item.title}</strong>
      <p>{english?item.descriptionEn:item.descriptionZh}</p>
     </a>)}</div>}
     {!results.length&&<div className="course-search-empty"><span>∅</span><p>{pick(language,"换一个课程名称、主题或院校关键词试试。","Try another course, topic, or university keyword.")}</p></div>}
    </div>}
   </section>
  </div>}
 </>;
}
