const Name = "Affaan"
const repoCount = "4"

console.log(Name + repoCount + " Value"); //Very outdated syntax
console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`); //More modern way of doing the same thing

const gameName = new String("AffaanHC")
console.log(gameName[0]);
console.log(gameName.__proto__); //


console.log(gameName.length); //Will print the length of the string
console.log(gameName.toUpperCase()); //Will convert the string to UpperCase
console.log(gameName.charAt(2)); // Will check the position of that index of that character
console.log(gameName.indexOf('t'));// Will check the position oof that specific character


const NewString = gameName.substring(0, 4)
console.log(NewString);

const anotherString = gameName.slice(-8, 4) //It alse Accepts negative values, only this accepts -ve value

const newStringOne = "   Affaan   "
console.log(newStringOne.trim()); //It will remove the extra spaces, only works on whitespaces and new line char

const url = "https://affaan.com/affaan%20qureshi"
url.replace('%20', '-') // We need two values, what to replace and what with to do it
console.log(url.replace('%20', '-'));
console.log(url.includes('affaan')); //Will check if the given word is incl in URL

const SplitMe = "Url-split-me-please"
console.log(SplitMe.split("-"));


// Go through the method of string ones on MDN Docs




