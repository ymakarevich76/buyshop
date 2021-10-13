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

const topProductSlider = new Swiper('.top-product-slider__inner', {
  navigation: {
    nextEl: '.top-product-slider__btn-next',
    prevEl: '.top-product-slider__btn-prev',
  },

  slidesPerView: 1,
});

const topCategorySlider = new Swiper('.top-category-slider__inner', {
  navigation: {
    nextEl: '.top-category-slider__btn-next',
    prevEl: '.top-category-slider__btn-prev',
  },

  slidesPerView: 4,
  spaceBetween: 20,
});
