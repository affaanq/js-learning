// first we have to generate a random values

const random = parseInt(Math.random() * 100 + 1)

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

// it will validate the guess of the user if it is correct or not b/w one to 100
function validateGuess(guess){

}

// it will check the value and print the result to the web, it will check if the value is or not equal to the random value
function checkGuess (guess){


}


// it will interact with DOM, and put the msg if the user wins or loose
function displayMessage(message){


}

// will updat the array, guess remaining
function displayGuess(guess) {


}

function endGame(){

    
}

function newGame(){


}
