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
  const topicsSection=document.getElementById("lessonTopics");
  const detailSection=document.getElementById("lessonDetail");
  topicsSection.classList.add("hidden");
  detailSection.classList.remove("hidden");
  document.getElementById("lessonDetailTitle").textContent=title;
  const cards=document.getElementById("lessonCards");
  cards.innerHTML="";
  topic.items.forEach(([pic,word,meaning])=>{
    const card=document.createElement("article");
    card.className="lesson-card";
    card.innerHTML=`<span class="pic">${pic}</span><div class="word">${word}</div><div class="meaning">${meaning}</div><button class="listen-btn">🔊 Listen</button>`;
    card.querySelector("button").onclick=()=>speakWord(word);
    cards.appendChild(card);
  });
  requestAnimationFrame(()=>detailSection.scrollIntoView({behavior:"smooth",block:"start"}));
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


const storyData={
  elephant:{
    title:"The Kind Elephant",
    text:"A kind elephant lived in a forest. One day, a little bird's nest fell from a tree. The elephant gently lifted the nest and placed it back on the branch. The bird thanked the elephant. Moral: Kindness makes us truly strong."
  },
  bird:{
    title:"The Clever Bird",
    text:"A thirsty bird found a pot with very little water. It dropped small stones into the pot until the water rose. The bird drank the water happily. Moral: Patience and clever thinking can solve difficult problems."
  },
  seed:{
    title:"The Little Seed",
    text:"A tiny seed rested under the soil. Rain came and the sun shone. Slowly, the seed grew into a healthy plant. Moral: Small beginnings can grow into something wonderful."
  }
};

let activeStory=null;
let memoryFirst=null;
let memoryBusy=false;
let currentGameLanguage="English";

function openStory(key){
  activeStory=storyData[key];
  document.getElementById("storyTitle").textContent=activeStory.title;
  document.getElementById("storyText").textContent=activeStory.text;
  const reader=document.getElementById("storyReader");
  reader.classList.remove("hidden");
  requestAnimationFrame(()=>reader.scrollIntoView({behavior:"smooth",block:"start"}));
}

