// Immedietely Invoked Function Expression (IIFE)

(function chai(){
    // it is a named IIFE
    console.log(`DB CONNECTED`);
    
})(); //Method using IIFE
//Global scope causes the pollution due to which we use IIFE

// We have to put the semicolom(;) b/w two IIFE, it is better to do so

( (name) => {
    //Un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`hitesh`)// we have to write the argument here for the IIFE...

// JavaScript execution context
// It will always generate a Global Execution context...
// Function Execution context
// Eval Execution context, these are the three types of execution context..

// Two phases
//Memory creation phase and Execution phase

let val1 = 10
let val2 = 5
/*
  ==========================================
  GLOBAL EXECUTION CONTEXT (GEC)
  ==========================================
   DEFINITION:
  The default execution environment where JavaScript code runs.
  If code is not inside a function, it is inside the Global Execution Context.
 
   KEY CHARACTERISTICS:
  1. SINGLETON: There is only ONE Global Execution Context per program/script.
  2. CREATED FIRST: It is the very first thing created when the script loads.
  3. BOTTOM OF STACK: It always sits at the bottom of the Call Stack.
 
   COMPONENTS CREATED INSIDE GEC:
  1. Global Object: 
  - In Browsers = 'window' object
  - In Node.js = 'global' object
  2. 'this' Keyword:
  - In the GEC, 'this' refers to the Global Object (window).
  - (e.g., this === window // true)
 
   THE TWO PHASES OF GEC:
  1. Memory Creation Phase (Hoisting):
  - The engine parses the code.
  - Allocates memory for global variables (set to 'undefined').
  - Stores global function declarations in memory.
   2. Code Execution Phase:
  - The engine executes code line-by-line.
  - 'undefined' variables are assigned their actual values.
  - Function calls are executed (creating new contexts).
 */
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/*
  ==========================================
  THE CALL STACK (Execution Stack)
  ==========================================
   DEFINITION:
  The Call Stack is a mechanism the JS engine uses to keep track of its
  place in a script that calls multiple functions. It records:
  1. What function is currently being run.
  2. What functions are called from within that function.
 
  HOW IT WORKS (LIFO - Last In, First Out):
   1. GLOBAL EXECUTION CONTEXT (The Foundation)
  - When the script starts, the Global Execution Context is created 
  and PUSHED onto the bottom of the stack. It stays there until 
  the browser tab is closed.
 
  2. FUNCTION INVOCATION (Push)
  - When a function is called, a new Execution Context is created 
  and PUSHED on top of the stack.
  - The engine starts executing this function immediately.
 
  3. NESTED CALLS
  - If Function A calls Function B, Function B is PUSHED on top 
  of Function A. Function A pauses until B finishes.
 
  4. RETURN & COMPLETION (Pop)
  - When the current function finishes (returns), its context is 
  POPPED off the stack (removed from memory).
  - Control resumes where it left off in the context below it.
 
  VISUALIZATION:
  [ Function B ] <--- Active (LIFO: Last In, First Out)
  [ Function A ] <--- Paused
  [ Global Ex  ] <--- Always at the bottom
 */