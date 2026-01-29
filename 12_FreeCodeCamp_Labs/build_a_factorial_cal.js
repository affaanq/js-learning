let num = 3

function factorialCalculator(num) {

  let i = 1;
  let store = 1;

  while (i <= num) {

    store *= i;

    i++;
  }

  return store

}

let factorial = factorialCalculator(num)
let resultMsg = `Factorial of ${num} is ${factorial}`

console.log(resultMsg)
