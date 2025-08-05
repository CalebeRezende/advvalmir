// Simple site-wide JavaScript.
//
// Handles mobile menu toggle by adding/removing the `open` class to the
// navigation list and toggling an `active` class on the hamburger button.

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('nav ul');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      toggle.classList.toggle('active');
    });
  }
});