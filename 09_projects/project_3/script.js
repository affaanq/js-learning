const clock = document.querySelector("#clock")
// we can also use document.getElementById("clock")


// it will run the program at a specific time that we put
setInterval(function(){

    let date = new Date();
    // console.log(date.toLocaleString());
    clock.innerHTML = date.toLocaleTimeString();
    // clock.innerHTML = date.toLocaleDateString();

}, 1000) // rememeber the syntax, will throw thw value in every second

// setInterval accepts 2 parameter, one is the function and the other is the time after which to execute the function eact time