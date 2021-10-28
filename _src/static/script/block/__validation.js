$.mask.definitions['9'] = true;
$.mask.definitions['9'] = "[0-9]";

$("#phone-checkout").mask("+7(999)999-99-99");

$("#center_ok").click(function () {
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
$("#center_not_ok").mask("+7(999)999-99-99");
