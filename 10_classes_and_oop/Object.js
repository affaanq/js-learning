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

