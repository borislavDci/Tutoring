const readlineSync = require('readline-sync');

function computerPlay() {
    const moves = ['rock', 'paper', 'scissors']
    const picker = moves[Math.floor(Math.random() * moves.length)]
    return picker;
}

function playRound(playerMove, computerMove) {

    const playerMoveToLowerCase = playerMove.toLowerCase();

    if (playerMoveToLowerCase === computerMove) {
        return `It's a tie!`
    } else if (
        (playerMoveToLowerCase === 'rock' && computerMove === 'scissors') ||
        (playerMoveToLowerCase === 'paper' && computerMove === 'rock') ||
        (playerMoveToLowerCase === 'scissors' && computerMove === 'paper')) {
        return `You win ${playerMoveToLowerCase} beats ${computerMove}`
    }
    else {
        return `You lose! ${computerMove} beats ${playerMoveToLowerCase}`
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = readlineSync.question(`Hello, this is rock, paper and scissors game!   
    How many rounds do you want to play?
     `)
    while (rounds % 2 === 0) {
        rounds = readlineSync.question(`Please pick an odd number! `)
    }

    const halfRounds = rounds / 2;
    for (let i = 1; i <= rounds; i++) {
        const playerSelection = readlineSync.question(`Round ${i}: Choose rock, paper, or scissors `)
        const computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection)
        console.log(result);

        if (result.includes(`win`)) {
            playerScore++
        } else if (result.includes(`lose`)) {
            computerScore++
        } else if (result.includes(`tie`)) {
            i--;
        }
        if (playerScore > halfRounds || computerScore > halfRounds) {
            if (playerScore > computerScore) {
                console.log(`Contrags! You win, Your score is: ${playerScore} Computer score is: ${computerScore}`);
                break;
            }
            if (playerScore < computerScore) {
                console.log(`Sorry, you lose Computer score is: ${computerScore} Your score is: ${playerScore}`)
                break;
            }
        }

    }
}
game();