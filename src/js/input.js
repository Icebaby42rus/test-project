/**
 * Элемент ввода.
 *
 * @constant {HTMLElement} input - Элемент ввода текста.
 * @constant {HTMLElement} generalField - ОСновное поле ввода.
 */

const input = document.getElementById('general-field');
const generalField = document.querySelector('.js_general-field');

/**
 * Обработчик события ввода текста в элемент ввода.
 *
 * @event input
 * @type {Function}
 * @listens input
 */
input.oninput = function() {
  styleInput(4, "#3E29E3");
};

/**
 * Обработчик события потери фокуса элементом ввода.
 *
 * @event blur
 * @type {Function}
 * @listens input
 */
input.onblur = function() {
  styleInput(2, "#AEADAE");
  
  if (!input.value.includes('@')) {
    generalField.classList.add('invalid');
    styleInput(4, "#E80F3B");
  }
};

/**
 * Обработчик события получения фокуса элементом ввода.
 *
 * @event focus
 * @type {Function}
 * @listens input
 */
input.onfocus = function() {
  if (generalField.classList.contains('invalid')) {
    generalField.classList.remove('invalid');
  }
};

/**
 * Устанавливает стили для основного поля ввода.
 *
 * @function styleInput
 * @param {number} borderWidth - Ширина границы.
 * @param {string} borderColor - Цвет границы.
 * @returns {void}
 */
function styleInput(borderWidth, borderColor) {
  generalField.style.borderBottomWidth = borderWidth + "px";
  generalField.style.borderBottomColor = borderColor;
}