const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__menu-btn');

menuBtn.addEventListener('click', function () {
	menu.classList.toggle('opened');
	document.body.classList.toggle('menu-open');
})