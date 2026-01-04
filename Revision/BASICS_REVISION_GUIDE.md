JavaScript Revision Guide (Videos 1-30)

📁 1. The Basics (Variables & Data Types)

Variables (let, const, var)

Data Types

Type Conversion & Comparison

🧵 2. Strings, Numbers & Dates

Strings

Numbers & Maths

Dates

📦 3. Arrays & Objects

Arrays

Objects

⚙️ 4. Functions & Scope

Functions

Scopes & Hoisting

Arrow Functions & this

IIFE (Immediately Invoked Function Expressions)

🚦 5. Control Flow & Iterations

Truthy/Falsy

Nullish Coalescing Operator (??)

High-Order Array Loops

🧠 6. JS Execution Context

📁 1. The Basics (Variables & Data Types)

Variables (let, const, var)

const: Used for values that must remain constant.

let: Block-scoped variable. This is the modern standard for variables that need re-assignment.

var: Avoid using this. It is functionally scoped and subject to hoisting issues, often leading to variables leaking out of blocks.

Data Types

Primitive (Stored in Stack Memory):

String, Number, Boolean, null, undefined, Symbol, BigInt.

Memory Note: When you copy a primitive, you create a real copy of the value. Changing the new variable doesn't affect the original.

Non-Primitive (Stored in Heap Memory):

Arrays, Objects, Functions.

Memory Note: When you copy a non-primitive, you copy the reference (address). Modifying the copy will modify the original data in the heap.

Type Conversion & Comparison

Number("33") $\rightarrow$ 33

Number("33abc") $\rightarrow$ NaN (Type is still Number, but value is "Not a Number").

Strict Check (===): Compares both the value and the data type. Always prefer this over ==.

🧵 2. Strings, Numbers & Dates

Strings

Modern JavaScript uses Template Literals (Backticks): `Hello ${name}`.

.trim(): Removes leading and trailing whitespace.

.slice(start, end): Extracts a section of a string. Supports negative indices (counts from the end).

.replace(search, replace): Swaps the first occurrence of a character or string.

Numbers & Maths

.toFixed(2): Rounds to a specific number of decimal places (returns a string).

Math.random(): Returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

Random Range Formula: Math.floor(Math.random() * (max - min + 1)) + min

Dates

Date is a built-in Object.

Month Indexing: Months are zero-indexed (0 = January, 11 = December).

Date.now(): Returns the number of milliseconds elapsed since the Unix Epoch.

📦 3. Arrays & Objects

Arrays

Shallow Copy: Most array methods create shallow copies, meaning they share the same reference for nested objects.

Key Methods: push, pop, shift (removes first), unshift (adds to first).

Slice vs. Splice:

slice(1, 3): Returns a section. Does not change the original array.

splice(1, 3): Removes/replaces elements. Does modify the original array.

Merging: Use the Spread Operator [...arr1, ...arr2] for clean merging.

Objects

Literals vs. Singleton: const obj = {} (Literal) vs. const obj = new Object() (Singleton).

Dynamic Keys: Use square brackets for symbols or dynamic keys: {[mySym]: "value"}.

Destructuring: Cleanly extract values: const {instructor: teacher} = course.

Utility: Object.keys(myObj) returns an array of keys—essential for checking if an object is empty (.length === 0).

⚙️ 4. Functions & Scope

Functions

Parameters: Variables defined in the function signature.

Arguments: Actual values passed to the function during invocation.

Rest Operator (...num): Collects multiple arguments into a single array.

Scopes & Hoisting

Global Scope: Variables available throughout the entire script.

Block Scope: Variables (let/const) restricted to the {} where they are defined.

Hoisting:

Functions declared as function name() {} are moved to the top of the scope (can be called before definition).

Functions assigned to variables (const name = function(){}) are not hoisted.

Arrow Functions & this

In a regular function, this depends on how the function was called (current context).

In arrow functions, this is lexically scoped; it inherits this from the parent scope and does not have its own.

IIFE (Immediately Invoked Function Expressions)

Used to execute code immediately and keep the global namespace clean from temporary variables.

(function() {
    // Named IIFE: Good for debugging
    console.log("DB CONNECTED");
})();

((name) => {
    // Unnamed IIFE with arguments
    console.log(`HELLO ${name}`);
})('Affaan');


🚦 5. Control Flow & Iterations

Truthy/Falsy

Falsy Values: false, 0, -0, "", null, undefined, NaN, 0n.

Truthy Values: Everything else, including "0", 'false', " ", [], {}, function(){}.

Nullish Coalescing Operator (??)

A logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined.
let val = null ?? 10; // Result is 10

High-Order Array Loops

forEach: Executes a function for each element. Returns undefined.

filter: Creates a new array with elements that pass the test.

map: Creates a new array with the results of calling a function on every element.

reduce: Executes a "reducer" function on each element, resulting in a single output value.

Accumulator: The running total.

Current Value: The element being processed.

🧠 6. JS Execution Context

Global Execution Context: The default environment. this is set to the Global Object (Window in browsers).

Memory Creation Phase: Memory is allocated for variables (set to undefined) and functions.

Execution Phase: The code is run line-by-line. Variables are assigned actual values, and function calls create new Functional Execution Contexts.

Call Stack: Follows LIFO (Last In, First Out). The Global Context stays at the bottom until the program terminates.