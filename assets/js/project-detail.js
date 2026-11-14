import { projects } from './projects-data.js';
import { illustration } from './illustrations.js';
import { escapeHtml as e, safeUrl, externalLink } from './utils.js';

function content(value, prompt) {
  return value ? `<p class="prose">${e(value)}</p>` : `<p class="editorial-placeholder">${e(prompt)}</p>`;
}

function imageFigure(item, loading = 'lazy', title = '') {
  const hasDimensions = Number.isFinite(item.width) && item.width > 0 && Number.isFinite(item.height) && item.height > 0;
  const width = hasDimensions ? item.width : 900;
  const height = hasDimensions ? item.height : 600;
  const styles = item.fullWidth ? ['grid-column: 1 / -1'] : [];
  if (Number.isFinite(item.maxDisplayWidth) && item.maxDisplayWidth > 0) styles.push('width: 100%', `max-width: ${item.maxDisplayWidth}px`, 'justify-self: center');
  return `<figure class="media-figure"${styles.length ? ` style="${styles.join('; ')}"` : ''}>${item.title ? `<h3>${e(item.title)}</h3>` : ''}<button type="button" class="image-zoom" data-image-src="${safeUrl(item.src)}" data-image-alt="${e(item.alt)}" data-image-caption="${e(item.caption)}" aria-label="Open full-size image: ${e(item.alt || item.caption || title)}"><img src="${safeUrl(item.src)}" alt="${e(item.alt)}" loading="${loading}" width="${width}" height="${height}"${item.fullWidth ? ` style="aspect-ratio: ${hasDimensions ? `${width} / ${height}` : 'auto'}; height: auto"` : ''}></button>${item.caption ? `<figcaption>${e(item.caption)}</figcaption>` : ''}</figure>`;
}

function mediaGallery(project) {
  const images = project.gallery.filter(item => safeUrl(item.src)).map(item => imageFigure(item, 'lazy', project.title));
  const videos = project.videos.filter(item => safeUrl(item.src)).map(item => {
    const hasDimensions = Number.isFinite(item.width) && item.width > 0 && Number.isFinite(item.height) && item.height > 0;
    const size = hasDimensions ? ` width="${item.width}" height="${item.height}"` : '';
    const style = item.fullWidth && hasDimensions ? ` style="aspect-ratio: ${item.width} / ${item.height}; height: auto"` : '';
    return `<figure class="media-figure"${item.fullWidth ? ' style="grid-column: 1 / -1"' : ''}>${item.title ? `<h3>${e(item.title)}</h3>` : ''}<video controls controlslist="nodownload" preload="none" playsinline${size}${style} aria-label="${e(item.title || 'Project video')}"${safeUrl(item.poster) ? ` poster="${safeUrl(item.poster)}"` : ''}><source src="${safeUrl(item.src)}" type="${e(item.type || (item.src.endsWith('.webm') ? 'video/webm' : 'video/mp4'))}">${item.captions && safeUrl(item.captions) ? `<track kind="captions" src="${safeUrl(item.captions)}" srclang="en" label="English" default>` : ''}Your browser does not support this video.</video>${item.caption ? `<figcaption>${e(item.caption)}</figcaption>` : ''}</figure>`;
  });
  if (images.length || videos.length) return `<div class="gallery">${[...images, ...videos].join('')}</div>`;
  return `<div class="media-placeholder">${illustration(project.art)}<p>Abstract illustration. Project photographs, technical figures, and prototype video will be added.</p></div>`;
}

function initLightbox() {
  const dialog = document.querySelector('.media-dialog');
  let lastTrigger;
  document.querySelectorAll('[data-image-src]').forEach(button => {
    button.addEventListener('click', () => {
      lastTrigger = button;
      dialog.querySelector('img').src = button.dataset.imageSrc;
      dialog.querySelector('img').alt = button.dataset.imageAlt;
      dialog.querySelector('p').textContent = button.dataset.imageCaption;
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });
  dialog.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    dialog.querySelector('img').removeAttribute('src');
    lastTrigger?.focus();
  });
}

