// function sayMyName() {

//     console.log("A");
//     console.log("F");
//     console.log("F");
//     console.log("A");
//     console.log("A");
//     console.log("N");
    
// }

// sayMyName() // This is the execution of the function
// sayMyName // This is the reference of the function, it will not execute

// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4) // It will assume it as a number, if we give a "a" in the function it will output "3a" which is a problem..
// addTwoNumbers(3, null) // We dont want this

// //Number1 and number2 are called the parameters of the functions
// // Whereas value in console.log(number1 + number2) are called arguments of the functions

// const result = addTwoNumbers(4 + 4) // We can put the value of the result in a const, but it will not store it and be undefined
    


// Way when it actually stores the value in the result variable

//Method 1
function addThreeNumber(number3, number4) {

    let result1 = number3 + number4
    return result1 // After the return value, it will not execute any code
}

const result2 = addThreeNumber(5, 6)
console.log("Result ", result2);

//Method 2
function addNoNumber(num1, num2) {

    return num1 + num2
} 

function loginUserMessage(username = "Sam") {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Affaan")) // No result will be printed if console.log is not used
// !username is equal to username === undefined, we can use that as well it is more professional

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400));

// Rest operator will but all the argument in a bundle and give the output "...num1"

const user = {
    username: "Affaan",
    price: "344",
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// We can use anyobject if we have multiple object and want to run it for individual objects
handleObject(user)
handleObject({
    username: "Affaan",
    price: 222
}) // We can also put direct object in the function calling

const myNewgetArray = [200, 400, 600]

function returnSecondValue(getArray){

    return getArray[1]
    
}
console.log(returnSecondValue(myNewgetArray));
