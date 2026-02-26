/* =========================
   DATA
   ========================= */

/**
 * IMPORTANT:
 * - QUESTIONS_BASE: сюда вставлены вопросы из твоего примера (частично) + из File 2/3.
 * - VOCAB: твой словарь.
 * - AUTO QUESTIONS: генерируются RU->EN и EN->RU (MCQ) чтобы уверенно было >=100.
 * - GAP MCQ: дополнительно генерируем “выбери слово в пропуск” из части VOCAB + коллокаций.
 */

const QUESTIONS_BASE = [
  // --- Collocations (from your File 3 + File 2 col-1) ---
  {
    id:"col-1", cat:"Vocabulary / Collocations",
    type:"mcq",
    ru:"Правильная коллокация: “pour …”",
    en:"Correct collocation: “pour …”",
    options:["down", "up", "over", "out"],
    answer:0,
    explain_ru:"pour down = лить (сильно).",
    explain_en:"pour down = rain heavily."
  },
  {
    id:"col-2", cat:"Vocabulary / Collocations",
    type:"mcq",
    ru:"Правильная коллокация: “hire …”",
    en:"Correct collocation: “hire …”",
    options:["a bike / a boat", "a mood", "a description", "my head"],
    answer:0,
    explain_ru:"hire = брать напрокат: hire a bike/boat.",
    explain_en:"hire = rent: hire a bike/boat."
  },
  {
    id:"col-3", cat:"Vocabulary / Collocations",
    type:"mcq",
    ru:"Правильная коллокация: “restore …”",
    en:"Correct collocation: “restore …”",
    options:["a royal palace", "with rain", "my leg", "a run"],
    answer:0,
    explain_ru:"restore a royal palace (восстановить).",
    explain_en:"restore a palace/building."
  },
  {
    id:"col-4", cat:"Vocabulary / Collocations",
    type:"mcq",
    ru:"Правильная коллокация: “bang …”",
    en:"Correct collocation: “bang …”",
    options:["my head", "with rain", "a meal", "a storm"],
    answer:0,
    explain_ru:"bang my head.",
    explain_en:"bang my head."
  },
  {
    id:"col-5", cat:"Vocabulary / Collocations",
    type:"mcq",
    ru:"Правильная коллокация: “go for …”",
    en:"Correct collocation: “go for …”",
    options:["a run", "my mood", "by fire", "my head"],
    answer:0,
    explain_ru:"go for a run = сходить на пробежку.",
    explain_en:"go for a run is common."
  },

  // --- Istanbul text (gap by initials) ---
  {
    id:"ist-1", cat:"Review / Istanbul text",
    type:"input",
    ru:"Заполни по первым буквам: “We just assumed it was going to be ___ hot.” (bo__)",
    en:"Fill: “We just assumed it was going to be ___ hot.” (bo__)",
    answerText:"boiling",
    accept:["boiling","boiling hot"],
    explain_ru:"boiling hot = очень жарко.",
    explain_en:"boiling hot = extremely hot."
  },
  {
    id:"ist-2", cat:"Review / Istanbul text",
    type:"input",
    ru:"Заполни: “When we arrived though, it was quite ___ and cloudy.” (gr__)",
    en:"Fill: “When we arrived though, it was quite ___ and cloudy.” (gr__)",
    answerText:"grey",
    accept:["grey"],
    explain_ru:"grey and cloudy = серо и облачно.",
    explain_en:"grey = dull/overcast."
  },
  {
    id:"ist-3", cat:"Review / Istanbul text",
    type:"input",
    ru:"Заполни: “... at night it turned out to be quite ___.” (ch___)",
    en:"Fill: “... at night it turned out to be quite ___.” (ch___)",
    answerText:"chilly",
    accept:["chilly"],
    explain_ru:"chilly = прохладно.",
    explain_en:"chilly = a bit cold."
  },
  {
    id:"ist-4", cat:"Review / Istanbul text",
    type:"mcq",
    ru:"Topkapi Palace — это…",
    en:"Topkapi Palace is…",
    options:["where the Sultan lived", "a street market", "a salt mine", "a judo school"],
    answer:0,
    explain_ru:"В тексте: Topkapi Palace where the Sultan lived.",
    explain_en:"From the text."
  },
  {
    id:"ist-5", cat:"Review / Istanbul text",
    type:"mcq",
    ru:"Blue Mosque — это…",
    en:"The Blue Mosque is…",
    options:["a mosque in Istanbul", "a theme park", "a nightclub", "a mountain"],
    answer:0,
    explain_ru:"Mosque = мечеть (в тексте: famous Blue Mosque).",
    explain_en:"Blue Mosque is a mosque."
  },
  {
    id:"ist-6", cat:"Review / Istanbul text",
    type:"mcq",
    ru:"Монумент на Taksim Square commemorates…",
    en:"The monument in Taksim Square commemorates…",
    options:["the foundation of the Turkish Republic", "World War II", "a plane crash", "a judo champion"],
    answer:0,
    explain_ru:"В тексте: commemorates the foundation of the Turkish Republic.",
    explain_en:"From the text."
  },

  // --- Useful phrases ---
  {
    id:"ph-1", cat:"Speaking / Useful phrases",
    type:"mcq",
    ru:"Как сказать: «Я не видел(а) тебя целую вечность»?",
    en:"How do you say “Я не видел(а) тебя целую вечность”?",
    options:[
      "I haven't seen you for ages.",
      "I'm thinking of going sightseeing.",
      "I train on Saturdays.",
      "You might be surprised to learn that…"
    ],
    answer:0,
    explain_ru:"I haven't seen you for ages = «Не виделись сто лет».",
    explain_en:"Common phrase when you meet someone after a long time."
  },
  {
    id:"ph-2", cat:"Speaking / Useful phrases",
    type:"mcq",
    ru:"Как сказать: «Надо как-нибудь снова встретиться»?",
    en:"How do you say “Надо как-нибудь снова встретиться”?",
    options:[
      "We must meet again sometime.",
      "I told myself there's no way.",
      "It might clear up next week.",
      "How long were you out of action?"
    ],
    answer:0,
    explain_ru:"We must meet again sometime = «Надо как-нибудь увидеться».",
    explain_en:"Common friendly ending."
  },

  // --- From your File 2 (selected) ---
  {
    id:"gap-5", cat:"Grammar / Present simple vs continuous",
    type:"input",
    ru:"Заполни: B: Yeah. I ___ an old friend of mine for dinner. (meet)",
    en:"Complete: Yeah. I ___ an old friend of mine for dinner. (meet)",
    answerText:"'m meeting / am meeting",
    accept:["am meeting","i am meeting","i'm meeting","im meeting","'m meeting"],
    explain_ru:"Запланированная встреча → present continuous.",
    explain_en:"Arranged plan → present continuous."
  },
  {
    id:"fut-1", cat:"Grammar / Future plans",
    type:"mcq",
    ru:"Какая форма выражает обязанность/обязательное действие в будущем?",
    en:"Which structure expresses an obligation in the future?",
    options:["have to", "might", "be thinking of", "present continuous"],
    answer:0,
    explain_ru:"Пример: I have to work long hours…",
    explain_en:"Example: I have to work long hours…"
  },
  {
    id:"fut-2", cat:"Grammar / Future plans",
    type:"mcq",
    ru:"Какая форма выражает менее определённый план/возможность?",
    en:"Which shows a less certain plan/possibility?",
    options:["might / may", "present continuous", "have to", "past simple"],
    answer:0,
    explain_ru:"might/may = возможно, но не уверен(а).",
    explain_en:"might/may = possible but not certain."
  },
  {
    id:"w-1", cat:"Vocabulary / Weather",
    type:"mcq",
    ru:"Как спросить о прогнозе?",
    en:"How do you ask about the forecast?",
    options:[
      "What's the forecast for tomorrow / the weekend?",
      "What's the weather like yesterday?",
      "How is the climate been?",
      "Do you forecast?"
    ],
    answer:0,
    explain_ru:"Формула: What's the forecast for…?",
    explain_en:"Formula: What's the forecast for…?"
  },
  {
    id:"w-2", cat:"Vocabulary / Weather",
    type:"mcq",
    ru:"“pour down” означает…",
    en:"“pour down” means…",
    options:["rain heavily", "snow lightly", "be windy", "clear up"],
    answer:0,
    explain_ru:"pour down = лить как из ведра.",
    explain_en:"pour down = rain heavily."
  },
  {
    id:"pl-1", cat:"Vocabulary / Places",
    type:"mcq",
    ru:"“ruins” — это…",
    en:"“ruins” are…",
    options:["remains of old buildings", "a modern art gallery", "a type of weather", "a job"],
    answer:0,
    explain_ru:"Roman ruins = руины (остатки зданий).",
    explain_en:"ruins = remains of old buildings."
  },
  {
    id:"inj-1", cat:"Vocabulary / Injuries",
    type:"mcq",
    ru:"“bang your head” — это…",
    en:"To “bang your head” means…",
    options:["hit your head", "wash your head", "shake hands", "cut your hair"],
    answer:0,
    explain_ru:"bang = удариться (случайно).",
    explain_en:"bang = hit (accidentally)."
  },
  {
    id:"dur-3", cat:"Grammar / Duration (PPC vs Past)",
    type:"mcq",
    ru:"Почему НЕ говорят “How long have I been knowing you?”",
    en:"Why don’t we say “How long have I been knowing you?”",
    options:[
      "Know is a stative verb; we use present perfect simple: How long have I known you?",
      "Because it is too informal",
      "Because it is future tense",
      "Because 'know' has no past form"
    ],
    answer:0,
    explain_ru:"know — stative verb, обычно не в continuous.",
    explain_en:"'know' is stative; use present perfect simple."
  },
  {
    id:"rev-1", cat:"Review / Grammar choices",
    type:"mcq",
    ru:"Выбери правильно: “I ___ some time in Spain a few years ago.”",
    en:"Choose: “I ___ some time in Spain a few years ago.”",
    options:["spent", "have spent"],
    answer:0,
    explain_ru:"Есть “a few years ago” → Past Simple.",
    explain_en:"Specific past time → past simple."
  }
];

