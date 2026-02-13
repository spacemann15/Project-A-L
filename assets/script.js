/***********************
 * Background: denser floating words + balloons + more coverage
 * + HARD PERFORMANCE CAP (prevents crash)
 ***********************/
const bgLayer = document.getElementById('bgLayer');

// HARD CAP (adjust if you want)
const BG_MAX_NODES = 180;

// safe append with cap (remove oldest)
function capAppend(parent, el, cap){
  while(parent.childElementCount >= cap){
    parent.removeChild(parent.firstElementChild);
  }
  parent.appendChild(el);
}

const words = [
  // repeats on purpose
  "Ajith 💙","Ajith 💙","Ajith 💙","Ajith 💙",
  "Likidha 💛","Likidha 💛","Likidha 💛","Likidha 💛",
  "Ajith x Likidha 💘","Ajith x Likidha 💘","Ajith x Likidha 💘",
  "Kanmani 🌙","my Moon 🌙","BTS queen 💜","crystal girl ✨",
  "k-drama mode 🎬","saranghae 💞","보고싶어 🥺","사랑해 💗",
  "🫰","🫶","💘","✨","🌙","☀️","⭐","💎",
  `"Likidha - Like Ajith cooking skills, mature boi, sweet heart"`,
  `"Likidha - Im soooooo happppyyyyyyy that you called me🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🫰🫰🫰🫰🫰🫰🫰🫶🫶🫶🫶🫶🫶"`,
  `"Likidha - Na rombaaa surprised plus happy ah irundhe...we got to see virtually nu. Nanne yosichutu irundhe ena pesuradhu starting nu...yosichute phone pathe...nee call panningaa🥺🥺🥰"`,
  `"Likidha - U are still good looking. Im not sure about what u mean about great human being. As for as I know, you are good to me, ur and my family."`,
  `"Likidha - I wish you were here but it's totally fine. I will be less nervous lol😂😂"`,
  `"Likidha - Enaku cooking theriyadhu nu frnd solitu irundha...apo dan sonne like u know cooking..later nannu kathupenu"`,
  `"Likidha - Lol epdiiii..idhu dan nannu yosichutu irundhe"`,
  `"Likidha - Ur mom would be proud of you...nengale ellame handle panradh"`,
  `"Likidha - Lol you are a gem🥺🥺🥺....ellame theriyum polaiyeee"`,
  `"Ajith - I'm glad that I meet u. Actually I felt special when u said u enaku call panirukalam la ( while I'm telling dad I cried while giving blood)"`,
  `"Ajith - Take ur time no issue. Ask million questions to mee.i want full you not the half"`,
  `"My Gem 💎"`,
  "en uyire","thangam","chellam","kanna","pattu",
  "ente sundari","ente ponne","njan ninne","umma 😘",
  "forever ♾️","our story 📖","my girl 💞","my boy 💙"
];

function rand(min,max){ return Math.random()*(max-min)+min; }

function addFloatWord() {
  const el = document.createElement('div');
  el.className = 'float-word';
  el.textContent = words[Math.floor(Math.random()*words.length)];
  const dur = rand(10, 26).toFixed(2) + 's';
  el.style.setProperty('--dur', dur);

  const mode = Math.floor(Math.random()*4);
  const fromX = mode===0 ? '-18vw' : mode===1 ? '112vw' : (rand(0, 100) + 'vw');
  const toX   = mode===0 ? '112vw' : mode===1 ? '-18vw' : (rand(0, 100) + 'vw');
  const fromY = mode===2 ? '-18vh' : mode===3 ? '112vh' : (rand(0, 100) + 'vh');
  const toY   = mode===2 ? '112vh' : mode===3 ? '-18vh' : (rand(0, 100) + 'vh');

  el.style.setProperty('--fromX', fromX);
  el.style.setProperty('--toX', toX);
  el.style.setProperty('--fromY', fromY);
  el.style.setProperty('--toY', toY);

  // ensure full coverage including corners
  el.style.left = rand(-5, 105) + 'vw';
  el.style.top  = rand(-5, 105) + 'vh';

  // occasionally bigger for key names
  if (el.textContent.includes("Ajith") || el.textContent.includes("Likidha")) {
    el.style.fontWeight = "900";
    el.style.opacity = "0.72";
  }

  capAppend(bgLayer, el, BG_MAX_NODES);
  setTimeout(()=> el.remove(), parseFloat(dur)*1000);
}

