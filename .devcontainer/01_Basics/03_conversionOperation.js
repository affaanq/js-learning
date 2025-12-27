let score = "33"
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score) //It gives the guarantee that the score is always in Number

/* Problem with the JS is that sometimes ValueInNumber will show NaN and will show the it is number though it is not... 
Always take care of the value to ValueInNumber.. */

//ValueInNumber Conversions
// "33" => 33
// "33abc" => NaN
// true => 1

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => True, 0 => False
// "" => False
//"Hitesh" => True


let SomeNumber = 33
let StringNumber = String(SomeNumber)
console.log(typeof(StringNumber))

// Operations

let value = 3
let negValue = -value
console.log(negValue);

console.log(2-2);
console.log(2*2);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

//let str3 = str1 + str2
//onsole.log(str3);
//console.log(1 + "2"); //
//console.log("1" + 2 + 2); //All covnersion be in str => 122
//console.log(1 + 2 + "2"); // The output be 32

//console.log(+true);
//console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // Value will be 101































