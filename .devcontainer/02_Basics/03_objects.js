// Singleton: If we make it from a constructor, when we do not declare it like a literal
//Object.create
//Object Literals

const mySym = Symbol("key1")



const JsUser = {
    name: "Affaan",
    "full name": "Affaan Qureshi",// Not be able to access the value from JsUser.email
    [mySym]: "mykey1" , // Will not be used as a symbol, need to use in squared bracs
    age: 18,
    location: "Glasgow",
    email: "Affaan@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]); // Not a symbol type if not typed wih []

JsUser.email = "qureshi@gmail.com"
// Object.freeze(JsUser) // Will not allow any changs to the given object

JsUser.greeting = function(){

    console.log("Hello JS user");
    
}
console.log(JsUser.greeting); // It will print undefined
console.log(JsUser.greeting()); // Now it will print the value as a function

JsUser.greetingTwo = function(){

    console.log(`Hello JS user, ${this.name}`); // "this" gives the refernce of the current object
    
}
console.log(JsUser.greetingTwo());

// Mostly we use "." in object but we will also use "[]" for the same