function addHeart(){
  const el = document.createElement('div');
  el.className = 'heart';
  el.textContent = ["💗","💖","💘","💞","💝","💕","❤️","🫶","🫰"][Math.floor(Math.random()*9)];
  const dur = rand(8, 14).toFixed(2) + 's';
  el.style.setProperty('--dur', dur);
  el.style.setProperty('--fromX', rand(-10, 110)+'vw');
  el.style.setProperty('--toX', rand(-10, 110)+'vw');
  el.style.left = rand(0,100)+'vw';
  el.style.fontSize = rand(16, 28)+'px';
  capAppend(bgLayer, el, BG_MAX_NODES);
  setTimeout(()=> el.remove(), parseFloat(dur)*1000);
}

function addSpark(){
  const el = document.createElement('div');
  el.className = 'spark';
  el.style.left = rand(0,100)+'vw';
  el.style.top  = rand(0,100)+'vh';
  el.style.animationDuration = rand(1.3, 3.0)+'s';
  capAppend(bgLayer, el, BG_MAX_NODES);
  setTimeout(()=> el.remove(), rand(1800, 4200));
}

function addArrow(){
  const el = document.createElement('div');
  el.className = 'arrow';
  el.textContent = ["➶","➵","➳","➸","➺","➷","➻"][Math.floor(Math.random()*7)];
  const dur = rand(8, 18).toFixed(2) + 's';
  el.style.setProperty('--dur', dur);

  const dir = Math.floor(Math.random()*4);
  const fromX = dir===0 ? '-10vw' : dir===1 ? '110vw' : (rand(0,100)+'vw');
  const toX   = dir===0 ? '110vw' : dir===1 ? '-10vw' : (rand(0,100)+'vw');
  const fromY = dir===2 ? '-10vh' : dir===3 ? '110vh' : (rand(0,100)+'vh');
  const toY   = dir===2 ? '110vh' : dir===3 ? '-10vh' : (rand(0,100)+'vh');

  el.style.setProperty('--fromX', fromX);
  el.style.setProperty('--toX', toX);
  el.style.setProperty('--fromY', fromY);
  el.style.setProperty('--toY', toY);

  el.style.left = rand(-5,105)+'vw';
  el.style.top  = rand(-5,105)+'vh';
  el.style.fontSize = rand(16, 26)+'px';
  capAppend(bgLayer, el, BG_MAX_NODES);
  setTimeout(()=> el.remove(), parseFloat(dur)*1000);
}

function addBalloon(){
  const el = document.createElement('div');
  el.className = 'balloon';
  el.textContent = ["🎈","🎈","🎈","🎀","💗"][Math.floor(Math.random()*5)];
  const dur = rand(7, 12).toFixed(2) + 's';
  el.style.setProperty('--dur', dur);
  el.style.setProperty('--x', rand(-5, 105) + 'vw');
  capAppend(bgLayer, el, BG_MAX_NODES);

  // pop near the end
  const popAt = (parseFloat(dur) * 0.85) * 1000;
  setTimeout(()=> {
    const pop = document.createElement('div');
    pop.className = 'pop';
    pop.textContent = ["✨","💥","⭐","💫"][Math.floor(Math.random()*4)];
    pop.style.left = el.style.getPropertyValue('--x');
    pop.style.top = rand(5, 35) + "vh";
    capAppend(bgLayer, pop, BG_MAX_NODES);
    setTimeout(()=> pop.remove(), 600);
  }, popAt);

  setTimeout(()=> el.remove(), parseFloat(dur)*1000);
}

// heavy seed
for(let i=0;i<70;i++) addFloatWord();
for(let i=0;i<18;i++) addHeart();
for(let i=0;i<22;i++) addSpark();
for(let i=0;i<16;i++) addArrow();
for(let i=0;i<10;i++) addBalloon();

// denser background (fills corners better)
setInterval(addFloatWord, 220);
setInterval(addHeart, 380);
setInterval(addSpark, 260);
setInterval(addArrow, 680);
setInterval(addBalloon, 1200);

/***********************
 * Slide navigation
 ***********************/
const slides = [...document.querySelectorAll('.slide')];
function showSlide(id){
  slides.forEach(s=> s.classList.toggle('active', s.id===id));
}
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-next]');
  if(!btn) return;
  showSlide(btn.getAttribute('data-next'));
});

/***********************
 * Anger slider
 ***********************/
const anger = document.getElementById('anger');
const angerVal = document.getElementById('angerVal');
const angerMood = document.getElementById('angerMood');
const angerMsg = document.getElementById('angerMsg');

