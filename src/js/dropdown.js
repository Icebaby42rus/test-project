/**
 * Обработчик выпадающего списка.
 *
 * @constant {Element} dropdown - Элемент выпадающего списка.
 * @constant {NodeList<Element>} options - Коллекция элементов опций выпадающего списка.
 * @constant {HTMLElement} dropdownInput - Элемент для отображения выбранного значения выпадающего списка.
 */
const dropdown = document.querySelector(".js_dropdown");
const options = document.querySelectorAll(".js_options > .options-item");
const dropdownInput = document.querySelector("#general-dropdown");

/**
 * Переключает состояние активности выпадающего списка.
 *
 * @function toggleDropdown
 * @returns {void}
 */
const toggleDropdown = () => dropdown.classList.toggle("active");

/**
 * Отображает выбранное значение в элементе выпадающего списка.
 *
 * @function showValue
 * @param {string} value - Выбранное значение.
 * @returns {void}
 */
const showValue = (value) => {
    dropdownInput.value = value;
		dropdown.classList.add("selected");
};

/**
 * Обрабатывает клик по опции выпадающего списка.
 *
 * @function handleOptionClick
 * @param {Event} event - Объект события клика.
 * @returns {void}
 */
const handleOptionClick = (event) => {
    const { value } = event.currentTarget.dataset;
    showValue(value);

		options.forEach(option => option.classList.remove("selected"));
    event.currentTarget.classList.add("selected");
};

/**
 * Удаляет выбранное значение из элемента выпадающего списка.
 *
 * @function removeSelectedValue
 * @returns {void}
 */
const removeSelectedValue = () => {
	dropdownInput.value = "";
	dropdownInput.classList.remove("selected");
};

/**
 * Устанавливает обработчик события click на выпадающий список.
 *
 * @event click
 * @type {Function}
 * @listens dropdown
 */
dropdown.onclick = toggleDropdown;

/**
 * Устанавливает обработчики событий click на опции выпадающего списка.
 *
 * @event click
 * @type {Function}
 * @listens options
 */
options.forEach(option => {
    option.addEventListener("click", handleOptionClick);
});

/**
 * Удаления выбранного значения при загрузке окна.
 *
 * @event load
 * @type {Function}
 * @listens window
 */
window.onload = () => {
	removeSelectedValue()
};