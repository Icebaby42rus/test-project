/**
 * Обработчик события клика на тело документа.
 * Проверяет, соответствует ли цель события элементу с классом '.header__menu-btn' и добавляет или удаляет класс для открытия/закрытия меню,
 * а также добавляет или удаляет класс для скрытия прокрутки у body под меню.
 *
 * @event click
 * @type {Function}
 * @listens document.body
 * @param {Event} event - Объект события клика.
 */
document.body.addEventListener('click', (event) => {
  if (event.target.matches('.header__menu-btn')) {
    const menu = document.querySelector('.js_header__menu');
    menu.classList.toggle('opened');
    document.body.classList.toggle('menu-open');
  }
});