// === NAVIGATION MENU TOGGLE ===
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle open/close menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu when a nav link is clicked
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// === SCROLL REVEAL ANIMATIONS ===
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  easing: "ease-in-out",
};

// Ensure ScrollReveal is defined
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".header__content form", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".header__content .bar", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".header__image__card", {
    duration: 1000,
    interval: 500,
    delay: 2500,
  });
} else {
  console.warn("⚠️ ScrollReveal library not loaded. Include it before this script.");
}
