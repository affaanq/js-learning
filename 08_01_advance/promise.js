// The Promise object represents the eventual completion (or failure)
//  of an asynchronous operation and its resulting value.

/*

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

*/

const promiseOne = new Promise(function(resolve, reject) {

    // Do an Async task
    // DB Calls, cryptography, network
    setTimeout(function(){

        console.log('Async task is complete');
        resolve()
    }, 13000)
}) // this is how we call the promise

promiseOne.then(function() { // we have to connect .then  and resolve.....
    console.log("Promise consumed"); // it will never come before line 20...
    
})

new Promise(function(resolve, reject){

    setTimeout(function() {

        console.log("Async task 2");
        resolve();
        
    }, 11000)
}).then(function(){

    console.log("Async 2 resolved");
    
})

const promiseThird = new Promise(function(resolve, reject) {

    setTimeout(function(){

        resolve({username: "Affaan", email:"hello@example.com"}) //  we can pass data in the resolve....
    }, 11000)
})

promiseThird.then(function(user){ // we can get the resolve() by calling an argument..
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {

    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({username: "affaan", email: "affaan@example.com"})
        }

        else {
            reject("ERROR: Your request is rejected")
        }


        
    }, 11100)

})

    promiseFour
    .then(function(user) {
    console.log(user);
    return user.username //  chaining is very important here

})
.then((username) => { // it will put the value in the top to to the given chain so it will be user.username.. and we wil be able to access the username via it!

    console.log(username);
    
})
.catch(function(error) {

    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected"))

// Another approach to do the same thing...
//Async Await
const promiseFive = new Promise((resolve, reject) => {

    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({username: "js", email: "affaan@example.com"})
        }

        else {
            reject("ERROR: JS request is rejected")
        }


        
    }, 1000)

});

// issues with catch handling
async function consumePromiseFive (){

    try {
    const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error); // this method handles the error nicely    
    }
    
}   
// problem with async await is that you cannot directly handle error...

consumePromiseFive()

async function getAllUsers() {
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() // we need to await it as it takes time to convert to json
        console.log(data);

    } catch (error) {

        console.log(error);
        
    }
    
    
}
getAllUsers()

// How to use .then and .catch for the same function....

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {

    return response.json
})
.then (function (data) {

    console.log(data)
    
})
.catch (function (error) {

    console.log(error);
    
})

