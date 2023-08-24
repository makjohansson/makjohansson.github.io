const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navbarlinks = document.getElementsByClassName('navbar-links')[0];

hamburgerButton.addEventListener('click', () => {
  navbarlinks.classList.toggle('active');
});
