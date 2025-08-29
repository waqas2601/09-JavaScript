// Working with Add to cart butons /////////////////////

// Cart counter span
const cartCount = document.getElementById("cartCount");
// All add-to-cart buttons
const addToCartBtns = document.querySelectorAll(".add-to-cart");

// Loop through all buttons
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Increase counter
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;

    // Change button text
    btn.textContent = "Added";
    btn.disabled = true; // prevent clicking again
    btn.classList.add("bg-gray-400"); // optional style change
  });
});

// ---- Search filter ----///////////////////
// ---- Search filter (simple) ----
const searchInput = document.getElementById("search");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();

  productCards.forEach((card) => {
    // get title from data-title OR h3/h2 OR empty string
    const title = (
      card.dataset.title ||
      card.querySelector("h3, h2")?.textContent ||
      ""
    ).toLowerCase();

    // show/hide based on search
    card.classList.toggle("hidden", !title.includes(q));
  });
});

// Work with navLinks //////////////////////
// Get all footer/nav links

// Select all <a> inside the #scroll-link list
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // stop instant jump

    // Get the section ID from href (e.g. "#products")
    const targetId = this.getAttribute("href");

    // Find that section
    const targetSection = document.querySelector(targetId);

    // Scroll smoothly to it
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Work with cart modal ///////////////////
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCartBtn = document.getElementById("closeCartBtn");

// Open cart
cartBtn.addEventListener("click", () => {
  cartModal.classList.remove("hidden"); //show modal
  cartModal.classList.add("flex"); //flex to center content
});

// Close cart

closeCartBtn.addEventListener("click", () => {
  cartModal.classList.add("hidden"); //hide modal
  cartModal.classList.remove("flex");
});

// Also close if you click outside the white box
cartModal.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.classList.add("hidden");
    cartModal.classList.remove("flex");
  }
});

// Adding products in the cart ///////////////

const cartItemsList = document.getElementById("cartItems");
const clearCartBtn = document.getElementById("clearCartBtn");

let cart = [];

// Add to cart
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productCard = btn.closest(".product-card");
    const title = productCard.querySelector("h3").textContent;
    const price = parseFloat(productCard.dataset.price);

    // Check if product already in cart
    const exists = cart.find((item) => item.title === title);
    // Prevent adding duplicates
    if (!exists) {
      cart.push({ title, price }); // only push once ✅
      btn.textContent = "Added";
      btn.disabled = true;
      btn.classList.remove("bg-blue-600");
      btn.classList.add("bg-gray-400");
    }

    updateCart();
  });
});

// Clear cart
clearCartBtn.addEventListener("click", () => {
  cart = [];
  updateCart();

  // Reset all add-to-cart buttons
  addToCartBtns.forEach((btn) => {
    btn.textContent = "Add to Cart";
    btn.disabled = false;
    btn.classList.remove("bg-gray-400");
    btn.classList.add("bg-blue-600");
  });
});

// Update cart UI
function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.title} - $${item.price}`;

    cartItemsList.appendChild(li);
    total += item.price; // add price
  });

  // Update count
  cartCount.textContent = cart.length;
  document.getElementById("cartTotal").textContent = total.toFixed(2);
}

const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty");
  } else {
    alert("Thanks for shopping with us! ");
    cart = [];
  }
});
