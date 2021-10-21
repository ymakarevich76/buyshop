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

const topProductSlider = new Swiper('.top-product__slider', {
  navigation: {
    nextEl: '.top-product__btn-next',
    prevEl: '.top-product__btn-prev',
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
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  }
});

const reviewsSlider = new Swiper('.reviews-aside__slider', {
  pagination: {
    el: '.reviews-aside__pagination',
    clickable: true,
  },

  slidesPerView: 1,
});

const timerSlider = new Swiper('.timer__slider', {

  slidesPerView: 1,
  // loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
  }
});

const bestSellingSlider = new Swiper('.best-selling__slider', {
  navigation: {
    nextEl: '.best-selling__btn-next',
    prevEl: '.best-selling__btn-prev',
  },

  slidesPerView: 1,
});

const newArrivalSlider = new Swiper('.new-arrival__slider', {
  navigation: {
    nextEl: '.new-arrival__btn-next',
    prevEl: '.new-arrival__btn-prev',
  },

  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3
    },
  }
});

const newsSlider = new Swiper('.news__slider', {
  navigation: {
    nextEl: '.news__btn-next',
    prevEl: '.news__btn-prev',
  },

  spaceBetween: 20,

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 2
    },
  }
});

const vendorsSlider = new Swiper('.vendors__slider', {
  slidesPerView: 7,
  loop: true,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    320: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 5
    },
    1200: {
      slidesPerView: 7
    },
  }
});
