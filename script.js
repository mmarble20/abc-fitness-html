document.addEventListener("DOMContentLoaded", function () {
    // SUBSCRIBE button alert (footer)
    const subscribeBtn = document.getElementById("subscribe-btn");
    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", () => {
        const emailInput = document.getElementById("subscribe-email");
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (emailPattern.test(email)) {
          alert("Thank you for subscribing.");
          emailInput.value = "";
        } else {
          alert("Invalid email address.");
        }
      });
    }
  
    // CONTACT form alert (about.html)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for your message.");
        contactForm.reset();
      });
    }
  
    // GALLERY - Cart functionality
    const addToCartButtons = document.querySelectorAll("button.add-to-cart");
    const clearCartBtn = document.getElementById("clear-cart-btn");
    const processOrderBtn = document.getElementById("process-order-btn");
    const cartItemsList = document.getElementById("cart-items");
  
    if (addToCartButtons.length && cartItemsList) {
      addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const itemName = button.getAttribute("data-item");
          const li = document.createElement("li");
          li.textContent = itemName;
          cartItemsList.appendChild(li);
          alert("Item added to the cart.");
        });
      });
    }
  
    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        if (cartItemsList.children.length > 0) {
          cartItemsList.innerHTML = "";
          alert("Cart cleared.");
        } else {
          alert("No items to clear.");
        }
      });
    }
  
    if (processOrderBtn) {
      processOrderBtn.addEventListener("click", () => {
        if (cartItemsList.children.length > 0) {
          cartItemsList.innerHTML = "";
          alert("Thank you for your order.");
        } else {
          alert("Cart is empty.");
        }
      });
    }
  
    // Toggle cart modal visibility
    const viewCartBtn = document.getElementById("view-cart-btn");
    const cartModal = document.getElementById("cart-modal");
  
    if (viewCartBtn && cartModal) {
      viewCartBtn.addEventListener("click", () => {
        if (cartModal.style.display === "none" || cartModal.style.display === "") {
          cartModal.style.display = "block";
        } else {
          cartModal.style.display = "none";
        }
      });
    }
  });
  