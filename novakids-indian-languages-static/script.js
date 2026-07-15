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
function showToast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.remove("hide");setTimeout(()=>t.classList.add("hide"),2200)}
function render(filter="all"){const g=document.getElementById("grid");g.innerHTML="";languages.filter(l=>filter==="all"||l.status===filter).forEach(l=>{const c=document.createElement("article");c.className="language-card";c.innerHTML=`<div class="banner">${l.icon}</div><div class="content"><h3>${l.native}</h3><small>${l.name}</small><div><span class="status">${l.status==="available"?"Available now":"Coming soon"}</span></div><div class="progress"><span style="width:${l.progress}%;background:${l.color}"></span></div><button style="background:${l.color}">${l.status==="available"?"Start Learning":"Notify Me"}</button></div>`;c.querySelector("button").onclick=()=>showToast(l.status==="available"?`${l.name} selected.`:`${l.name} is coming soon.`);g.appendChild(c)})}
document.addEventListener("DOMContentLoaded",()=>{render();document.getElementById("year").textContent=new Date().getFullYear();document.getElementById("filter").onchange=e=>render(e.target.value);document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"))});