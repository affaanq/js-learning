getName();       // ✅ Prints "Hello World"
console.log(x);  // ❌ Throws: ReferenceError: Cannot access 'x' before initialization

const x = 7;

function getName() {
    console.log("Hello World");
}

/*
  WHY THIS HAPPENS: HOISTING

  Before executing any code, JS scans the script and allocates memory
  for all variables and function declarations. This happens during the
  "creation phase" of the execution context, before the "execution phase".

  - Function declarations: the ENTIRE function (name + body) is hoisted
    and stored in memory. That's why getName() works even though it's
    called before it appears in the file.

  - var variables: hoisted and auto-initialized to `undefined`.
    Accessing them before their line runs gives `undefined`, not an error.

  - let/const variables: hoisted too, but NOT initialized. They sit in
    the "Temporal Dead Zone" (TDZ) from the start of the scope until
    their declaration line executes. Accessing them in the TDZ throws
    a ReferenceError, not `undefined`.

  THREE DIFFERENT THINGS TO KEEP STRAIGHT:
  1. undefined            → declared, but no value assigned yet (var)
  2. ReferenceError (TDZ) → declared with let/const, but not yet reached
  3. ReferenceError (not defined) → never declared anywhere in scope
*/