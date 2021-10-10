// MOBILE MENU
const overlay = document.querySelector(".overlay");
const burgerIcon = document.querySelector(".burger-icon");
const navList = document.querySelector(".nav-list");

function toggleMenu() {
  overlay.classList.toggle("active");
  burgerIcon.classList.toggle("open");
  navList.classList.toggle("open");
}

burgerIcon.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
