var  hitrn =0;
var timer=20;
var score=0;
function makebubble(){
    var booble="";
for( var i=1; i<=112; i++ ) {
     hitrn= Math.floor(Math.random()*10);
    booble +=`<div class="bubble">${hitrn}</div>`;
}
 document.querySelector("#pbtm").innerHTML=booble; 
}


function increasesore()
{
    score += 1;
    document.querySelector("#scoreval").textContent=score;

}
function runtimer(){
   var timerint= setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector( "#timerval" ).textContent= timer;
 }
else {
    clearInterval(timerint);
    // document.querySelector("#pbtm").innerHTML=`<h1>${score}</h1>`;
    document.querySelector("#pbtm").innerHTML=`<h1>${score}</h1><h1> Game over <h1>`;
}},1000)
}
function getnewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn){
        increasesore();
        makebubble();
        getnewHit();
    }
 });
 
 makebubble();
runtimer();
getnewHit();
