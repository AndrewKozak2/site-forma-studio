const swiper = new Swiper(".projects__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
