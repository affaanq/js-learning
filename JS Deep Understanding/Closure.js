function x () {

    var a = 10;
    function y () {
        console.log(a);  
    }
    return y;
}

var z = x();
console.log(z);

z() // This is the example of closure
// Function alongs with its lexical scoop bundled togeather is the closure

