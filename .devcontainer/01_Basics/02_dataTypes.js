"use strict"; //Treat all JS code as newer versions
//alert("hello") // There is a diffrent syntax to use alert in the IDE (node.js) only possible in Browser

// Readability is very important in Coding, It should be future proof

let name = "Affaan"
let age = 18
let isLoggedIn = false


// number => 2 to power of 53
//bigint
//string => ""
//boolean => true/false
//null => standalone Value, when we can declare the varible null or no answer for it (empty)
// undefined => It is when the variable is declared with no value
// symbol =>  unique



// object

console.log(typeof null); //object

//Primitive:
// 7 types: String, Number, boolean, null, undefined, Symbol, BigInt.
// JavaScript is a dynamically typed language.

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)

// Reference Type/ Non-Primitive
// Arrays, Objects, Functions. 

const heroes = ["ironman", "captainamerica", "doctorstrange"] //Arrays

let myObj = {
    name: "Affaan",
    age: 18,

}
//Object Eg

const myFunction = function(){
    console.log("Hello World");

} //Functions

console.log(typeof myFunction);