function speakStory(){
  if(!activeStory) return;
  if(!("speechSynthesis" in window)){
    showToast("Speech is not supported in this browser.");
    return;
  }
  const utterance=new SpeechSynthesisUtterance(activeStory.text);
  utterance.lang="en-IN";
  utterance.rate=.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function gameItems(){
  const language=selectedLanguage && courseData[selectedLanguage] ? selectedLanguage : "English";
  currentGameLanguage=language;
  const topics=courseData[language].topics;
  return [...topics.Animals.items,...topics.Fruits.items];
}

function openGame(type){
  const panel=document.getElementById("gamePanel");
  panel.classList.remove("hidden");
  document.getElementById("gameContent").innerHTML="";

  if(type==="memory") startMemoryGame();
  if(type==="quiz") startPictureQuiz();
  if(type==="builder") startWordBuilder();
  if(type==="balloon") startBalloonGame();

  requestAnimationFrame(()=>panel.scrollIntoView({behavior:"smooth",block:"start"}));
}

function startMemoryGame(){
  document.getElementById("gameTitle").textContent="Memory Match";
  document.getElementById("gameInstruction").textContent=`Match pictures with ${currentGameLanguage} words.`;
  const pairs=shuffleItems(gameItems()).slice(0,6);
  const cards=shuffleItems(pairs.flatMap((item,index)=>[
    {id:index,value:item[0]},
    {id:index,value:item[1]}
  ]));
  const board=document.createElement("div");
  board.className="memory-board";
  memoryFirst=null;
  memoryBusy=false;

  cards.forEach(data=>{
    const tile=document.createElement("button");
    tile.className="memory-tile";
    tile.textContent="?";
    tile.dataset.id=data.id;
    tile.dataset.value=data.value;
    tile.onclick=()=>flipMemoryTile(tile);
    board.appendChild(tile);
  });
  document.getElementById("gameContent").appendChild(board);
}

function flipMemoryTile(tile){
  if(memoryBusy || tile.classList.contains("matched") || tile===memoryFirst) return;
  tile.classList.add("revealed");
  tile.textContent=tile.dataset.value;

  if(!memoryFirst){
    memoryFirst=tile;
    return;
  }

  if(memoryFirst.dataset.id===tile.dataset.id){
    memoryFirst.classList.add("matched");
    tile.classList.add("matched");
    memoryFirst=null;
    if([...document.querySelectorAll(".memory-tile")].every(t=>t.classList.contains("matched"))){
      showToast("🏆 Memory game completed!");
    }
  }else{
    memoryBusy=true;
    setTimeout(()=>{
      memoryFirst.classList.remove("revealed");
      tile.classList.remove("revealed");
      memoryFirst.textContent="?";
      tile.textContent="?";
      memoryFirst=null;
      memoryBusy=false;
    },700);
  }
}

function startPictureQuiz(){
  document.getElementById("gameTitle").textContent="Picture Quiz";
  document.getElementById("gameInstruction").textContent=`Choose the correct ${currentGameLanguage} word.`;
  const items=shuffleItems(gameItems());
  const question=items[0];
  const answers=shuffleItems([question[1],...items.slice(1,4).map(i=>i[1])]);

  const wrapper=document.createElement("div");
  wrapper.className="quiz-game";
  wrapper.innerHTML=`<div class="picture">${question[0]}</div><div class="quiz-answers"></div>`;
  const answerBox=wrapper.querySelector(".quiz-answers");

  answers.forEach(answer=>{
    const button=document.createElement("button");
    button.className="quiz-answer";
    button.textContent=answer;
    button.onclick=()=>{
      [...answerBox.children].forEach(b=>b.disabled=true);
      if(answer===question[1]){
        button.classList.add("correct");
        showToast("Correct! ⭐");
      }else{
        button.classList.add("wrong");
        [...answerBox.children].forEach(b=>{
          if(b.textContent===question[1]) b.classList.add("correct");
        });
      }
    };
    answerBox.appendChild(button);
  });

  document.getElementById("gameContent").appendChild(wrapper);
}

function startWordBuilder(){
  document.getElementById("gameTitle").textContent="Word Builder";
  document.getElementById("gameInstruction").textContent="Tap the letters in the correct order.";
  const item=shuffleItems(gameItems()).find(i=>String(i[1]).length<=10) || gameItems()[0];
  const target=String(item[1]);
  let answer="";

  const wrapper=document.createElement("div");
  wrapper.className="builder-box";
  wrapper.innerHTML=`<div class="picture">${item[0]}</div><div id="builderAnswer" class="builder-answer"></div><div class="builder-letters"></div><button id="clearBuilder" class="outline">Clear</button>`;
  const lettersBox=wrapper.querySelector(".builder-letters");
  const answerBox=wrapper.querySelector("#builderAnswer");

  shuffleItems([...target]).forEach(letter=>{
    const chip=document.createElement("button");
    chip.className="letter-chip";
    chip.textContent=letter;
    chip.onclick=()=>{
      answer+=letter;
      answerBox.textContent=answer;
      chip.disabled=true;
      if(answer===target) showToast("Excellent! Word completed ⭐");
      else if(!target.startsWith(answer)) showToast("Try again.");
    };
    lettersBox.appendChild(chip);
  });

  wrapper.querySelector("#clearBuilder").onclick=()=>startWordBuilder();
  document.getElementById("gameContent").appendChild(wrapper);
}

function startBalloonGame(){
  document.getElementById("gameTitle").textContent="Balloon Pop";
  const items=shuffleItems(gameItems()).slice(0,5);
  const target=items[0];
  document.getElementById("gameInstruction").textContent=`Pop the balloon that says “${target[1]}”.`;

  const area=document.createElement("div");
  area.className="balloon-area";
  const colours=["#f44e9a","#6c35e8","#2e7eea","#ff8a16","#29a447"];

  items.forEach((item,index)=>{
    const balloon=document.createElement("button");
    balloon.className="balloon";
    balloon.textContent=item[1];
    balloon.style.background=colours[index%colours.length];
    balloon.style.left=`${8+(index%3)*30}%`;
    balloon.style.top=`${20+(index%2)*130}px`;
    balloon.onclick=()=>{
      if(item[1]===target[1]){
        balloon.style.display="none";
        showToast("Pop! Correct answer ⭐");
      }else{
        showToast("Try another balloon.");
      }
    };
    area.appendChild(balloon);
  });

  document.getElementById("gameContent").appendChild(area);
}

function shuffleItems(items){
  return [...items].sort(()=>Math.random()-.5);
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
    const detailSection=document.getElementById("lessonDetail");
    const topicsSection=document.getElementById("lessonTopics");
    detailSection.classList.add("hidden");
    topicsSection.classList.remove("hidden");
    requestAnimationFrame(()=>topicsSection.scrollIntoView({behavior:"smooth",block:"start"}));
  };

  document.querySelectorAll(".story-btn").forEach(button=>{
    button.onclick=()=>openStory(button.dataset.story);
  });
  document.getElementById("closeStory").onclick=()=>{
    if("speechSynthesis" in window) window.speechSynthesis.cancel();
    document.getElementById("storyReader").classList.add("hidden");
  };
  document.getElementById("readStoryAloud").onclick=speakStory;

  document.querySelectorAll(".game-btn").forEach(button=>{
    button.onclick=()=>openGame(button.dataset.game);
  });
  document.getElementById("closeGame").onclick=()=>{
    document.getElementById("gamePanel").classList.add("hidden");
    document.getElementById("games").scrollIntoView({behavior:"smooth",block:"start"});
  };
});