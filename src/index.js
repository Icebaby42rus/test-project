import './index.html'
import './index.scss'

const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__menu-btn');

menuBtn.addEventListener('click', function() {
  menu.classList.toggle("opened");
  // menuList.classList.toggle('menu__list_visible');
});

// const menuBtn = document.querySelector('.header__menu');
// const menuContent = document.querySelector('.menu__list');

// menuBtn.addEventListener('click', () => {
//   menuBtn.classList.toggle('menu__burger_open');
//   menuList.classList.toggle('menu__list_visible');
// });
