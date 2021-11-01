const hamburger = document.querySelector('.header__icon-menu');
const nav = document.querySelector('.header__nav');
const btnClose = document.querySelector('.header__icon-close');
const body = document.querySelector('body');

const openMenu = () => {
  body.classList.add('fixed');
  nav.classList.add('header__nav--active');
  hamburger.classList.add('icon__menu--active');
};

const closeMenu = () => {
  body.classList.remove('fixed');
  nav.classList.remove('header__nav--active');
  hamburger.classList.remove('icon__menu--active');
}

hamburger.addEventListener('click', () => {
  openMenu();
});

btnClose.addEventListener('click', () => {
  closeMenu();
});

nav.addEventListener('click', (evt) => {
  if (evt.target === nav) {
    closeMenu();
  }
});



if (document.querySelector('.header__cat-btn')) {
  const headerCategoryBtn = document.querySelector('.header__cat-btn');

  headerCategoryBtn.addEventListener('click', () => {
    headerCategoryBtn.classList.toggle('header__cat-btn--active');
  })
}
