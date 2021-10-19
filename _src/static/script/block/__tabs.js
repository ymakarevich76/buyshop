if (document.querySelector('.tabs__btn')) {
  const tabs = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (evt) => {

      tabs.forEach((tab) => {
        tab.classList.remove('tabs__btn--active');
      });

      evt.currentTarget.classList.add('tabs__btn--active');

      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('tabs__content--active')
      });

      tabsContent[index].classList.add('tabs__content--active');

    })
  });
}


if (document.querySelector('.tabs-category__btn')) {
  const tabs = document.querySelectorAll('.tabs-category__btn');
  const tabsContent = document.querySelectorAll('.tabs-category__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (evt) => {

      tabs.forEach((tab) => {
        tab.classList.remove('tabs-category__btn--active');
      });

      evt.currentTarget.classList.add('tabs-category__btn--active');

      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('tabs-category__content--active')
      });

      tabsContent[index].classList.add('tabs-category__content--active');

    })
  });
}
