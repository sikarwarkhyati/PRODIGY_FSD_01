// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to add 'scrolled' class when the page is scrolled
window.onscroll = function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