const angerLines = {
  1: ["You’re too sweet 😭💘", "Softest moon ever 🌙", "I’m safe today 😌"],
  2: ["Okay mild anger… cute 😗", "I’ll buy you snacks 😭", "Don’t glare like K-drama heroine 😳"],
  3: ["Noted… I’ll behave 😤➡️😇", "I’ll do extra effort today 💞", "Please don’t block me 🥺"],
  4: ["Okay okay… I deserve it 🥲", "Say one ‘hmm’ and I’ll melt 😭", "Let’s fix it like adults… but cute 😌"],
  5: ["Neutral… still judging me huh 😭", "I’m reading your mind… scary 😳", "I’ll send you kisses anyway 😘"],
  6: ["Little scary… but still manageable 😵", "I’ll act like BTS boyfriend now 💜", "Kanmani pls 🥺🌙"],
  7: ["Oii… you’re serious 😭", "I’m officially apologizing 🧎‍♂️", "Don’t throw slipper pls 😳"],
  8: ["Okay I’m dying now 🥲", "Say ‘sorry’ and I’ll do anything 😭", "I’ll make it up forever 💞"],
  9: ["Full villain arc?? 😭", "I’m begging… with puppy eyes 🥺", "Let’s restart the scene 🎬"],
  10:["I accept defeat 😵‍💫", "I’ll do apology + chocolate combo 🍫", "I’ll be your green flag forever 💚"]
};

function setAnger(v){
  angerVal.textContent = v;
  const mood =
    v<=2 ? "tiny angry 😗" :
    v<=4 ? "still cute angry 😤" :
    v<=6 ? "hmm angry 😐" :
    v<=8 ? "danger zone 😭" : "final boss 😵‍💫";
  angerMood.textContent = mood;

  const options = angerLines[v] || ["Okay okay… I’ll be sweet 😭💘"];
  angerMsg.innerHTML = `<strong>Message:</strong> ${options[Math.floor(Math.random()*options.length)]}`;
}
anger.addEventListener('input', ()=> setAnger(Number(anger.value)));
setAnger(Number(anger.value));

/***********************
 * Modal helpers + "Next" inside modal (for forgive YES)
 ***********************/
const modalBack = document.getElementById('modalBack');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalClose = document.getElementById('modalClose');
const modalOk = document.getElementById('modalOk');
const modalNext = document.getElementById('modalNext');

let modalNextTarget = null;

function openModal(title, text, nextTarget=null){
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalNextTarget = nextTarget;

  modalNext.style.display = nextTarget ? "inline-block" : "none";
  modalBack.classList.add('show');
}
function closeModal(){
  modalBack.classList.remove('show');
  modalNextTarget = null;
  modalNext.style.display = "none";
}

modalClose.addEventListener('click', closeModal);
modalOk.addEventListener('click', closeModal);
modalBack.addEventListener('click', (e)=>{ if(e.target===modalBack) closeModal(); });

modalNext.addEventListener('click', ()=>{
  const target = modalNextTarget;
  closeModal();
  if(target) showSlide(target);
});

// Slide 3 forgive buttons
document.getElementById('forgiveNo').addEventListener('click', ()=>{
  const lines = [
    "Aiyo Kanmani… don’t say no like that 😭 I’ll fix it properly.",
    "Okay okay… I deserve the glare 😳 but please don’t leave me hanging.",
    "I’ll do apology + effort + consistency combo. Just give me a chance 🥺💞"
  ];
  openModal("Wait wait 😭", lines[Math.floor(Math.random()*lines.length)]);
});

// Forgive YES -> go to HEART slide (s4)
document.getElementById('forgiveYes').addEventListener('click', ()=>{
  openModal(
    "Thank you 🥺💘",
    "I promise I’ll listen better, speak softer, and protect our bond like it’s my favorite thing. Because it is.",
    "s4"
  );
});

/***********************
 * NEW Heart slide: 10 taps = 100% + glow + confetti + Next appears
 ***********************/
const heartBtn = document.getElementById('heartBtn');
const heartClipRect = document.getElementById('heartClipRect');
const heartProgress = document.getElementById('heartProgress');
const heartMsg = document.getElementById('heartMsg');
const heartNext = document.getElementById('heartNext');
const heartHint = document.getElementById('heartHint');

let heartTaps = 0;

const heartLines = [
  "First tap… okay okay 😭💘",
  "Second tap… my Moon is cooperating 🌙🫰",
  "Third tap… I’m blushing now 😳💗",
  "Fourth tap… K-drama scene loading 🎬✨",
  "Fifth tap… half love unlocked 💞",
  "Sixth tap… you’re my Gem 💎",
  "Seventh tap… Ajith x Likidha power 💘",
  "Eighth tap… cooking skills + sweet heart combo 😌",
  "Ninth tap… almost full… don’t stop 😭",
  "Tenth tap… FULL LOVE MODE ✅💗"
];

