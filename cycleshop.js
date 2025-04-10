<div class="product">
    <img src="path_to_image.jpg" alt="Product Image">
    <p>Bicycles</p>
    <h2>KRYO X26 MTB - MODEL K</h2>
    <p>$350.00</p>
    <button>Add to Cart</button>
</div>

// Cart functionality
let cartTotal = 0;
let cartItems = [];  // Array to track items added to the cart

// Function to update the cart display
function updateCart() {
    const cartElement = document.querySelector('.cart');
    cartElement.textContent = `$${cartTotal.toFixed(2)}`;
    displayCartItems();
}

// Function to display cart items with remove option
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button class="remove-btn" data-name="${item.name}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Add event listeners to "Remove" buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemName = event.target.getAttribute('data-name');
            removeFromCart(itemName);
        });
    });
}

// Function to add an item to the cart
function addToCart(price, name) {
    cartItems.push({ name, price });
    cartTotal += price;
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    const itemIndex = cartItems.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        cartTotal -= cartItems[itemIndex].price;
        cartItems.splice(itemIndex, 1);  // Remove the item from the cart
        updateCart();  // Update the cart display
    }
}

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.accessory button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const priceText = event.target.previousElementSibling.previousElementSibling.textContent;
        const price = parseFloat(priceText.split('–')[0].replace('$', '').trim());
        const itemName = event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim();

        addToCart(price, itemName);
    });
});

// Price filter functionality
const priceRange = document.querySelector('input[type="range"]');
const priceRangeText = document.querySelector('.price-range span');

priceRange.addEventListener('input', () => {
    priceRangeText.textContent = `$${priceRange.value}`;
});

// Apply button functionality for price range filter
const applyBtn = document.querySelector('.apply-btn');
applyBtn.addEventListener('click', () => {
    alert(`Filter applied: Price range $${priceRange.value}`);
});

// Navigation bar active link functionality
const navLinks = document.querySelectorAll('.top-section nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

// Sidebar search functionality
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

// Function to filter the accessories list based on search query
function filterAccessories(query) {
    const accessories = document.querySelectorAll('.accessory');
    accessories.forEach(accessory => {
        const title = accessory.querySelector('p strong').textContent.toLowerCase();
        if (title.includes(query.toLowerCase())) {
            accessory.style.display = 'block';  // Show the product
        } else {
            accessory.style.display = 'none';  // Hide the product
        }
    });
}

// Event listener for search button click
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        filterAccessories(query);
    } else {
        // If the search query is empty, show all accessories
        const accessories = document.querySelectorAll('.accessory');
        accessories.forEach(accessory => {
            accessory.style.display = 'block';
        });
    }
});

// Optionally, add the ability to search as the user types (live search)
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query) {
        filterAccessories(query);
    } else {
        // If the search query is empty, show all accessories
        const accessories = document.querySelectorAll('.accessory');
        accessories.forEach(accessory => {
            accessory.style.display = 'block';
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Kunin ang input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate sending message
        alert("Message sent! Thank you, " + name + ".");

        // Optional: I-clear ang form pagkatapos mag-submit
        form.reset();
    });
});
