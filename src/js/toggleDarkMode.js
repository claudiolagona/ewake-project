const darkModeButton = document.querySelector(".dark-mode");

const toggleDarkMode = () => {
  darkModeButton.classList.toggle("dark");
  darkModeButton.classList.toggle("light");
  console.log("Ciao");
};

darkModeButton.addEventListener("click", toggleDarkMode);
