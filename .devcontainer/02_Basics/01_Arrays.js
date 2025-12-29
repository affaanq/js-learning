const myArr = [0, 1, 2 , 4, 5] //Arrays are always written in squared bracs
//It can contain string, datatypes, numbers and all of it

console.log(myArr[0]); // Arrays make shallow copies which means it is a non-primitive
const myHeroes = ["superman", "ironman"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods:

myArr.push(6)
myArr.push(7) //Add values to the array
console.log(myArr);

myArr.pop() // Removes the last value in the Array
myArr.unshift(9) // It will insert the given value to the Array in the first position
myArr.shift() //It will remove the starting value of the Array

console.log(myArr.includes(9)); // It is T/F answer from the JS, id the given thing is present or not
console.log(myArr.indexOf(9)); //It will give the index number of the given value

const newAray = myArr.join()

console.log(myArr);
console.log(typeof(newAray)); // It converted the Array to the String

// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //Return a copy of the section of an array
// It does not manipulates the orignall array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2); //It will includes the the last domain in the range and it manipulates the orignal array aswell..







