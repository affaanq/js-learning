// Immedietely Invoked Function Expression (IIFE)

(function chai(){
    // it is a named IIFE
    console.log(`DB CONNECTED`);
    
})(); //Method using IIFE
//Global scope causes the pollution due to which we use IIFE

// We have to put the semicolom(;) b/w two IIFE, it is better to do so

( (name) => {
    //Un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`hitesh`)// we have to write the argument here for the IIFE...



