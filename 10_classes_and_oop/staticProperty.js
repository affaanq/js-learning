const { useRef } = require("react");

class User {

    constructor (username) {

        this.username = username;

    }

    logMe () {

        console.log(`Username: ${this.username}`);
        
    }

    static createId () {

        return `123`

    } // static stops the access of the createID value.. everyone should not get the access to make a new ID

}

const hitesh = new User(`Hitesh`)
console.lop(hitesh.createId()) // it will throw an error..

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
        
    }
}

const Iphone = new Teacher("Iphone", "email@email.com")
console.log(Iphone.createId()) // Will not give tbe access to the parent static as well..
Iphone.logMe();
