let index = 0

while (index <= 10) {
    console.log("Value of Index is " + index);
    index = index + 2

}

let Array = ["flash", "batman", "superman"]

let arr = 0
while (arr < Array.length) {
    console.log(`Value is ${Array[arr]}`);
    arr += 1
}

// Do while loop

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
    
} while (score <= 10)

    // When the score is greater than 10 it will print score is 11 one time, since it checks the while condition
    // afterwards

// It is very common to use loop on Array, there are specialised loops for arrays

//for of loop

const arra = [1, 2, 3, 4, 5]
// object here means is to whome we have to put the loop
for (const num of arra) {
    console.log(num);
    
} // No declaration or requirement is required


// It can also be used in strings
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet);
}

// Maps in JS

const map = new Map()
map.set('UK', 'United Kingdom')
map.set('UK', 'United Kingdom')
map.set('Fr', 'France')

console.log(map); // It will print something like object not completely similar
// it only take unique values no two similar

for (const [key, value] of map) {// detructored array
    console.log(key, ":-", value); 
    
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {// detructored array
    console.log(key, ":-", value); 


} //My object is not iterable by this method so it will throw an error...

