import {useEffect,useMemo,useRef,useState,type CSSProperties,type FormEvent} from "react";
import GlobalHeader from "./GlobalHeader";
import {courseSearchItems,searchCourseItems,type CourseSearchItem} from "./courseSearchData";
import {levelLabel,pick,useLanguage} from "./i18n";

type CourseKind="course"|"practice"|"reading"|"project"|"review";
type RepeatMode="once"|"weekly";
type Course={id:string;title:string;details:string;days:number[];start:string;end:string;kind:CourseKind;repeat:RepeatMode;startDate:string;endDate:string;sourceId?:string;sourceUrl?:string};
type Draft=Omit<Course,"id">;
type PositionedCourse={course:Course;day:number;startMinute:number;endMinute:number;lane:number;laneCount:number};

const storageKey="selftaught-weekly-calendar-v1";
const startMinute=7*60,endMinute=23*60,hourHeight=72,dayHeight=((endMinute-startMinute)/60)*hourHeight;
const dayNames=[
 ["周一","Monday","一","Mon"],["周二","Tuesday","二","Tue"],["周三","Wednesday","三","Wed"],["周四","Thursday","四","Thu"],
 ["周五","Friday","五","Fri"],["周六","Saturday","六","Sat"],["周日","Sunday","日","Sun"]
] as const;
const kinds:{value:CourseKind;zh:string;en:string}[]=[
 {value:"course",zh:"课程",en:"Course"},{value:"practice",zh:"练习",en:"Practice"},{value:"reading",zh:"阅读",en:"Reading"},
 {value:"project",zh:"项目",en:"Project"},{value:"review",zh:"复习",en:"Review"}
];

