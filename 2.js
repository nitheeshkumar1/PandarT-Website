// Get the elements
const addToCartButton = document.querySelector('.add-to-cart');
const plusButton = document.querySelector('.quantity-button.plus');
const minusButton = document.querySelector('.quantity-button.minus');
const cartCount = document.querySelector('.cart-count');

let count = 0;

// Function to update the cart count
function updateCartCount() {
  cartCount.textContent = count;
}

// Function to handle "Add to Cart" button click
function addToCart() {
  count++;
  updateCartCount();

  // Show the plus and minus buttons
  plusButton.style.display = 'inline-block';
  minusButton.style.display = 'inline-block';

  // Hide the "Add to Cart" button
  addToCartButton.style.display = 'none';
}

// Function to handle plus button click
function increaseCount() {
  count++;
  updateCartCount();
}

// Function to handle minus button click
function decreaseCount() {
  if (count > 0) {
    count--;
    updateCartCount();
  }
}

// Event listeners
addToCartButton.addEventListener('click', addToCart);
plusButton.addEventListener('click', increaseCount);
minusButton.addEventListener('click', decreaseCount);
