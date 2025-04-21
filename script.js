// ===== Footer: Subscribe Button =====
document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.getElementById("subscribe-btn");
    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", () => {
        const emailInput = document.getElementById("subscribe-email");
        if (emailInput && emailInput.value.trim() !== "") {
          alert("Thank you for subscribing.");
          emailInput.value = "";
        } else {
          alert("Please enter a valid email.");
        }
      });
    }
  
    // ===== About Us Page: Form Submit =====
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message.");
        contactForm.reset();
      });
    }
  
    // ===== Gallery Page: Shopping Cart Logic =====
    const cart = [];
  
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", () => {
        const itemName = btn.getAttribute("data-item");
        cart.push(itemName);
        alert("Item added to the cart");
      });
    });
  
    const viewCartBtn = document.getElementById("view-cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const cartList = document.getElementById("cart-items");

    viewCartBtn.addEventListener("click", function () {
        // Toggle display
        if (cartModal.style.display === "none" || cartModal.style.display === "") {
          cartModal.style.display = "block";
        } else {
          cartModal.style.display = "none";
        }
      });
  
    if (viewCartBtn && cartModal && cartList) {
      viewCartBtn.addEventListener("click", () => {
        cartList.innerHTML = "";
        cart.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          cartList.appendChild(li);
        });
        cartModal.style.display = "block";
      });
  
      document.getElementById("clear-cart-btn").addEventListener("click", () => {
        if (cart.length === 0) {
          alert("No items to clear");
        } else {
          cart.length = 0;
          alert("Cart cleared");
          cartList.innerHTML = "";
        }
      });
  
      document.getElementById("process-order-btn").addEventListener("click", () => {
        if (cart.length === 0) {
          alert("Cart is empty");
        } else {
          alert("Thank you for your order");
          cart.length = 0;
          cartList.innerHTML = "";
        }
      });
    }
  });
  