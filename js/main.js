const swiper = new Swiper(".projects__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".projects__arrow-right",
    prevEl: ".projects__arrow-left",
  },
});
