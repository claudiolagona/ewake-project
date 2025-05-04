import logoBlack from "../assets/logo-black.png";
import navLogoBlack from "../assets/nav-logo-black.png";

const projectButton = document.querySelector(".project-button");
const nav = document.querySelector("nav");
const lists = document.querySelectorAll("nav ul li");
const links = document.querySelectorAll("nav a");
const header = document.querySelector("header");
const headerWrapper = document.querySelector(".header-wrapper");
const ewakeLogo = document.querySelector(".logo img");
const navLogo = document.querySelector(".nav-logo img");

const green = "#5AEF74";
const black = "#000000";

const greenMenu = () => {
  header.style.background = green;
  headerWrapper.style.background = green;
  nav.style.background = green;
  nav.style.color = black;
  links.forEach((link) => {
    !link.classList.contains("project-button") && (link.style.color = black);
  });
  lists.forEach((list, id, lists) => {
    list.style.borderTop = `1px solid ${black}`;
    id == lists.length - 1 && (list.style.borderBottom = `1px solid ${black}`);
  });
  ewakeLogo.setAttribute("src", logoBlack);
  navLogo.setAttribute("src", navLogoBlack);
};

projectButton.addEventListener("mouseover", greenMenu);
