// ## Project2: Guess the Word

// ### Game play

// - In this exercise, you will play a game called `Guess the Random Word`.
// - The game will select a random word from a predefined array and shuffle its letters.
// - Your task is to unscramble the letters and guess the word correctly within three attempts.

// ### Here's how to play:

// 1. The game will start by selecting a random word from a predefined array.
// 2. The letters of the word will be shuffled, and the scrambled word will be displayed on the screen.
// 3. You will have three attempts to guess the correct word.
// 4. To make a guess, type your answer into the input box and hit the submit button.
// 5. If your answer is correct, you win the game. If not, you will get a message indicating that your guess is incorrect, and you will have two more attempts to guess the word correctly.
// 6. The game will provide a hint after the first incorrect guess to help you guess the word more accurately.
// 7. If you use all three attempts and still cannot guess the correct word, the game will reveal the answer and end the game.
// 8. At the end of the game, you will have the option to play again with a new random word.

const readlineSync = require('readline-sync');
const words = ['cat', 'dog', 'elephent', 'giraffe', 'bird', 'fish', 'tiger', 'snake']

function playGame(words) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const letters = randomWord.split('');
    const shuffledWordArray = [];
    function shuffeldWordfn() {

        /////////////////////////////// This solution is not working if you have word with multiple same letters.
        // do {
        //     const randomNumber = Math.floor(Math.random() * letters.length);
        //     const randomLetter = letters[randomNumber];
        //     if (shuffledWordArray.includes(randomLetter)) {

        //     } else {
        //         shuffledWordArray.push(randomLetter);
        //     }

        // } while (shuffledWordArray.length !== randomWord.length)
        // return shuffledWordArray;


        ///// This is the correct solution
        do {
            for (let i = 0; i < randomWord.length; i++) {
                const randomNumber = Math.floor(Math.random() * letters.length);
                const randomLetter = letters.splice(randomNumber, 1);
                shuffledWordArray.push(randomLetter);
            }
        }
        while (shuffledWordArray.join('') == randomWord)
        return shuffledWordArray;
    }
    let attempt = 3;
    let isWon = false
    const shuffledWord = shuffeldWordfn();
    console.log(`Shuffled word: ${shuffledWord.join('')}`);
    do {
        const inputByPlayer = readlineSync.question('Guess the Random Word: ');
        attempt--;
        if (inputByPlayer === randomWord) {
            console.log(`You won`)
            isWon = true;
            attempt = 0;

        }
        else {
            console.log(`You guess is incorect and you have ${attempt} attemp${attempt === 1 || 0 ? `t` : `s`} left`);
        }
        if (attempt === 2) {
            console.log(`Hint: the first letter of the word you need to guess is ${randomWord[0]}`);
        }

    } while (attempt !== 0);

    if (!isWon) console.log(`The correct word was ${randomWord}`);
    const playAgain = readlineSync.question('Do you want to play again? ').toLowerCase();
    if (playAgain === 'y' || playAgain === 'yes') {
        playGame(words);
    }
}
playGame(words);
