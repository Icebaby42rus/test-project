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