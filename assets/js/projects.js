import { projects } from './projects-data.js';
import { illustration } from './illustrations.js';
import { escapeHtml as e, safeUrl } from './utils.js';

export function renderCard(project) {
  const cover = project.coverImage && safeUrl(project.coverImage.src)
    ? `<img src="${safeUrl(project.coverImage.src)}" alt="${e(project.coverImage.alt || project.title)}" loading="lazy" width="600" height="400"${project.coverImage.fit === 'contain' ? ' style="object-fit: contain"' : ''}>`
    : illustration(project.art);
  return `<article class="project-card" data-project="${e(project.slug)}"><a class="project-card-link" href="${project.showInternalDetails ? `project.html?project=${encodeURIComponent(project.slug)}` : safeUrl(project.githubUrl)}" data-project-preview="${e(project.slug)}" aria-haspopup="dialog"><div class="project-cover">${cover}</div><div class="project-card-body"><div class="project-meta"><span class="badge badge-accent">${e(project.filter)}</span>${project.featured ? '<span class="badge badge-warm">Featured</span>' : ''}${project.year ? `<span class="date">${e(project.year)}</span>` : ''}</div><h3>${e(project.title)}</h3><p>${e(project.description)}</p><div class="tags">${project.technologies.slice(0,3).map(tag => `<span class="tag">${e(tag)}</span>`).join('')}</div></div></a></article>`;
}

export function initProjects() {
  document.querySelectorAll('[data-project-grid]').forEach(grid => {
    const entries = projects.filter(project => grid.dataset.projectGrid === 'featured' ? project.featured : project.tracks.includes(grid.dataset.projectGrid)).sort((a,b) => Number(b.featured)-Number(a.featured));
    const render = (filter='All') => {
      grid.innerHTML = entries.filter(project => filter === 'All' || project.filter === filter).map(renderCard).join('');
      document.dispatchEvent(new Event('portfolio:projects'));
    };
    render();
    const filters = document.querySelector('[data-project-filters]');
    if (!filters) return;
    const categories = ['All',...new Set(entries.map(project => project.filter))];
    filters.innerHTML = categories.map((label,index) => `<button type="button" class="filter-button" data-filter="${e(label)}" aria-pressed="${index===0}" aria-controls="${e(grid.id)}">${e(label)}<span class="count">${label==='All'?entries.length:entries.filter(project=>project.filter===label).length}</span></button>`).join('');
    filters.addEventListener('click',event => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed',String(item===button)));
      render(button.dataset.filter);
    });
  });
}
