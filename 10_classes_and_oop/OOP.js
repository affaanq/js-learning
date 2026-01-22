// Object literal: 
// it is just the collection of property and method
const user = { 
    username: 'Affaan',
    loginCount: 4,
    signedIn: true,


    getUserDetails: function(){

        //console.log("Got user detail from the Database:");
        console.log(`Username: ${this.username}`); // If we just ask for  "username" it print undefined as it is not defined in  the scope of this function
        // "this" is very Important..

        console.log(this); // it will print the whole current context.. or everything in the memory for the given context...
        
        
    }
}

console.log(user.getUserDetails());
console.log(this); // in the global context it will print empty paranthesis, cos untillll now nothing is in log for global...but in the web there will be so much thing logged..

// Constructor Function in OOPS

const promiseOne = new Promise() // the new keyword that we use is a contructor function it helps in using it multiple times in the code. it is used in making new context

function user1(username, loginCount, isLoggedIn) {

    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // Over here this is used to diffrentite betweeen the variable and the value..

    return this // not imoportant to write return this.. it is always implicitly done by JS
}

const userOne = new user1("Affaan", 12, true)
const userTwo = new user1("Hello", 21, false) // this will overwrite the value of userOne if we dont use new keyword...That is the reason we use the constructor functon of "New"
console.log(userOne);

// When we call a new keyword:
/*
Step 1: It creates a new empty Object or we can say a new Context is been created
Step 2: The constructor function is been called due to new keyword and it packs and give the arg
Step 3: It injects all the daat to the object
Step 4: It will give the value in the console to us!!

*/