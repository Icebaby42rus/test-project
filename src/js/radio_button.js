/**
 * Функция является слушателем события "DOMContentLoaded", которая выбирате все переключатели на странице и устанавливает свойство "checked" в false.
 * @event DOMContentLoaded
 * @type {Function}
 * @listens document
 */
document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');

/**
 * Перебирает каждую радиокнопку и снимает у нее флажок.
 *
 * @callback radioButtonIterationCallback
 * @param {HTMLInputElement} radioButton - Текущая радиокнопка в итерации.
 * @returns {void}
 */
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
});