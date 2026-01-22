// =======================================================================
// PART 3: PROTOTYPAL INHERITANCE (Linking Objects)
// Concept: How to make one object access properties of another (Inheritance).
// =======================================================================

const User = {
    name: "chai",
    email: "chai@google.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // OLD SYNTAX (Legacy): Directly setting the prototype inside the object definition.
    // This tells JS: "If you don't find a property here, look inside TeachingSupport".
    __proto__: TeachingSupport 
};

// OLD SYNTAX (Legacy): Accessing __proto__ outside the object.
// This links 'Teacher' to 'User'. Teacher can now access User.name.
Teacher.__proto__ = User;

// MODERN SYNTAX: Object.setPrototypeOf()
// This is the clean, standard way to do inheritance today.
// Syntax: Object.setPrototypeOf(ChildObject, ParentObject);
Object.setPrototypeOf(TeachingSupport, Teacher);

// Verification:
// TASupport inherits from TeachingSupport.
console.log(TASupport.isAvailable); // Output: false (Found in TeachingSupport)


// =======================================================================
// PART 4: POLYFILLS (Injecting Custom Methods into Built-in Objects)
// Concept: Adding a method to ALL Strings in JavaScript.
// =======================================================================

let anotherUsername = "ChaiAurCode     ";

// Goal: We want a method .trueLength() that trims spaces and gives the length.
// Standard way: anotherUsername.trim().length (Too verbose)
// Our way: anotherUsername.trueLength()

// We access the global String object's prototype.
// WARNING: Modifying built-in prototypes is generally discouraged in production 
// unless you are writing a polyfill, as it can cause conflicts.
String.prototype.trueLength = function() {
    // 'this' inside a prototype method refers to the data calling the function.
    // In this case, 'this' IS the string "ChaiAurCode     "
    
    console.log(`${this}`); // Prints the string itself
    console.log(`True length is: ${this.trim().length}`); // The logic
};

// Now, ANY string in our code can use this method.
anotherUsername.trueLength(); // Output: True length is: 11

"hitesh".trueLength(); // Output: True length is: 6
"iceTea".trueLength(); // Output: True length is: 6



let myHeros = ["thor", "spiderman"]

let heroPower = {

    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {

        console.log(`Spidy power is ${this.spiderman}`);

        
    }
}

Object.prototype.Affaan = function() {

    console.log(`Affaan is present in all the object`);
    
}