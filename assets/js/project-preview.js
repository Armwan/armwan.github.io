import { projects } from './projects-data.js';
import { escapeHtml as e, safeUrl, externalLink } from './utils.js';

export function initProjectPreview() {
  if (!document.querySelector('[data-project-grid]')) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'project-dialog';
  dialog.id = 'project-preview';
  dialog.setAttribute('aria-labelledby','project-preview-title');
  dialog.innerHTML = '<button type="button" class="dialog-close" aria-label="Close project details">×</button><div data-preview-content></div>';
  document.body.append(dialog);
  const imageDialog = document.createElement('dialog');
  imageDialog.className = 'media-dialog';
  imageDialog.setAttribute('aria-label', 'Enlarged project image');
  imageDialog.innerHTML = '<button type="button" class="icon-button" data-close-image aria-label="Close enlarged image">×</button><img alt=""><p></p>';
  document.body.append(imageDialog);
  let imageTrigger;
  dialog.addEventListener('click', event => {
    const button = event.target.closest('[data-preview-image]');
    if (!button) return;
    imageTrigger = button;
    imageDialog.querySelector('img').src = button.dataset.previewImage;
    imageDialog.querySelector('img').alt = button.dataset.imageAlt;
    imageDialog.querySelector('p').textContent = button.dataset.imageCaption;
    imageDialog.showModal();
  });
  imageDialog.querySelector('[data-close-image]').addEventListener('click', () => imageDialog.close());
  imageDialog.addEventListener('click', event => { if (event.target === imageDialog) imageDialog.close(); });
  imageDialog.addEventListener('close', () => {
    imageDialog.querySelector('img').removeAttribute('src');
    imageTrigger?.focus();
  });
  let trigger;

  const open = (slug, source) => {
    const project = projects.find(item => item.slug === slug);
    if (!project || typeof dialog.showModal !== 'function') return false;
    trigger = source || document.querySelector(`[data-project-preview="${project.slug}"]`);
    const previewImages = project.coverImage && safeUrl(project.coverImage.src) ? [project.coverImage] : project.gallery;
    const gallery = previewImages.filter(item => safeUrl(item.src)).map(item => `<figure><button type="button" class="image-zoom" data-preview-image="${safeUrl(item.src)}" data-image-alt="${e(item.alt || item.caption || project.title)}" data-image-caption="${e(item.caption)}" aria-label="Enlarge image: ${e(item.alt || item.caption || project.title)}"><img src="${safeUrl(item.src)}" alt="${e(item.alt || item.caption || project.title)}" loading="lazy"></button>${item.caption ? `<figcaption>${e(item.caption)}</figcaption>` : ''}</figure>`).join('');
    const videos = project.videos.filter(item => safeUrl(item.src)).map(item => `<figure><video controls controlslist="nodownload" playsinline preload="none" aria-label="${e(item.title || project.title)}"${item.poster && safeUrl(item.poster) ? ` poster="${safeUrl(item.poster)}"` : ''}><source src="${safeUrl(item.src)}" type="${e(item.type || (item.src.endsWith('.webm')?'video/webm':'video/mp4'))}">${item.captions && safeUrl(item.captions) ? `<track kind="captions" src="${safeUrl(item.captions)}" srclang="en" label="English" default>` : ''}</video>${item.caption ? `<figcaption>${e(item.caption)}</figcaption>` : ''}</figure>`).join('');
    dialog.querySelector('[data-preview-content]').innerHTML = `<div class="dialog-content"><div class="project-meta"><span class="badge badge-accent">${e(project.category)}</span>${project.year ? `<span class="date">${e(project.year)}</span>` : ''}</div><h2 id="project-preview-title">${e(project.title)}</h2><p class="dialog-summary">${e(project.overview)}</p><div class="tags">${project.technologies.map(tag => `<span class="tag">${e(tag)}</span>`).join('')}</div>${gallery || videos ? `<div class="dialog-media">${gallery}${videos}</div>` : ''}<div class="button-row">${project.showInternalDetails ? `<a class="link-chip" href="project.html?project=${encodeURIComponent(project.slug)}">Full project details →</a>` : ''}${project.githubUrl ? externalLink(project.githubUrl,'GitHub','link-chip') : ''}${project.projectUrl ? externalLink(project.projectUrl,'Documentation','link-chip') : ''}${project.documents.map(document => externalLink(document.src,document.title || 'Project document','link-chip')).join('')}</div></div>`;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
    history.replaceState(null,'',`#project-${project.slug}`);
    return true;
  };
  document.addEventListener('click',event => {
    const link = event.target.closest('[data-project-preview]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (open(link.dataset.projectPreview,link)) event.preventDefault();
  });
  dialog.querySelector('.dialog-close').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close',() => {
    if (imageDialog.open) imageDialog.close();
    dialog.querySelectorAll('video').forEach(video => video.pause());
    document.body.classList.remove('dialog-open');
    if (location.hash.startsWith('#project-')) history.replaceState(null,'','#projects');
    if (trigger?.isConnected) trigger.focus({preventScroll:true});
  });
  const restore = () => {
    if (location.hash.startsWith('#project-')) {
      try { open(decodeURIComponent(location.hash.slice(9))); } catch { /* Ignore malformed external hashes. */ }
    }
    else if (dialog.open) dialog.close();
  };
  addEventListener('hashchange',restore);
  restore();
}
