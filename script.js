document.addEventListener("DOMContentLoaded", () => {
    // Subscribe button
    const subscribeBtn = document.getElementById("subscribe-btn");
    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", () => {
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          alert("Thank you for subscribing!");
          emailInput.value = "";
        } else {
          alert("Please enter a valid email address.");
        }
      });
    }
  
    // Shopping cart logic
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const viewCartBtn = document.getElementById("view-cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const cartItemsList = document.getElementById("cart-items");
    const clearCartBtn = document.getElementById("clear-cart-btn");
    const processOrderBtn = document.getElementById("process-order-btn");
  
    if (addToCartButtons) {
      addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
          const item = button.getAttribute("data-name") || "Item";
          let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
          cart.push(item);
          sessionStorage.setItem("cart", JSON.stringify(cart));
          alert("Item added to the cart");
        });
      });
    }
  
    if (viewCartBtn && cartModal && cartItemsList) {
      viewCartBtn.addEventListener("click", () => {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        cartItemsList.innerHTML = "";
        if (cart.length > 0) {
          cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            cartItemsList.appendChild(li);
          });
          cartModal.style.display = "block";
        } else {
          alert("Cart is empty.");
        }
      });
    }
  
    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (cart.length > 0) {
          sessionStorage.removeItem("cart");
          cartItemsList.innerHTML = "";
          alert("Cart cleared");
          cartModal.style.display = "none";
        } else {
          alert("No items to clear.");
        }
      });
    }
  
    if (processOrderBtn) {
      processOrderBtn.addEventListener("click", () => {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (cart.length > 0) {
          alert("Thank you for your order");
          sessionStorage.removeItem("cart");
          cartItemsList.innerHTML = "";
          cartModal.style.display = "none";
        } else {
          alert("Cart is empty.");
        }
      });
    }
  
    // Contact Form functionality using localStorage
    const contactForm = document.getElementById("custom-order-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();
  
        if (name && email && message) {
          const contactData = {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
          };
  
          localStorage.setItem("customOrder", JSON.stringify(contactData));
          alert("Thank you for your message");
          contactForm.reset();
        } else {
          alert("Please fill out all fields.");
        }
      });
    }
  });
  