function setHeartFill(percent){
  // Clip rect grows upward: y goes down, height goes up
  const totalH = 180;
  const h = Math.round((percent/100) * totalH);
  const y = totalH - h;
  heartClipRect.setAttribute("y", String(y));
  heartClipRect.setAttribute("height", String(h));
  heartProgress.textContent = `${percent}%`;
}

function burstConfetti(){
  for(let i=0;i<70;i++){
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = (Math.random()*100) + "vw";
    c.style.top = (-10 - Math.random()*20) + "vh";
    c.style.setProperty('--dx', ((Math.random()*2 - 1) * 160) + "px");
    c.style.background = `hsl(${Math.floor(Math.random()*360)}, 90%, 65%)`;
    document.body.appendChild(c);
    setTimeout(()=> c.remove(), 1400);
  }
}

function completeHeart(){
  heartBtn.classList.add('full');
  heartHint.textContent = "Okay… you did it 😭💗";
  burstConfetti();
  heartNext.style.display = "inline-block";
}

function handleHeartTap(){
  if(heartTaps >= 10) return;

  heartTaps += 1;
  const percent = heartTaps * 10;
  setHeartFill(percent);

  const line = heartLines[heartTaps-1] || "😭💘";
  heartMsg.innerHTML = `<strong>Message:</strong> ${line}`;

  if(heartTaps === 10){
    completeHeart();
  }
}

heartBtn.addEventListener('click', handleHeartTap);
heartBtn.addEventListener('touchstart', (e)=>{ e.preventDefault(); handleHeartTap(); }, { passive:false });

/***********************
 * Slide 5: Valentine NO runs only after first click
 ***********************/
const noBtn = document.getElementById('noBtn');
const valYes = document.getElementById('valYes');
const valMsg = document.getElementById('valMsg');
const valNext = document.getElementById('valNext');

let yesScale = 1;
let noArmed = false;  // hover escape only after first click

function moveNoRandomFar(){
  const pad = 16;
  const w = window.innerWidth;
  const h = window.innerHeight;

  const x = Math.floor(Math.random() * (w - 140 - pad)) + pad;
  const y = Math.floor(Math.random() * (h - 70 - pad)) + pad;

  // make button float anywhere on screen
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.zIndex = "999";
}

function resetNoInline(){
  noBtn.style.position = "";
  noBtn.style.left = "";
  noBtn.style.top = "";
  noBtn.style.zIndex = "";
}

function growYes(){
  yesScale = Math.min(2.4, yesScale + 0.08);
  valYes.style.transform = `scale(${yesScale})`;
}

// when entering slide 5, reset states
const slideObserver = new MutationObserver(()=>{
  const isVal = document.getElementById('s5').classList.contains('active');
  if(isVal){
    yesScale = 1;
    valYes.style.transform = "scale(1)";
    noArmed = false;
    resetNoInline();
  } else {
    // leaving slide, reset (prevents it sticking on other slides)
    resetNoInline();
  }
});
slideObserver.observe(document.body, { attributes:true, subtree:true, attributeFilter:['class'] });

noBtn.addEventListener('mouseenter', ()=>{
  if(!noArmed) return;
  growYes();
  moveNoRandomFar();
});

// first click arms the hover-escape
noBtn.addEventListener('click', ()=>{
  if(!noArmed){
    noArmed = true;
    // first click triggers escape immediately
  }
  growYes();
  moveNoRandomFar();

  const lines = [
    "Eyy 😭 stop testing me. Press YES now 💜",
    "Kanmani… you’re making me chase like K-drama 🎬😳",
    "Okay okay… I’m scared now 🥲 press YES 💚"
  ];
  valMsg.innerHTML = `<strong>${lines[Math.floor(Math.random()*lines.length)]}</strong>`;
});

valYes.addEventListener('click', ()=>{
  valMsg.innerHTML = `<strong>Yesss 😭💘</strong> Okay my Moon… you’re officially mine to annoy forever ♾️`;
  valNext.style.display = "inline-block";
  // hide NO after YES (optional)
  noBtn.style.display = "none";
});

window.addEventListener('resize', ()=>{
  // only if armed + floating
  if(noArmed && document.getElementById('s5').classList.contains('active')) moveNoRandomFar();
});

/***********************
 * Chapters: 3-step unlock then stay unlocked
 ***********************/
