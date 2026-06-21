/* NOKSHA — DARK/LIGHT MODE
   Auto-matches system preference on first load, then a manual switch
   in the header lets the visitor override it. Choice is saved. */
(function () {
  const root = document.documentElement;
  const KEY = 'noksha_theme';

  function apply(mode) {
    root.setAttribute('data-theme', mode);
    document.querySelectorAll('.theme-switch').forEach(el => {
      el.classList.toggle('is-dark', mode === 'dark');
      el.setAttribute('aria-checked', mode === 'dark' ? 'true' : 'false');
    });
  }

  const saved = localStorage.getItem(KEY);
  if (saved === 'dark' || saved === 'light') {
    apply(saved);
  } else {
    apply(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const sysListener = (e) => { if (!localStorage.getItem(KEY)) apply(e.matches ? 'dark' : 'light'); };
  if (mql.addEventListener) mql.addEventListener('change', sysListener);
  else if (mql.addListener) mql.addListener(sysListener);

  window.toggleNokshaTheme = function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    localStorage.setItem(KEY, next);
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-switch').forEach(el => {
      el.classList.toggle('is-dark', root.getAttribute('data-theme') === 'dark');
      el.addEventListener('click', window.toggleNokshaTheme);
    });
  });
})();
