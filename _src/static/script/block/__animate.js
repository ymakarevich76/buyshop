if (document.querySelector('.card__hover-wrap-img')) {
  const imgs = document.querySelectorAll('.card__hover-wrap-img');
  const cards = document.querySelectorAll('.card__hover');

  cards.forEach((card, index) => {
    card.onmouseover = function () {
      imgs.forEach((img, index) => {
        img.classList.add('animate-fadeInDown');
        img.classList.remove('animate-fadeInUp');
      })
    }
    card.onmouseout = function (e) {
      imgs.forEach((img, index) => {
        img.classList.remove('animate-fadeInDown');
        img.classList.add('animate-fadeInUp');
      })
    }
  })
}


if (document.querySelector('.new-arrival__hover-wrap-img')) {
  const imgs = document.querySelectorAll('.new-arrival__hover-wrap-img');
  const cards = document.querySelectorAll('.new-arrival__card');

  cards.forEach((card, index) => {
    card.onmouseover = function () {
      imgs.forEach((img, index) => {
        img.classList.add('animate-fadeInDown');
        img.classList.remove('animate-fadeInUp');
      })
    }
    card.onmouseout = function (e) {
      imgs.forEach((img, index) => {
        img.classList.remove('animate-fadeInDown');
        img.classList.add('animate-fadeInUp');
      })
    }
  })
}
