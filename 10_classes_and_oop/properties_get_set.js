// Function based getter or setter, older syntax of using it


function User (email, password) {

    this.email = email;
    this.password = password;

    Object.defineProperty(this, "email", {

        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        },
    })

        Object.defineProperty(this, "password", {

        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value
        },
    })
}


const Affaan = new User("affaan@gmai.com", "1233445")
console.log(Affaan.email)

// Same way diffrent approach with the object..


const User = {

    _email: "Affaan@gmail.com",
    _password: "1234",


    get email() {
        return this._email.toUpperCase()

    },

    set email (value) {
        this._email = value

    }

}

const Mick = Object.create(User) // this is the speciality of this older syntax of getter and setter..
console.log(Mick.email);


