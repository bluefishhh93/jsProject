const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById('result');

const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        playRound(button.id, computerPlay());
    });
});

function computerPlay(){
    const choices = ['rock', 'paper','scissors'];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "It's a tie!";
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors")||
        (playerSelection === "paper" && computerSelection === "rock")||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerScore++;
        resultEl.textContent = "You win! "+playerSelection+ " beats " + computerSelection;
        playerScoreEl.textContent = playerScore;

    }else{
        computerScore++;
        resultEl.textContent = "You lose! "+computerSelection+ " beats " + playerSelection;
        computerScoreEl.textContent = computerScore;

    }
}