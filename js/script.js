const score = document.querySelector(".score");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", playGame);
}

function playGame(e){
    let computerChoise = Math.random();
    if(computerChoise < 0.34) {
        computerChoise = "Rock";
    }else if(computerChoise <= 0.67){
        computerChoise = "Paper";   
    }else{
        computerChoise = "Scissors";  
    }
    alert(computerChoise);
}