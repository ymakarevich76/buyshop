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

  btnsDeleteProduct.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      cartMessage.classList.add('message--active');
      cartEmpryMessage.classList.add('message--active');
    });
  })

  btnCancel.addEventListener('click', () => {
    cartMessage.classList.remove('message--active');
    cartEmpryMessage.classList.remove('message--active');
  })
}