export function initProjectDetail() {
  const slug = new URLSearchParams(location.search).get('project');
  const project = projects.find(item => item.slug === slug);
  const target = document.querySelector('[data-project-detail]');
  if (!project) {
    document.title = 'Project not found — Arman Mirzaei';
    target.innerHTML = '<div class="container section"><h1>Project not found</h1><p style="margin-block: var(--space-5)">This project link is incomplete or no longer available.</p><div class="button-row"><a class="button button-primary" href="embedded.html">Embedded Systems →</a><a class="button" href="research.html">Research →</a></div></div>';
    return;
  }
  document.title = `${project.title} — Arman Mirzaei`;
  document.querySelector('meta[name="description"]').content = project.description;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = project.description;
  const primaryTrack = project.tracks[0];
  const trackLabel = primaryTrack === 'embedded' ? 'Embedded Systems' : 'Research';
  const siblings = projects.filter(item => item.tracks.includes(primaryTrack));
  const index = siblings.findIndex(item => item.slug === slug);
  const previous = siblings[index - 1];
  const next = siblings[index + 1];
  const publication = project.publication && safeUrl(project.publication.url) ? project.publication : null;
  const resources = publication ? `<section id="resources"><h2>Resources</h2><p class="prose"><strong>${e(publication.title)}</strong><br>${e(publication.venue)}</p><div class="button-row">${externalLink(publication.url, publication.label || 'View Research Paper', 'button')}</div></section>` : '';
  const sections = [['overview', 'Overview'], ['challenge', 'Engineering problem'], ['approach', 'Technical approach'], ['technology', 'Hardware & software'], ['implementation', 'Implementation'], ['testing', 'Testing & results'], ['media', 'Media gallery'], ...(publication ? [['resources', 'Resources']] : [])];
  const cover = project.coverImage && safeUrl(project.coverImage.src) ? `<div class="gallery" data-project-cover>${imageFigure(project.coverImage, 'eager', project.title)}</div>` : '';
  const sectionMedia = id => {
    const images = project.gallery.filter(item => item.section === id && safeUrl(item.src));
    return images.length ? `<div class="gallery" data-section-media="${id}">${images.map(item => imageFigure(item, 'lazy', project.title)).join('')}</div>` : '';
  };
  target.innerHTML = `<div class="container"><header class="page-hero"><a class="breadcrumb" href="${primaryTrack}.html"><span aria-hidden="true">←</span> Back to ${trackLabel}</a><span class="eyebrow">${e(project.category)}${project.year ? ` · ${e(project.year)}` : ''}</span><h1 class="project-title">${e(project.title)}</h1><p>${e(project.description)}</p><div class="project-hero-meta">${project.contentStatus ? `<span class="status">${e(project.contentStatus)}</span>` : ''}<div class="button-row">${project.githubUrl ? externalLink(project.githubUrl, 'View on GitHub', 'button') : ''}${project.projectUrl ? externalLink(project.projectUrl, 'Project documentation', 'button') : ''}</div></div></header><div class="section detail-layout"><nav class="detail-nav" aria-label="On this project">${sections.map(([id, title]) => `<a href="#${id}">${title}</a>`).join('')}</nav><div class="detail-content"><section id="overview"><h2>Overview</h2><p class="prose">${e(project.overview)}</p>${project.role ? `<p class="prose"><strong>My role:</strong> ${e(project.role)}</p>` : ''}${cover}</section><section id="challenge"><h2>Engineering problem</h2>${content(project.engineeringChallenge, 'Engineering problem, constraints, and responsibilities to be documented.')}</section><section id="approach"><h2>Technical approach</h2>${content(project.technicalApproach, 'System architecture and design decisions to be documented.')}</section><section id="technology"><h2>Hardware & software</h2><div class="tags">${project.technologies.map(tag => `<span class="tag">${e(tag)}</span>`).join('')}</div>${project.hardware && project.software ? `<div class="detail-two-column" style="margin-top: var(--space-5)"><div><h3>Hardware</h3>${content(project.hardware)}</div><div><h3>${e(project.softwareLabel || 'Software')}</h3>${content(project.software)}</div></div>` : project.hardware || project.software ? content(project.hardware || project.software) : ''}${sectionMedia('technology')}</section><section id="implementation"><h2>Implementation</h2>${content(project.implementation, 'Implementation details and firmware structure to be documented.')}${sectionMedia('implementation')}</section><section id="testing"><h2>Testing & validation</h2>${content(project.testing, 'Test setup, conditions, and validation evidence to be added.')}<h3 style="margin-top: var(--space-6)">Results</h3>${content(project.results, 'Verified results and supporting measurements to be added.')}</section><section id="media"><h2>Media gallery</h2>${mediaGallery(project)}</section>${resources}</div></div><nav class="project-pagination" aria-label="Other projects">${previous ? `<a href="project.html?project=${encodeURIComponent(previous.slug)}"><span>← Previous project</span>${e(previous.title)}</a>` : ''}${next ? `<a href="project.html?project=${encodeURIComponent(next.slug)}"><span>Next project →</span>${e(next.title)}</a>` : `<a href="${primaryTrack}.html"><span>Back to collection →</span>${trackLabel}</a>`}</nav></div><dialog class="media-dialog" aria-label="Full-size project image"><button type="button" class="icon-button" data-close-dialog aria-label="Close full-size image">✕</button><img alt=""><p></p></dialog>`;
  initLightbox();
}
