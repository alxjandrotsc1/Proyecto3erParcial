document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleMenu");
    const navMenu = document.getElementById("navMenu");

    toggleButton.addEventListener("click", function () {
      navMenu.classList.toggle("activo");
    });
  });