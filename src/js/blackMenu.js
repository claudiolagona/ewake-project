import logo from "../assets/logo.svg";
import navLogoPattern from "../assets/nav-logo.svg";

const projectButton = document.querySelector(".project-button");
const nav = document.querySelector("nav");
const lists = document.querySelectorAll("nav ul li");
const links = document.querySelectorAll("nav a");
const header = document.querySelector("header");
const headerWrapper = document.querySelector(".header-wrapper");
const ewakeLogo = document.querySelector(".logo img");
const navLogo = document.querySelector(".nav-logo img");

const white = "#F7F7F7";
const black = "#000000";

const blackMenu = () => {
  header.style.background = black;
  headerWrapper.style.background = black;
  nav.style.background = black;
  nav.style.color = white;
  links.forEach((link) => {
    !link.classList.contains("project-button") && (link.style.color = white);
  });
  lists.forEach((list, id, lists) => {
    list.style.borderTop = `1px solid ${white}`;
    id == lists.length - 1 && (list.style.borderBottom = `1px solid ${white}`);
  });
  ewakeLogo.setAttribute("src", logo);
  navLogo.setAttribute("src", navLogoPattern);
};

projectButton.addEventListener("mouseout", blackMenu);
