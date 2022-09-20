var btn=document.getElementById("btnn")
window.onscroll = function() {scrollFunction(),navbarfixed()};

function scrollFunction() {
  if(document.documentElement.scrollTop > 500 || document.documentElement.scrollTop>500){
   btn.style.display="block";
  }else{
    btn.style.display="none";
  }
}

function topScreen(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var nav=document.getElementById("navv")
var ind=document.querySelectorAll(".ims")

function navbarfixed(){
    if(document.documentElement.scrollTop > 500 ||document.documentElement.scrollTop>500){
        nav.style.position="fixed";
        nav.style.backgroundColor='#222429';
      
        if(document.documentElement.scrollTop>900){
          for (let i of ind){
            i.setAttribute("style","z-index:-1");
          }
        }else{
          for (let i of ind){
            i.removeAttribute("style","z-index:-1");
          }
        }
       }else{
        nav.style.position="absolute";
        nav.style.backgroundColor="transparent";
       }
}

var dark=document.querySelector('.dark-mode');
var light=document.querySelector('.light-mode');

var link=document.querySelector("#modes");

dark.addEventListener('click',()=>{
  link.setAttribute("href","dark-mode.css");
  localStorage.setItem("darkmode","dark-mode.css");
})

if (localStorage.getItem('darkmode')){
    link.setAttribute("href","dark-mode.css");
}
light.addEventListener('click',()=>{
    link.setAttribute("href","style.css");
    localStorage.removeItem('darkmode');
})

var showbtn=document.getElementById("showbtn");
var shmore=document.getElementsByClassName('showmore');
var lessbtn=document.getElementById('showbtnn');

function showmore(){

      for(let i=0;i< shmore.length ;i++){
        shmore[i].style.display="block";
      }

    showbtn.style.display='none'; 
    lessbtn.style.display='block';
    lessbtn.style.marginLeft='45%';
}

function showless(){
    for(let i=0;i< shmore.length ;i++){
        shmore[i].style.display="none";
      }

    showbtn.style.display='block'; 
    lessbtn.style.display='none';
    showbtn.style.marginLeft='45%';
}

var textarea=document.querySelector("footer div form textarea");
var username=document.querySelector("footer div form input[type='text']");
let emailinput=document.querySelector("footer div form input[type='email']");

textarea.addEventListener("click",(event)=>{
  event.preventDefault();
  if((!username.value.length || !emailinput.value.length)){
    textarea.disabled=true;
    textarea.style.cursor="text";
  }else{
    textarea.disabled=false;
  }
  textarea.disabled=false;
})