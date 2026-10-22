/* Independent guide sessions: existing practice marks and textbook drafts are untouched. */
const sgId=id=>document.getElementById(id);
const sgKey='itec3210-study-guide-quiz-v1';
let sgSaved={unit:1,sessions:{},bests:{}};
try {
  const data=JSON.parse(localStorage.getItem(sgKey));
  if(data && typeof data==='object') {
    if(data.sessions && typeof data.sessions==='object')sgSaved.sessions=data.sessions;
    if(data.bests && typeof data.bests==='object')sgSaved.bests=data.bests;
    if(window.studyGuideSets.some(s=>s.unit===data.unit))sgSaved.unit=data.unit;
  }
} catch { /* Study remains available if storage is blocked. */ }
let sgUnit=sgSaved.unit;
function sgSet(){return window.studyGuideSets.find(s=>s.unit===sgUnit);}
function sgSession(){
  const set=sgSet();let s=sgSaved.sessions[sgUnit];
  const valid=s && Array.isArray(s.order) && s.order.length>0 && new Set(s.order).size===s.order.length && s.order.every(id=>set.questions.some(q=>q.id===id)) && s.answers && typeof s.answers==='object';
  if(!valid)s=sgSaved.sessions[sgUnit]={order:set.questions.map(q=>q.id),answers:{},index:0,mode:'study',done:false,retry:false};
  if(!Number.isInteger(s.index)||s.index<0||s.index>=s.order.length)s.index=0;
  s.mode=s.mode==='exam'?'exam':'study';
  for(const id of s.order)if(!Number.isInteger(s.answers[id])||s.answers[id]<0||s.answers[id]>4)delete s.answers[id];
  if(s.done && !s.order.every(id=>Object.hasOwn(s.answers,id)))s.done=false;
  return s;
}
function sgQuestions(){const s=sgSession();return s.order.map(id=>sgSet().questions.find(q=>q.id===id));}
function sgSave(){
  try {localStorage.setItem(sgKey,JSON.stringify(sgSaved));sgId('sgSaveStatus').textContent='Session and best scores saved in this browser.';}
  catch {sgId('sgSaveStatus').textContent='Browser storage is unavailable; this session will not be saved.';}
}
function sgRenderSets(){
  const grid=sgId('sgSetGrid');grid.replaceChildren();let finished=0;
  for(const set of window.studyGuideSets){
    const b=document.createElement('button');b.type='button';b.className='textbook-set';b.classList.toggle('active',set.unit===sgUnit);b.setAttribute('aria-pressed',String(set.unit===sgUnit));
    const n=document.createElement('span');n.className='eyebrow';n.textContent=`Study unit ${set.unit} · Chapter ${set.chapter}`;
    const title=document.createElement('strong');title.textContent=set.title;
    const meta=document.createElement('span');meta.className='source-note';
    const best=sgSaved.bests[set.unit];const hasBest=Number.isInteger(best)&&best>=0&&best<=20;
    if(hasBest)finished++;
    meta.textContent=`20 questions · guide pp. ${set.pages} · ${hasBest?`best ${best}/20`:'not completed'}`;
    b.appendChild(n);b.appendChild(title);b.appendChild(meta);b.addEventListener('click',()=>sgSelectUnit(set.unit));grid.appendChild(b);
  }
  sgId('sgOverall').textContent=`120 questions · ${finished}/6 units completed`;
}
function sgSelectUnit(unit){if(!window.studyGuideSets.some(s=>s.unit===unit))return;sgUnit=unit;sgSaved.unit=unit;sgSession();sgSave();sgRender();}
function sgStart(shuffle=false,missed=null){
  const mode=sgId('sgMode').value==='exam'?'exam':'study';
  const order=missed?[...missed]:sgSet().questions.map(q=>q.id);
  if(shuffle)for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
  sgSaved.sessions[sgUnit]={order,answers:{},index:0,mode,done:false,retry:!!missed};sgSave();sgRender();
}
function sgChoose(answer){
  const s=sgSession(),q=sgQuestions()[s.index];
  if(s.done||Object.hasOwn(s.answers,q.id)||!Number.isInteger(answer)||answer<0||answer>4)return;
  s.answers[q.id]=answer;sgSave();sgRender();
}
function sgMove(delta){const s=sgSession();s.index=(s.index+delta+s.order.length)%s.order.length;sgSave();sgRender();}
function sgFinish(){
  const s=sgSession(),qs=sgQuestions();if(!qs.every(q=>Object.hasOwn(s.answers,q.id)))return;
  s.done=true;
  const score=qs.filter(q=>s.answers[q.id]===q.answer).length;
  if(!s.retry && qs.length===20)sgSaved.bests[sgUnit]=Math.max(Number(sgSaved.bests[sgUnit])||0,score);
  sgSave();sgRender();sgId('sgResults').focus();
}
function sgRender(){
  sgRenderSets();const s=sgSession(),qs=sgQuestions(),q=qs[s.index];
  const count=qs.filter(item=>Object.hasOwn(s.answers,item.id)).length;
  const score=qs.filter(item=>s.answers[item.id]===item.answer).length;
  sgId('sgHeading').textContent=`${sgSet().title}${s.retry?' · missed-question retry':''}`;
  sgId('sgChapterLabel').textContent=`Study unit ${sgUnit} · Textbook Chapter ${sgSet().chapter} · Guide pp. ${sgSet().pages}`;
  sgId('sgMode').value=s.mode;
  sgId('sgQuestionScreen').classList.toggle('hidden',s.done);sgId('sgResults').classList.toggle('hidden',!s.done);
  sgId('sgPosition').textContent=`Question ${s.index+1} of ${qs.length}`;
  sgId('sgAnswered').textContent=`${count}/${qs.length} answered`;
  sgId('sgScore').textContent=s.mode==='exam'&&!s.done?'Score shown at the end':`${score} correct`;
  sgId('sgProgress').style.width=`${count/qs.length*100}%`;
  sgId('sgQuestion').textContent=q.question;
  sgId('sgSource').textContent=`Open guide page ${q.page} ↗`;sgId('sgSource').href=`ITEC3210-Midterm-Study-Guide.pdf#page=${q.page}`;
  sgId('sgOriginal').textContent=`Unit ${sgUnit} · question ${q.number}`;
  const answered=Object.hasOwn(s.answers,q.id),feedback=answered&&s.mode==='study';
  const opts=sgId('sgOptions');opts.replaceChildren();
  q.options.forEach((text,index)=>{
    const b=document.createElement('button');b.type='button';b.className='option-button';b.disabled=answered;
    b.classList.toggle('chosen',s.answers[q.id]===index);
    b.classList.toggle('correct',feedback&&index===q.answer);b.classList.toggle('incorrect',feedback&&s.answers[q.id]===index&&index!==q.answer);
    const letter=document.createElement('span');letter.className='option-letter';letter.textContent=String.fromCharCode(65+index);
    const label=document.createElement('span');label.textContent=text;b.appendChild(letter);b.appendChild(label);b.addEventListener('click',()=>sgChoose(index));opts.appendChild(b);
  });
  sgId('sgFeedback').classList.toggle('hidden',!feedback);
  sgId('sgFeedback').classList.toggle('correct',feedback&&s.answers[q.id]===q.answer);
  sgId('sgFeedback').classList.toggle('incorrect',feedback&&s.answers[q.id]!==q.answer);
  sgId('sgFeedbackTitle').textContent=s.answers[q.id]===q.answer?'Correct.':`Correct answer: ${String.fromCharCode(65+q.answer)}. ${q.options[q.answer]}`;
  sgId('sgExplanation').textContent=q.explanation;
  sgId('sgNext').disabled=!answered;sgId('sgPrevious').disabled=s.index===0;
  sgId('sgFinish').classList.toggle('hidden',count!==qs.length);
  const map=sgId('sgMap');map.replaceChildren();
  qs.forEach((item,index)=>{
    const b=document.createElement('button');b.type='button';b.className='map-button';b.textContent=index+1;
    b.classList.toggle('sg-answered',Object.hasOwn(s.answers,item.id));b.setAttribute('aria-current',String(index===s.index));
    b.setAttribute('aria-label',`Question ${index+1}${Object.hasOwn(s.answers,item.id)?', answered':''}`);
    b.addEventListener('click',()=>{s.index=index;sgSave();sgRender();});map.appendChild(b);
  });
  if(s.done){
    sgId('sgResultScore').textContent=`${score} / ${qs.length}`;
    sgId('sgResultMessage').textContent=score===qs.length?'Every answer correct. Try explaining the reasoning without looking.':'Review the explanations and guide pages below, then retry the questions you missed.';
    sgId('sgRetry').disabled=score===qs.length;
    const review=sgId('sgReview');review.replaceChildren();
    for(const item of qs){
      const correct=s.answers[item.id]===item.answer;
      const details=document.createElement('details'),summary=document.createElement('summary');
      summary.textContent=`${correct?'Correct':'Review'} · ${item.number}. ${item.question}`;
      const chosen=document.createElement('p');chosen.textContent=`Your answer: ${item.options[s.answers[item.id]]}`;
      const key=document.createElement('p');key.textContent=`Correct answer: ${item.options[item.answer]}`;
      const explanation=document.createElement('p');explanation.textContent=item.explanation;
      const a=document.createElement('a');a.textContent=`Study guide p. ${item.page} ↗`;a.href=`ITEC3210-Midterm-Study-Guide.pdf#page=${item.page}`;a.target='_blank';a.rel='noopener';
      details.appendChild(summary);details.appendChild(chosen);details.appendChild(key);details.appendChild(explanation);details.appendChild(a);review.appendChild(details);
    }
  }
}
sgId('sgMode').addEventListener('change',()=>sgStart());
sgId('sgRestart').addEventListener('click',()=>sgStart());
sgId('sgShuffle').addEventListener('click',()=>sgStart(true));
sgId('sgNext').addEventListener('click',()=>sgMove(1));sgId('sgPrevious').addEventListener('click',()=>sgMove(-1));
sgId('sgFinish').addEventListener('click',sgFinish);
sgId('sgRetry').addEventListener('click',()=>{const s=sgSession();const missed=sgQuestions().filter(q=>s.answers[q.id]!==q.answer).map(q=>q.id);if(missed.length)sgStart(false,missed);});
sgId('sgResultRestart').addEventListener('click',()=>sgStart());
sgSession();sgRender();
