document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.js_accordion-btn');

  accordions.forEach(function(accordion) {
    const panel = accordion.nextElementSibling;

    accordion.addEventListener('click', function() {
      accordion.classList.toggle('active');
      panel.classList.toggle('active');

      if (panel.classList.contains('active')) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = null;
      }
    });
  });
});