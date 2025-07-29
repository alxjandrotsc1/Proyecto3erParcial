document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu = document.getElementById('toggleMenu');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu.querySelectorAll('a');

  toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('activo');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('activo');
    });
  });
});
