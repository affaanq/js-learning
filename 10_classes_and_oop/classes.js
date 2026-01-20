// =======================================================================
// PART 1: ES6 CLASS SYNTAX
// Concept: Defining a blueprint for creating objects (users).
// =======================================================================

class User {
    // The constructor is called immediately when 'new User(...)' is executed.
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // METHOD: Encrypting the password (simulated)
    // No need for the 'function' keyword inside a class.
    encryptPassword(){
        // returns the password appended with "abc"
        return `${this.password}abc`;
    }

    // METHOD: Capitalizing the username
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

// USAGE:
const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword()); // Output: 123abc
console.log(chai.changeUsername());  // Output: CHAI


// =======================================================================
// PART 2: BEHIND THE SCENES (How it worked before ES6)
// Concept: Classes are just "Syntactic Sugar" for this old prototype pattern.
// =======================================================================

function UserOld(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

// Injecting the method into the prototype manually
UserOld.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

UserOld.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new UserOld("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword()); // Output: 123abc
console.log(tea.changeUsername());  // Output: TEA


// =======================================================================
// PART 3: INHERITANCE
// Concept: Creating a 'Teacher' class that inherits from 'User'.
// =======================================================================

class UserParent {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// 'extends' links the prototypes of Teacher and UserParent
class Teacher extends UserParent {
    constructor(username, email, password){
        // 'super' refers to the Parent Class (UserParent).
        // It calls the parent's constructor and passes the 'username' to it.
        // MUST be called before using 'this'.
        super(username); 
        
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const classroom = new Teacher("chai", "chai@teacher.com", "123");

// Accessing method from Child Class
classroom.addCourse(); // Output: A new course was added by chai

// Accessing method from Parent Class (Inherited)
classroom.logMe();     // Output: USERNAME is chai

// INHERITANCE CHECKS
const masalaChai = new UserParent("masalaChai");

// classroom is an instance of Teacher? YES.
console.log(classroom instanceof Teacher); // true

// classroom is an instance of UserParent? YES (because it inherits from it).
console.log(classroom instanceof UserParent); // true


// =======================================================================
// PART 4: STATIC METHODS
// Concept: Methods that belong to the Class, not the Object.
// =======================================================================

class UserStatic {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // 'static' prevents this method from being accessed by instances (objects).
    // It can only be accessed by the Class itself.
    static createId(){
        return `123`;
    }
}

const hitesh = new UserStatic("hitesh");

// Standard method call works fine
// hitesh.logMe(); 

// STATIC METHOD CALL
// console.log(hitesh.createId()); 
// ERROR: hitesh.createId is not a function. 
// Why? Because 'createId' exists on 'UserStatic', NOT on the 'hitesh' object.

// CORRECT WAY to call a static method:
console.log(UserStatic.createId()); // Output: 123


// INHERITANCE WITH STATIC
class TeacherStatic extends UserStatic {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

// Static methods are inherited by child classes!
console.log(TeacherStatic.createId()); // Output: 123