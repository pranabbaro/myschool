const languages=[
{name:"Kannada",native:"ಕನ್ನಡ",icon:"🏛️",status:"available",color:"#32b44a",progress:34},
{name:"Hindi",native:"हिंदी",icon:"🕌",status:"available",color:"#ff8a16",progress:55},
{name:"English",native:"English",icon:"🏰",status:"available",color:"#2e7eea",progress:68},
{name:"Tamil",native:"தமிழ்",icon:"🛕",status:"available",color:"#7f42d9",progress:39},
{name:"Telugu",native:"తెలుగు",icon:"🏯",status:"available",color:"#16a89a",progress:27},
{name:"Assamese",native:"অসমীয়া",icon:"🏡",status:"soon",color:"#ef4e91",progress:12},
{name:"Bodo",native:"बड़ो",icon:"🌿",status:"soon",color:"#3a9d62",progress:8},
{name:"Bengali",native:"বাংলা",icon:"🌉",status:"soon",color:"#d85d31",progress:7},
{name:"Marathi",native:"मराठी",icon:"🏰",status:"soon",color:"#cf6f22",progress:6},
{name:"Malayalam",native:"മലയാളം",icon:"🌴",status:"soon",color:"#009688",progress:5},
{name:"Gujarati",native:"ગુજરાતી",icon:"🦁",status:"soon",color:"#e0a000",progress:4},
{name:"Punjabi",native:"ਪੰਜਾਬੀ",icon:"🌾",status:"soon",color:"#4c8dce",progress:3}
];

