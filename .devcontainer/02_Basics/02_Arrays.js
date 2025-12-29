const marvel_heroes = ["ironman", "thor", "spiderman"]
const dc = ["superman", "batman", "flash"]

marvel_heroes.push(dc) // It will put the whole dc value in an Arrays as an single element

console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc)
console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc]
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,  7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //It will concatinate all the sub arrays into one array
console.log(real_another_array);

console.log(Array.isArray("Affaan")) // Will check if it is Array or not T/F answer
console.log(Array.from("Affaan")) //Will convert the value to an Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Will put the values in a defined Array

