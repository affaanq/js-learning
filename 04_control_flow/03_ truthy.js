const userEmail = "aff@gmail.com"

if (userEmail) {
    console.log("Got user Email");
    
} else {
    console.log("Do not have user Email");
    
}

// falsy values
/*

false, 0, -0, bigInt 0n, "", null, undefined, NaN.

*/

// truthy values
/*

"0", 'false', " ", [], {}, function(){},

*/

if (userEmail.length === 0) {
    console.log("Array is empty");
    
} // This is how we check it if an array is empty or not

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}// This is how we check it if an object is empty or not

// Nullish Coalescing Operator (??): Null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // it will output 10
val1 = undefined ?? 15 // will output 15
val1 = null ?? 10 ?? 15 // it will look for the first value in after null to assign

console.log(val1); // it will output 5

// It is used when sometimes you have two values which can be possibly assigned

// Terniary Operator 

condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");


