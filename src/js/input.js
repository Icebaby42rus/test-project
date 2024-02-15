let input = document.getElementById('general-field')

input.oninput = function() {
  document.querySelector('.general-field').style.borderBottomWidth = 4 + "px";
  document.querySelector('.general-field').style.borderBottomColor = "#3E29E3";
};

input.onblur = function() {
  document.querySelector('.general-field').style.borderBottomWidth = 2 + "px";
  document.querySelector('.general-field').style.borderBottomColor = "#AEADAE";

  if (!input.value.includes('@')) {
    document.querySelector('.general-field').classList.add('invalid');
    document.querySelector('.general-field').style.borderBottomWidth = 4 + "px";
    document.querySelector('.general-field').style.borderBottomColor = "#E80F3B";
  }
}

input.onfocus = function() {
  if (document.querySelector('.general-field').classList.contains('invalid')) {
    document.querySelector('.general-field').classList.remove('invalid');
  }
};