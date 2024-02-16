let input = document.getElementById('general-field');
let generalField = document.querySelector('.general-field');

input.oninput = function() {
  styleInput(4, "#3E29E3");
};

input.onblur = function() {
  styleInput(2, "#AEADAE");
  
  if (!input.value.includes('@')) {
    generalField.classList.add('invalid');
    styleInput(4, "#E80F3B");
  }
};

input.onfocus = function() {
  if (generalField.classList.contains('invalid')) {
    generalField.classList.remove('invalid');
  }
};

function styleInput(borderWidth, borderColor) {
  generalField.style.borderBottomWidth = borderWidth + "px";
  generalField.style.borderBottomColor = borderColor;
}