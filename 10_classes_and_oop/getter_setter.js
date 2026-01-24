class User {

    constructor(username, password) {

        this.username = username;
        this.password = password; // setting of the value..
    }

    get username() {

        return this._username.toUpperCase()
    }

    set username(value) {

        this._username = value
    }

    get password(){

        return this._password // defining a getter, if defining a getter you also  have to define a setter..
    }

    set password(value) {

        this._password = value.toUpperCase // we have to call a new variable with the underscore on the password...Now the contructor will not set the value for the password as we have modified it
    }

}

const Affaan = new User("Affaan", "1234")
console.log(Affaan.username);
