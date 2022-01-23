// Switch mobile menu
const mobileMenuButton = document.querySelector('.mob-menu-switch');
const mobileMenu = document.querySelector('.header-right nav');

mobileMenuButton.addEventListener('click', function (e) {
  e.preventDefault();
  mobileMenu.classList.toggle('active');
  mobileMenuButton.classList.toggle('active');
});