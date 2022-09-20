var section=document.querySelector("form");
var click=0;
function padd(){
    section.style.marginTop="50%"
    click++;
    if(click%2==0){
        section.style.marginTop="10%"
    }
}