const chapters = [
  { n:1, name:"Meetup", emoji:"🌹", secret:"That first moment… ‘oh damn…’ 😳💘" },
  { n:2, name:"Attraction", emoji:"🧲", secret:"My brain: calm. My heart: BTS concert 💜😭" },
  { n:3, name:"Bonding", emoji:"🫶", secret:"When you laugh… my stress disappears instantly 😭" },
  { n:4, name:"Trust", emoji:"🛡️", secret:"I’ll protect your peace. Pinky promise 🤞💗" },
  { n:5, name:"Care", emoji:"🌷", secret:"Eat well, sleep well… I’m watching 😌🌙" },
  { n:6, name:"Support", emoji:"🧩", secret:"I’m your safe place… always 💞" },
  { n:7, name:"Love", emoji:"💗", secret:"You’re my favorite notification 😭📱" },
  { n:8, name:"Growth", emoji:"🌱", secret:"We’ll level up together… slowly, strongly 💪✨" },
  { n:9, name:"Forever", emoji:"♾️", secret:"Even on bad days… I choose you every time 💘" }
];

const chapGrid = document.getElementById('chapGrid');
const chapState = new Map();

function chapTileHTML(ch){
  return `
    <div class="chapTile" data-chap="${ch.n}">
      <div class="chapTop">CHAPTER ${ch.n}</div>
      <div class="chapMid">💌</div>
      <div class="chapHint">Tap 3 times</div>
    </div>
  `;
}
chapGrid.innerHTML = chapters.map(chapTileHTML).join('');

chapGrid.addEventListener('click', (e)=>{
  const tile = e.target.closest('.chapTile');
  if(!tile) return;

  const n = Number(tile.getAttribute('data-chap'));
  const ch = chapters.find(c=>c.n===n);

  const state = chapState.get(n) ?? 0;

  if(state === 2){
    openModal(`Chapter ${ch.n}: ${ch.name} ${ch.emoji}`, ch.secret);
    return;
  }

  if(state === 0){
    chapState.set(n, 1);
    tile.querySelector('.chapMid').textContent = `Chapter ${ch.n}`;
    tile.querySelector('.chapHint').textContent = "Tap again";
    return;
  }

  if(state === 1){
    chapState.set(n, 2);
    tile.querySelector('.chapMid').innerHTML = `${ch.emoji} <span class="chapName">${ch.name}</span>`;
    tile.querySelector('.chapHint').textContent = "Unlocked ✅ Tap to read secret";
    openModal(`Chapter ${ch.n}: ${ch.name} ${ch.emoji}`, ch.secret);
    return;
  }
});

/***********************
 * Gifts + Audio
 * UPGRADE:
 *  - Next button only under tiles (hide in detail view)
 *  - My Voice opens CD player tab
 ***********************/
const giftRow = document.getElementById('giftRow');
const giftDetail = document.getElementById('giftDetail');
const giftBack = document.getElementById('giftBack');
const giftDetailLabel = document.getElementById('giftDetailLabel');
const giftArt = document.getElementById('giftArt');
const giftMain = document.getElementById('giftMain');
const giftSub = document.getElementById('giftSub');
const voiceControls = document.getElementById('voiceControls');

const track1Btn = document.getElementById('track1Btn');
const track2Btn = document.getElementById('track2Btn');
const pauseBtn = document.getElementById('pauseBtn');

const giftNext = document.getElementById('giftNext');

// keep base audio object (fallback if popup blocked)
let currentAudio = null;

function stopAudio(){
  if(!currentAudio) return;
  currentAudio.pause();
  currentAudio.currentTime = 0;
}

function playAudioFallback(src){
  if(currentAudio){
    currentAudio.pause();
  }
  currentAudio = new Audio(src);
  currentAudio.volume = 0.95;
  currentAudio.play().catch(()=>{ /* ignore */ });
}

