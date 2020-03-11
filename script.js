const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNav = document.createElement('div');
mobileNav.className = 'mobile-nav';
const navBar = document.querySelector('header');

hamburger.addEventListener('click', () => {
  hamburger.className = hamburger.className === 'fas fa-bars fa-lg' ?
    'fas fa-times fa-lg' :
    'fas fa-bars fa-lg';
  navBar.appendChild(mobileNav);
  navLinks.forEach( navLink => { 
    navLink.classList.toggle('is-active');
    mobileNav.appendChild(navLink); 
  });
});
