import './index.html'
import './index.scss'

// MENU
const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__menu-btn')

menuBtn.addEventListener('click', function () {
	menu.classList.toggle('opened')
})

// TABS
document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tabs-navigation input[type="radio"]')
	const tabContents = document.querySelectorAll('.tab-content')

  tabs[0].checked = true;

	tabs.forEach(tab => {
		tab.addEventListener('change', function () {
			const targetId = this.getAttribute('id').replace('tab-', '')
			tabContents.forEach(content => {
				if (content.getAttribute('id') === targetId + '-content') {
					content.classList.add('active')
				} else {
					content.classList.remove('active')
				}
			})
		})
	})
})

// INPUT
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