const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const hamburgerSpan = document.querySelectorAll(".remove");
const menuText = document.querySelector(".menu-text");
const body = document.querySelector("body");
const darkModeButton = document.querySelector(".dark-mode");

const toggleMenu = () => {
  if (menuButton.classList.contains("close")) {
    menuButton.classList.remove("close");
    menuButton.classList.add("open");
    hamburgerSpan.forEach((span) => {
      span.style.display = "none";
    });
    menuText.textContent = "Chiudi";
    nav.classList.add("open");
    body.style.overflow = "hidden";
    darkModeButton.style.opacity = "0";
  } else {
    menuButton.classList.remove("open");
    menuButton.classList.add("close");
    hamburgerSpan.forEach((span) => {
      span.style.display = "inline";
    });
    menuText.textContent = "Menù";
    nav.classList.remove("open");
    body.style.overflow = "auto";
    darkModeButton.style.opacity = "1";
  }
};

menuButton.addEventListener("click", toggleMenu);
