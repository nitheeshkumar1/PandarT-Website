// JavaScript code

document.addEventListener('DOMContentLoaded', function() {
    const drawerToggle = document.getElementById('drawer-toggle');
    const drawerIcon = document.querySelector('.drawer-icon');
    const drawerContent = document.querySelector('.drawer-content');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItems');
    let cartItems = 0;
  
    // Toggle the drawer menu
    drawerToggle.addEventListener('change', function() {
      if (this.checked) {
        drawerContent.style.transform = 'translateX(0)';
      } else {
        drawerContent.style.transform = 'translateX(-100%)';
      }
    });
  
    // Add event listener to each "Add to Cart" button
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        cartItems++;
        cartCount.textContent = cartItems;
        addToCart(this.parentNode);
      });
    });
  
    // Function to add item to cart
    function addToCart(product) {
      const itemName = product.querySelector('h2').textContent;
      const itemPrice = product.querySelector('p').textContent;
  
      const cartItem = document.createElement('li');
      cartItem.textContent = `${itemName} - ${itemPrice}`;
  
      cartItemsContainer.appendChild(cartItem);
    }
  });
  