
/**
 * This function is an event listener for the "DOMContentLoaded" event. It selects all radio buttons on the page and sets their "checked" property to false.
 */
document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
});