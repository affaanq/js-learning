***

# JavaScript Notes: Async, OOP, DOM Events, Timing

## Part 1: Asynchronous JavaScript (The Network Stuff)

## 1. The Ancient History: XMLHttpRequest (XHR)

The brutal truth: You will almost never write this code from scratch in a modern job. It is verbose, ugly, and hard to manage. We only learn it to understand how the internet used to work.

Why use it? It allows updating parts of a web page without reloading the whole page (AJAX). How it works: It moves through "Ready States" (0 to 4).

```js
const requestUrl = "https://api.github.com/users/affaanq";
const xhr = new XMLHttpRequest();

// STEP 1: Open the connection
// 'GET' is the method, requestUrl is the destination.
xhr.open("GET", requestUrl);

// STEP 2: Track the progress
xhr.onreadystatechange = function () {
  console.log(`Current State: ${xhr.readyState}`);
  // State 0: Unsent
  // State 1: Opened
  // State 2: Headers Received
  // State 3: Loading (Downloading data)
  // State 4: Done (We only care about this one!)

  if (xhr.readyState === 4) {
    // CRITICAL: The response comes as a string. We MUST parse it to JSON to use it.
    const data = JSON.parse(this.responseText);
    console.log(data.followers);
  }
};

// STEP 3: actually send the request
xhr.send();
```

## 2. The Solution: Promises

The why: XHR and callbacks resulted in "Callback Hell" (nested code that looks like a pyramid). Promises make code linear and easier to read.

The concept: A Promise is an object representing a task that will finish in the future. It is either Pending (working), Fulfilled (success), or Rejected (fail).

```js
// CREATING A PROMISE
const myPromise = new Promise((resolve, reject) => {
  // Simulate a network delay
  setTimeout(() => {
    let error = false; // Toggle this to test catch()

    if (!error) {
      // Success! Send data back.
      resolve({ username: "Affaan", email: "hello@example.com" });
    } else {
      // Failure! Send error back.
      reject("ERROR: Something went wrong.");
    }
  }, 1000);
});

// CONSUMING A PROMISE (Chaining)
myPromise
  .then((user) => {
    console.log("1. User received:", user);
    return user.username; // Passes this value to the NEXT .then()
  })
  .then((username) => {
    console.log("2. Just the username:", username);
  })
  .catch((error) => {
    // Handles 'reject' or any code errors in the .then chains
    console.log(error);
  })
  .finally(() => {
    console.log("3. Cleanup: This runs no matter what.");
  });
```

## 3. The Modern Standard: Async / Await

The brutal truth: This is what you should use 99% of the time. It is "Syntactic Sugar" over Promises. It makes asynchronous code look synchronous (top-to-bottom).

The how:
1. `async` tells JS this function handles promises
2. `await` pauses the function execution until the promise resolves
3. `try/catch` is mandatory for error handling (since there is no `.catch()` chain)

```js
async function getAllUsers() {
  try {
    // Wait for the network request
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Wait for the data to convert to JSON (This is also a promise!)
    const data = await response.json();

    console.log(data);
  } catch (error) {
    // If internet is down or API fails, we catch it here
    console.error("Failed to fetch users:", error);
  }
}

getAllUsers();
```

# Part 2: Object-Oriented Programming (OOP)

## 1. Object Literals & this

The why: Grouping data and functions together.

The `this` keyword: In an object method, `this` refers to the object itself.

```js
const user = {
  username: "Affaan",
  loginCount: 4,
  signedIn: true,

  getUserDetails: function () {
    // 'this.username' looks inside THIS specific object
    console.log(`Username: ${this.username}`);
    console.log(this); // Prints the whole 'user' object
  },
};

// Global Context Note:
// In the browser console, 'console.log(this)' refers to the Window.
// In Node.js, it refers to an empty object {}.
```

## 2. Constructor Functions & The new Keyword

The why: If you need to create 100 users, you don't want to type the object literal 100 times. You want a blueprint.

The magic of `new`: When you type `const u = new User()`:
1. Creates a brand new empty object
2. Calls the function and sets `this` to point to that new object
3. Returns the object automatically

```js
function User(username, loginCount, isLoggedIn) {
  // 'this' refers to the new object being created
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // Implicitly returns 'this'
}

const userOne = new User("Affaan", 12, true);
const userTwo = new User("Hello", 21, false);

console.log(userOne); // You get a structured object
```

# Part 3: DOM Events (Interaction)

## 1. The Approaches

Inline (`onclick="..."`): NEVER DO THIS. It's hard to scale and mixes logic with HTML.

Event Listeners (`addEventListener`): ALWAYS DO THIS. It allows multiple events on one element and gives you more control.

## 2. Event Propagation (Bubbling)

The concept: If you click an `<img>` inside a `<ul>` inside a `<div>`:
- The `<img>` is clicked
- Then the `<ul>` thinks it was clicked
- Then the `<div>` thinks it was clicked  
This "bubbles" up like a bubble in water.

```js
// e is the Event Object
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("Owl clicked");

    // STOP BUBBLING: This prevents the parent (ul) from knowing the owl was clicked
    e.stopPropagation();
  },
  false
); // 'false' is default (Bubbling mode)
```

## 3. Event Delegation (The Pro Move)

The why: Instead of adding 100 listeners to 100 images, add one listener to the parent `<ul>`. It saves memory and works better.

```js
document.querySelector("#images").addEventListener("click", function (e) {
  // e.target = the specific HTML element you actually touched (the <img>)
  // e.currentTarget = the element holding the listener (the <ul>)

  console.log(e.target.tagName);

  // STRICT CHECK: Ensure we actually clicked an image, not the padding of the list
  if (e.target.tagName === "IMG") {
    console.log("Removing image with id:", e.target.id);

    // Remove the parent <li> of the image
    let listItem = e.target.parentNode;
    listItem.remove();
  }
});
```

# Part 4: Timing Events

## 1. setTimeout

Concept: "Do this once after X milliseconds."

Critical: Always store the reference ID so you can cancel it if needed.

```js
const sayName = function () {
  console.log("Affaan");
};

const timeoutId = setTimeout(sayName, 2000); // Runs after 2 seconds

// If we want to cancel it before it runs:
clearTimeout(timeoutId);
```

## 2. setInterval

Concept: "Do this repeatedly every X milliseconds."

Warning: This will run forever until you stop it or close the tab. It can eat up memory.

```js
const intervalId = setInterval(
  function (str) {
    console.log(str, Date.now());
  },
  1000,
  "Time:"
); // "Time:" is passed as an argument to the function

// TO STOP IT:
clearInterval(intervalId);
```