document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
});