function openCDPlayerTab(trackTitle, src){
  // must be triggered by user click
  const w = window.open("", "_blank");
  if(!w){
    // popup blocked -> fallback to inline audio
    playAudioFallback(src);
    return false;
  }

  const safeTitle = trackTitle.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${safeTitle}</title>
<style>
  :root{ --bg:#0b0b12; --glass:rgba(255,255,255,.08); --line:rgba(255,255,255,.14); --txt:#fff; --muted:rgba(255,255,255,.72); }
  *{ box-sizing:border-box; }
  body{
    margin:0; min-height:100vh;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color:var(--txt);
    background:
      radial-gradient(900px 400px at 20% 20%, rgba(255,0,140,.18), transparent 55%),
      radial-gradient(900px 400px at 80% 30%, rgba(0,255,210,.14), transparent 55%),
      linear-gradient(135deg, rgba(10,10,18,.96), rgba(20,10,30,.96));
    display:grid; place-items:center;
    padding:18px;
  }
  .wrap{
    width:min(880px, 96vw);
    border:1px solid var(--line);
    background:var(--glass);
    backdrop-filter: blur(12px);
    border-radius:24px;
    padding:18px;
    box-shadow: 0 30px 90px rgba(0,0,0,.45);
  }
  .top{
    display:flex; justify-content:space-between; align-items:center; gap:12px;
    margin-bottom:12px;
  }
  .title{ font-weight:900; font-size:18px; }
  .hint{ color:var(--muted); font-weight:700; font-size:13px; }
  .stage{
    display:grid;
    grid-template-columns: 340px 1fr;
    gap:16px;
    align-items:center;
  }
  .player{
    border:1px solid var(--line);
    border-radius:20px;
    padding:16px;
    background:rgba(0,0,0,.18);
  }
  .row{ display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
  .btn{
    border:none; cursor:pointer;
    padding:12px 16px;
    border-radius:999px;
    font-weight:900;
    background:rgba(255,255,255,.92);
    color:#111;
  }
  .btn2{
    border:1px solid var(--line);
    background:rgba(255,255,255,.10);
    color:#fff;
  }
  .vol{
    display:flex; align-items:center; gap:10px;
    margin-top:10px;
  }
  input[type="range"]{ width:220px; accent-color:#38f2c5; }
  .discWrap{
    display:grid; place-items:center;
    border:1px solid var(--line);
    border-radius:20px;
    padding:16px;
    background:rgba(0,0,0,.18);
    min-height: 320px;
  }
  .disc{
    width:260px; height:260px;
    border-radius:50%;
    background:
      radial-gradient(circle at 50% 50%, rgba(0,0,0,.85) 0 14%, transparent 14% 18%),
      radial-gradient(circle at 50% 50%, rgba(255,255,255,.08) 0 55%, transparent 55% 100%),
      conic-gradient(from 0deg, rgba(255,80,140,.5), rgba(0,255,210,.45), rgba(255,255,255,.12), rgba(255,80,140,.5));
    box-shadow: 0 30px 80px rgba(0,0,0,.55);
    position:relative;
    animation: spin 2.1s linear infinite;
    animation-play-state: paused;
  }
  .disc::after{
    content:"";
    position:absolute; inset:22px;
    border-radius:50%;
    border:1px solid rgba(255,255,255,.18);
  }
  .label{
    margin-top:10px;
    font-weight:900;
    color:rgba(255,255,255,.92);
    text-align:center;
  }
  @keyframes spin{ to{ transform: rotate(360deg); } }
  .time{
    margin-top:10px;
    color:var(--muted);
    font-weight:800;
    font-size:12px;
  }
  @media (max-width: 860px){
    .stage{ grid-template-columns: 1fr; }
    .discWrap{ min-height: 280px; }
    .disc{ width:230px; height:230px; }
  }
</style>
</head>
<body>
  <div class="wrap">
    <div class="top">
      <div>
        <div class="title">🎧 ${safeTitle}</div>
        <div class="hint">For Likidha 🌙 (CD-player mode)</div>
      </div>
      <button class="btn btn2" id="closeBtn">Close ✕</button>
    </div>

    <div class="stage">
      <div class="discWrap">
        <div class="disc" id="disc"></div>
        <div class="label">Now playing: ${safeTitle}</div>
        <div class="time" id="time">00:00 / 00:00</div>
      </div>

      <div class="player">
        <div class="row">
          <button class="btn" id="playBtn">Play</button>
          <button class="btn btn2" id="pauseBtn">Pause</button>
          <button class="btn btn2" id="restartBtn">Restart</button>
        </div>

        <div class="vol">
          <div style="font-weight:900;">Volume</div>
          <input type="range" id="vol" min="0" max="1" step="0.01" value="0.9">
        </div>

        <div class="hint" style="margin-top:12px; line-height:1.5;">
          If you close this tab, the music stops. (No autoplay, you must press Play.)
        </div>

        <audio id="audio" preload="metadata" src="${src}"></audio>
      </div>
    </div>
  </div>

<script>
  const audio = document.getElementById('audio');
  const disc = document.getElementById('disc');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const restartBtn = document.getElementById('restartBtn');
  const vol = document.getElementById('vol');
  const time = document.getElementById('time');
  const closeBtn = document.getElementById('closeBtn');

  function fmt(t){
    if(!isFinite(t)) return "00:00";
    const m = Math.floor(t/60);
    const s = Math.floor(t%60);
    return String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
  }

  function setSpinning(on){
    disc.style.animationPlayState = on ? "running" : "paused";
  }

  playBtn.addEventListener('click', ()=> {
    audio.play().then(()=> setSpinning(true)).catch(()=>{});
  });

  pauseBtn.addEventListener('click', ()=> {
    audio.pause();
    setSpinning(false);
  });

  restartBtn.addEventListener('click', ()=> {
    audio.currentTime = 0;
    audio.play().then(()=> setSpinning(true)).catch(()=>{});
  });

  vol.addEventListener('input', ()=> {
    audio.volume = Number(vol.value);
  });

  audio.addEventListener('pause', ()=> setSpinning(false));
  audio.addEventListener('ended', ()=> setSpinning(false));

  audio.addEventListener('timeupdate', ()=> {
    time.textContent = fmt(audio.currentTime) + " / " + fmt(audio.duration);
  });
  audio.addEventListener('loadedmetadata', ()=> {
    time.textContent = fmt(audio.currentTime) + " / " + fmt(audio.duration);
  });

  closeBtn.addEventListener('click', ()=> {
    audio.pause();
    window.close();
  });
</script>
</body>
</html>`;

  w.document.open();
  w.document.write(html);
  w.document.close();
  return true;
}

function showGiftDetail(type){
  giftRow.style.display = "none";
  giftDetail.classList.add('show');
  voiceControls.style.display = "none";

  // ✅ hide Next when detail is open
  giftNext.style.display = "none";

  if(type === "flowers"){
    stopAudio();
    giftDetailLabel.textContent = "Flowers 🌸";
    giftArt.innerHTML = `<span>🌹</span><span>🌸</span><span>💐</span>`;
    giftMain.textContent = "For my Kanmani 💗";
    giftSub.textContent = "A little bouquet… until I give you the real one 😌";
  }

  if(type === "voice"){
    giftDetailLabel.textContent = "My Voice 🎤";
    giftArt.innerHTML = `<span>🎤</span><span>🎶</span><span>💜</span>`;
    giftMain.textContent = "For Likidha 🌙";
    giftSub.textContent = "Two songs… only for you. Tap to open CD player 💘";
    voiceControls.style.display = "block";
  }

  if(type === "teddy"){
    stopAudio();
    giftDetailLabel.textContent = "Teddy Date 🧸";
    giftArt.innerHTML = `<span>🧸</span><span>💃</span><span>🧸</span>`;
    giftMain.textContent = "Teddy date unlocked 😭💘";
    giftSub.textContent = "We can replace with teddy.gif later.";
  }
}

document.querySelectorAll('.gift').forEach(g=>{
  g.addEventListener('click', ()=> showGiftDetail(g.getAttribute('data-gift')));
});

giftBack.addEventListener('click', ()=>{
  stopAudio();
  giftDetail.classList.remove('show');
  giftRow.style.display = "grid";

  // ✅ show Next only when tiles are visible
  giftNext.style.display = "inline-block";
});

// CD player tabs (user click = popup allowed)
track1Btn.addEventListener('click', ()=>{
  stopAudio();
  openCDPlayerTab("Azhagiye", "./assets/audio/azhagiye.mp3");
});
track2Btn.addEventListener('click', ()=>{
  stopAudio();
  openCDPlayerTab("Kadhaal", "./assets/audio/kadhaal.mp3");
});

// Pause button now acts as "Stop fallback audio" (if popup blocked and fallback started)
pauseBtn.addEventListener('click', ()=>{
  if(currentAudio){
    currentAudio.pause();
  }
});

/***********************
 * Messages: open message = ONLY back
 ***********************/
const msgList = document.getElementById('msgList');
const msgView = document.getElementById('msgView');
const msgTitle = document.getElementById('msgTitle');
const msgBody = document.getElementById('msgBody');
const msgBackBtn = document.getElementById('msgBack');
const msgNextSimple = document.getElementById('msgNextSimple');

const messages = {
  1: {
    title: "My Moon 🌙",
    body: `Maybe the wait is longer. But if the destination is you, I don’t mind the time or the distance.

I never tell you this but I don’t want to find someone better. I don’t care about perfect people or what the world says I deserve because for me you are enough.

I don’t want to replace you. I just want us to be better. Better at understanding, better at holding each other, better at fighting for this love instead of fighting with each other. Better at growing together.

And I choose you not once, not twice, but every single time.

I don’t want a new story. I just want to make our story stronger, more beautiful, and forever lasting.`
  },

  2: {
    title: "BTS queen 💜",
    body: `Hey Babe, I know I mess up a lot and say the wrong things sometimes, but trust me, you’re an important person in my life.

When I say sorry, I truly mean it, not just to fix things but because I hate hurting you.

I never want you to doubt your place in my heart.

Just a small reminder — I love you 💘`
  },

  3: {
    title: "Crystal girl ✨",
    body: `One thing I genuinely value is clear communication.

If you’re busy, say that. I’ll respect it.

But don’t leave me guessing.

I’d rather hear the truth than feel ignored.`
  },

  4: {
    title: "Kanmani 🥺",
    body: `I may never be able to tell you this.

You were never a choice. You were the decision I made without fear.

Not because loving you was easy, but because leaving you never felt right.

Some people come into our lives as options — temporary, uncertain, replaceable.

But then someone arrives as an answer.

An answer to the chaos, the confusion, the waiting.

And once you find that kind of love, you don’t look for better — you just choose deeper. 🥺💞`
  },

  5: {
    title: "Forever ♾️",
    body: `Not perfect love. But consistent love. That’s what I want with you.

I got attached so fast because you were the first person to make me feel a spark after being in the dark for so long.

I’m humble enough to know I’m replaceable, but confident enough to know my soul is genuine.

And you won’t find that anywhere easily.`
  },

  6: {
    title: "Kanmani 🥺 (Marriage One)",
    body: `One day I’ll marry you, and we’ll build a life from small things that only make sense to us.

Inside jokes, shared prayers, quiet nights, and long talks when sleep doesn’t come.

We’ll mess up sometimes, learn each other slowly, and grow together through it all.

Life won’t always be easy, but I know this much:

I will keep choosing you even on the hard days.

That’s my promise.

That’s my forever. 💗`
  },

  7: {
    title: "My Sun 🌙",
    body: `Before you think of walking away from me, pause for a moment.

Go back to the first time we met or talked. The way your heart felt lighter.

Remember the first time I made you smile without even trying.

The conversation that made us feel seen.

The moments that felt safe, gentle, and rare.

Now ask yourself: do you really want to let me go?

Is this connection truly worthless, or are you just tired?

Think about the nights I held you, the plans we made together, the version of you that was happiest.

Are you sure you want to live without the me who once felt like home?

Sometimes it’s not the relationship that’s broken — it’s the communication, the understanding, and the effort.`
  }
};

msgList.addEventListener('click', (e)=>{
  const tile = e.target.closest('.msgTile');
  if(!tile) return;

  const id = Number(tile.getAttribute('data-msg'));
  const m = messages[id];

  msgTitle.textContent = m.title;
  msgBody.textContent = m.body;

  msgView.classList.add('show');
  msgList.style.display = "none";
  msgNextSimple.style.display = "none";
});

msgBackBtn.addEventListener('click', ()=>{
  msgView.classList.remove('show');
  msgList.style.display = "flex";
  msgNextSimple.style.display = "inline-block";
});

/***********************
 * Final slide lines (UPDATED with your screenshot lines + spelling fixes)
 ***********************/
const finalLine = document.getElementById('finalLine');
const finalNext = document.getElementById('finalNext');
const restartBtn = document.getElementById('restartBtn');

const finalLines = [
  "I choose you every time 💗",
  "For each day that passes, it’s another day closer to us getting married 💞",
  "Boyfriend? No. I’m your husband… just not legally yet 😌💘",
  "You already stole my heart… so why not steal my last name? 😳💗",
  "I wish I could have one more conversation with the version of you who liked me so much 🥺💘",
  "I came too late to be your first love, but just in time to be the love of your life 💗",
  "I’m not mad because you don’t want me… I’m mad because some days you act like you do, and other days you act like I’m nothing.",
  "Now that I’m not forcing you to stay with me… if you want to leave, I’ll come with you.",
  "I don’t want love that burns fast and disappears. I want one that stays soft, even in hard moments.",
  "I intend to be your last… however long it takes. Be my last, pleaseeeee 🥺💞",
  "Even when we fight… I still want us 🥺",
  "You’re my peace + my chaos… perfect combo 😭💘",
  "My Moon 🌙, my Kanmani… don’t go anywhere.",
  "Let’s be that annoying cute couple forever ♾️🧸",
  "Okay… now come here 😌🫶"
];

let finalIdx = 0;

finalNext.addEventListener('click', ()=>{
  finalIdx = (finalIdx + 1) % finalLines.length;
  finalLine.innerHTML = `<strong>${finalLines[finalIdx]}</strong>`;
});

restartBtn.addEventListener('click', ()=>{
  // reset heart
  heartTaps = 0;
  setHeartFill(0);
  heartBtn.classList.remove('full');
  heartHint.textContent = "Tap 10 times 👆";
  heartMsg.innerHTML = `<strong>Message:</strong> First tap… okay okay 😭💘`;
  heartNext.style.display = "none";

  // reset valentine
  yesScale = 1;
  valYes.style.transform = "scale(1)";
  valNext.style.display = "none";
  noBtn.style.display = "inline-block";
  noArmed = false;
  resetNoInline();

  // reset final
  finalIdx = 0;
  finalLine.innerHTML = `<strong>${finalLines[finalIdx]}</strong>`;

  // stop audio fallback
  stopAudio();

  // reset gift next visibility
  giftNext.style.display = "inline-block";
  giftDetail.classList.remove('show');
  giftRow.style.display = "grid";

  showSlide('s1');
});
