const myNumbers = [1, 2, 3, 4, 5, 6, 7]

myNumbers.map( (num) => num + 10) // It retuns value automatically
console.log(myNumbers);

// Chaining method

const newNum = myNumbers
                .map((num) => num * 10) 
                .map((num) => num + 1)
                .filter((num) => num >= 40) // Only the true statements be based from Filter()
                        
console.log(newNum)
// The value coming to the 2nd chain will be from the 1st chain
