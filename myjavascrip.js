// Small site-wide JS: mobile menu toggle and safe helpers
(function () {
  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return document.querySelectorAll(sel); }

  // Mobile menu toggle
  const mobileBtn = qs('#mobileMenuBtn');
  const navLinks = qs('#navLinks');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      mobileBtn.classList.toggle('open');
    });

    qsa('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileBtn.classList.remove('open');
      });
    });
  }

  // Simple DOMReady wrapper for later use
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    // Placeholder: can add future site init code here
  });
})();
