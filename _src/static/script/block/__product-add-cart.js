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
