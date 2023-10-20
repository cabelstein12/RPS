const randomSel = ['rock', 'paper', 'scissors'];

let playerSelection;
let computerSelection;


const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

const prevGame = document.querySelector('.previous-game');

// const computerScore = document.querySelector('.computer-score');
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function updateComputerScore(){
    computerScore++;
    document.getElementById("computerScore").textContent = computerScore;
}

function resetScores(){
    document.getElementById('computerScore').textContent = 0
    document.getElementById('playerScore').textContent = 0
    playerScore = 0;
    computerScore= 0;
    roundsPlayed = 0;
}

function updatePlayerScore(){
    playerScore++;
    document.getElementById("playerScore").textContent = playerScore;
}

function handleButtonClick(choice){
    playerSelection = choice;
    computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    prevGame.textContent = `Last Match: ${result}... Computer Chose: ${computerSelection}`;


    if (result === 'You Win') {
        updatePlayerScore();
    } else if (result === 'You Lose') {
        updateComputerScore();
    }

    roundsPlayed++;

    if(roundsPlayed === 5){
        if (playerScore > computerScore){
            prevGame.textContent = "You've Won best of 5!"
            
        } else if (playerScore < computerScore){
            prevGame.textContent = "You Lost the best of 5..."
        } else {
            prevGame.textContent = "You tied!"
        }
        resetScores();
    }
    
    
}

rockBtn.addEventListener('click', () => 
    handleButtonClick('rock')
)

paperBtn.addEventListener('click', () => {
    handleButtonClick('paper')
})

scissorsBtn.addEventListener('click', () => {
    handleButtonClick('scissors')
})

function getComputerChoice() {
    return randomSel[Math.floor(Math.random() * randomSel.length)];
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
    
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors')  return 'You Win';
            else if (computerSelection === 'paper') return 'You Lose';
            else return 'Tie!';
            break;
        case 'paper':
            if (computerSelection === 'rock') return 'You Win';
            else if (computerSelection === 'scissors') return 'You Lose';
            else return 'Tie!';
            break;
        case 'scissors':
            if (computerSelection === 'paper') return 'You Win';
            else if (computerSelection === 'rock') return 'You Lose';
            else return 'Tie!';
            break;
        default:
            return 'Invalid input. Please choose rock, paper, or scissors.';
    }
}


// function game(result) {
//     playRound(playerSelection, computerSelection);
//     for (let i = 0; i < 5; i++) {
        
        
//         const computerSelection = getComputerChoice();
//         result = playRound(playerSelection, computerSelection);
        
//         if (result === 'You Win') {
//             playerScore += 1;
//         } else if (result === 'You Lose') {
//             pcScore += 1;
//         }
        
//         // alert(`Round ${i + 1}: ${result}\nPlayer Score: ${playerScore}\nComputer Score: ${pcScore}`);
//     }
    
//     if (playerScore === 5) {
//         return "You've Won";
//     } else if (pcScore === 5) {
//         return "You've Lost";
//     } else {
//         return "Game Over";
//     }
// }


