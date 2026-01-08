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

// const listItems = document.getElementsByClassName('list-item');
// const convertedArray = Array.from(listItems); // Now you can use .map()

// The 3 Ways to Change Content
// 1. innerText

// What it does: It gives you the text that is actually visible to the user on the screen.
// Key Detail: If an element has CSS like display: none, innerText will NOT return that text. It respects the styling.
// Performance: It is slightly slower because the browser has to calculate the layout to know what is hidden and what is visible.

// 2. textContent

// What it does: It gives you the full text content inside the element, regardless of styling.
// Key Detail: It ignores CSS. Even if text is hidden with display: none, textContent will still return it.
// Performance: It is faster than innerText and is the preferred standard for changing plain text.

// 3. innerHTML

// What it does: It returns the content as an HTML string, including the tags (like <p>, <span>, etc.).
// Key Detail: It allows you to insert HTML structure.
// Security Warning: This is dangerous. If you let users input text here, they can inject malicious scripts (XSS attacks). Only use this if you trust the data source 100%.
// The Bottom Line: Default to textContent. Use innerText only if visibility matters. Avoid innerHTML unless absolutely necessary.