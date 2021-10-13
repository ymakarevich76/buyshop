const swiper = new Swiper('.image-slider', {
  loop: true,

  pagination: {
    el: '.image-slider__pagination',
  },

  slidesPerView: 1,

  autoplay: {
    delay: 5000,
  },
});
