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