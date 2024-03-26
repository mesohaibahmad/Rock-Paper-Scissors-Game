
let moves= document.querySelectorAll(".moves-icon");
let winOutput = document.querySelector("#win");
let loseOutput = document.querySelector("#lose");
let drawOutput = document.querySelector("#draw");
let win =0;
let lose=0;
let draw=0;
let randomOutput= null;

function vsResult(){
    let output = Math.floor(Math.random()*3);
    let options =[ "rock", "paper","scissors"]
    let outputImg= document.querySelector("#vs-img");
    outputImg.classList.remove("roll");
    void outputImg.offsetWidth;
    outputImg.classList.add("roll");
    
    if(options[output]=="rock"){ outputImg.setAttribute("src", "rock.png")}
    else if(options[output]=="paper"){outputImg.setAttribute("src", "paper.png")}
    else{outputImg.setAttribute("src", "scissors.png")}
    randomOutput= options[output];
}
function winResult(){
    
    winOutput.innerText = ++win;
    winOutput.classList.add("blink");
}
function loseResult(){
    loseOutput.innerText = ++lose;
    loseOutput.classList.add("blink");
}
function drawResult(){
    drawOutput.innerText = ++draw;
    drawOutput.classList.add("blink");
}
function removeBlink(){
    winOutput.classList.remove("blink");
    loseOutput.classList.remove("blink");
    drawOutput.classList.remove("blink");
}

let result=(evt)=>{

    moves.forEach((move)=>{
        move.classList.remove("border"); 
    })
   
removeBlink();
evt.target.classList.add("border");
vsResult();

if(evt.target.id=='rock'&& randomOutput=="scissors" || evt.target.id=='paper'&& randomOutput=="rock"  || evt.target.id=='scissors'&& randomOutput=="paper"  )
{ winResult();}
else if(evt.target.id==randomOutput )
{  drawResult(); }
else{
    loseResult();
}
  
}

moves.forEach((move)=>{
    move.addEventListener("click",result);
    
})


    document.querySelector("#reset").addEventListener("click",()=>{
            win=0; lose=0; draw=0;
            document.querySelector("#win").innerText = win;
            document.querySelector("#lose").innerText = lose;
            document.querySelector("#draw").innerText = draw;
            moves.forEach((move)=>{
                move.addEventListener("click",result);
            move.classList.remove("border"); })
    });