const courseData={
Kannada:{
subtitle:"ಕನ್ನಡ ಕಲಿಯಿರಿ — Learn Kannada through pictures and words.",
topics:{
Alphabet:{icon:"ಅ",items:[["🌟","ಅ","A"],["🌈","ಆ","Aa"],["✨","ಇ","I"],["🦅","ಈ","Ee"],["🌼","ಉ","U"],["🎈","ಊ","Oo"],["🍀","ಎ","E"],["🌞","ಏ","Ae"]]},
Numbers:{icon:"೧೨೩",items:[["1️⃣","ಒಂದು","One"],["2️⃣","ಎರಡು","Two"],["3️⃣","ಮೂರು","Three"],["4️⃣","ನಾಲ್ಕು","Four"],["5️⃣","ಐದು","Five"],["6️⃣","ಆರು","Six"]]},
Animals:{icon:"🐘",items:[["🐘","ಆನೆ","Elephant"],["🐶","ನಾಯಿ","Dog"],["🐱","ಬೆಕ್ಕು","Cat"],["🐄","ಹಸು","Cow"],["🐯","ಹುಲಿ","Tiger"],["🦁","ಸಿಂಹ","Lion"]]},
Fruits:{icon:"🥭",items:[["🥭","ಮಾವು","Mango"],["🍎","ಸೇಬು","Apple"],["🍌","ಬಾಳೆಹಣ್ಣು","Banana"],["🍊","ಕಿತ್ತಳೆ","Orange"],["🍇","ದ್ರಾಕ್ಷಿ","Grapes"],["🍉","ಕಲ್ಲಂಗಡಿ","Watermelon"]]}
}},
Hindi:{
subtitle:"हिंदी सीखें — Learn Hindi through pictures and words.",
topics:{
Alphabet:{icon:"अ",items:[["🍎","अ","A"],["🥭","आ","Aa"],["🏠","इ","I"],["🦅","ई","Ee"],["🦉","उ","U"],["🧶","ऊ","Oo"]]},
Numbers:{icon:"१२३",items:[["1️⃣","एक","One"],["2️⃣","दो","Two"],["3️⃣","तीन","Three"],["4️⃣","चार","Four"],["5️⃣","पाँच","Five"],["6️⃣","छह","Six"]]},
Animals:{icon:"🐘",items:[["🐘","हाथी","Elephant"],["🐶","कुत्ता","Dog"],["🐱","बिल्ली","Cat"],["🐄","गाय","Cow"],["🐯","बाघ","Tiger"],["🦁","शेर","Lion"]]},
Fruits:{icon:"🥭",items:[["🥭","आम","Mango"],["🍎","सेब","Apple"],["🍌","केला","Banana"],["🍊","संतरा","Orange"],["🍇","अंगूर","Grapes"],["🍉","तरबूज","Watermelon"]]}
}},
English:{
subtitle:"Learn English through pictures, phonics and words.",
topics:{
Alphabet:{icon:"ABC",items:[["🍎","A","Apple"],["⚽","B","Ball"],["🐱","C","Cat"],["🐶","D","Dog"],["🥚","E","Egg"],["🐟","F","Fish"]]},
Numbers:{icon:"123",items:[["1️⃣","One","1"],["2️⃣","Two","2"],["3️⃣","Three","3"],["4️⃣","Four","4"],["5️⃣","Five","5"],["6️⃣","Six","6"]]},
Animals:{icon:"🐘",items:[["🐘","Elephant","Animal"],["🐶","Dog","Animal"],["🐱","Cat","Animal"],["🐄","Cow","Animal"],["🐯","Tiger","Animal"],["🦁","Lion","Animal"]]},
Fruits:{icon:"🍎",items:[["🥭","Mango","Fruit"],["🍎","Apple","Fruit"],["🍌","Banana","Fruit"],["🍊","Orange","Fruit"],["🍇","Grapes","Fruit"],["🍉","Watermelon","Fruit"]]}
}},
Tamil:{
subtitle:"தமிழ் கற்போம் — Learn Tamil through pictures and words.",
topics:{
Alphabet:{icon:"அ",items:[["🌟","அ","A"],["🥭","ஆ","Aa"],["🏠","இ","I"],["🦅","ஈ","Ee"],["🦉","உ","U"],["🧶","ஊ","Oo"]]},
Numbers:{icon:"௧௨௩",items:[["1️⃣","ஒன்று","One"],["2️⃣","இரண்டு","Two"],["3️⃣","மூன்று","Three"],["4️⃣","நான்கு","Four"],["5️⃣","ஐந்து","Five"],["6️⃣","ஆறு","Six"]]},
Animals:{icon:"🐘",items:[["🐘","யானை","Elephant"],["🐶","நாய்","Dog"],["🐱","பூனை","Cat"],["🐄","மாடு","Cow"],["🐯","புலி","Tiger"],["🦁","சிங்கம்","Lion"]]},
Fruits:{icon:"🥭",items:[["🥭","மாம்பழம்","Mango"],["🍎","ஆப்பிள்","Apple"],["🍌","வாழைப்பழம்","Banana"],["🍊","ஆரஞ்சு","Orange"],["🍇","திராட்சை","Grapes"],["🍉","தர்பூசணி","Watermelon"]]}
}},
Telugu:{
subtitle:"తెలుగు నేర్చుకోండి — Learn Telugu through pictures and words.",
topics:{
Alphabet:{icon:"అ",items:[["🌟","అ","A"],["🥭","ఆ","Aa"],["🏠","ఇ","I"],["🦅","ఈ","Ee"],["🦉","ఉ","U"],["🧶","ఊ","Oo"]]},
Numbers:{icon:"౧౨౩",items:[["1️⃣","ఒకటి","One"],["2️⃣","రెండు","Two"],["3️⃣","మూడు","Three"],["4️⃣","నాలుగు","Four"],["5️⃣","ఐదు","Five"],["6️⃣","ఆరు","Six"]]},
Animals:{icon:"🐘",items:[["🐘","ఏనుగు","Elephant"],["🐶","కుక్క","Dog"],["🐱","పిల్లి","Cat"],["🐄","ఆవు","Cow"],["🐯","పులి","Tiger"],["🦁","సింహం","Lion"]]},
Fruits:{icon:"🥭",items:[["🥭","మామిడి","Mango"],["🍎","ఆపిల్","Apple"],["🍌","అరటి","Banana"],["🍊","నారింజ","Orange"],["🍇","ద్రాక్ష","Grapes"],["🍉","పుచ్చకాయ","Watermelon"]]}
}}
};

