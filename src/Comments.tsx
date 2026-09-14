import {useEffect,useRef} from "react";
import {pick,useLanguage} from "./i18n";

const repo="ming1024yue/self-taught-fun";
const repoId="R_kgDOUOOwiQ";
const categoryId=import.meta.env.VITE_GISCUS_CATEGORY_ID?.trim()||"DIC_kwDOUOOwic4DFG11";

export default function Comments({discussionKey}:{discussionKey:string}){
 const {language}=useLanguage();
 const container=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  if(!categoryId||!container.current)return;
  const target=container.current;
  target.replaceChildren();
  const script=document.createElement("script");
  script.src="https://giscus.app/client.js";
  script.async=true;
  script.crossOrigin="anonymous";
  script.dataset.repo=repo;
  script.dataset.repoId=repoId;
  script.dataset.category="Announcements";
  script.dataset.categoryId=categoryId;
  script.dataset.mapping="specific";
  script.dataset.term=`自学坊页面：${discussionKey}`;
  script.dataset.strict="1";
  script.dataset.reactionsEnabled="1";
  script.dataset.emitMetadata="0";
  script.dataset.inputPosition="top";
  const giscusTheme=()=>document.documentElement.dataset.theme==="dark"?"noborder_dark":"noborder_light";
  script.dataset.theme=giscusTheme();
  script.dataset.lang=language==="en"?"en":"zh-CN";
  script.dataset.loading="lazy";
  target.append(script);
  const syncTheme=()=>target.querySelector<HTMLIFrameElement>(".giscus-frame")?.contentWindow?.postMessage({giscus:{setConfig:{theme:giscusTheme()}}},"https://giscus.app");
  const observer=new MutationObserver(syncTheme);
  observer.observe(target,{childList:true});
  window.addEventListener("site-theme-change",syncTheme);
  return()=>{observer.disconnect();window.removeEventListener("site-theme-change",syncTheme);target.replaceChildren()};
 },[discussionKey,language]);
 return <section className="comments-section" aria-labelledby="comments-title">
  <div className="comments-heading"><small>COMMUNITY</small><h2 id="comments-title">{pick(language,"留言与讨论","Comments & Discussion")}</h2><p>{pick(language,"分享学习心得、补充资源或提出问题。留言由 GitHub Discussions 保存，登录 GitHub 后即可留言和回复。","Share what you learned, suggest a resource, or ask a question. Comments are stored in GitHub Discussions; sign in with GitHub to post and reply.")}</p></div>
  {categoryId?<div className="giscus" ref={container}/>:<div className="comments-pending"><b>{pick(language,"留言区等待连接 GitHub Discussions","Comments are waiting for GitHub Discussions")}</b><p>{pick(language,"站点结构已经就绪；仓库完成 Discussions 与 giscus 配置后，留言框会自动出现在这里。","The page is ready. The comment box will appear after Discussions and giscus are configured for the repository.")}</p></div>}
 </section>;
}
