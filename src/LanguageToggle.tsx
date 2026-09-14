import {useLanguage} from "./i18n";

export default function LanguageToggle(){
 const {language,setLanguage}=useLanguage(),english=language==="en";
 return <button className="language-toggle" type="button" aria-label={english?"切换为中文":"Switch to English"} aria-pressed={english} title={english?"切换为中文":"Switch to English"} onClick={()=>setLanguage(english?"zh":"en")}><span aria-hidden="true">{english?"中":"EN"}</span></button>;
}
