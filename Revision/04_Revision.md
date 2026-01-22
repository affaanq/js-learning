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



## ES6 Classes, Inheritance, and Static Methods
#  ES6 Class Syntax
- Before ES6, JavaScript used functions and prototypes to simulate classes. ES6 introduced the class keyword, which is essentially syntactic sugar over the existing prototype-based inheritance. It makes the code cleaner and more readable but works the same way "under the hood."

## The constructor Method
- The constructor is a special method used for initializing an object created with a class.

- It is automatically called when you use the new keyword.

- There can be only one constructor in a class.

## Inheritance (extends and super)
- extends: Used to create a child class (subclass) that inherits properties and methods from a parent class.

- super: A keyword used inside the child class constructor to call the parent class's constructor. This is mandatory if you want to use this in the child constructor.

## static Methods
- Static methods belong to the class itself, not to the instances (objects) created from the class.

- You cannot call a static method on an object (e.g., user.createId() will fail). You must call it on the class (e.g., User.createId()).

- These are often used for utility functions.