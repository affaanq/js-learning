// PART 1: FUNCTIONS ARE OBJECTS
// Concept: In JS, a function is technically an object. It can have properties.
// // Function is also a object and function is a function as well.. if we want we can make it  behave like an object...
// =======================================================================

function multiplyBy5(num) {
    return num * 5;
}

// 1. We can assign properties to a function just like an object.
//    This proves that functions are objects in JavaScript.
multiplyBy5.power = 2;

// 2. Standard function execution
console.log(multiplyBy5(5)); // Output: 25

// 3. Accessing the property we injected into the function object
console.log(multiplyBy5.power); // Output: 2

// 4. Checking the prototype property of the function.
//    Every function has a 'prototype' property by default (used when invoked with 'new').
console.log(multiplyBy5.prototype); // Output: {} (The default empty prototype object)

// INJECTING METHODS INTO THE PROTOTYPE
// Why do this? If we put this function INSIDE createUser, every user would have 
// their own copy of the function (high memory usage). 
// By putting it on the 'prototype', all users SHARE one copy of the function.
createUser.prototype.increment = function() {
    // 'this' refers to the specific object calling the method (chai or tea).
    this.score++; 
};

createUser.prototype.printMe = function() {
    console.log(`Price is ${this.score}`);
};

// USAGE OF 'NEW'
// 'new' performs 4 steps: Creates object -> Links prototype -> Binds 'this' -> Returns object.

const chai = new createUser("chai", 25);
// Result: 'chai' is an object {username: "chai", score: 25} with access to printMe() via prototype.

const tea = createUser("tea", 250);
// PROBLEM: We forgot 'new'. 'createUser' runs as a regular function.
// 'this' inside the function refers to the Global object (or undefined in strict mode).
// 'tea' variable becomes 'undefined' because the function doesn't return anything explicitly.

chai.printMe(); // Output: Price is 25

// tea.printMe(); 
// CRASH: This throws an error because 'tea' is undefined. The prototype link was never created.