/**
 * Обработчик события клика на меню.
 * Добавляет или удаляет класс для открытия/закрытия меню,
 * а также добавляет или удаляет класс для скрытия прокрутки под меню у body .
 *
 * @event click
 * @type {Function}
 * @listens menuBtn
 * @param {Event} event - Объект события клика.
 */
const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__menu-btn');

menuBtn.addEventListener('click', function () {
	menu.classList.toggle('opened');
	document.body.classList.toggle('menu-open');
})