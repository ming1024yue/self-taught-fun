import{createRoot}from"react-dom/client";
import PlatformHome from"./PlatformHome";
import OpportunitiesPage,{CompetitionsPage,CredentialsPage}from"./OpportunitiesPage";
import KnowledgeGraphPlacement from"./KnowledgeGraphPlacement";
import Comments from"./Comments";
import FinanceHome from"./Home";
import TopicPage from"./TopicPage";
import BooksPage from"./BooksPage";
import MathHome from"./MathHome";
import MathTopicPage from"./MathTopicPage";
import MathBooksPage from"./MathBooksPage";
import{SubjectBooksPage,SubjectHome,SubjectTopicPage}from"./SubjectPages";
import{physics,computerScience}from"./subjectCatalog";
import{biology}from"./biologyCatalog";
import{psychology}from"./psychologyCatalog";
import{history}from"./humanitiesCatalog";
import{management,politicalScience}from"./socialDisciplinesCatalog";
import{chemistry}from"./chemistryCatalog";
import{engineeringTracks}from"./engineeringTracks";
import{languageTracks}from"./languageCatalog";
import{literature}from"./literatureCatalog";
import{exercisePhysiology,nutrition}from"./sportNutritionCatalog";
import{fineArts,design,music}from"./artCatalog";
import{calibrateSubjectPlans}from"./phaseCalibration";
import{preserveSidebarScroll}from"./sidebarScroll";
import{enableThemeInteraction}from"./themeInteraction";
import{enableAnalytics}from"./analytics";
import"./styles.css";import"./tools.css";import"./plan.css";import"./books.css";import"./mobile.css";import"./platform.css";import"./knowledge.css";import"./graph-interaction.css";import"./ollivere-theme.css";import"./comments.css";
import"./subject-menu.css";
import"./curriculum.css";import"./opportunities.css";
import"./theme.css";

const base=import.meta.env.BASE_URL.replace(/\/$/,"");
let path=location.pathname.replace(base,"");
const legacyEngineering=path.match(/^\/engineering\/topics\/(electrical|mechanical|computer|aerospace|systems|materials)\/?$/)?.[1];
if(legacyEngineering){
 path=`/engineering/${legacyEngineering}/`;
 window.history.replaceState(null,"",`${base}${path}`);
}
const legacyLanguage=path.match(/^\/language\/topics\/(linguistics|chinese|english)\/?$/)?.[1];
if(legacyLanguage||/^\/language\/?$/.test(path)){
 path=`/language/${legacyLanguage??"linguistics"}/`;
 window.history.replaceState(null,"",`${base}${path}`);
}
const financeTopic=path.match(/^\/(?:finance\/)?topics\/([^/]+)/)?.[1];
const mathTopic=path.match(/^\/math\/topics\/([^/]+)/)?.[1];
const subjects=calibrateSubjectPlans([...engineeringTracks,...languageTracks,physics,computerScience,biology,psychology,politicalScience,management,history,chemistry,literature,exercisePhysiology,nutrition,fineArts,design,music]);
const subject=subjects.find(item=>path.match(new RegExp(`^/${item.slug}(?:/|$)`)));
const matchedSubjectTopic=subject?path.match(new RegExp(`^/${subject.slug}/topics/([^/]+)`))?.[1]:undefined;
const subjectTopic=subject?.slug==="literature"&&matchedSubjectTopic==="chinese"?"world":matchedSubjectTopic;
const genericPage=subject?(subjectTopic==="books"?<SubjectBooksPage subject={subject}/>:subjectTopic?<SubjectTopicPage subject={subject} topicSlug={subjectTopic}/>:<SubjectHome subject={subject}/>):null;
const page=genericPage??(mathTopic==="books"?<MathBooksPage/>:mathTopic?<MathTopicPage slug={mathTopic}/>:path.match(/^\/math\/?$/)?<MathHome/>:financeTopic==="books"?<BooksPage/>:financeTopic?<TopicPage slug={financeTopic}/>:path.match(/^\/finance\/?$/)?<FinanceHome/>:path.match(/^\/opportunities\/competitions\/?$/)?<CompetitionsPage/>:path.match(/^\/opportunities\/credentials\/?$/)?<CredentialsPage/>:path.match(/^\/opportunities\/?$/)?<OpportunitiesPage/>:<><PlatformHome/><KnowledgeGraphPlacement/></>);
const discussionKey=subject?`${subject.slug}/${subjectTopic??"home"}`:mathTopic?`math/${mathTopic}`:path.match(/^\/math\/?$/)?"math/home":financeTopic?`finance/${financeTopic}`:path.match(/^\/finance\/?$/)?"finance/home":null;
createRoot(document.getElementById("root")!).render(<>{page}{discussionKey&&<div className="learning-comments"><Comments discussionKey={discussionKey}/></div>}<aside className="education-notice" aria-label="使用说明">本站仅提供教育与学习信息；请尊重资源版权，勿将第三方内容用于未经授权的商业用途。</aside></>);
preserveSidebarScroll();enableThemeInteraction();
enableAnalytics();