function dateValue(date:Date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`}
function dateFromValue(value:string){const [year,month,day]=value.split("-").map(Number);return new Date(year,month-1,day,12)}
function weekDayIndex(date:Date){return (date.getDay()+6)%7}
function currentWeekDates(){const today=new Date(),monday=new Date(today.getFullYear(),today.getMonth(),today.getDate()-weekDayIndex(today),12);return dayNames.map((_,index)=>{const date=new Date(monday);date.setDate(monday.getDate()+index);return{date,value:dateValue(date)}})}
const todayValue=dateValue(new Date()),todayDay=weekDayIndex(new Date());
const emptyDraft:Draft={title:"",details:"",days:[todayDay],start:"09:00",end:"10:30",kind:"course",repeat:"once",startDate:todayValue,endDate:"",sourceId:"",sourceUrl:""};

function minutes(time:string){const [hour,minute]=time.split(":").map(Number);return hour*60+minute}
function normalizeCourse(value:unknown):Course|null{
 if(!value||typeof value!=="object")return null;
 const item=value as Partial<Course>;
 if(!(typeof item.id==="string"&&typeof item.title==="string"&&typeof item.details==="string"&&Array.isArray(item.days)&&item.days.every(day=>Number.isInteger(day)&&day>=0&&day<7)&&typeof item.start==="string"&&typeof item.end==="string"&&kinds.some(kind=>kind.value===item.kind)&&(item.sourceId===undefined||typeof item.sourceId==="string")&&(item.sourceUrl===undefined||typeof item.sourceUrl==="string")))return null;
 return{...item,repeat:item.repeat==="once"?"once":"weekly",startDate:typeof item.startDate==="string"?item.startDate:"",endDate:typeof item.endDate==="string"?item.endDate:""} as Course;
}
function loadCourses(){try{const parsed=JSON.parse(localStorage.getItem(storageKey)??"[]");return Array.isArray(parsed)?parsed.map(normalizeCourse).filter((item):item is Course=>Boolean(item)):[]}catch{return []}}
function newId(){return globalThis.crypto?.randomUUID?.()??`course-${Date.now()}-${Math.random().toString(16).slice(2)}`}

function occursOn(course:Course,date:string,day:number){
 if(course.repeat==="once")return course.startDate===date;
 return course.days.includes(day)&&(!course.startDate||date>=course.startDate)&&(!course.endDate||date<=course.endDate);
}

function positionCourses(courses:Course[],day:number,date:string):PositionedCourse[]{
 const items=courses.filter(course=>occursOn(course,date,day)).map(course=>({course,day,startMinute:minutes(course.start),endMinute:minutes(course.end)})).sort((a,b)=>a.startMinute-b.startMinute||a.endMinute-b.endMinute);
 const result:PositionedCourse[]=[];
 for(let index=0;index<items.length;){
  const cluster=[items[index]];let clusterEnd=items[index].endMinute;index++;
  while(index<items.length&&items[index].startMinute<clusterEnd){cluster.push(items[index]);clusterEnd=Math.max(clusterEnd,items[index].endMinute);index++}
  const laneEnds:number[]=[],placed:{item:(typeof items)[number];lane:number}[]=[];
  for(const item of cluster){let lane=laneEnds.findIndex(value=>value<=item.startMinute);if(lane<0){lane=laneEnds.length;laneEnds.push(item.endMinute)}else laneEnds[lane]=item.endMinute;placed.push({item,lane})}
  const laneCount=Math.max(1,laneEnds.length);
  result.push(...placed.map(({item,lane})=>({...item,lane,laneCount})));
 }
 return result;
}

export default function CalendarPage(){
 const {language}=useLanguage(),english=language==="en";
 const [courses,setCourses]=useState<Course[]>(loadCourses),[editorOpen,setEditorOpen]=useState(false),[draft,setDraft]=useState<Draft>(emptyDraft),[courseQuery,setCourseQuery]=useState(""),[coursePickerOpen,setCoursePickerOpen]=useState(false),[error,setError]=useState(""),[deletePromptId,setDeletePromptId]=useState<string|null>(null),[mobileDay,setMobileDay]=useState(()=>{const day=new Date().getDay();return day===0?6:day-1});
 const titleRef=useRef<HTMLInputElement>(null);
 const pickerRef=useRef<HTMLDivElement>(null);
 const weekDates=useMemo(currentWeekDates,[]);
 const schedule=useMemo(()=>weekDates.map((item,day)=>positionCourses(courses,day,item.value)),[courses,weekDates]);
 const courseMatches=useMemo(()=>searchCourseItems(courseQuery,8),[courseQuery]);
 const selectedCourse=useMemo(()=>courseSearchItems.find(item=>item.id===draft.sourceId),[draft.sourceId]);
 const weeklyBlocks=schedule.reduce((sum,items)=>sum+items.length,0);
 const weeklyMinutes=schedule.flat().reduce((sum,item)=>sum+(item.endMinute-item.startMinute),0);
 const weekRange=useMemo(()=>new Intl.DateTimeFormat(english?"en-US":"zh-CN",{month:"short",day:"numeric"}),[english]);
 const shortDate=useMemo(()=>new Intl.DateTimeFormat(english?"en-US":"zh-CN",{month:"numeric",day:"numeric"}),[english]);
 const weekRangeLabel=`${weekRange.format(weekDates[0].date)} — ${weekRange.format(weekDates[6].date)}`;

 useEffect(()=>{try{localStorage.setItem(storageKey,JSON.stringify(courses))}catch{return}},[courses]);
 useEffect(()=>{if(!editorOpen)return;document.body.classList.add("calendar-dialog-open");const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setEditorOpen(false)},outside=(event:PointerEvent)=>{if(!pickerRef.current?.contains(event.target as Node))setCoursePickerOpen(false)};document.addEventListener("keydown",close);document.addEventListener("pointerdown",outside);window.setTimeout(()=>titleRef.current?.focus(),30);return()=>{document.body.classList.remove("calendar-dialog-open");document.removeEventListener("keydown",close);document.removeEventListener("pointerdown",outside)}},[editorOpen]);

 const openNew=(day=mobileDay)=>{setDraft({...emptyDraft,days:[day],repeat:"once",startDate:weekDates[day].value,endDate:""});setCourseQuery("");setCoursePickerOpen(false);setError("");setEditorOpen(true)};
 const chooseCourse=(item:CourseSearchItem)=>{const title=english?item.titleEn:item.title;setDraft(current=>({...current,title,sourceId:item.id,sourceUrl:item.href}));setCourseQuery(title);setCoursePickerOpen(false);setError("")};
 const toggleDay=(day:number)=>setDraft(current=>({...current,days:current.days.includes(day)?current.days.filter(item=>item!==day):[...current.days,day].sort()}));
 const setRepeat=(repeat:RepeatMode)=>{setDraft(current=>{if(repeat==="once"){const value=current.startDate||weekDates[mobileDay].value;return{...current,repeat,startDate:value,endDate:"",days:[weekDayIndex(dateFromValue(value))]}}return{...current,repeat,startDate:current.startDate||weekDates[0].value,days:current.days.length?current.days:[mobileDay]}});setError("")};
 const save=(event:FormEvent)=>{
  event.preventDefault();
  if(!draft.sourceId||!selectedCourse){setError(pick(language,"请从搜索结果中选择一门本站已有课程。","Choose an existing course from the search results."));return}
  if(draft.repeat==="once"&&!draft.startDate){setError(pick(language,"请选择安排日期。","Choose a date."));return}
  if(draft.repeat==="weekly"&&!draft.startDate){setError(pick(language,"请选择重复计划的开始日期。","Choose a start date for the recurring schedule."));return}
  if(draft.repeat==="weekly"&&!draft.days.length){setError(pick(language,"请至少选择一个重复日。","Select at least one repeat day."));return}
  if(draft.repeat==="weekly"&&draft.endDate&&draft.endDate<draft.startDate){setError(pick(language,"结束日期不能早于开始日期。","The end date cannot be before the start date."));return}
  if(minutes(draft.end)<=minutes(draft.start)){setError(pick(language,"结束时间需要晚于开始时间。","The end time must be later than the start time."));return}
  const value={...draft,days:draft.repeat==="once"?[weekDayIndex(dateFromValue(draft.startDate))]:draft.days,endDate:draft.repeat==="once"?"":draft.endDate,title:draft.title.trim(),details:draft.details.trim()};
  setCourses(current=>[...current,{id:newId(),...value}]);
  setEditorOpen(false);
 };
 const remove=(id:string)=>{setCourses(current=>current.filter(course=>course.id!==id));setDeletePromptId(null)};
 const formatHours=()=>{const hours=weeklyMinutes/60;return Number.isInteger(hours)?String(hours):hours.toFixed(1)};

 return <div className="calendar-page">
  <GlobalHeader/>
  <main className="calendar-main">
   <section className="calendar-hero">
    <div><small>CURRENT WEEK SCHEDULE</small><h1>{pick(language,"安排好正在发生的这一周。","Plan the week you are in.")}</h1><p>{pick(language,"为课程设置具体日期，或按星期持续重复。页面只呈现当前周，未来的安排会在对应日期自动出现。","Schedule a course for one date or repeat it on selected weekdays. This page shows only the current week; future plans appear when their week arrives.")}</p></div>
    <button className="calendar-primary" type="button" onClick={()=>openNew()}><span aria-hidden="true">＋</span>{pick(language,"添加安排","Add schedule")}</button>
   </section>

   <section className="calendar-summary" aria-label={pick(language,"当前周学习概览","Current week summary")}>
    <div><small>{pick(language,"全部安排","Schedules")}</small><strong>{courses.length}</strong></div>
    <div><small>{pick(language,"本周时间块","This week")}</small><strong>{weeklyBlocks}</strong></div>
    <div><small>{pick(language,"本周学习","Study time")}</small><strong>{formatHours()}<em> h</em></strong></div>
    <p>{pick(language,"安排只保存在当前设备。点击课程进入对应页面；悬浮后可从右上角删除。","Schedules stay on this device. Select a course to open it, or hover to delete it from the top-right corner.")}</p>
   </section>

   <section className="calendar-workspace">
    <div className="calendar-workspace-heading"><div><small>{pick(language,"当前周","CURRENT WEEK")}</small><h2>{pick(language,"本周时间表","Current week")}</h2></div><p>{weekRangeLabel} · 07:00—23:00</p></div>
    <div className="calendar-mobile-days" aria-label={pick(language,"选择日期","Choose a date")}>{dayNames.map((day,index)=><button type="button" aria-pressed={mobileDay===index} className={mobileDay===index?"active":""} onClick={()=>setMobileDay(index)} key={day[0]}><span>{english?day[3]:day[2]}</span><time>{shortDate.format(weekDates[index].date)}</time><small>{schedule[index].length}</small></button>)}</div>
    {!weeklyBlocks&&<div className="calendar-empty"><b>{pick(language,"本周还没有安排","Nothing scheduled this week")}</b><span>{courses.length?pick(language,"其他日期的安排会在对应周自动显示。","Plans on other dates will appear in their corresponding week."):pick(language,"添加第一次学习安排，可以设置单次日期或每周重复。","Add your first study plan for one date or as a weekly repeat.")}</span><button type="button" onClick={()=>openNew()}>{pick(language,"添加安排","Add schedule")}</button></div>}
    <div className="calendar-board-wrap">
     <div className="calendar-board">
      <div className="calendar-time-head">{pick(language,"时间","Time")}</div>
      {dayNames.map((day,index)=><div className={`calendar-day-head${mobileDay===index?" is-mobile-active":""}`} key={day[0]}><span>{english?day[1]:day[0]}</span><time>{shortDate.format(weekDates[index].date)}</time><small>{schedule[index].length?pick(language,`${schedule[index].length} 项`,`${schedule[index].length} blocks`):pick(language,"空闲","Open")}</small><button type="button" aria-label={pick(language,`在${shortDate.format(weekDates[index].date)}添加安排`,`Add a schedule on ${shortDate.format(weekDates[index].date)}`)} onClick={()=>openNew(index)}>＋</button></div>)}
      <div className="calendar-time-axis" style={{height:dayHeight}}>{Array.from({length:17},(_,index)=>7+index).map(hour=><time key={hour} style={{top:(hour*60-startMinute)/60*hourHeight}}>{String(hour).padStart(2,"0")}:00</time>)}</div>
      {dayNames.map((day,index)=><div className={`calendar-day${mobileDay===index?" is-mobile-active":""}`} style={{height:dayHeight}} key={day[0]} aria-label={english?day[1]:day[0]}>
       {schedule[index].map(item=>{const top=(item.startMinute-startMinute)/60*hourHeight+3,height=Math.max(34,(item.endMinute-item.startMinute)/60*hourHeight-6),laneWidth=100/item.laneCount,match=courseSearchItems.find(course=>course.id===item.course.sourceId),href=item.course.sourceUrl||match?.href||"#",external=match?.external??/^https?:\/\//.test(href);const style={top,height,left:`calc(${laneWidth*item.lane}% + 4px)`,width:`calc(${laneWidth}% - 8px)`} as CSSProperties;return <div className="calendar-course-wrap" style={style} key={`${item.course.id}-${index}`}>
        <a className={`calendar-course kind-${item.course.kind}`} href={href} target={external?"_blank":undefined} rel={external?"noreferrer":undefined} aria-label={`${item.course.title}, ${english?day[1]:day[0]}, ${item.course.start}–${item.course.end}`}><small>{item.course.start}—{item.course.end}</small><strong>{item.course.title}</strong>{item.course.details&&<span>{item.course.details}</span>}</a>
        <button className="calendar-course-delete" type="button" aria-label={pick(language,`删除${item.course.title}`,`Delete ${item.course.title}`)} onClick={()=>setDeletePromptId(item.course.id)}>×</button>
        {deletePromptId===item.course.id&&<div className="calendar-course-confirm" role="alert"><span>{pick(language,"确认删除？","Delete?")}</span><button type="button" onClick={()=>remove(item.course.id)}>{pick(language,"删除","Delete")}</button><button type="button" onClick={()=>setDeletePromptId(null)}>{pick(language,"取消","Cancel")}</button></div>}
       </div>})}
      </div>)}
     </div>
    </div>
   </section>
  </main>

  {editorOpen&&<div className="calendar-dialog-backdrop" onPointerDown={event=>{if(event.target===event.currentTarget)setEditorOpen(false)}}>
   <section className="calendar-editor" role="dialog" aria-modal="true" aria-labelledby="calendar-editor-title">
    <header><small>{pick(language,"新安排","NEW SCHEDULE")}</small><button type="button" onClick={()=>setEditorOpen(false)} aria-label={pick(language,"关闭","Close")}>×</button></header>
    <h2 id="calendar-editor-title">{pick(language,"添加学习安排","Add a study schedule")}</h2>
    <form onSubmit={save}>
     <div className="calendar-field calendar-course-picker" ref={pickerRef}>
      <label htmlFor="calendar-course-search">{pick(language,"搜索并选择课程","Search and choose a course")}</label>
      <div className={`calendar-course-search-control${selectedCourse?" selected":""}`}>
       <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m15.5 15.5 4.2 4.2"/></svg>
       <input id="calendar-course-search" ref={titleRef} type="search" role="combobox" aria-autocomplete="list" aria-controls="calendar-course-options" aria-expanded={coursePickerOpen&&Boolean(courseQuery.trim())} value={courseQuery} maxLength={100} placeholder={pick(language,"搜索课程、主题或院校","Search courses, topics, or universities")} autoComplete="off" onFocus={()=>setCoursePickerOpen(true)} onChange={event=>{const value=event.currentTarget.value;setCourseQuery(value);setCoursePickerOpen(true);setDraft(current=>({...current,title:"",sourceId:"",sourceUrl:""}))}}/>
       {selectedCourse&&<span aria-label={pick(language,"已选择","Selected")}>✓</span>}
      </div>
      {coursePickerOpen&&courseQuery.trim()&&<div className="calendar-course-options" id="calendar-course-options" role="listbox" aria-label={pick(language,"课程搜索结果","Course search results")}>
       {courseMatches.length?courseMatches.map(item=><button type="button" role="option" aria-selected={item.id===draft.sourceId} key={item.id} onClick={()=>chooseCourse(item)}>
        <span><b>{english?item.subjectEn:item.subjectZh}</b><i>{english?item.topicEn:item.topicZh}</i><em>{english?item.kindEn:item.kindZh}{item.level?` · ${english?levelLabel(item.level):item.level}`:""}</em></span>
        <strong>{english?item.titleEn:item.title}</strong>
       </button>):<p>{pick(language,"没有找到相关课程，请换一个关键词。","No matching courses. Try another keyword.")}</p>}
      </div>}
      {selectedCourse&&<div className="calendar-course-selected"><span>{pick(language,"已选择","Selected")} · {english?selectedCourse.subjectEn:selectedCourse.subjectZh} / {english?selectedCourse.topicEn:selectedCourse.topicZh}</span><a href={selectedCourse.href} target={selectedCourse.external?"_blank":undefined} rel={selectedCourse.external?"noreferrer":undefined}>{pick(language,"查看课程","View course")}</a></div>}
     </div>
     <fieldset className="calendar-repeat-mode"><legend>{pick(language,"安排方式","Schedule type")}</legend><div>
      <label className={draft.repeat==="once"?"selected":""}><input type="radio" name="calendar-repeat" checked={draft.repeat==="once"} onChange={()=>setRepeat("once")}/><span><b>{pick(language,"单次安排","One date")}</b><small>{pick(language,"只在指定日期出现","Shows only on the chosen date")}</small></span></label>
      <label className={draft.repeat==="weekly"?"selected":""}><input type="radio" name="calendar-repeat" checked={draft.repeat==="weekly"} onChange={()=>setRepeat("weekly")}/><span><b>{pick(language,"每周重复","Weekly repeat")}</b><small>{pick(language,"在日期范围内按星期重复","Repeats on weekdays within a date range")}</small></span></label>
     </div></fieldset>
     {draft.repeat==="once"?<label className="calendar-field"><span>{pick(language,"安排日期","Date")}</span><input type="date" value={draft.startDate} onChange={event=>{const value=event.currentTarget.value;setDraft(current=>({...current,startDate:value,days:value?[weekDayIndex(dateFromValue(value))]:[]}));setError("")}}/></label>:<>
      <div className="calendar-form-row"><label className="calendar-field"><span>{pick(language,"开始日期","Starts on")}</span><input type="date" value={draft.startDate} onChange={event=>{const value=event.currentTarget.value;setDraft(current=>({...current,startDate:value}));setError("")}}/></label><label className="calendar-field"><span>{pick(language,"结束日期（可选）","Ends on (optional)")}</span><input type="date" min={draft.startDate||undefined} value={draft.endDate} onChange={event=>{const value=event.currentTarget.value;setDraft(current=>({...current,endDate:value}));setError("")}}/></label></div>
      <fieldset><legend>{pick(language,"每周重复日","Repeat on")}</legend><div className="calendar-day-options">{dayNames.map((day,index)=><label className={draft.days.includes(index)?"selected":""} key={day[0]}><input type="checkbox" checked={draft.days.includes(index)} onChange={()=>toggleDay(index)}/><span>{english?day[3]:day[2]}</span></label>)}</div></fieldset>
     </>}
     <div className="calendar-form-row"><label className="calendar-field"><span>{pick(language,"开始时间","Starts")}</span><input type="time" min="07:00" max="22:30" step="900" value={draft.start} onChange={event=>{const value=event.currentTarget.value;setDraft(current=>({...current,start:value}))}}/></label><label className="calendar-field"><span>{pick(language,"结束时间","Ends")}</span><input type="time" min="07:30" max="23:00" step="900" value={draft.end} onChange={event=>{const value=event.currentTarget.value;setDraft(current=>({...current,end:value}))}}/></label></div>
     <label className="calendar-field"><span>{pick(language,"学习类型","Block type")}</span><select value={draft.kind} onChange={event=>{const value=event.currentTarget.value as CourseKind;setDraft(current=>({...current,kind:value}))}}>{kinds.map(kind=><option value={kind.value} key={kind.value}>{english?kind.en:kind.zh}</option>)}</select></label>
     <label className="calendar-field"><span>{pick(language,"备注（可选）","Note (optional)")}</span><textarea value={draft.details} maxLength={160} rows={3} placeholder={pick(language,"学习目标、章节或课程链接","Goal, chapter, or course link")} onChange={event=>{const value=event.currentTarget.value;setDraft(current=>({...current,details:value}))}}/></label>
     {error&&<p className="calendar-error" role="alert">{error}</p>}
     <footer><span/><div><button className="calendar-cancel" type="button" onClick={()=>setEditorOpen(false)}>{pick(language,"取消","Cancel")}</button><button className="calendar-save" type="submit">{pick(language,"保存安排","Save schedule")}</button></div></footer>
    </form>
   </section>
  </div>}
 </div>;
}
