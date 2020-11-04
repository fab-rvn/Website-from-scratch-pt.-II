const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarLinks = document.getElementById('navbar-links');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('rotate');
  navbarLinks.classList.toggle('active');
})