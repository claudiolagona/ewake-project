const hidedDescription = document.querySelector(".sector-text p span");
const readAll = document.querySelector(".read-all");
const blurredDiv = document.querySelector(".blur");

const toggleDescription = () => {
  if (hidedDescription.classList.contains("hided")) {
    hidedDescription.classList.remove("hided");
    hidedDescription.classList.add("visible");
    readAll.textContent = "Mostra meno";
    blurredDiv.style.display = "none";
  } else if (hidedDescription.classList.contains("visible")) {
    hidedDescription.classList.remove("visible");
    hidedDescription.classList.add("hided");
    readAll.textContent = "Leggi tutto";
    blurredDiv.style.display = "block";
  }
};

readAll.addEventListener("click", toggleDescription);