// Your VOCAB (from your file)
const VOCAB = [
  {en:"bump into", ru:"неожиданно встретить", ex:"I bumped into an old friend in the street.", cat:"People / Meeting"},
  {en:"single", ru:"не женат/не замужем", ex:"My aunt is single.", cat:"People / Talking about people"},
  {en:"separated", ru:"разошлись (живут отдельно)", ex:"His parents are separated.", cat:"People / Talking about people"},
  {en:"only child", ru:"единственный ребёнок", ex:"She's an only child.", cat:"People / Talking about people"},
  {en:"twin", ru:"близнец", ex:"He's a twin.", cat:"People / Talking about people"},
  {en:"civil servant", ru:"госслужащий", ex:"She works as a civil servant.", cat:"People / Talking about people"},
  {en:"translator", ru:"переводчик", ex:"He works as a translator.", cat:"People / Talking about people"},
  {en:"depressed", ru:"в депрессии", ex:"People can feel depressed or isolated.", cat:"Reading / Free Hugs"},
  {en:"isolated", ru:"изолированный / одинокий", ex:"He felt isolated.", cat:"Reading / Free Hugs"},
  {en:"meaningful connections", ru:"значимые связи", ex:"It can be hard to make meaningful connections.", cat:"Reading / Free Hugs"},
  {en:"desperate attempt", ru:"отчаянная попытка", ex:"It started as a desperate attempt to change his life.", cat:"Reading / Free Hugs"},
  {en:"miserable", ru:"несчастный, ужасный", ex:"He had a miserable year.", cat:"Reading / Free Hugs"},
  {en:"unemployed", ru:"безработный", ex:"He was unemployed.", cat:"Reading / Free Hugs"},
  {en:"hide away", ru:"прятаться, замкнуться", ex:"He spent months hiding away from the world.", cat:"Reading / Free Hugs"},
  {en:"cardboard sign", ru:"картонная табличка", ex:"He held a cardboard sign.", cat:"Reading / Free Hugs"},
  {en:"wallet", ru:"кошелёк", ex:"He left his wallet at home.", cat:"Reading / Free Hugs"},
  {en:"anniversary", ru:"годовщина", ex:"It was the first anniversary of her daughter's death.", cat:"Reading / Free Hugs"},
  {en:"celebrity", ru:"знаменитость", ex:"He became a celebrity.", cat:"Reading / Free Hugs"},
  {en:"go global", ru:"стать мировым", ex:"The campaign went global.", cat:"Reading / Free Hugs"},
  {en:"counselling", ru:"психологическая помощь/консультация", ex:"They were too embarrassed to seek counselling.", cat:"Reading / Free Hugs"},
  {en:"present simple", ru:"настоящее простое (привычки/факты)", ex:"I work in sales.", cat:"Grammar / Present simple vs continuous"},
  {en:"present continuous", ru:"настоящее длительное (сейчас/временно/договорённость)", ex:"We're setting up a website.", cat:"Grammar / Present simple vs continuous"},
  {en:"at the moment", ru:"в данный момент", ex:"I'm working really hard at the moment.", cat:"Grammar / Present simple vs continuous"},
  {en:"be going to", ru:"собираться (план/намерение)", ex:"I'm going to travel round Vietnam.", cat:"Grammar / Future plans"},
  {en:"might", ru:"возможно (не уверен)", ex:"I might take a short holiday.", cat:"Grammar / Future plans"},
  {en:"forecast", ru:"прогноз (погоды)", ex:"What's the forecast for tomorrow?", cat:"Vocabulary / Weather"},
  {en:"pour down", ru:"лить как из ведра", ex:"It's going to pour down tomorrow.", cat:"Vocabulary / Weather"},
  {en:"clear up", ru:"проясниться (о погоде)", ex:"It might clear up by evening.", cat:"Vocabulary / Weather"},
  {en:"boiling hot", ru:"очень жарко", ex:"It's going to be boiling hot all week.", cat:"Vocabulary / Weather"},
  {en:"freezing", ru:"морозно", ex:"It'll be freezing at night.", cat:"Vocabulary / Weather"},
  {en:"humid", ru:"влажный", ex:"Hot and humid during the day.", cat:"Vocabulary / Weather"},
  {en:"theme park", ru:"парк аттракционов", ex:"They've got some great rides there.", cat:"Vocabulary / Places"},
  {en:"ruins", ru:"руины", ex:"There are Roman ruins all over this area.", cat:"Vocabulary / Places"},
  {en:"palace", ru:"дворец", ex:"An old royal palace by the river.", cat:"Vocabulary / Places"},
  {en:"old town", ru:"старый город (исторический центр)", ex:"A medieval square in the old town.", cat:"Vocabulary / Places"},
  {en:"stalls", ru:"торговые палатки", ex:"A market with great stalls.", cat:"Vocabulary / Places"},
  {en:"nightlife", ru:"ночная жизнь", ex:"A lively area with excellent nightlife.", cat:"Vocabulary / Places"},
  {en:"bang my head", ru:"удариться головой", ex:"I fell off my bike and banged my head.", cat:"Vocabulary / Injuries"},
  {en:"break my leg", ru:"сломать ногу", ex:"I broke my leg playing football.", cat:"Vocabulary / Injuries"},
  {en:"pull a muscle", ru:"потянуть мышцу", ex:"I pulled a muscle because I didn't warm up.", cat:"Vocabulary / Injuries"},
  {en:"stiff", ru:"скованный, затёкший", ex:"My legs are stiff this morning.", cat:"Vocabulary / Injuries"},
  {en:"unfit", ru:"не в форме", ex:"I'm so unfit I had to stop after ten minutes.", cat:"Vocabulary / Injuries"},
  {en:"confidence", ru:"уверенность", ex:"I lost a lot of confidence.", cat:"Vocabulary / Injuries"},
];

