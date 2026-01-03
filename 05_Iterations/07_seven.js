// Array.reduce in JS

 const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval)  { // It is a callback function 
//     console.log(`acc: ${acc}, currval: ${currval}`);
    
//     return acc + currval 
// }, 0) // This is the initial value of the acc
// // Afteer one cycle of reduce the next acc value is the output its previous myTotal, and it will go on...



// console.log(myTotal); //  It will print the last output of the myTotal loop
 

const myTotal = myNums.reduce( (acc, currval) => {
    console.log(`${acc}, ${currval}`);
    
    return currval + acc

}, 0)

console.log(myTotal); // It is completely similar to the function method, just diffrent ways of doing the same thing

const shoppingCart = [
        {itemName: "js course",
        price: 2999},
        {itemName: "devops course",
        price: 5999},
        {itemName: "py course",
        price: 21999},
        {itemName: "data science course",
        price: 3999},

    
]

const Answer = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(Answer);

