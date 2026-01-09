
// Creation & Traversal
//

// 1. Parent-Child Relationships
// Navigating the tree without re-querying.

// parent.children: Returns an HTMLCollection of element nodes only.

// parent.firstElementChild / parent.lastElementChild: Immediate access to ends.

// child.parentElement: Moving up the tree.

// child.nextElementSibling: Moving sideways.

// Note: childNodes returns everything, including line breaks (text nodes). Usually, you want children.

// 2. Creating Elements
// Do not use innerHTML to append. It forces a redraw of the entire container.
// The boring way
// 1. Create the tag
const div = document.createElement('div');

// 2. Add attributes (Heavy method vs Direct method)
div.className = "main";     // Direct
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "Generated Title"); // Method

// 3. Add styling
div.style.backgroundColor = "green";
div.style.padding = "12px";

// 4. Add Content (TextNode method is slightly more optimized than .innerText)
const addText = document.createTextNode("Chai aur Code");
div.appendChild(addText);

// 5. Attach to DOM
document.body.appendChild(div);

// The optimized way

function addOptiLanguage(langName) {
    const li = document.createElement('li');
    // createTextNode skips the HTML parsing step entirely
    li.appendChild(document.createTextNode(langName)); 
    document.querySelector('.language').appendChild(li);
}
addOptiLanguage("Golang");

// 4. Edit and Remove
// Edit: Select specific node, create new node, parent.replaceChild(new, old) or simply element.replaceWith(new).

// Remove: element.remove() (Newer) or parent.removeChild(element) (Older).
