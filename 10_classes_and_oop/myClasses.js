// ES6

class User {

    constructor(username, email, password) {

        this.username = username;
        this.email = email;
        this.password = password
    } 

    encryptPassword() {
        return `${this.password}abc`

    }

    usernameLower() {

        return `${this.username.toUpperCase()}`
    }


}

const Affaan = new User("Affaan", "affaan@gmail.com", "1234")
console.log(Affaan.encryptPassword());
console.log(Affaan.usernameLower());


//behind the scene

// Diffrent way of doing the same thing as the class in JS behave like an Object
function User (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
}

User.prototype.encryptPassword = function() {

    return `${this.password}abc`
}

const New = new User("new", "new@gmail.com", "123456")