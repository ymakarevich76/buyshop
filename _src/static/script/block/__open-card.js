if (document.querySelector('.card')) {
  const cardLinks = document.querySelectorAll('.card__link');

  cardLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (e.target.closest('.card__links-hover') || e.target.closest('.card__links')) {
        e.preventDefault();
      }
    })
  })
}
