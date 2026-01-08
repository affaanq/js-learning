/**
 * Summary of all practical code snippets and logic.
 */

// 1. MEMORY MANAGEMENT
// Stack (Primitive) vs Heap (Non-Primitive)
let name1 = "Affaan";
let name2 = name1; // Copy of value
name2 = "Qureshi"; // name1 remains "Affaan"

let user1 = { email: "affaan@google.com" };
let user2 = user1; // Copy of reference
user2.email = "hc@google.com"; // user1.email ALSO changes to "hc@google.com"

// 2. MODERN STRINGS
const repo = 50;
console.log(`Repo count is ${repo}`); // Template Literals

// 3. ARRAY MANIPULATION (The essentials)
const arr = [1, 2, 3, 4, 5];
const newArr = [...arr, 6, 7]; // Spread operator
const flattened = [1, [2, 3], [4, [5]]].flat(Infinity); // Flatting nested arrays