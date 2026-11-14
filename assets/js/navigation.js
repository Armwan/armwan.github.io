export function initNavigation() {
  const button = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('#main-navigation');
  if (!button || !menu) return;
  const close = () => {
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','Open navigation menu');
    menu.classList.remove('is-open');
    button.querySelector('path').setAttribute('d','M2 5h20M2 12h20M2 19h20');
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
    menu.classList.toggle('is-open',open);
    button.querySelector('path').setAttribute('d',open?'M5 5l14 14M19 5 5 19':'M2 5h20M2 12h20M2 19h20');
  });
  menu.addEventListener('click',event => { if (event.target.closest('a')) close(); });
  document.addEventListener('click',event => { if (!event.target.closest('.site-header')) close(); });
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { close(); button.focus(); }
  });
  window.matchMedia('(min-width: 821px)').addEventListener('change',close);
}

export function initSectionTracking() {
  const links = [...document.querySelectorAll('[data-section-link]')];
  const targets = links.map(link => ({ link, target: document.getElementById(link.hash.slice(1)) })).filter(item => item.target);
  if (!targets.length) return;
  let queued = false;
  const update = () => {
    queued = false;
    const position = Math.max(80, innerHeight * .45);
    let active;
    let closest = -Infinity;
    for (const item of targets) {
      const top = item.target.getBoundingClientRect().top;
      if (top <= position && top > closest) { active = item; closest = top; }
    }
    for (const item of targets) {
      item.link.classList.toggle('is-active', item === active);
      if (item === active) item.link.setAttribute('aria-current','location');
      else item.link.removeAttribute('aria-current');
    }
  };
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule);
  document.addEventListener('portfolio:projects',schedule);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(schedule);
    targets.forEach(item => observer.observe(item.target));
  }
  update();
}
