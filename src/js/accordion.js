document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.js_accordion-btn');

  accordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
      this.classList.toggle('active');

      const panel = this.nextElementSibling;
      panel.classList.toggle('active');

      if (panel.classList.contains('active')) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = null;
      }
    });
  });
});