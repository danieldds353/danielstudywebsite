/* Textbook written review has independent drafts/self-check progress. */
const tbId = id => document.getElementById(id);
const tbStorageKey = 'itec3210-textbook-review-v1';
let tbSaved = {marks:{},drafts:{},chapter:1};
try {
  const parsed=JSON.parse(localStorage.getItem(tbStorageKey));
  if(parsed && typeof parsed === 'object') {
    tbSaved.marks=parsed.marks && typeof parsed.marks === 'object' ? parsed.marks : {};
    tbSaved.drafts=parsed.drafts && typeof parsed.drafts === 'object' ? parsed.drafts : {};
    tbSaved.chapter=Number(parsed.chapter)||1;
  }
} catch { /* A private/blocked browser can still use the question bank. */ }
let tbChapter=window.textbookSets.some(s=>s.chapter===tbSaved.chapter)?tbSaved.chapter:1;
let tbOrder=[...window.textbookSets.find(s=>s.chapter===tbChapter).questions];
let tbIndex=0;
let libraryTab='practice';

function tbSave() {
  try { localStorage.setItem(tbStorageKey,JSON.stringify(tbSaved)); }
  catch { tbId('tbDraftStatus').textContent='This browser could not save progress. Keep a separate copy of your answer.'; }
}
function setLibraryTab(tab) {
  if(!['practice','textbook'].includes(tab)) return;
  libraryTab=tab;
  const textbook=tab==='textbook';
  tbId('practiceLibrary').classList.toggle('hidden',textbook);
  tbId('textbookLibrary').classList.toggle('hidden',!textbook);
  tbId('practiceProgressCard').classList.toggle('hidden',textbook);
  document.querySelectorAll('[data-library]').forEach(button=>{
    const active=button.dataset.library===tab;
    button.classList.toggle('active',active);
    button.setAttribute('aria-selected',String(active));
  });
}
function tbRenderSets() {
  const grid=tbId('textbookSetGrid');grid.replaceChildren();
  for(const set of window.textbookSets) {
    const b=document.createElement('button');b.type='button';b.className='textbook-set';
    b.dataset.tbChapter=String(set.chapter);b.classList.toggle('active',set.chapter===tbChapter);
    b.setAttribute('aria-pressed',String(set.chapter===tbChapter));
    const n=document.createElement('span');n.className='eyebrow';n.textContent=`Chapter ${set.chapter}`;
    const title=document.createElement('strong');title.textContent=set.title;
    const count=document.createElement('span');count.className='source-note';
    const known=set.questions.filter(q=>tbSaved.marks[q.id]==='known').length;
    count.textContent=`${set.questions.length} questions · ${known} known`;
    b.appendChild(n);b.appendChild(title);b.appendChild(count);
    b.addEventListener('click',()=>tbSetChapter(set.chapter));grid.appendChild(b);
  }
  const all=window.textbookSets.flatMap(s=>s.questions);
  tbId('tbOverall').textContent=`${all.filter(q=>tbSaved.marks[q.id]==='known').length} / ${all.length} marked known`;
}
function tbSetChapter(chapter) {
  const set=window.textbookSets.find(s=>s.chapter===Number(chapter));if(!set)return;
  tbChapter=set.chapter;tbSaved.chapter=tbChapter;tbOrder=[...set.questions];tbIndex=0;
  tbSave();tbRenderSets();tbRenderQuestion();
}
function tbRenderQuestion() {
  const q=tbOrder[tbIndex],set=window.textbookSets.find(s=>s.chapter===tbChapter);
  tbId('tbChapterLabel').textContent=`Chapter ${tbChapter} · ${set.title}`;
  tbId('tbHeading').textContent=`Textbook question ${q.number}`;
  tbId('tbQuestion').textContent=q.question;
  tbId('tbSource').textContent=q.source;
  tbId('tbPosition').textContent=`${tbIndex+1} / ${tbOrder.length}`;
  tbId('tbChapterProgress').textContent=`${set.questions.filter(x=>tbSaved.marks[x.id]==='known').length} known in chapter`;
  tbId('tbState').textContent=tbSaved.marks[q.id]==='known'?'Marked known':tbSaved.marks[q.id]==='learning'?'Review again':'Not reviewed';
  tbId('tbScopeNote').textContent=q.note;
  tbId('tbScopeNote').classList.toggle('hidden',!q.note);
  tbId('tbDraft').value=typeof tbSaved.drafts[q.id]==='string'?tbSaved.drafts[q.id]:'';
  tbId('tbDraftStatus').textContent='';
  tbId('tbAnswer').textContent=q.answer;
  tbId('tbAnswerPanel').classList.add('hidden');
  tbId('tbReveal').textContent='Show answer checkpoints';tbId('tbReveal').setAttribute('aria-expanded','false');
  tbId('tbKnown').classList.toggle('selected',tbSaved.marks[q.id]==='known');
  tbId('tbReview').classList.toggle('selected',tbSaved.marks[q.id]==='learning');
  tbId('tbPrevious').disabled=tbOrder.length<2;tbId('tbNext').disabled=tbOrder.length<2;
  const map=tbId('tbMap');map.replaceChildren();
  tbOrder.forEach((item,index)=>{
    const b=document.createElement('button');b.type='button';b.className=`map-button ${tbSaved.marks[item.id]||''}`;
    b.textContent=item.number;b.setAttribute('aria-label',`Textbook question ${item.number}`);
    b.setAttribute('aria-current',index===tbIndex?'true':'false');
    b.addEventListener('click',()=>{tbIndex=index;tbRenderQuestion();});map.appendChild(b);
  });
}
function tbMove(delta) { tbIndex=(tbIndex+delta+tbOrder.length)%tbOrder.length;tbRenderQuestion(); }
function tbMark(mark) { tbSaved.marks[tbOrder[tbIndex].id]=mark;tbSave();tbRenderSets();tbRenderQuestion(); }
function tbShuffle() {
  for(let i=tbOrder.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[tbOrder[i],tbOrder[j]]=[tbOrder[j],tbOrder[i]];}
  tbIndex=0;tbRenderQuestion();
}
document.querySelectorAll('[data-library]').forEach(button=>button.addEventListener('click',()=>setLibraryTab(button.dataset.library)));
tbId('tbDraft').addEventListener('input',()=>{
  tbSaved.drafts[tbOrder[tbIndex].id]=tbId('tbDraft').value;
  tbId('tbDraftStatus').textContent='Draft saved in this browser.';tbSave();
});
tbId('tbReveal').addEventListener('click',()=>{
  const hidden=tbId('tbAnswerPanel').classList.toggle('hidden');
  tbId('tbReveal').setAttribute('aria-expanded',String(!hidden));
  tbId('tbReveal').textContent=hidden?'Show answer checkpoints':'Hide answer checkpoints';
});
tbId('tbPrevious').addEventListener('click',()=>tbMove(-1));
tbId('tbNext').addEventListener('click',()=>tbMove(1));
tbId('tbKnown').addEventListener('click',()=>tbMark('known'));
tbId('tbReview').addEventListener('click',()=>tbMark('learning'));
tbId('tbShuffle').addEventListener('click',tbShuffle);
document.addEventListener('keydown',event=>{
  if(libraryTab!=='textbook'||['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;
  if(event.key==='ArrowLeft'){event.preventDefault();tbMove(-1);}
  if(event.key==='ArrowRight'){event.preventDefault();tbMove(1);}
});
tbRenderSets();tbRenderQuestion();
