// The Selectors
// document.getElementById('title'): Fast, reliable. Returns single element.

// document.querySelector('h1'): Returns the first match. Supports CSS syntax

// document.className: Returns a string of classes.

// document.getAttribute('id') / setAttribute('id', 'newId'): Direct attribute manipulation.

// innerText vs textContent vs innerHTMLHitesh

// The Array: NodeList vs HTMLCollection

// document.querySelectorAll() returns a NodeList.

// Behavior: It has a built-in .forEach(), but no .map() or .reduce().

// document.getElementsByClassName() returns an HTMLCollection.

// Behavior: It has zero loop methods. No forEach, no map.

// The Fix: Always convert to a real Array before looping if you need array methods.

const listItems = document.getElementsByClassName('list-item');
const convertedArray = Array.from(listItems); // Now you can use .map()