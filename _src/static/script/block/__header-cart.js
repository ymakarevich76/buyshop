if (document.querySelector('.header__account-sub')) {
  let count = document.querySelector('.header__account-sub--count');
  const addCarts = document.querySelectorAll('.card__link--cart');

  const headerCart = document.querySelector('.header__cart');
  const headerCartMessage = document.querySelector('.header__account-cart-message');
  const btnClose = document.querySelector('.header__product-btn-close');

  addCarts.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {

      evt.currentTarget.classList.add('card__link--active');

      if (count.innerHTML >= 0) {
        let test = count.innerHTML;
        test++;
        count.innerHTML = test;

        headerCart.classList.add('header__cart--active');
        headerCartMessage.classList.add('header__account-cart-message--none');
      }
    })
  })


  const onBtnDeleteProduct = () => {
    addCarts.forEach((btn, index) => {
      btn.classList.remove('card__link--active');
    })
    if (count.innerHTML = 0) {
      let test = count.innerHTML;
      test = 0;
      count.innerHTML = test;
    }
    headerCart.classList.remove('header__cart--active');
    headerCartMessage.classList.remove('header__account-cart-message--none');
  }

  btnClose.addEventListener('click', onBtnDeleteProduct)

}

