// 4. OBJECT DESTRUCTURING & JSON
const course = { title: "JS in Hindi", price: 999, instructor: "Hitesh" };
const { instructor: mentor } = course; // Destructuring + Renaming
console.log(mentor);

// 5. THE ARROW FUNCTION & THIS
const myObj = {
    username: "Affaan",
    greet: function() {
        console.log(`${this.username}, hello!`); // Works
    },
    greetArrow: () => {
        console.log(`${this.username}, hello!`); // undefined (Arrow functions don't have 'this')
    }
};

// 6. MAP, FILTER, REDUCE (The Big Three)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter: Selects elements
const evens = numbers.filter((num) => num % 2 === 0);

// Map: Transforms elements
const doubled = numbers.map((num) => num * 2);

// Reduce: Accumulates values
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Chaining
const complexCalc = numbers
    .map((num) => num * 10)
    .filter((num) => num > 50)
    .reduce((acc, curr) => acc + curr, 0);

console.log({ evens, doubled, sum, complexCalc });