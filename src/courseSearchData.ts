import {fineArts,design,music} from "./artCatalog";
import {biology} from "./biologyCatalog";
import {chemistry} from "./chemistryCatalog";
import {topics as financeTopics} from "./data";
import {engineeringTracks} from "./engineeringTracks";
import {history} from "./humanitiesCatalog";
import {kindLabel,resourceSummary,subjectLabel,topicLabel} from "./i18n";
import {languageTracks} from "./languageCatalog";
import {literature} from "./literatureCatalog";
import {mathTopics} from "./mathData";
import {psychology} from "./psychologyCatalog";
import {management,politicalScience} from "./socialDisciplinesCatalog";
import {exercisePhysiology,nutrition} from "./sportNutritionCatalog";
import {computerScience,physics} from "./subjectCatalog";
import type {SubjectConfig} from "./subjectTypes";

const base=import.meta.env.BASE_URL;
const utilityTopics=new Set(["intro","how","plan","tools","books"]);

export type CourseSearchItem={
 id:string;
 title:string;
 titleEn:string;
 subjectZh:string;
 subjectEn:string;
 topicZh:string;
 topicEn:string;
 kindZh:string;
 kindEn:string;
 level:string;
 descriptionZh:string;
 descriptionEn:string;
 href:string;
 external:boolean;
 searchText:string;
};

type SearchResource={name:string;url:string;level?:string;kind?:string;pre?:string;description?:string};
type SearchTopic={title:string;intro:string;resources:SearchResource[]};

const genericSubjects:SubjectConfig[]=[
 ...engineeringTracks,
 ...languageTracks,
 physics,
 computerScience,
 biology,
 psychology,
 politicalScience,
 management,
 history,
 chemistry,
 literature,
 exercisePhysiology,
 nutrition,
 fineArts,
 design,
 music
];

const items:CourseSearchItem[]=[];

function searchable(...values:(string|undefined)[]){
 return values.filter(Boolean).join(" ").toLocaleLowerCase();
}

function addTopic(subjectSlug:string,subjectZh:string,subjectEn:string,topicSlug:string,topic:SearchTopic){
 if(utilityTopics.has(topicSlug))return;
 const topicEn=topicLabel(topicSlug,topic.title);
 items.push({
  id:`topic:${subjectSlug}:${topicSlug}`,
  title:topic.title,
  titleEn:topicEn,
  subjectZh,
  subjectEn,
  topicZh:topic.title,
  topicEn,
  kindZh:"课程主题",
  kindEn:"Course topic",
  level:"",
  descriptionZh:topic.intro,
  descriptionEn:`A structured ${subjectEn} topic covering ${topicEn.toLocaleLowerCase()}, with selected open courses and learning resources.`,
  href:`${base}${subjectSlug}/topics/${topicSlug}/`,
  external:false,
  searchText:searchable(topic.title,topicEn,subjectZh,subjectEn,topic.intro,"课程 主题 course topic")
 });
 topic.resources.forEach(resource=>addResource(subjectSlug,subjectZh,subjectEn,topicSlug,topic,resource));
}

function addResource(subjectSlug:string,subjectZh:string,subjectEn:string,topicSlug:string,topic:SearchTopic,resource:SearchResource){
 const kindZh=resource.kind??"公开课",topicEn=topicLabel(topicSlug,topic.title);
 items.push({
  id:`resource:${subjectSlug}:${resource.url}`,
  title:resource.name,
  titleEn:resource.name,
  subjectZh,
  subjectEn,
  topicZh:topic.title,
  topicEn,
  kindZh,
  kindEn:kindLabel(kindZh),
  level:resource.level??"",
  descriptionZh:resource.description??topic.intro,
  descriptionEn:resourceSummary(resource.name,topicEn,kindZh),
  href:resource.url,
  external:true,
  searchText:searchable(resource.name,subjectZh,subjectEn,topic.title,topicEn,kindZh,kindLabel(kindZh),resource.level,resource.pre,resource.description,resource.url)
 });
}

function addSubject(subject:SubjectConfig){
 const subjectEn=subjectLabel(subject.slug,subject.name);
 Object.entries(subject.topics).forEach(([slug,topic])=>addTopic(subject.slug,subject.name,subjectEn,slug,topic));
 subject.portals.forEach(([institution,name,url,description])=>{
  items.push({
   id:`portal:${subject.slug}:${url}`,
   title:name,
   titleEn:name,
   subjectZh:subject.name,
   subjectEn,
   topicZh:"课程目录",
   topicEn:"Course catalog",
   kindZh:"课程库",
   kindEn:"Course catalog",
   level:"",
   descriptionZh:description,
   descriptionEn:`Explore open ${subjectEn} courses and materials from ${institution}.`,
   href:url,
   external:true,
   searchText:searchable(institution,name,url,description,subject.name,subjectEn,"课程 公开课 course catalog university")
  });
 });
}

Object.entries(financeTopics).forEach(([slug,topic])=>addTopic("finance","金融","Finance",slug,topic));
Object.entries(mathTopics).forEach(([slug,topic])=>addTopic("math","数学","Mathematics",slug,topic));
genericSubjects.forEach(addSubject);

// A resource may be recommended in several related topics. Keep one visible result,
// while preserving every topic as searchable context.
const deduplicated=new Map<string,CourseSearchItem>();
items.forEach(item=>{
 const key=item.external?`${item.subjectZh}|${item.href}`:item.href;
 const previous=deduplicated.get(key);
 if(!previous){deduplicated.set(key,item);return}
 previous.searchText=`${previous.searchText} ${item.searchText}`;
 if(!previous.topicZh.includes(item.topicZh))previous.topicZh=`${previous.topicZh} / ${item.topicZh}`;
 if(!previous.topicEn.includes(item.topicEn))previous.topicEn=`${previous.topicEn} / ${item.topicEn}`;
});

export const courseSearchItems=[...deduplicated.values()];

function relevance(item:CourseSearchItem,query:string){
 const normalized=query.trim().toLocaleLowerCase(),tokens=normalized.split(/\s+/).filter(Boolean);
 if(!tokens.length||!tokens.every(token=>item.searchText.includes(token)))return -1;
 const title=`${item.title} ${item.titleEn}`.toLocaleLowerCase();
 const topic=`${item.topicZh} ${item.topicEn}`.toLocaleLowerCase();
 const subject=`${item.subjectZh} ${item.subjectEn}`.toLocaleLowerCase();
 let result=0;
 if(title===normalized)result+=140;
 else if(title.startsWith(normalized))result+=100;
 else if(title.includes(normalized))result+=75;
 if(topic===normalized)result+=80;
 else if(topic.includes(normalized))result+=46;
 if(subject===normalized)result+=55;
 else if(subject.includes(normalized))result+=28;
 if(item.kindZh==="公开课")result+=4;
 if(!item.external)result+=3;
 return result;
}

export function searchCourseItems(query:string,limit=24){
 if(!query.trim())return [];
 return courseSearchItems
  .map(item=>({item,score:relevance(item,query)}))
  .filter(result=>result.score>=0)
  .sort((a,b)=>b.score-a.score||a.item.title.localeCompare(b.item.title))
  .slice(0,limit)
  .map(result=>result.item);
}
