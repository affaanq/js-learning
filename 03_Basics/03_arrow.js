const user = {
    username: "Affaan",
    price: "20",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`); // this is used for current context
        console.log(this);
        
        
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage() // The context is changed so it will print with Sam

console.log(this); // will print an emply {}, there is nothing in the empty object, but in the browser it will give a window, in console an empty {}.

// function cup(){
//     let username = "Affaan"
//     console.log(this); // Will print multiple values 

//     }

// cup()
// Arrow method
const chai = () => {

    let username = "Affaan"
    console.log(this);
    
}
chai()

const addTwo = (num1, num2) => {
    return num1 + num2
} // basic arrow function syntax


const addThree = (num1, num2) => num1 + num2 //Implicit return
const add = (username) => ({username: "affaan"}) //Implicit return

 // basic arrow function syntax

addTwo(2,3)