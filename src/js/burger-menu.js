const burgerMenu = document.querySelector('.header__menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("header__menu-opened");
  this.classList.toggle("header__menu-closed");
});