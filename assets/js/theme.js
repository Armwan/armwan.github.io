// Applied in <head> before CSS to avoid a flash of the wrong theme.
(() => {
  let theme = 'light';
  try {
    const saved = localStorage.getItem('arman-theme');
    if (saved === 'dark' || saved === 'light') theme = saved;
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
  } catch { /* Storage may be disabled; the toggle still works. */ }
  document.documentElement.dataset.theme = theme;
})();
