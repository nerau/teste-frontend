'use strict';

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
  hamburger.className = hamburger.className === 'fas fa-bars fa-lg' ?
    'fas fa-times fa-lg' :
    'fas fa-bars fa-lg';
  navLinks = document.querySelectorAll('.nav-link');
  console.log(navLinks);
});
