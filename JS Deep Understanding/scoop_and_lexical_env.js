function a(params) {

    c() // It will still have access of b cause it is inside the scoop.
    console.log(b);
    function c() {
        console.log(b);
        
    }
    
    
}

const b = 10;
a()// JS will first try and find b in the local memory, if not found it will go and check it in the global execution context.

// lexical (in a sequence/ in order) env is the local memory along with the lexical env of its parent