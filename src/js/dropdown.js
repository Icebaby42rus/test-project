const dropdown = document.querySelector(".js_dropdown");
const options = document.querySelectorAll(".js_options > .options-item");
const dropdownInput = document.querySelector("#general-dropdown");

const toggleDropdown = () => dropdown.classList.toggle("active");

const showValue = (value) => {
    dropdownInput.value = value;
		dropdown.classList.add("selected");
};
const handleOptionClick = (event) => {
    const { value } = event.currentTarget.dataset;
    showValue(value);

		options.forEach(option => option.classList.remove("selected"));
    event.currentTarget.classList.add("selected");
};
const removeSelectedValue = () => {
	dropdownInput.value = "";
	dropdownInput.classList.remove("selected");
};

dropdown.onclick = toggleDropdown;

options.forEach(option => {
    option.addEventListener("click", handleOptionClick);
});

window.onload = () => {
	removeSelectedValue()
};