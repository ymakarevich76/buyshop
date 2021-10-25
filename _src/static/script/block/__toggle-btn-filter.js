
if (document.querySelector('.shop__view-btn')) {
  const viewBtns = document.querySelectorAll('.shop__view-btn');
  const viewCatalogs = document.querySelectorAll('.shop__content');

  viewBtns.forEach((viewBtn, index) => {
    viewBtn.addEventListener('click', (evt) => {

      viewBtns.forEach((viewBtn) => {
        viewBtn.classList.remove('shop__view-btn--active');
      });

      evt.currentTarget.classList.add('shop__view-btn--active');

      viewCatalogs.forEach((viewCatalog) => {
        viewCatalog.classList.toggle('shop__content--active')
      });
    })
  });
}
