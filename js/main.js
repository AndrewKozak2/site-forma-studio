const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const swiper = new Swiper(".projects__slider", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: ".projects__arrow-right",
    prevEl: ".projects__arrow-left",
  },
});
