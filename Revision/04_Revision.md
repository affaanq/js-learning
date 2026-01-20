# The Core Philosophy

## JavaScript is a prototype-based language, not a class-based one (even though we have class syntax now, it's just "syntactic sugar").

##    Inheritance: In JS, inheritance works by objects linking to other objects. If a property isn't found on the current object, JS looks "up" the chain to the parent (prototype), then the grandparent, until it hits null.

##    "Everything is an Object": Arrays, Strings, and even Functions eventually resolve to Objects. They all inherit properties from Object.prototype.

# The new Keyword Internals

## When you execute new ConstructorFunction(), JavaScript performs these 4 steps explicitly:

## Creation: A new, empty object is created ( {} ).

## Linking: The new object's internal [[Prototype]] property is linked to the constructor function's prototype. This allows the new object to access methods defined on the constructor's prototype.

## Binding: The constructor function is called with the specified arguments, and the this keyword is bound to the newly created object.

## Return: The new object is returned automatically.

#  __proto__ vs Object.setPrototypeOf
## __proto__: The old, legacy way to access or set the prototype chain. You will see this in older codebases or browser consoles.

## Object.setPrototypeOf(): The modern, approved standard for inheritance.