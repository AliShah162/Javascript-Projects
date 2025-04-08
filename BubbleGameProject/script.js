var rstbtn=document.querySelector("#restart-btn");
var timer=60; //For runningtimer() function
var score=0; //For incresescore() function
var hitrn=0;
var sttimer;
function increasescore(){
    score+=10
    document.querySelector("#scoreval").innerHTML=score
}
function hitvalue(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn;
}
function makingbubble(){
var clutter="";
for(i=1; i<=160; i++){
    var rand=Math.floor(Math.random()*10)
    clutter+=`<div id="bubble">${rand}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runningtimer(){
    sttimer=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML=timer+"s";
        }
        else{
            clearInterval(sttimer)
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over!</h1>\n\n <h1>You Scored ${score}</h1>`;    
            document.querySelector("#pbtm").appendChild(rstbtn)        
            rstbtn.style.display="block";
        }
       
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(details){
   var clickednumber=(Number(details.target.textContent));
    if(clickednumber===hitrn){
    increasescore()
    hitvalue()
    makingbubble()
    }
    else {
        score -= 10; 
        document.querySelector("#scoreval").innerHTML = score;
    }
});

hitvalue()
runningtimer()
makingbubble()


// RESTART_BUTTON
rstbtn.addEventListener("click",function(){
    clearInterval(sttimer)
timer=60;
score=0;
hitrn=0;
document.querySelector("#pbtm").innerHTML="";
//  New UI
document.querySelector("#timerval").innerHTML=score+"s";
document.querySelector("#hitval").textContent = 0;
document.querySelector("#scoreval").innerHTML=score;
//  RESTART GAME FUNCTIOns
hitvalue();
runningtimer();
makingbubble();

document.querySelector("#restart-btn").style.display = "none";
// rstbtn.style.display="none"
});