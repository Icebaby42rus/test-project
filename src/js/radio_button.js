
/**
 * Функция является слушателем события "DOMContentLoaded", которая выбирате все переключатели на странице и устанавливает свойство "checked" в false.
 */
document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
});