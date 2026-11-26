const burger=document.getElementById("burger"),menu=document.getElementById("menu");
if(burger&&menu){burger.addEventListener("click",()=>{const open=menu.classList.toggle("open");burger.setAttribute("aria-expanded",String(open));burger.textContent=open?"×":"☰";});menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");burger.setAttribute("aria-expanded","false");burger.textContent="☰";}));}
// Charge la photo du repère de Cannes (image encodée dans le fichier statique).
document.querySelectorAll("[data-repere-cannes]").forEach(img=>{fetch("repere-cannes.webp.b64").then(r=>r.text()).then(data=>{img.src="data:image/webp;base64,"+data.trim();}).catch(()=>{});});
