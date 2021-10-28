if (document.querySelector('.product__stock-value')) {
  const STEP = 1;
  let MAX_VALUE;
  const MIN_VALUE = 1;

  const num = document.querySelector('.product__stock-value').innerHTML;

  MAX_VALUE = num;

  const btnPlus = document.querySelector('.plus');
  const btnMinus = document.querySelector('.minus');
  const field = document.querySelector('.product__quantity-value');
  let fieldValue;

  const onBtnMinusPress = () => {
    fieldValue = parseFloat(field.value);
    if (fieldValue > MIN_VALUE) {
      fieldValue -= STEP;
      field.setAttribute('value', fieldValue);
    }
  }

  const onBtnPlusPress = () => {
    fieldValue = parseFloat(field.value);
    if (fieldValue < MAX_VALUE) {
      fieldValue += STEP;
      field.setAttribute('value', fieldValue);
    }
  }

  const toAddCartCount = () => {
    field.setAttribute('value', MIN_VALUE);

    btnMinus.addEventListener('click', onBtnMinusPress);
    btnPlus.addEventListener('click', onBtnPlusPress);
  }

  toAddCartCount();

}


if (document.querySelector('.product__btn-add-cart')) {
  const addCartBtn = document.querySelector('.product__btn-add-cart');
  const addCartMessage = document.querySelector('.message');

  addCartBtn.addEventListener('click', () => {
    addCartMessage.classList.add('message--active');
  });
}



if (document.querySelector('.product-table__close-btn')) {
  const btnsDeleteProduct = document.querySelectorAll('.product-table__close-btn');
  const cartMessage = document.querySelector('.cart__message');
  const btnCancel = document.querySelector('.message__btn-cancel');
  const cartEmpryMessage = document.querySelector('.message--cart-empty');

  const cartWrap = document.querySelector('.cart__wrap');

  const checkProductCart = () => {
    if (document.querySelectorAll('.product-row').length == 0) {
      console.log(111)
      cartMessage.classList.add('message--active');
      cartEmpryMessage.classList.add('message--active');
      cartWrap.classList.add('cart__wrap--none');
    }
  }

  btnsDeleteProduct.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {
      evt.currentTarget.closest('.product-table__row').remove();
      checkProductCart();
    });
  })



  btnCancel.addEventListener('click', () => {
    cartMessage.classList.remove('message--active');
    cartEmpryMessage.classList.remove('message--active');
  })
}
