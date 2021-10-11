if (document.querySelector('.header__btn-account')) {
  const account = document.querySelector('.header__btn-account');
  account.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('header__btn-account--active');
  });
}

if (document.querySelector('.header__btn-cart')) {
  const account = document.querySelector('.header__btn-cart');
  account.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('header__btn-cart--active');
  });
}
