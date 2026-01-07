(function () {
  // Highlight active nav link
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a => {
    const target = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
    if (target === here) a.classList.add('active');
  });

  // Accordions (Parti de la probleme)
  document.querySelectorAll('[data-accordion]').forEach(root => {
    root.querySelectorAll('.acc-head').forEach(btn => {
      btn.addEventListener('click', () => {
        const body = btn.parentElement.querySelector('.acc-body');
        const isOpen = body.classList.contains('open');
        // close siblings
        root.querySelectorAll('.acc-body.open').forEach(b => {
          b.classList.remove('open');
          b.previousElementSibling?.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          body.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });

  // Set footer year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
