window.onload = function () {
  window.location.href = "https://priyanshu-k1.github.io/Portfolio_Priyanshu/";
};
document.addEventListener('DOMContentLoaded', function() {
    const sroller= document.getElementById("NAVBAR").offsetHeight; 
    console.log(sroller)
    document.documentElement.style.setProperty('--scroll-val',(sroller+'px'))
  });

function letsChat(){
    window.open("https://t.me/Priyanshuk_01",'_blank'); 
}


let arrayOfID=['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7', 'text8', 'text9', 'text10', 'text11', 'text12'];
var count=0;
var forward=true

function lightUP() {
    if(forward==true){
        var element=document.getElementById(arrayOfID[count]);
        element.style.color= "white";
        element.style.filter='drop-shadow(5px 0px 10px  #6554AF)';
        count++;
        if(count==12){
            forward=false
        }
        
    }
    else{
        var element=document.getElementById(arrayOfID[count-1]);
        element.style.color= "#212529";
        element.style.filter='drop-shadow(0px 0px 0px  #09101a)';
        count--;
        if(count==0){
            forward=true
        }

    } 
  setTimeout(lightUP, 300); 
}

window.onload = function() {
    lightUP();
}


