document.addEventListener('DOMContentLoaded', () => {

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 991 && !link.closest('.has-dropdown')) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      }
    });
  });

  const dropdownParent = document.querySelector('.has-dropdown > a');
  dropdownParent.addEventListener('click', (e) => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      dropdownParent.parentElement.classList.toggle('open');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    }
  });

});
