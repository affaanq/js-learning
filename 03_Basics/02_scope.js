// {} Curly braces is called the scope...
let a = 300 // Global scope

if (true) {

    let a = 10 // block scope
    const b = 20
    // var c = 30

}
// console.log(a);
// console.log(b);
// console.log(c); it should be inside the scope and does not print anything but it prints 30, that is the reason to avoid var

function one() {
    const username = "Affaan";

    function two() {
        const website = "instagram";
        console.log(username);
    }
    // console.log(website); this will throw an error
    // Call 'two' HERE, inside the scope where it actually exists
    two(); // two can access all the variables of one but not vice versa
}

one(); // This now runs 'one', which internally runs 'two'

if (true) {
    const username = "affaan"

    if (username == "affaan") {
        const website = " youtube"
        console.log(username + website); // will run
    }
    console.log(website); // It is not possible, will throw an error
       
}
console.log(username); // Not able to access as the scope is not there


function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5) // declaring the function before defining is not possible in this one (hoisting)