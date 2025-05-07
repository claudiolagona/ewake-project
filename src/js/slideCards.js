import Swiper from "swiper";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1.15,

  breakpoints: {
    769: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 1.45,
    },
  },
});

const swiperStrategy = new Swiper(".fundamentals-container.swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1.15,

  breakpoints: {
    769: {
      slidesPerView: 5,
    },
  },
});
