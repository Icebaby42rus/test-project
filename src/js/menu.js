document.body.addEventListener('click', (event) => {
  if (event.target.matches('.header__menu-btn')) {
    const menu = document.querySelector('.js_header__menu');
    menu.classList.toggle('opened');
    document.body.classList.toggle('menu-open');
  }
});