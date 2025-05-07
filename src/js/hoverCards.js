const fundamentalCards = document.querySelectorAll(
  ".fundamental-card.swiper-slide"
);

const addClass = (elem) => {
  elem.classList.add("hover");
};

const addEvents = (elem) => {
  console.log(elem);
  elem.addEventListener("mouse", addClass(elem));
};

Array.from(fundamentalCards).forEach(addEvents);
