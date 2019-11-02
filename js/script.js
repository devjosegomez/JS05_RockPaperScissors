const score = document.querySelector(".score");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", playGame);
}

function playGame(e){
    let playerChoise = e.target.innerHTML;
    let computerChoise = Math.random();
    if(computerChoise < 0.34) {
        computerChoise = "Rock";
    }else if(computerChoise <= 0.67){
        computerChoise = "Paper";   
    }else{
        computerChoise = "Scissors";  
    }
    console.log(playerChoise, computerChoise);
    let winner = checkWinner(playerChoise, computerChoise);
    console.log(winner);
}

function checkWinner(plCh, coCh){
    //Draw
    if(plCh === coCh){
       return "Draw - tie";
    }
    
    //Rock vs Paper
    if(plCh === "Rock"){
        if(coCh === "Paper"){
            return "Computer";
        }else{
            return "Player";
        }
    }
    
    //Paper vs Scissors
    if(plCh === "Paper"){
        if(coCh === "Scissors"){
            return "Computer";
        }else{
            return "Player";
        }
    }
    
    //Scissors vs Rock
    if(plCh === "Scissors"){
        if(coCh === "Rock"){
            return "Computer";
        }else{
            return "Player";
        }
    }
}