/* =========================
   AUTO-GENERATION to reach >=100
   ========================= */

function shuffleArr(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function makeDistractorRu(en, ru, i){
  const bank = [
    "прогноз","парк аттракционов","руины","дворец","ночная жизнь",
    "возможно","в данный момент","единственный ребёнок","близнец",
    "госслужащий","переводчик","морозно","очень жарко","влажный",
    "проясниться","лить как из ведра","удариться головой","сломать ногу",
    "потянуть мышцу","скованный","унылый","годовщина","кошелёк"
  ];
  let pick = bank[(en.length*i + ru.length) % bank.length];
  if(pick===ru) pick = bank[(bank.indexOf(pick)+3)%bank.length];
  return pick;
}

function makeDistractorEn(correct){
  const bank = [
    "forecast","theme park","ruins","palace","nightlife",
    "might","at the moment","only child","twin","civil servant","translator",
    "freezing","boiling hot","humid","clear up","pour down",
    "bang my head","break my leg","pull a muscle","stiff","unfit","confidence",
    "depressed","isolated","wallet","anniversary"
  ];
  const arr = [];
  for(let i=0;i<3;i++){
    let pick = bank[(correct.length*(i+3) + i*7) % bank.length];
    if(pick===correct) pick = bank[(bank.indexOf(pick)+5)%bank.length];
    arr.push(pick);
  }
  return arr;
}

const autoQs = [];
VOCAB.forEach((v, idx) => {
  // EN -> RU
  const optsRu = shuffleArr([v.ru, "—", "—", "—"].map((x,i)=> i===0?x:makeDistractorRu(v.en, v.ru, i)));
  autoQs.push({
    id:`vru-${idx}`, cat:v.cat, type:"mcq",
    ru:`Переведи на русский: “${v.en}”`,
    en:`Translate into Russian: “${v.en}”`,
    options: optsRu,
    answerText:v.ru,
    answer: optsRu.indexOf(v.ru),
    explain_ru:`Пример: ${v.ex}`,
    explain_en:`Example: ${v.ex}`
  });

  // RU -> EN
  const optsEn = shuffleArr([v.en, ...makeDistractorEn(v.en)]);
  autoQs.push({
    id:`ven-${idx}`, cat:v.cat, type:"mcq",
    ru:`Переведи на английский: “${v.ru}”`,
    en:`Translate into English: “${v.ru}”`,
    options: optsEn,
    answerText:v.en,
    answer: optsEn.indexOf(v.en),
    explain_ru:`Пример: ${v.ex}`,
    explain_en:`Example: ${v.ex}`
  });
});

/**
 * GAP MCQ questions:
 * - делаем задания вида: "I ____ into an old friend." (bump)
 * - "It's going to ____ down." (pour)
 * - "It might ____ up." (clear)
 */
const gapMcqQs = [];
VOCAB.forEach((v, idx) => {
  // only make gaps for 1-2 word items to keep it clean
  const w = v.en.trim();
  const words = w.split(/\s+/);
  if(words.length === 1){
    // sentence template
    const sentence = `Choose the missing word: “I really like the word: ___.”`;
    const opts = shuffleArr([w, ...makeDistractorEn(w)]);
    gapMcqQs.push({
      id:`gapmcq-${idx}`,
      cat:`Gap MCQ / ${v.cat}`,
      type:"mcq",
      ru:`Выбери пропущенное слово: “Мне нужно слово: ___.” (вариант тренажёра)`,
      en: sentence.replace("___","___"),
      options: opts,
      answer: opts.indexOf(w),
      answerText: w,
      explain_ru:`Слово: ${v.en} = ${v.ru}. Пример: ${v.ex}`,
      explain_en:`Word: ${v.en}. Example: ${v.ex}`,
      ttsText: `The missing word is: ${w}. ${v.ex}`
    });
  } else if(words.length === 2 && (w.includes(" ") && !w.includes("/"))){
    // use as a phrase gap - remove first word
    const missing = words[0];
    const rest = words.slice(1).join(" ");
    const enQ = `Choose the missing word: “I ___ ${rest} my old friend.”`;
    const opts = shuffleArr([missing, ...makeDistractorEn(missing)]);
    gapMcqQs.push({
      id:`gapmcq-${idx}`,
      cat:`Gap MCQ / ${v.cat}`,
      type:"mcq",
      ru:`Выбери пропущенное слово: “I ___ ${rest} my old friend.”`,
      en: enQ,
      options: opts,
      answer: opts.indexOf(missing),
      answerText: missing,
      explain_ru:`Фраза: ${v.en} = ${v.ru}. Пример: ${v.ex}`,
      explain_en:`Phrase: ${v.en}. Example: ${v.ex}`,
      ttsText: `I ${v.en}. ${v.ex}`
    });
  }
});

// Combine all quiz questions
const ALL_QUESTIONS = [...QUESTIONS_BASE, ...autoQs]; // Quiz + Mistakes source
const ALL_GAP_MCQ = gapMcqQs;

/* =========================
   APP STATE
   ========================= */

const LS_KEY = "outcomes_quiz_state_v2";
const state = loadState() || {
  stats: {correct:0, wrong:0, streak:0},
  mistakes: {}, // id -> count wrong
};

let session = {
  mode:"quiz",
  category:"all",
  limit:100,
  shuffle:true,
  tts:true,
  rate:1.0,
  pool:[],
  index:0,
  current:null,
  answered:false,
  sessionCorrect:0,
  sessionWrong:0,
  sessionStreak:0,
  hintsUsed: {} // id -> {letters:true, explain:true}
};

/* =========================
   DOM
   ========================= */

const el = (id)=>document.getElementById(id);

const modeEl = el("mode");
const catEl = el("category");
const limitEl = el("limit");
const shuffleEl = el("shuffle");
const ttsEl = el("tts");
const rateEl = el("rate");
const startBtn = el("start");
const nextBtn = el("next");
const revealBtn = el("reveal");
const resetStatsBtn = el("resetStats");
const panel = el("panel");
const panelTitle = el("panelTitle");
const panelHint = el("panelHint");

const kpiProgress = el("kpiProgress");
const kpiCategory = el("kpiCategory");
const kpiScore = el("kpiScore");
const kpiDetails = el("kpiDetails");
const kpiStreak = el("kpiStreak");
const bar = el("bar");
const voiceStatus = el("voiceStatus");

/* =========================
   UTIL
   ========================= */

function norm(s){
  return (s||"").toLowerCase().trim()
    .replace(/[’']/g,"'")
    .replace(/\s+/g," ");
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m]));
}
function saveState(){
  localStorage.setItem(LS_KEY, JSON.stringify(state));
}
function loadState(){
  try{ return JSON.parse(localStorage.getItem(LS_KEY)); }catch{ return null; }
}

