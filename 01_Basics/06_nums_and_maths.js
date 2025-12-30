const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); //It will convert the Number to the type of String.
console.log(balance.toFixed(2)); // It will give decimal values or precision values..

const OtherNumber = 23.8966
console.log(OtherNumber.toPrecision(3)); //It will return a string, it will output 23.9. will give the precision to the given value


const hundreds = 1000000
console.log(hundreds.toLocaleString()); // it will ease the readability of the Numbers

// Maths

console.log(Math);
console.log(Math.abs(-4)); // Modulus of -4
console.log(Math.round(4.3)); // Rounding off
console.log(Math.ceil(4.2)); // Top value, will output 5
console.log(Math.floor(4.9)); // Floor value, will output 4
console.log(Math.min(4, 9, 8, 7)); // Min value in the Array
console.log(Math.max(4.9)); //Max value in the Array

console.log(Math.random()); // Will output value b/w 0-1
console.log(Math.random()*10); // Will output value b/w 0-10
console.log((Math.random()*10) + 1); // Will output value b/w 0-10 but not 0
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // TO get the value b/w 10-20