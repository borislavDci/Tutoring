const readlineSync = require("readline-sync");
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.totalScore = 0;
    }
}
function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    const picker = moves[Math.floor(Math.random() * moves.length)];
    return picker;
}

function playRound(playerMove, computerMove) {
    const playerMoveToLowerCase = playerMove.toLowerCase();

    if (playerMoveToLowerCase === computerMove) {
        return `It's a tie! The round be replayed!`;
    } else if (
        (playerMoveToLowerCase === "rock" && computerMove === "scissors") ||
        (playerMoveToLowerCase === "paper" && computerMove === "rock") ||
        (playerMoveToLowerCase === "scissors" && computerMove === "paper")
    ) {
        return `You win ${playerMoveToLowerCase} beats ${computerMove}`;
    } else {
        return `You lose! ${computerMove} beats ${playerMoveToLowerCase}`;
    }
}
function setup() {
    const players = [];
    for (let i = 0; i < 2; i++) {
        const playerName = readlineSync.question(`Player ${i + 1} name: `);
        players[i] = new Player(playerName);
    }
    game(players);
}

function game(players) {
    const playerOne = players[0];
    const playerTwo = players[1];
    let rounds = readlineSync.question(`How many rounds do you want to play?
`);
    while (rounds % 2 === 0) {
        rounds = readlineSync.question(`Please pick an odd number! `);
    }

    const halfRounds = rounds / 2;
    for (let i = 1; i <= rounds; i++) {
        const playerSelection = readlineSync.question(
            `Round ${i}: Choose rock, paper, or scissors `
        );
        const computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes(`win`)) {
            playerOne.score++;
        } else if (result.includes(`lose`)) {
            playerTwo.score++;
        } else if (result.includes(`tie`)) {
            i--;
        }
        if (playerOne.score > halfRounds || playerTwo.score > halfRounds) {
            if (playerOne.score > playerTwo.score) {
                console.log(
                    `Contrags! You win, ${playerOne.name} score is: ${playerOne.score} ${playerTwo.name} score is: ${playerTwo.score}`
                );
                playerOne.totalScore++;
                playerOne.score = 0;
                playerTwo.score = 0;
                console.log(
                    `${playerOne.name} won ${playerOne.totalScore} ${playerOne.totalScore === 1 ? "game" : "games"
                    }`
                );
                const newGame = readlineSync.question(
                    `Do you want to play another game?`
                );
                if (newGame.toLowerCase() === `y` || newGame.toLowerCase() === `yes`) {
                    game(players);
                }
                console.log(
                    `Total score is ${playerOne.name} ${playerOne.totalScore} : ${playerTwo.totalScore} ${playerTwo.name}`
                );
                break;
            }
            if (playerOne.score < playerTwo.score) {
                console.log(
                    `Contrags! You win, ${playerTwo.name} score is: ${playerTwo.score} ${playerOne.name} score is: ${playerOne.score}`
                );
                playerTwo.totalScore++;
                playerOne.score = 0;
                playerTwo.score = 0;
                console.log(
                    `${playerTwo.name} won ${playerTwo.totalScore} ${playerTwo.totalScore === 1 ? "game" : "games"
                    }`
                );
                const newGame = readlineSync.question(
                    `Do you want to play another game?`
                );
                if (newGame.toLowerCase() === `y` || newGame.toLowerCase() === `yes`) {
                    game(players);
                }
                console.log(
                    `Total score is ${playerOne.name} ${playerOne.totalScore} : ${playerTwo.totalScore} ${playerTwo.name}`
                );
                break;
            }
        }
    }
}
setup();
