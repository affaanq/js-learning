const questions = [
  {
    category: "Geography 🌍",
    question: "Which country is home to the Great Barrier Reef?",
    choices: ["Australia", "Brazil", "South Africa"],
    answer: "Australia"
  },
  {
    category: "Science 🧪",
    question: "What is the chemical symbol for Gold?",
    choices: ["Ag", "Au", "Gd"],
    answer: "Au"
  },
  {
    category: "Technology 💻",
    question: "What does 'URL' stand for?",
    choices: ["Uniform Resource Locator", "Universal Radio Line", "User Remote Link"],
    answer: "Uniform Resource Locator"
  },
  {
    category: "History 📜",
    question: "In which year did the Titanic sink?",
    choices: ["1905", "1912", "1920"],
    answer: "1912"
  },
  {
    category: "Coding ⌨️",
    question: "Which of these is used to declare a constant in JavaScript?",
    choices: ["let", "var", "const"],
    answer: "const"
  }
];

function getRandomQuestion(choices) {
  // 1. Math.random() must be CALLED as a function.
  // 2. Multiply by choices.length so it works for any array size.
  // 3. Math.floor() rounds down to the nearest whole index.
  const randomIndex = Math.floor(Math.random() * choices.length);
  
  return choices[randomIndex];
}

function getRandomComputerChoice(arr) {
  const randomAnswer = Math.floor(Math.random() * arr.length);
  return arr[randomAnswer];

}

function getResults (getRandomQuestion, getRandomComputerChoice) {
  if (getRandomQuestion.answer === getRandomComputerChoice) {
    return `The computer's choice is correct!`

  } else {

    return `The computer's choice is wrong. The correct answer is: ${getRandomQuestion.answer}`
  }


}


