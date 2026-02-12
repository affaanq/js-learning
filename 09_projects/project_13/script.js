/* ==========================================================================
   PHASE 1: CACHING THE DOM
*/

// Get the container where the cart items will be displayed
const cartContainer = document.getElementById("cart-container");

// Get the specific area where the list of products in the cart goes
const productsContainer = document.getElementById("products-container");

// Get the container where we will display the menu (the cupcakes, etc.)
const dessertCards = document.getElementById("dessert-card-container");

// Get the main buttons for interaction
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Get the specific <span> tags where numbers (money/counts) will be injected
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");

// STATE VARIABLE
// DEV THOUGHT: "I need to remember if the cart is open or closed. 
// HTML doesn't know this, so I need a boolean variable to track it."
let isCartShowing = false;

/* ==========================================================================
   PHASE 2: THE DATA SOURCE
   --------------------------------------------------------------------------
   DEV THOUGHT: "I need a 'Source of Truth'. The HTML is just for show. 
   This array represents the actual inventory of my shop. If I want to change 
   a price, I change it here, not in the HTML."
   ==========================================================================
*/
const products = [
  {
    id: 1, // Unique ID is crucial for finding specific items later
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
  {
    id: 2,
    name: "French Macaron",
    price: 3.99,
    category: "Macaron",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macarons (4 Pack)",
    price: 9.99,
    category: "Macaron",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macarons (5 Pack)",
    price: 11.99,
    category: "Macaron",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];

/* ==========================================================================
   PHASE 3: INITIAL RENDER
   --------------------------------------------------------------------------
   DEV THOUGHT: "I am lazy. I don't want to write 12 HTML blocks. 
   I will loop through my data array and generate the HTML for me."
   ==========================================================================
*/
products.forEach(
  // Destructuring: instead of saying product.name, I extract { name, id... } directly
  ({ name, id, price, category }) => {
    // Accumulate HTML. The += is critical. It appends to what is already there.
    dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <!-- 
           CRITICAL LOGIC: I am assigning the product's ID to the button's ID.
           Why? So later, when I click the button, I know WHICH product was clicked.
        -->
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
  }
);

/* ==========================================================================
   PHASE 4: THE SHOPPING CART CLASS (THE BRAIN)
   --------------------------------------------------------------------------
   DEV THOUGHT: "I need an object that manages the complexity of the cart.
   It needs to hold items, calculate totals, and handle taxes. 
   Grouping this in a Class keeps my code organized."
   ==========================================================================
*/
class ShoppingCart {
  constructor() {
    // Initialize an empty array to hold the products user buys
    this.items = []; 
    // Initialize total cost to 0
    this.total = 0;
    // Set a constant tax rate
    this.taxRate = 8.25;
  }

  // METHOD: Add Item Logic
  // This is the hardest part of the code. 
  addItem(id, products) {
    // STEP 1: Find the product object in the master list that matches the ID clicked
    // .find returns the first object where item.id equals the id passed in
    const product = products.find((item) => item.id === id);
    
    // Extract name and price for easier use
    const { name, price } = product;
    
    // STEP 2: Update the Data (The Truth)
    // Push the found product into the cart's items array
    this.items.push(product);

    // STEP 3: Calculate Logic for Display
    // We need to know: "How many of THIS specific item are in the cart?"
    const totalCountPerProduct = {};
    
    // Loop through ALL items currently in the cart
    this.items.forEach((dessert) => {
      // Logic: If the ID exists in the object, add 1. If not, set it to 0 then add 1.
      // This creates a map like: { "1": 2, "3": 1 } (ID 1 has 2 items, ID 3 has 1)
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    })

    // Get the specific count for the item we just added
    const currentProductCount = totalCountPerProduct[product.id];
    
    // Get the HTML span that displays the count (if it exists)
    // Note: This element might not exist yet if it's the first time adding it!
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

    // STEP 4: Update the DOM (The Reflection)
    // TERNARY OPERATOR Logic:
    // IF the count is > 1, it means the item is already in the list.
    // We just want to update the number (e.g., "2x").
    // ELSE (if count is 1), it's new. We need to create the HTML for it.
    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      : productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `;
  }

  // METHOD: Get total number of items
  getCounts() {
    return this.items.length;
  }

  // METHOD: Clear everything
  clearCart() {
    // Guard Clause: If cart is empty, stop the function. Don't do unnecessary work.
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    // Confirmation Dialog
    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    // If user clicked "OK" (true)
    if (isCartCleared) {
      // 1. Reset Data
      this.items = [];
      this.total = 0;
      
      // 2. Reset DOM
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
    }
  }

  // METHOD: Math helper for taxes
  calculateTaxes(amount) {
    // Formula: (8.25 / 100) * total amount. 
    // .toFixed(2) returns a STRING (e.g., "2.55"), so we wrap it in parseFloat to make it a Number again.
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  // METHOD: Calculate Totals
  calculateTotal() {
    // .reduce() is used to sum up an array.
    // 'total' is the accumulator (starts at 0). 'item' is the current loop item.
    // We return total + item.price, which becomes the 'total' for the next loop.
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    
    // Calculate tax based on subtotal
    const tax = this.calculateTaxes(subTotal);
    
    // Update the class property 'total'
    this.total = subTotal + tax;
    
    // Update the DOM to show the new numbers
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    
    return this.total;
  }
};

/* ==========================================================================
   PHASE 5: INITIALIZATION & EVENTS
   --------------------------------------------------------------------------
   DEV THOUGHT: "I have the Class defined, but nothing runs until I instantiate it."
   ==========================================================================
*/

// Create the cart object from the blueprint (Class)
const cart = new ShoppingCart();

// Get all the "Add to Cart" buttons we created in Phase 3
// getElementsByClassName returns a "HTMLCollection" (which is array-like, but not an array)
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

// DEV THOUGHT: "I can't loop over an HTMLCollection with .forEach directly in older logic.
// So I convert it to a real Array using the spread operator [...addToCartBtns]."
[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      // Logic: When clicked, grab the ID of the button (which matches the product ID)
      // Convert it to a Number (because HTML IDs are strings, but our data IDs are numbers)
      cart.addItem(Number(event.target.id), products);
      
      // Update the total count display
      totalNumberOfItems.textContent = cart.getCounts();
      
      // Recalculate money totals
      cart.calculateTotal();
    })
  }
);

// Toggle Cart Visibility
cartBtn.addEventListener("click", () => {
  // Logic: Flip the boolean. If true, make false. If false, make true.
  isCartShowing = !isCartShowing;
  
  // Update text based on new state
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  
  // Update CSS based on new state
  cartContainer.style.display = isCartShowing ? "block" : "none";
});

// Clear Cart Button
// CRITICAL CONCEPT: .bind(cart)
// Without .bind(cart), the 'this' keyword inside clearCart() would refer to the HTML Button!
// We bind it so 'this' continues to refer to the 'cart' object.
clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));