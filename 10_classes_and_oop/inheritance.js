class User {

    constructor(username, email, password){
        this.username = username;

    }


    logValue () {

        console.log(`${this.username}`);
        
    }
}

class Teacher extends User {

    constructor (username, email, password) {
        super(username)
        this.email = email;
        this.password = password;  // direct access to the user class.. and it will put the this.user = username directly we dont need to write it..
    }

    addCourser() {

        console.log(`A new course was added by ${this.username}`);



        
    }

} // Extends basically gives all the info in the User class to the Teacher class.. Inheritance....

const Affaan = new Teacher("Affaan", "Affaan@gmail.com", "1234")
Affaan.addCourser()

const Mike = new User("Mike")
Mike.logValue()

console.log(Mike === Affaan); // It will output false as it has a instance to it which is the diffrence;
console.log(Affaan instanceof User ); // Yes it is the instance of User....

