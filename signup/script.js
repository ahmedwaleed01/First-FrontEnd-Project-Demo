var submit=document.querySelector("input[type='submit']");


submit.addEventListener('click',(event)=>{
   event.preventDefault();
   var inputs=document.querySelectorAll("input:not(input[type='submit'])");
   var email_format=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   var password_format=/[0-9a-zA-Z]{4,6}/
   var checkerror_pass=false;
   var pass_value;
   var errors=false;
   inputs.forEach(input => {
    if(!input.value.length){
        input.nextElementSibling.textContent=input.name+' is required'
        input.style.border = "1px solid red";
        errors=true;
     }
     else {
        input.nextElementSibling.textContent="";
        input.style.border = "none";
        if(input.name=='Email' && !email_format.test(input.value)){
            input.nextElementSibling.textContent=input.name+" should required . and  @";
            errors=true;
        }
        if((input.name=='Password' || input.name=='Re-enter Password')&& !password_format.test(input.value)){
            input.nextElementSibling.textContent=input.name+" should required 4 and 6 letters";
            checkerror_pass=true;
            errors=true;
        }
        if(input.name=='Password' &&  checkerror_pass==false){
            pass_value=input.value;
        }
        if(checkerror_pass==false && input.name=='Re-enter Password' && pass_value!=input.value){
            input.nextElementSibling.textContent="The two passwords are not identical";
            errors=true;
        }
     }
    })
  
     if(errors==false){
         window.location.href="file:///D:/tasks/task%2011/login/login.html";
    }
});

var section=document.querySelector("form");
var click=0;
function padd(){
    section.style.marginTop="50%"
    click++;
    if(click%2==0){
        section.style.marginTop="10%"
    }
}