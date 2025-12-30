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


