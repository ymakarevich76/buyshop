const promoSlider = new Swiper('.promo-slider', {
  loop: true,

  pagination: {
    el: '.promo-slider__pagination',
    clickable: true,
  },

  slidesPerView: 1,

  autoplay: {
    delay: 5000,
  },
});

const topProductSlider = new Swiper('.top-product-slider', {
  navigation: {
    nextEl: '.top-product-slider__btn-next',
    prevEl: '.top-product-slider__btn-prev',
  },

  slidesPerView: 1,
});
