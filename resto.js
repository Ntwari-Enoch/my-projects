const menu=document.getElementById("menu");
const closelinks=document.getElementById("close");
const navlinks=document.getElementById("navlinks");

menu.addEventListener("click",()=>{
navlinks.style.display="block";
navlinks.style.transform="translateX(0%)";
});
closelinks.addEventListener("click",()=>{
navlinks.style.transform="translateX(105%)";
})
