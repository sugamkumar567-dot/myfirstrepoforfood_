const cartCount = document.querySelector(".cart-count");
const toast = document.querySelector(".toast");
const nav = document.querySelector(".primary-nav");
const menuToggle = document.querySelector(".menu-toggle");
let itemCount = 0;
let toastTimeout;

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    itemCount += 1;
    cartCount.textContent = String(itemCount);
    cartCount.setAttribute("aria-label", `${itemCount} ${itemCount === 1 ? "item" : "items"} in cart`);
    toast.textContent = `${button.dataset.item} added to your order`;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
