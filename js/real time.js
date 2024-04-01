const textarea =document.getElementById("textarea");
const totalcounter=document.getElementById("span");
const Remaining=document.getElementById("span1");
textarea.addEventListener("keyup",()=>{
  updateCounter();
});
updateCounter();

  
function updateCounter(){
  totalcounter.innerText=textarea.value.length;
  Remaining.innerText=textarea.getAttribute("maxlength")-textarea.value.length;
}