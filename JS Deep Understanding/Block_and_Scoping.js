// =========================================================================
// DEEP NOTES: BLOCK SCOPE & SHADOWING
// INSTRUCTIONS: Set breakpoints on every `debugger;` line. 
// Run the debugger. Watch the "Scope" variables in the left panel.
// =========================================================================

// -------------------------------------------------------------------------
// 1. WHAT IS A BLOCK?
// -------------------------------------------------------------------------
if (true) {
    // This entire block is evaluated as ONE compound statement by the engine.
    var a = 10; 
}

// -------------------------------------------------------------------------
// 2. BLOCK SCOPE & MEMORY ALLOCATION
// -------------------------------------------------------------------------
{
    var leakVar = 10;
    let secureLet = 20;
    const secureConst = 30;
    
    debugger; 
    // STOP HERE IN VS CODE. Look at your Scope panel:
    // - 'secureLet' and 'secureConst' exist inside a separate "Block" scope.
    // - 'leakVar' is NOT in the Block scope. It has hijacked the Global scope.
}

console.log(leakVar); // 10 -> Accessible because 'var' leaked into the global space.
// console.log(secureLet); // UNCOMMENT TO SEE ERROR -> ReferenceError: secureLet is not defined.

// -------------------------------------------------------------------------
// 3. SHADOWING (THE DANGER OF VAR)
// -------------------------------------------------------------------------
var shadowVar = 100;
let shadowLet = 100;

{
    var shadowVar = 10; // OVERWRITES the global shadowVar.
    let shadowLet = 20; // Creates a NEW memory space for shadowLet.
    
    console.log("Inside block (var):", shadowVar); // 10
    console.log("Inside block (let):", shadowLet); // 20
}

debugger;
// STOP HERE IN VS CODE.
console.log("Outside block (var):", shadowVar); // 10  -> The global value was permanently mutated.
console.log("Outside block (let):", shadowLet); // 100 -> The global value is untouched.

// -------------------------------------------------------------------------
// 4. ILLEGAL SHADOWING
// -------------------------------------------------------------------------
let illegalVar = 20;

{
    // UNCOMMENT THE LINE BELOW TO SEE THE SYNTAX ERROR:
    // var illegalVar = 30; 
    
    // WHY DOES THIS FAIL?
    // 'var' tries to cross the block boundary to attach to the global scope.
    // But 'illegalVar' is already defined there as a 'let'. The engine blocks the collision.
}

// Shadowing a 'var' with a 'let' is perfectly fine, because 'let' respects boundaries.
var legalVar = 20;
{
    let legalVar = 30; 
}

// -------------------------------------------------------------------------
// 5. LEXICAL BLOCK SCOPE
// -------------------------------------------------------------------------
const globalScope = 100;
{
    const blockOne = 200;
    {
        const blockTwo = 300;
        debugger;
        // STOP HERE IN VS CODE.
        // Look at the Scope chain. This inner block has access to blockOne and globalScope
        // because of the Lexical Environment chain.
        console.log(globalScope, blockOne, blockTwo); // 100, 200, 300
    }
}