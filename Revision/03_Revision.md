Understood—you want the whole README using only `#` and `##` headings (no `###`).

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