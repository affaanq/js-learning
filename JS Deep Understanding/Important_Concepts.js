// WHAT IS THE CLOSURE IN JS?
/*

It is the function along with its outer enviroment or lexical scope bundled togeather.
outer()() // double parenthesis is calling the inner function, it is the shortcut for 
var close = outer();
close()

-- closure does not change if even we add a parameter to the outer function, it will still print the value.
-- Advantages of closure:

--- It is used in module patterns, function currying and high order function(memoize and ones)
--- It helps in data hiding and encapsulation

---- Data hiding:
We can encapsulate the data so that other part of function cannot excess it.
EXAMPLE OF DATA HIDING:

function counter() {

    var count = 0;

    return function incrementCounter () {
        counter++;
    }
}
console.log(count) //Cannot excess it this way

We can access it like this:

var counter1 = counter();
counter1();

-- Disadvatnage:
--- Sometimes we have overconsumption of the memory and they are not garbage collected and can freeze the web if not solved;

*/
