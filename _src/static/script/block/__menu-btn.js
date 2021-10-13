if (document.querySelector('.header__btn-account')) {
  const account = document.querySelector('.header__btn-account');
  account.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('header__btn-account--active');
  });
}

if (document.querySelector('.header__btn-cart')) {
  const cart = document.querySelector('.header__btn-cart');
  cart.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('header__btn-cart--active');
  });
}

if (document.querySelector('.header__select-toggle')) {
  const toggle = document.querySelector('.header__select-toggle');
  toggle.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('header__select-toggle--active');
  });
}

if (document.querySelector('.menu-aside__link')) {
  const arrowsMenu = document.querySelectorAll('.menu-aside__link');
  arrowsMenu.forEach((arrow, index) => {
    arrow.addEventListener('click', (evt) => {
      evt.currentTarget.classList.toggle('menu-aside__link--active');
    })
  });
}
