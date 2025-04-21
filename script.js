// JavaScript for ABC Fitness Studio Website

document.addEventListener("DOMContentLoaded", () => {
    // Alert for Subscribe button
    const subscribeBtn = document.getElementById("subscribe-btn");
    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", () => {
        const emailInput = document.getElementById("subscribe-email");
        if (emailInput && emailInput.value.includes("@")) {
          alert("Thank you for subscribing.");
        } else {
          alert("Please enter a valid email address.");
        }
      });
    }
  
    // Cart functionality using sessionStorage
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
    function updateCartStorage() {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
        const itemName = button.getAttribute("data-name");
        cart.push(itemName);
        updateCartStorage();
        alert("Item added to the cart");
      });
    });
  
    const viewCartBtn = document.getElementById("view-cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const cartItemsList = document.getElementById("cart-items");
    const clearCartBtn = document.getElementById("clear-cart-btn");
    const processOrderBtn = document.getElementById("process-order-btn");
  
    if (viewCartBtn && cartModal && cartItemsList) {
      viewCartBtn.addEventListener("click", () => {
        cartItemsList.innerHTML = "";
        const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (savedCart.length === 0) {
          cartItemsList.innerHTML = "<li>Your cart is empty</li>";
        } else {
          savedCart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            cartItemsList.appendChild(li);
          });
        }
        cartModal.style.display = "block";
      });
    }
  
    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (savedCart.length === 0) {
          alert("No items to clear.");
        } else {
          sessionStorage.removeItem("cart");
          cartItemsList.innerHTML = "<li>Your cart is now empty</li>";
          alert("Cart cleared");
        }
      });
    }
  
    if (processOrderBtn) {
      processOrderBtn.addEventListener("click", () => {
        const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (savedCart.length === 0) {
          alert("Cart is empty");
        } else {
          sessionStorage.removeItem("cart");
          cartItemsList.innerHTML = "<li>Order placed successfully</li>";
          alert("Thank you for your order");
        }
      });
    }
  
    // Contact Form functionality using localStorage
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
  
        const contactData = {
          name,
          email,
          message,
          timestamp: new Date().toISOString()
        };
  
        localStorage.setItem("customOrder", JSON.stringify(contactData));
        alert("Thank you for your message");
        contactForm.reset();
      });
    }
  });