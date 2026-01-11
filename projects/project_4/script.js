// first we have to generate a random values

let random = parseInt(Math.random() * 100 + 1)

// now we are taking the values from the html file to the JS to access

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHigh");
const remaining = document.querySelector(".lastResult");
const guessSlot = document.querySelector(".guesses");


// we will now create a paragragh
const p = document.createElement('p')

// it will put all the remaining guess left for the user, it will start from one all the way
//  to 10 and then it will not allow the user to type in more
let numGuess = 1

// we will put all the prev guess to one array
let prevGuess = [];

// it will check are you eligible to play the game
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function(e){
        e.preventDefault();

        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

// it will validate the guess of the user if it is correct or not b/w one to 100

// this is a very important and very common method in the backend
function validateGuess(guess){

    if (isNaN(guess)) {
        alert("Please give a valid number")
    } else if (guess < 1) {
        alert("Please give a number greater than 1")

    } else if (guess > 100) {
        alert("Please give a value less than 100")

    } else {

        prevGuess.push(guess) // to put the previous guess value to the array  
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${random}`)
            endGame(); // this will stop the user from further inputting, if the number of guesses are over
    }   else {
        displayGuess(guess)
        checkGuess(guess)
        
    }

    }


}

// it will check the value and print the result to the web, it will check if the value is or not equal to the random value
function checkGuess (guess){

    if (guess === random) {
        displayMessage(`You have won the game!`)
    } else if (guess > random) {
        displayMessage(`Your guessed number is TOO low!`)
        
    }  else if (guess < random) {
        displayMessage(`Your guessed number is TOO high!`)
    }
}


// it will interact with DOM, and put the msg if the user wins or loose
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`


}

// will update the array, guess remaining... it is a clean up method
function displayGuess(guess) {
    userInput.value = ""; // it cleans the input after each input by the user
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
    
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 class= newGame>Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false
    newGame();

    
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function(e){

        random = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;

    })



}