let selectedLanguage=null;

function showToast(m){
  const t=document.getElementById("toast");
  t.textContent=m;
  t.classList.remove("hide");
  setTimeout(()=>t.classList.add("hide"),2200);
}

function render(filter="all"){
  const g=document.getElementById("grid");
  g.innerHTML="";
  languages.filter(l=>filter==="all"||l.status===filter).forEach(l=>{
    const c=document.createElement("article");
    c.className="language-card";
    c.innerHTML=`<div class="banner">${l.icon}</div><div class="content"><h3>${l.native}</h3><small>${l.name}</small><div><span class="status">${l.status==="available"?"Available now":"Coming soon"}</span></div><div class="progress"><span style="width:${l.progress}%;background:${l.color}"></span></div><button style="background:${l.color}">${l.status==="available"?"Start Learning":"Notify Me"}</button></div>`;
    c.querySelector("button").onclick=()=>l.status==="available"?openLanguage(l.name):showToast(`${l.name} is coming soon.`);
    g.appendChild(c);
  });
}

function openLanguage(name){
  selectedLanguage=name;
  const data=courseData[name];
  document.getElementById("selectedLanguageLabel").textContent=name+" Learning";
  document.getElementById("selectedLanguageTitle").textContent="Start Learning "+name;
  document.getElementById("selectedLanguageSubtitle").textContent=data.subtitle;
  document.getElementById("lessonDetail").classList.add("hidden");
  const topics=document.getElementById("lessonTopics");
  topics.classList.remove("hidden");
  topics.innerHTML="";
  Object.entries(data.topics).forEach(([title,topic])=>{
    const card=document.createElement("article");
    card.className="lesson-topic";
    card.innerHTML=`<span>${topic.icon}</span><h3>${title}</h3><p>${topic.items.length} learning cards</p>`;
    card.onclick=()=>openTopic(title);
    topics.appendChild(card);
  });
  document.getElementById("learning").classList.remove("hidden");
  document.getElementById("learning").scrollIntoView({behavior:"smooth"});
}

function openTopic(title){
  const topic=courseData[selectedLanguage].topics[title];
  document.getElementById("lessonTopics").classList.add("hidden");
  document.getElementById("lessonDetail").classList.remove("hidden");
  document.getElementById("lessonDetailTitle").textContent=title;
  const cards=document.getElementById("lessonCards");
  cards.innerHTML="";
  topic.items.forEach(([pic,word,meaning])=>{
    const card=document.createElement("article");
    card.className="lesson-card";
    card.innerHTML=`<span class="pic">${pic}</span><div class="word">${word}</div><div class="meaning">${meaning}</div><button class="listen-btn">🔊 Listen</button>`;
    card.querySelector("button").onclick=()=>speakWord(word,name);
    cards.appendChild(card);
  });
}

function speakWord(word){
  if(!("speechSynthesis" in window)){showToast("Speech is not supported in this browser.");return;}
  const lang={Kannada:"kn-IN",Hindi:"hi-IN",English:"en-IN",Tamil:"ta-IN",Telugu:"te-IN"}[selectedLanguage]||"en-IN";
  const u=new SpeechSynthesisUtterance(word);
  u.lang=lang;
  u.rate=.8;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

document.addEventListener("DOMContentLoaded",()=>{
  render();
  document.getElementById("year").textContent=new Date().getFullYear();
  document.getElementById("filter").onchange=e=>render(e.target.value);
  document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");
  document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));
  document.getElementById("closeLearning").onclick=()=>{
    document.getElementById("learning").classList.add("hidden");
    document.getElementById("languages").scrollIntoView({behavior:"smooth"});
  };
  document.getElementById("backToTopics").onclick=()=>{
    document.getElementById("lessonDetail").classList.add("hidden");
    document.getElementById("lessonTopics").classList.remove("hidden");
  };
});