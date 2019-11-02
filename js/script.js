const score = document.querySelector(".score");
const message = document.querySelector(".message");
const message2 = document.querySelector(".message2");
const buttons = document.querySelectorAll("button");
let finalScore = [0,0,0]; //Index 0 Player's score, Index 1 Computer's score, Index 2 Draw

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
    if(winner === "Player"){
        winner += " wins!";
        finalScore[0]++;
        message.innerHTML = `<h2>${winner}</h2>`;
    }else if(winner === "Computer"){
        winner += " wins!";
        finalScore[1]++;
        message.innerHTML = `<h2>${winner}</h2>`;
    }else if(winner === "Draw"){
        finalScore[2]++;
        message.innerHTML = `<h2>${winner}</h2>`;
    }

    score.innerHTML = `<h1>Player: ${finalScore[0]} vs Computer: ${finalScore[1]} [Draws: ${finalScore[2]}]</h1>`;
    
    message2.innerHTML = `<h4>You: (${playerChoise}) vs PC: (${computerChoise})</h4>`;
}

function checkWinner(plCh, coCh){
    //Draw
    if(plCh === coCh){
       return "Draw";
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