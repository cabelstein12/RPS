const randomSel = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;


const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    // getComputerChoice();
    computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
})

paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
})

scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
})

function getComputerChoice() {
    return randomSel[Math.floor(Math.random() * randomSel.length)];
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
    
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') return 'You Win';
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

let playerScore = 0;
let pcScore = 0;

// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Enter your choice (rock, paper, or scissors)").toLowerCase();
//         if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
//             alert('Invalid input. Please choose rock, paper, or scissors.');
//             continue;
//         }
        
//         const computerSelection = getComputerChoice();
//         const result = playRound(playerSelection, computerSelection);
        
//         if (result === 'You Win') {
//             playerScore += 1;
//         } else if (result === 'You Lose') {
//             pcScore += 1;
//         }
        
//         alert(`Round ${i + 1}: ${result}\nPlayer Score: ${playerScore}\nComputer Score: ${pcScore}`);
//     }
    
//     if (playerScore === 5) {
//         return "You've Won";
//     } else if (pcScore === 5) {
//         return "You've Lost";
//     } else {
//         return "Game Over";
//     }
// }

//alert(game());