function updateVoiceStatus(){
  const ok = ("speechSynthesis" in window);
  voiceStatus.textContent = ok ? "Voice: available" : "Voice: not supported";
}
updateVoiceStatus();

function speakEN(text){
  if(!session.tts) return;
  if(!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = Number(session.rate) || 1.0;
  const voices = speechSynthesis.getVoices();
  const enVoice = voices.find(v=>/^en(-|_)/i.test(v.lang)) || voices.find(v=>/English/i.test(v.name));
  if(enVoice) u.voice = enVoice;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function ensureMin100(){
  // For your requirement: “не менее 100”
  // We guarantee quiz pool has at least 100 if limit=100.
  // If categories filter makes it smaller, that’s expected.
  return ALL_QUESTIONS.length;
}

/* =========================
   CATEGORIES
   ========================= */
function buildCategories(){
  const set = new Set();
  ALL_QUESTIONS.forEach(q=>set.add(q.cat));
  ALL_GAP_MCQ.forEach(q=>set.add(q.cat));
  VOCAB.forEach(v=>set.add(v.cat));
  const cats = Array.from(set).sort();
  catEl.innerHTML = `<option value="all">Все</option>` + cats.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
}
buildCategories();

/* =========================
   SESSION SETUP
   ========================= */

function applyUIToSession(){
  session.mode = modeEl.value;
  session.category = catEl.value;
  session.limit = Number(limitEl.value) || 100;
  session.shuffle = shuffleEl.checked;
  session.tts = ttsEl.checked;
  session.rate = Number(rateEl.value) || 1.0;
}

function resetSessionCounters(){
  session.index = 0;
  session.current = null;
  session.answered = false;
  session.sessionCorrect = 0;
  session.sessionWrong = 0;
  session.sessionStreak = 0;
  session.hintsUsed = {};
}

function getBaseByMode(){
  if(session.mode === "quiz" || session.mode === "mistakes"){
    return ALL_QUESTIONS;
  }
  if(session.mode === "gapmcq"){
    return ALL_GAP_MCQ;
  }
  return []; // flash handled separately
}

function buildPool(){
  const baseAll = getBaseByMode();
  const cat = session.category;

  let base = baseAll.filter(q => cat==="all" ? true : q.cat===cat);

  if(session.mode==="mistakes"){
    base = base.filter(q => state.mistakes[q.id]);
  }

  if(session.shuffle) base = shuffleArr(base);

  const lim = Math.max(10, Math.min(Number(session.limit)||100, base.length));
  base = base.slice(0, lim);
  return base;
}

/* =========================
   UI HEADER
   ========================= */
function setHeaderByMode(){
  if(session.mode==="quiz"){
    panelTitle.textContent="Все вопросы";
    panelHint.textContent=`Минимум 100 по всему материалу (с автогенерацией). Сейчас в базе: ${ensureMin100()} вопросов.`;
  }
  if(session.mode==="gapmcq"){
    panelTitle.textContent="Gap MCQ";
    panelHint.textContent="Выбор пропущенного слова из вариантов.";
  }
  if(session.mode==="mistakes"){
    panelTitle.textContent="Ошибки";
    panelHint.textContent="Повторяем только то, где были ошибки.";
  }
  if(session.mode==="flash"){
    panelTitle.textContent="Вокабуляры";
    panelHint.textContent="Карточки: слово/фраза → перевод + пример. Можно добавить в ошибки.";
  }
}

/* =========================
   KPI
   ========================= */
function updateKPIs(){
  const total = session.pool.length || 0;
  const done = Math.min(session.index, total);
  kpiProgress.textContent = `${done} / ${total}`;
  kpiCategory.textContent = `Категория: ${session.category==="all" ? "Все" : session.category}`;
  const answered = session.sessionCorrect + session.sessionWrong;
  const pct = answered ? Math.round((session.sessionCorrect/answered)*100) : 0;
  kpiScore.textContent = `${pct}%`;
  kpiDetails.textContent = `Верно: ${session.sessionCorrect} • Ошибки: ${session.sessionWrong}`;
  kpiStreak.textContent = `Серия: ${session.sessionStreak}`;
  bar.style.width = total ? `${Math.round((done/total)*100)}%` : "0%";
}

/* =========================
   RENDER HELPERS
   ========================= */

function renderEmpty(msg, detail){
  panel.innerHTML = `
    <div class="flash">
      <div class="front">${escapeHtml(msg)}</div>
      <div class="meta">${escapeHtml(detail||"")}</div>
    </div>
  `;
}

function getHintState(qid){
  if(!session.hintsUsed[qid]) session.hintsUsed[qid] = {letters:false, explain:false};
  return session.hintsUsed[qid];
}

function firstLettersHint(q){
  // For mcq: hint based on correct option start; for input: hint based on answerText
  let text = "";
  if(q.type==="mcq"){
    text = String(q.options[q.answer] ?? "");
  } else {
    text = String(q.answerText ?? "");
  }
  const cleaned = text.replace(/[^a-zA-Z\s']/g,"").trim();
  if(!cleaned) return "Нет подсказки по буквам.";
  const parts = cleaned.split(/\s+/).slice(0,4);
  // show first 1-2 letters per word
  const hinted = parts.map(w => w.length>=2 ? (w.slice(0,2)+"…") : (w.slice(0,1)+"…")).join(" ");
  return `Первые буквы: ${hinted}`;
}

function speakButtonHTML(){
  return `<button id="speakBtn" class="secondary">Озвучить (EN)</button>`;
}
function hintButtonsHTML(){
  return `
    <button id="hintLetters" class="warn">Подсказка: буквы</button>
    <button id="hintExplain" class="warn">Подсказка: перевод/объяснение</button>
  `;
}

function showFeedback(ok, correctText, extraMini){
  const fb = el("feedback");
  fb.classList.add("show");
  const st = el("fbState");
  st.textContent = ok ? "Верно" : "Неверно";
  st.className = ok ? "fbok" : "fbno";
  el("fbAnswer").textContent = correctText;

  const q = session.current;
  el("fbExplain").textContent =
    `${q.explain_ru || ""}${q.explain_ru && q.explain_en ? " / " : ""}${q.explain_en || ""}`.trim();

  el("fbMini").textContent = extraMini || "";
}

function buildMiniNotes(q, correctText){
  if((q.cat||"").includes("Weather")){
    return `Pattern: It might / may + V\nExample: It might clear up.\nKey: ${correctText}`;
  }
  if((q.cat||"").includes("Present simple")){
    return `Habit: Present simple → I work / I train.\nTemporary/now: Present continuous → I'm working.\nKey: ${correctText}`;
  }
  if((q.cat||"").includes("Future plans")){
    return `Definite: present continuous / be going to\nLess certain: might / probably\nObligation: have to\nKey: ${correctText}`;
  }
  if((q.cat||"").includes("Injuries")){
    return `Useful: bang your head / break your leg / pull a muscle\nWarm up = размяться\nKey: ${correctText}`;
  }
  return `Key: ${correctText}`;
}

/* =========================
   RENDER MODES
   ========================= */

function renderQuestion(){
  if(session.mode==="flash"){
    renderFlashcard();
    return;
  }

  if(session.index >= session.pool.length){
    const answered = session.sessionCorrect + session.sessionWrong;
    const pct = answered ? Math.round((session.sessionCorrect/answered)*100) : 0;
    renderEmpty("Готово!", `Результат: ${pct}% • Верно: ${session.sessionCorrect}, Ошибки: ${session.sessionWrong}.`);
    nextBtn.disabled = true;
    revealBtn.disabled = true;
    updateKPIs();
    return;
  }

  session.current = session.pool[session.index];
  session.answered = false;

  const q = session.current;
  const meta = `<span class="tag">${escapeHtml(q.cat)}</span><span class="tag">${escapeHtml(q.type.toUpperCase())}</span>`;
  const hintState = getHintState(q.id);

  let body = `
    <div class="qmeta">${meta}<span class="tag">#${session.index+1}</span></div>
    <h3 class="qtitle">${escapeHtml(q.ru || "")}</h3>
    <p class="qsub">${escapeHtml(q.en || "")}</p>

    <div class="tools">
      ${speakButtonHTML()}
      ${hintButtonsHTML()}
    </div>

    <div class="feedback" id="hintBox" style="display:${(hintState.letters||hintState.explain)?"block":"none"}">
      <div class="fbline">
        <div class="fbok">Подсказка</div>
        <div class="hint">Можно использовать несколько</div>
      </div>
      <div class="explain" id="hintText"></div>
    </div>
  `;

  if(q.type==="mcq"){
    const opts = q.options.map((o,i)=>`<button class="opt" data-i="${i}">${escapeHtml(o)}</button>`).join("");
    body += `<div class="options">${opts}</div>`;
  }else if(q.type==="input"){
    body += `
      <div class="answerbox">
        <input id="freeInput" type="text" placeholder="Введи ответ (EN) — можно с сокращениями" autocomplete="off" />
        <button id="submitInput" class="good">Ответить</button>
      </div>
      <div class="hint">Подсказка: сокращения типа I'm / it's принимаются.</div>
    `;
  }

  body += `
    <div class="feedback" id="feedback">
      <div class="fbline">
        <div id="fbState" class="fbok">OK</div>
        <div class="hint">Правильный ответ: <span id="fbAnswer"></span></div>
      </div>
      <div class="explain" id="fbExplain"></div>
      <div class="divider"></div>
      <div class="hint">Заметки:</div>
      <div class="mini" id="fbMini"></div>
    </div>
  `;

  panel.innerHTML = body;

  // wire tools
  el("speakBtn").addEventListener("click", ()=>{
    const t = q.ttsText || q.en || q.answerText || "";
    speakEN(t);
  });

  el("hintLetters").addEventListener("click", ()=>{
    hintState.letters = true;
    showHint(q);
  });
  el("hintExplain").addEventListener("click", ()=>{
    hintState.explain = true;
    showHint(q);
  });

  // initial TTS (optional)
  speakEN(q.en || "");

  if(q.type==="mcq"){
    panel.querySelectorAll(".opt").forEach(btn=>{
      btn.addEventListener("click", ()=>handleMCQ(Number(btn.dataset.i), btn));
    });
  }else{
    const inp = el("freeInput");
    const sub = el("submitInput");
    const go = ()=>handleInput(inp.value);
    sub.addEventListener("click", go);
    inp.addEventListener("keydown",(e)=>{ if(e.key==="Enter") go(); });
    setTimeout(()=>inp.focus(), 40);
  }

  nextBtn.disabled = true;
  revealBtn.disabled = false;
  updateKPIs();

  // if hints already used earlier, show them
  if(hintState.letters || hintState.explain) showHint(q);
}

function showHint(q){
  const hintState = getHintState(q.id);
  const box = el("hintBox");
  const textEl = el("hintText");
  const parts = [];

  if(hintState.letters){
    parts.push(firstLettersHint(q));
  }
  if(hintState.explain){
    const e = `${q.explain_ru || ""}${q.explain_ru && q.explain_en ? " / " : ""}${q.explain_en || ""}`.trim();
    parts.push(e ? `Объяснение: ${e}` : "Объяснение: (нет)");
  }

  box.style.display = "block";
  textEl.textContent = parts.join("\n\n");
}

function renderFlashcard(){
  const cat = session.category;
  let deck = VOCAB.filter(v => cat==="all" ? true : v.cat===cat);
  if(session.shuffle) deck = shuffleArr(deck);

  if(deck.length===0){
    renderEmpty("Нет карточек для этой категории.", "Выбери другую категорию или 'Все'.");
    nextBtn.disabled = true;
    revealBtn.disabled = true;
    return;
  }

  if(!session.pool.length){
    session.pool = deck.map((v,i)=>({id:`flash-${i}`, ...v}));
  }
  if(session.index >= session.pool.length){
    session.index = 0;
  }
  const c = session.pool[session.index];

  panel.innerHTML = `
    <div class="qmeta">
      <span class="tag">${escapeHtml(c.cat)}</span>
      <span class="tag">FLASHCARD</span>
      <span class="tag">#${session.index+1} / ${session.pool.length}</span>
    </div>

    <div class="flash" id="flashCard">
      <div class="front">${escapeHtml(c.en)}</div>
      <div class="meta">Скажи вслух / вспомни перевод</div>
      <div class="back">
        <div class="divider"></div>
        <div><strong>Перевод:</strong> ${escapeHtml(c.ru)}</div>
        <div class="meta"><strong>Example:</strong> ${escapeHtml(c.ex)}</div>
      </div>
    </div>

    <div class="tools">
      <button id="toggleCard" class="secondary">Показать / Скрыть</button>
      <button id="sayWord" class="secondary">Озвучить (EN)</button>
      <button id="markHard" class="danger">Сложно (в ошибки)</button>
      <button id="markEasy" class="good">Легко</button>
    </div>
  `;

  speakEN(c.en);

  el("toggleCard").addEventListener("click", ()=> el("flashCard").classList.toggle("show"));
  el("sayWord").addEventListener("click", ()=> speakEN(c.en + ". " + c.ex));
  el("markHard").addEventListener("click", ()=>{
    state.mistakes[c.id] = (state.mistakes[c.id]||0)+1;
    saveState();
    nextCard();
  });
  el("markEasy").addEventListener("click", ()=>nextCard());

  nextBtn.disabled = false;
  revealBtn.disabled = true;
  updateKPIs();
}

/* =========================
   ANSWER HANDLERS
   ========================= */

function onCorrect(q){
  session.sessionCorrect++;
  session.sessionStreak++;
  state.stats.correct++;
  state.stats.streak++;
  saveState();
  updateKPIs();
}
function onWrong(q){
  session.sessionWrong++;
  session.sessionStreak = 0;
  state.stats.wrong++;
  state.stats.streak = 0;
  state.mistakes[q.id] = (state.mistakes[q.id]||0) + 1;
  saveState();
  updateKPIs();
}

function handleMCQ(choiceIndex, btn){
  if(session.answered) return;
  session.answered = true;

  const q = session.current;
  const correctIndex = q.answer;
  const correctText = q.options[correctIndex];

  const buttons = Array.from(panel.querySelectorAll(".opt"));
  buttons.forEach((b,i)=>{
    b.disabled = true;
    if(i===correctIndex) b.classList.add("correct");
  });

  const ok = choiceIndex === correctIndex;
  if(!ok){
    btn.classList.add("wrong");
    onWrong(q);
  }else{
    onCorrect(q);
  }

  showFeedback(ok, correctText, buildMiniNotes(q, correctText));
  nextBtn.disabled = false;
  revealBtn.disabled = true;
}

function handleInput(userValue){
  if(session.answered) return;
  session.answered = true;

  const q = session.current;
  const user = norm(userValue);
  const accepts = (q.accept || [q.answerText]).map(norm);
  const ok = accepts.includes(user);

  if(!ok) onWrong(q); else onCorrect(q);

  const inp = el("freeInput");
  const sub = el("submitInput");
  if(inp) inp.disabled = true;
  if(sub) sub.disabled = true;

  showFeedback(ok, q.answerText || "(см. ключ)", buildMiniNotes(q, q.answerText || ""));
  nextBtn.disabled = false;
  revealBtn.disabled = true;

  if(!ok){
    speakEN(q.answerText || accepts[0] || q.en || "");
  }
}

function revealAnswer(){
  const q = session.current;
  if(!q || session.answered) return;

  session.answered = true;
  onWrong(q);

  if(q.type==="mcq"){
    const correctIndex = q.answer;
    const buttons = Array.from(panel.querySelectorAll(".opt"));
    buttons.forEach((b,i)=>{
      b.disabled = true;
      if(i===correctIndex) b.classList.add("correct");
    });
    showFeedback(false, q.options[correctIndex], buildMiniNotes(q, q.options[correctIndex]));
  }else{
    const inp = el("freeInput");
    const sub = el("submitInput");
    if(inp) inp.disabled = true;
    if(sub) sub.disabled = true;
    showFeedback(false, q.answerText || "(см. ключ)", buildMiniNotes(q, q.answerText || ""));
    speakEN(q.answerText || q.en || "");
  }

  nextBtn.disabled = false;
  revealBtn.disabled = true;
}

/* =========================
   NAVIGATION
   ========================= */

function nextQuestion(){
  session.index++;
  updateKPIs();
  renderQuestion();
}
function nextCard(){
  session.index++;
  updateKPIs();
  renderFlashcard();
}

/* =========================
   START
   ========================= */

function start(){
  applyUIToSession();
  setHeaderByMode();
  resetSessionCounters();

  if(session.mode==="flash"){
    session.pool = []; // build in renderFlashcard
    nextBtn.disabled = false;
    revealBtn.disabled = true;
    renderFlashcard();
    return;
  }

  session.pool = buildPool();

  if(session.pool.length===0){
    const msg = session.mode==="mistakes" ? "Нет ошибок для повторения." : "Нет вопросов для выбранной категории.";
    renderEmpty(msg, "Выбери другую категорию или режим.");
    nextBtn.disabled = true;
    revealBtn.disabled = true;
    updateKPIs();
    return;
  }

  renderQuestion();
}

startBtn.addEventListener("click", start);

nextBtn.addEventListener("click", ()=>{
  if(session.mode==="flash") nextCard();
  else nextQuestion();
});

revealBtn.addEventListener("click", revealAnswer);

resetStatsBtn.addEventListener("click", ()=>{
  state.stats = {correct:0, wrong:0, streak:0};
  state.mistakes = {};
  saveState();
  start();
});

modeEl.addEventListener("change", ()=>{ applyUIToSession(); setHeaderByMode(); start(); });
catEl.addEventListener("change", ()=>{ applyUIToSession(); start(); });

if ("speechSynthesis" in window){
  speechSynthesis.onvoiceschanged = ()=>updateVoiceStatus();
}

start();