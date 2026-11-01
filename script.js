(() => {
'use strict';
const $ = (s,root=document) => root.querySelector(s);
const $$ = (s,root=document) => [...root.querySelectorAll(s)];
const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Navigation and scroll progress.
const navigation = $('.nav');
const mobileToggle = $('.menu-toggle');
mobileToggle.addEventListener('click',() => {
  const open = navigation.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded',String(open));
  mobileToggle.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');
  mobileToggle.textContent = open?'×':'☰';
});
$$('.nav a').forEach(link=>link.addEventListener('click',()=>{
  navigation.classList.remove('open');mobileToggle.setAttribute('aria-expanded','false');mobileToggle.textContent='☰';
}));
function updateScrollProgress(){
  const max = Math.max(1,document.documentElement.scrollHeight-innerHeight);
  $('#scroll-line').style.width = Math.max(0,Math.min(100,scrollY/max*100))+'%';
}
window.addEventListener('scroll',updateScrollProgress,{passive:true});updateScrollProgress();
const observedSections = $$('#cases,#work,#way,#personality,#career,#contact');
const activeSectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){$$('.nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}});
},{rootMargin:'-25% 0px -60% 0px'});
observedSections.forEach(s=>activeSectionObserver.observe(s));

// A single observer drives the staggered entrance and KPI counter.
function countTo(el){
  if(el.dataset.done)return;el.dataset.done='1';
  const goal = Number(el.dataset.count);
  if(prefersReduce){el.textContent=goal.toLocaleString('ko-KR');return;}
  const start=performance.now();
  const draw = now=>{const t=Math.min(1,(now-start)/1000);el.textContent=Math.round(goal*(1-Math.pow(1-t,3))).toLocaleString('ko-KR');if(t<1)requestAnimationFrame(draw);};
  requestAnimationFrame(draw);
}
const reveals=new IntersectionObserver(entries=>{
  for(const e of entries){if(e.isIntersecting){e.target.classList.add('show');$$('.count',e.target).forEach(countTo);if(e.target.classList.contains('count'))countTo(e.target);reveals.unobserve(e.target);}}
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
$$('.reveal').forEach(el=>reveals.observe(el));

// An interactive profile orb following the reference's words-around-photo concept.
const orbitFocus=[
  '자산 구매·지급·회수·실사와 사용자·위치 이력 관리',
  '약 1,100명이 근무하는 오피스의 시설·업무환경 요청 대응',
  '2,222평 청주캠퍼스의 설계 협의부터 준공·입주까지',
  '구매·계약·정산, 협력사 재편과 공급 조건 협상',
  '전국 8개 사업장의 요청 유형·긴급도 분류와 처리 이력 관리',
  '미화·급식·시설·보안 등 운영 협력사 선정과 이행 관리',
  '시설유지보수·사업장 구축 절차·자산관리·물리보안 운영규정 4건 제정',
  '연간 약 50억 원 규모 건축 유지보수 공사의 품질·기성 검증',
  '소방·전기 등 계절별 점검과 위험요인 개선 조율'
];
const note=$('#orbit-note span:last-child');
$$('.orbit-word').forEach((b,i)=>b.addEventListener('click',()=>{
  $$('.orbit-word').forEach(x=>x.classList.remove('active'));b.classList.add('active');note.textContent=orbitFocus[i];
}));
const orbit=$('#orbit');
if(!prefersReduce){orbit.addEventListener('pointermove',e=>{
  if(e.pointerType==='touch')return;
  const r=orbit.getBoundingClientRect(),rx=(e.clientX-r.left)/r.width-.5,ry=(e.clientY-r.top)/r.height-.5;
  $('.orbit-core',orbit).style.transform=`translate(calc(-50% + ${rx*7}px),calc(-50% + ${ry*7}px))`;
});orbit.addEventListener('pointerleave',()=>$('.orbit-core',orbit).style.transform='translate(-50%,-50%)');}

// Operational case stepper.
const stepDescriptions=[
  '사업장별 부담당자를 정하고 본사와의 역할을 구분',
  '시설유지보수·사업장 구축 절차·자산관리·물리보안 운영규정 4건 제정',
  '점검 항목과 보고 경로, 후속 조치 기준 정리',
  '사업장이 늘어나도 같은 방식으로 업무를 이어갈 수 있는 기준 확보'
];
$$('[data-steps="standards"] .step-btn').forEach(button=>button.addEventListener('click',()=>{
  $$('[data-steps="standards"] .step-btn').forEach(x=>x.classList.toggle('selected',x===button));
  $('#standards-explain').textContent=stepDescriptions[Number(button.dataset.step)];
}));

// Six additional project links: eight case studies in total.
const miniCases=[
 ['yulchon','법무법인 율촌','시설 요청 대응 기준 개선','평균 처리기간 약 38% 단축','⏱️'],
 ['vendors','이노스페이스','협력사 계약 재편','관련 운영비 약 14% 절감','📦'],
 ['defects','현대엔지니어링','미처리 하자 정리','2,230건 → 386건','🔧'],
 ['cost','한국토지주택공사','공사 기성 검증','전년 대비 공사비 13% 절감','📊'],
 ['cotis','한국토지주택공사','COTIS 접수·민원 관리','15일 이내 최종 조치율 87%','🗃️'],
 ['meal','이노스페이스','이동급식 도입과 복리후생 개선','초기 시식 만족도 78% · 정기 운영','🍱']
];
const grid=$('#mini-grid');
miniCases.forEach(([id,company,title,metric,emoji],i)=>{
  const button=document.createElement('button');button.className='mini-card reveal';button.type='button';button.dataset.project=id;button.style.setProperty('--delay',String(i%3));
  button.innerHTML=`<span class="mini-top"><span>${company}</span><span class="mini-icon" aria-hidden="true">${emoji}</span></span><h4>${title}</h4><p>업무 과정 및 개선 내용</p><span class="mini-metric">${metric} →</span>`;
  grid.append(button);reveals.observe(button);
});

// Accordion for real role history.
$$('.career-entry').forEach(entry=>{
 const button=$('.career-toggle',entry),body=$('.career-detail',entry),indicator=$('.career-open',entry);
 button.addEventListener('click',()=>{
  const open=button.getAttribute('aria-expanded')!=='true';
  $$('.career-entry').forEach(e=>{$('.career-toggle',e).setAttribute('aria-expanded','false');$('.career-detail',e).hidden=true;$('.career-open',e).textContent='+';});
  button.setAttribute('aria-expanded',String(open));body.hidden=!open;indicator.textContent=open?'−':'+';
 });
});

// Project detail panels based on portfolio source information.
// V4 case-study details: presentation only; source facts are in projects-data.js and project-visuals.js.
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
const symbolPaths={
 building:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 21V9h6v12M7 7h.01M17 7h.01M7 13h.01M17 13h.01"/>',
 wallet:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M16 14h2"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 11h18M8 15h3"/>',
 layers:'<path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5"/>',
 book:'<path d="M4 19V5a2 2 0 0 1 2-2h13v17H6a2 2 0 0 1-2-2ZM4 18a2 2 0 0 1 2-2h13M8 7h7M8 11h7"/>',
 shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
 chart:'<path d="M3 3v18h18M7 16l5-5 3 3 5-7"/>',
 list:'<path d="M9 6h12M9 12h12M9 18h12M3 6h.01M3 12h.01M3 18h.01"/>',
 users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1"/>',
 handshake:'<path d="m2 8 4-4 5 2 4-2 7 5-4 4-2-1-5 5-2 2-3-3-2-2-2 1-2-2Z"/><path d="m8 10 4 4 3 2M12 14l3 2"/>',
 map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5ZM9 3v16M15 5v16"/>',
 ruler:'<path d="M3 20 20 3l2 2L5 22l-2-2ZM10 13l2 2M13 10l2 2M16 7l2 2"/>',
 filecheck:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6m-12 8 2 2 5-5"/>',
 route:'<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h6"/>',
 package:'<path d="m12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10"/>',
 check:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
 wrench:'<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 17.7 6.3 21l5.3-5.3a5 5 0 0 0 6.4-6.4L15 12l-3-3 2.7-2.7Z"/>',
 receipt:'<path d="M4 2v20l4-2 4 2 4-2 4 2V2l-4 2-4-2-4 2-4-2ZM8 9h8M8 13h8"/>',
 arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
 alert:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6m0 4h.01"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 image:'<rect x="2" y="3" width="20" height="18" rx="2"/><circle cx="8" cy="9" r="2"/><path d="m22 16-6-6L3 21"/>'
};
function pic(k,cls=''){return `<svg class="v4-icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${symbolPaths[k]||symbolPaths.check}</svg>`;}
const pv=$('#detail-dialog');let v4LastActive=null;const v4ImageMap=typeof PROJECT_IMAGES==='object'?PROJECT_IMAGES:{};
const labeled=(s,t)=>`<span class="v4-eyebrow">${esc(s)}</span><span>${esc(t)}</span>`;
const miniCard=(label,value)=>`<div class="v4-mini"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`;
const viz={
 'meal-space':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('building')} 기존 시설 활용 · 별도 식당 신설 없이 운영</div><div class="v4-chip-grid">${['사업장 유휴공간','기존 탕비시설','보유 테이블·좌석','이동급식 공급'].map((x,i)=>`<span>${pic(['building','package','users','check'][i])}${esc(x)}</span>`).join('')}</div></div>`,
 'meal-compare':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('handshake')} 급식업체 3곳 비교·선정 기준</div><div class="v4-chip-grid">${['직접 방문·시식','음식 맛·메뉴 구성','식대·공급 조건','정시 공급 안정성'].map((x,i)=>`<span>${pic(['users','check','receipt','clock'][i])}${esc(x)}</span>`).join('')}</div><p class="v4-graphic-caption">가격만으로 선택하지 않고 실제 식사 경험과 정시 공급 가능성을 함께 비교했습니다.</p></div>`,
 'meal-feedback':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('chart')} 도입 초기 시식 결과와 운영 개선</div><div class="v4-amount-grid">${miniCard('초기 시식 만족도','78%')}${miniCard('이후 개선 대상','메뉴·식대·운영 조건')}</div><div class="v4-flow">${['시식 만족도 확인','반찬 구성·맛 의견 수렴','업체와 조건 협의','정기 운영에 반영'].map(x=>`<span>${esc(x)}</span>`).join(`${pic('arrow')}`)}</div><p class="v4-caution">78%는 도입 초기 시식 만족도입니다. 이후 만족도 상승률로 해석하지 않습니다.</p></div>`,
 'campus-power':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('wallet')} 기존 전력설비 인수 협상</div><div class="v4-compare">${miniCard('신규 설치 견적','약 2,400만 원')}${pic('arrow','v4-carrow')}${miniCard('기존 설비 인수','300만 원')}</div><div class="v4-sum">${pic('check')} 전력 인프라 비용 <strong>약 2,100만 원 절감</strong></div></div>`,
 'standards-assets':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('package')} 미지정 자산 실사와 처분 검토</div><div class="v4-amount-grid">${miniCard('책임자 미지정 자산 실사','334건')}${miniCard('사용 계획 검토 후 처분 대상','82건')}</div><p class="v4-graphic-caption">20개 부서 · 자산담당자 33명과 사용계획을 협의해 보관·재사용·처분으로 분류</p></div>`,
 'yulchon-door':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('filecheck')} 대회의실 대형문 끌림 · 사전 진단</div><div class="v4-flow">${['증상 사진·영상','경첩·도어클로저·플로어힌지 확인','부품 정보 사전 전달','별도 확인 방문 축소'].map(x=>`<span>${esc(x)}</span>`).join(`${pic('arrow')}`)}</div></div>`,
 'vendors-scope':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('handshake')} 계약 통합 검토 범위</div><div class="v4-chip-grid">${['미화 용역','F&B·이동급식','비품 통합구매','서비스 이행 평가'].map((x,i)=>`<span>${pic(['building','users','package','check'][i])}${esc(x)}</span>`).join('')}</div></div>`,
 'defects-glass':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('wrench')} 통창 스크래치 · 공동 재현 후 보수 협의</div><div class="v4-amount-grid">${miniCard('유리 교체 협의','22세대')}${miniCard('연마 보수 협의','8세대')}</div><p class="v4-graphic-caption">철제 거치대 반입·보양재 제거 과정을 시공사와 공동 재현해 손상 원인과 조치 범위를 검토</p></div>`,
 'cost-proof':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('receipt')} 안전관리비 청구 증빙 검증 절차</div><div class="v4-proof-grid"><div><span>${pic('filecheck')} 청구 서류</span><strong>구매처 주소 · 사진대지</strong><small>기제출 사진 재사용 여부 대조</small></div><div><span>${pic('map')} 사실 확인</span><strong>네이버 지도 거리뷰 · 현장 방문</strong><small>구매처 영업 여부와 공실 상가 사례 확인</small></div><div class="v4-proof-outcome"><span>${pic('check')} 정산 조치</span><strong>거래·현장 사용 증빙 재요청</strong><small>확인되지 않은 청구는 기성에서 제외</small></div></div></div>`,
 'cotis-categories':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('list')} COTIS 접수 유형 표준화 예시</div><div class="v4-example-grid"><div><span>접수자별 기존 표현</span><strong>“물이 샌다” · “천장 누수” · “윗집 물샘”</strong></div><div class="v4-example-arrow">${pic('arrow')}</div><div class="v4-example-after"><span>표준 유형</span><strong>누수</strong></div></div><p class="v4-graphic-caption">시스템 관리팀과 분류 기준을 협의하고 현장·유형별 과거 접수 이력과 중복 여부를 대조</p></div>`,
 'campus-cost':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('wallet')} 비용 절감 구성</div><div class="v4-amount-grid">${miniCard('8개 공종 분리발주','약 5,000만 원')}${miniCard('기존 전력설비 인수','약 2,100만 원')}</div><div class="v4-sum">${pic('check')} 실제 구축비 절감 <strong>합계 약 7,100만 원</strong></div></div>`,
 'campus-schedule':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('calendar')} 캠퍼스 가동 시점</div><div class="v4-compare">${miniCard('당초 계획','11월')}${pic('arrow','v4-carrow')}${miniCard('조정 후','9월')}</div><div class="v4-graphic-caption">공정표와 일일 공정회의로 선후행 작업 및 자재 일정을 조율해 약 2개월 앞당겼습니다.</div></div>`,
 'campus-restore':()=>`<div class="v4-graphic v4-restoration"><div class="v4-graphic-title">${pic('filecheck')} 원상복구 잠재비용 추정</div><div class="v4-restore-formula"><div><span>추정 대상 면적</span><strong>2,222평</strong></div><span class="v4-multiply">×</span><div><span>평당 가정 단가</span><strong>13.5~18만 원</strong></div></div><div class="v4-restore-total"><span>원상복구 부담 회피 추정액</span><strong>약 3~4억 원</strong></div><p class="v4-caution">단가 범위를 적용한 시나리오 산정치입니다. 공장별 철거·복원 범위, 설비·폐기물 처리 조건에 따라 달라지며 실제 견적 또는 확정 현금 절감액은 아닙니다. 신규 시공 범위의 원상복구 면제 특약을 협의했습니다.</p></div>`,
 'standards-roles':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('users')} 역할 분담</div><div class="v4-two">${miniCard('사업장 부담당자','일상 점검 · 이상사항 보고')}${miniCard('본사 총무팀','보수 판단 · 협력사 관리')}</div></div>`,
 'standards-regulations':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('book')} 제정한 운영규정 4건</div><div class="v4-chip-grid">${['시설유지보수','사업장 구축 절차','자산관리','물리보안'].map((x,i)=>`<span>${pic(['wrench','building','package','shield'][i])}${esc(x)}</span>`).join('')}</div></div>`,
 'standards-access':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('shield')} 출입권한 체계 개편</div><div class="v4-compare">${miniCard('BEFORE','53개 분류')}${pic('arrow','v4-carrow')}${miniCard('AFTER','기본 4등급 + 추가 11개')}</div><div class="v4-graphic-caption">기본등급과 추가 권한은 서로 다른 체계입니다. 단순히 53개를 15개로 축소했다는 뜻은 아닙니다.</div></div>`,
 'yulchon-priority':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('list')} 요청 우선순위 · P1~P4</div><div class="v4-priority">${[['P1','안전 위험·업무 중단'],['P2','다수 인원에 영향'],['P3','개별 구성원 불편'],['P4','예방보수·공사성 작업']].map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div></div>`,
 'yulchon-time':()=>comparePanel('clock','평균 처리기간','4일','2.5일','약 38% 단축'),
 'vendors-change':()=>comparePanel('handshake','통합계약 대상 협력사','7개사','3개사','관련 운영비 약 14% 절감'),
 'defects-count':()=>comparePanel('chart','미처리 하자','2,230건','386건','약 83% 감소 · 시작/종료 시점 비교'),
 'defects-time':()=>comparePanel('clock','평균 처리기간','5일','3일','약 40% 단축'),
 'cost-check':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('filecheck')} 기성 내역 검증 흐름</div><div class="v4-flow">${['1식 내역 세분화','현장 물량 대조','단가·증빙 검토','기성 조정'].map(x=>`<span>${esc(x)}</span>`).join(`${pic('arrow')}`)}</div></div>`,
 'cost-percent':()=>`<div class="v4-graphic"><div class="v4-large-figure"><span>전년 대비 공사비</span><strong>13% 절감</strong></div><p class="v4-caution">연간 약 50억 원은 담당 공사 규모로, 50억 원 전체의 13%를 특정 단일 공사에서 절감한 것은 아닙니다.</p></div>`,
 'cotis-flow':()=>`<div class="v4-graphic"><div class="v4-graphic-title">${pic('list')} 민원·보수 이력 관리 흐름</div><div class="v4-flow">${['접수·유형 분류','사진·이력 확인','협력사 조치','완료 증빙 검증'].map(x=>`<span>${esc(x)}</span>`).join(`${pic('arrow')}`)}</div></div>`,
 'cotis-rate':()=>`<div class="v4-graphic"><div class="v4-amount-grid">${miniCard('15일 이내 최종 조치율','87%')}${miniCard('중복 접수 감소','약 30%')}</div><div class="v4-graphic-caption">최종 조치율은 최초 응답률과 구분합니다.</div></div>`
};
function comparePanel(icon,title,before,after,summary){return `<div class="v4-graphic"><div class="v4-graphic-title">${pic(icon)} ${esc(title)}</div><div class="v4-compare">${miniCard('BEFORE',before)}${pic('arrow','v4-carrow')}${miniCard('AFTER',after)}</div><div class="v4-sum">${pic('check')} ${esc(summary)}</div></div>`;}
function openProject(id){
 const p=PROJECTS.find(x=>x.id===id);if(!p)return;const v=PROJECT_VISUALS[id];if(!v)return;
 v4LastActive=document.activeElement; const pics=v4ImageMap[id]||[];
 const metrics=p.metrics.map(([n,d],i)=>`<div class="v4-metric">${pic(v.metricIcons[i]||'chart')}<b>${esc(n)}</b><span>${esc(d)}</span></div>`).join('');
 const compare=(kind,title,body,bullets)=>`<div class="v4-compare-card ${kind}"><span class="v4-compare-tag">${pic(kind==='before'?'alert':'check')} ${kind==='before'?'AS-IS · 기존':'TO-BE · 개선'}</span><h4>${esc(title)}</h4><p>${esc(body)}</p><div class="v4-compare-bullets">${bullets.map(t=>`<div>${pic(kind==='before'?'alert':'check')}<span>${esc(t)}</span></div>`).join('')}</div></div>`;
 const steps=p.actions.map((action,i)=>`<section class="v4-step"><div class="v4-step-head"><div class="v4-step-icon">${pic(v.actionIcons[i]||'check')}</div><div class="v4-step-copy"><span class="v4-step-tag">STEP ${String(i+1).padStart(2,'0')}</span><h4>${esc(v.actionTitles[i]||'실행')}</h4><p>${esc(action)}</p></div></div>${v.graphicAfter?.[i]&&viz[v.graphicAfter[i]]?viz[v.graphicAfter[i]]():''}</section>`).join('');
 const results=p.results.map((r,i)=>`<div class="v4-result">${pic(v.resultIcons[i]||'check')}<span>${esc(r)}</span></div>`).join('');
 const gallery=pics.length?`<section class="v4-section"><header class="v4-section-head"><span class="v4-section-pict">${pic('image')}</span><div><h3>관련 사진</h3><p>업무 공간과 구축 과정을 확인할 수 있는 이미지</p></div></header><div class="v4-gallery">${pics.map(([src,c])=>`<figure><a href="${esc(src)}" target="_blank" rel="noopener" aria-label="${esc(c)} 원본 보기"><img src="${esc(src)}" loading="lazy" alt="${esc(c)}"></a><figcaption>${esc(c)}</figcaption></figure>`).join('')}</div><p class="v4-security">${pic('shield')} 보안상 공개 가능한 사진만 선별하여 게시했습니다.</p></section>`:'';
 $('#detail-content').innerHTML=`<article class="detail-inner v4-detail"><header class="v4-hero"><div class="v4-eyebrow-line"><span class="v4-hero-icon">${pic(v.icon)}</span><span><b>${esc(p.company)}</b><small>${esc(p.category)} · ${esc(p.period)}</small></span></div><span class="v4-case-id">CASE STUDY ${String(PROJECTS.findIndex(x=>x.id===id)+1).padStart(2,'0')}</span><h2 id="detail-title">${esc(p.title)}</h2><p class="v4-lead">${esc(p.lead)}</p></header><div class="v4-metrics">${metrics}</div><section class="v4-section"><header class="v4-section-head"><span class="v4-section-pict">${pic('target')}</span><div><h3>01. 문제와 개선 방향</h3><p>운영 구조의 변화를 한눈에</p></div></header><div class="v4-before-after">${compare('before',v.beforeTitle,v.beforeText,v.beforeBullets)}${compare('after',v.afterTitle,v.afterText,v.afterBullets)}</div></section><section class="v4-section"><header class="v4-section-head"><span class="v4-section-pict">${pic('route')}</span><div><h3>02. 실행 과정</h3><p>문제를 해결하기 위해 실제로 수행한 업무</p></div></header><div class="v4-steps">${steps}</div></section><section class="v4-section"><header class="v4-section-head"><span class="v4-section-pict">${pic('chart')}</span><div><h3>03. 개선 결과</h3><p>구체적인 결과와 관리 방식의 변화</p></div></header><div class="v4-results">${results}</div></section>${gallery}<p class="v4-source-note">${pic('filecheck')} <span>${esc(p.note||'')}</span></p></article>`;
 if(!pv.open)pv.showModal();pv.scrollTop=0;
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b)openProject(b.dataset.project);});
$('#detail-close').addEventListener('click',()=>pv.close());
pv.addEventListener('click',e=>{if(e.target===pv)pv.close();});
pv.addEventListener('close',()=>v4LastActive?.focus?.({preventScroll:true}));

})();
