const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const hamburgerSpan = document.querySelectorAll(".remove");
const menuText = document.querySelector(".menu-text");
const body = document.querySelector("body");

const toggleMenu = () => {
  if (menuButton.classList.contains("close")) {
    menuButton.classList.remove("close");
    menuButton.classList.add("open");
    hamburgerSpan.forEach((span) => {
      span.style.display = "none";
    });
    menuText.textContent = "Chiudi";
    nav.style.display = "flex";
    body.style.overflow = "hidden";
  } else {
    menuButton.classList.remove("open");
    menuButton.classList.add("close");
    hamburgerSpan.forEach((span) => {
      span.style.display = "inline";
    });
    menuText.textContent = "Menù";
    nav.style.display = "none";
    body.style.overflow = "auto";
  }
};

menuButton.addEventListener("click", toggleMenu);
