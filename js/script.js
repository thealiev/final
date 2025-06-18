document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("nav--active");
    hamburger.classList.toggle("hamburger--active");
  });

  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--active");
      hamburger.classList.remove("hamburger--active");
    });
  });
});
