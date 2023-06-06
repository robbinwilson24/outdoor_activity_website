 // change the class of the navbar when the user scrolls down
window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var nav = document.querySelector('.mainNav');
      nav.classList.toggle('scrolled', window.pageYOffset > 0);
    });
  });
  