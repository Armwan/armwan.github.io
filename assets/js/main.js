import { profile } from './site-data.js';
import { initNavigation, initSectionTracking } from './navigation.js';
import { initProjects } from './projects.js';
import { initProfessionalContent } from './professional.js';
import { illustration, choiceIllustration, heroIllustration } from './illustrations.js';
import { initProjectPreview } from './project-preview.js';
import { escapeHtml as e, externalLink, safeUrl } from './utils.js';

const page = document.body.dataset.page;
const sun = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>';
const moon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/></svg>';
const themeButton = '<button type="button" class="icon-button" data-theme-toggle aria-label="Switch theme"></button>';
const emailIcon = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2" y="4" width="16" height="12" rx="1"/><path d="m2 5 8 6 8-6"/></svg>';
const documentIcon = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 2h7l4 4v12H5Z M12 2v5h4 M8 11h5 M8 14h5"/></svg>';
const gitIcon = '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="6" cy="4" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="14" cy="5" r="2"/><path d="M6 6v8 M14 7v2c0 3-8 0-8 4"/></svg>';

function profileActions(linkedin = false) {
  return `${profile.resumeUrl ? `<a class="button button-primary" href="${safeUrl(profile.resumeUrl)}" target="_blank" rel="noopener noreferrer">${documentIcon}CV</a>` : ''}<a class="button" href="mailto:${e(profile.email)}">${emailIcon}Email</a><a class="button" href="${safeUrl(profile.githubUrl)}" target="_blank" rel="noopener noreferrer">${gitIcon}GitHub</a>${linkedin ? externalLink(profile.linkedinUrl, 'LinkedIn', 'button') : ''}`;
}

const sectionLinks = page === 'embedded'
  ? [['#about','About'],['#experience','Experience'],['#projects','Projects'],['#skills','Skills'],['#education-section','Education'],['research.html','Research →']]
  : page === 'research'
    ? [['#about','About'],['#publications','Publications'],['#projects','Projects'],['#education-section','Education'],['embedded.html','Embedded portfolio →']]
    : [['index.html','Home'],['embedded.html','Embedded portfolio'],['research.html','Research'],['about.html','About']];
const header = document.querySelector('[data-header]');
if (page === 'home') {
  header.className = 'chooser-controls';
  header.innerHTML = '<a class="skip-link" href="#main-content">Skip to content</a>'+themeButton;
} else {
  header.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a><div class="header-inner container"><a class="brand" href="index.html" title="Home" aria-label="Arman Mirzaei home">AM</a><button class="icon-button menu-button" type="button" data-menu-toggle aria-expanded="false" aria-controls="main-navigation" aria-label="Open navigation menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5h20M2 12h20M2 19h20"/></svg></button><nav class="desktop-nav" id="main-navigation" aria-label="Portfolio navigation">${sectionLinks.map(([href,label]) => `<a class="nav-link${href.endsWith('.html') && (page==='embedded'||page==='research') ? ' nav-alt' : ''}" href="${href}"${href.startsWith('#')?' data-section-link':''}>${label}</a>`).join('')}${themeButton}</nav></div>`;
}

const footer = document.querySelector('[data-footer]');
if (page === 'home') footer.hidden = true;
else {
  const other = page === 'research' ? ['embedded.html','Embedded portfolio'] : ['research.html','Research'];
  footer.innerHTML = `<section class="section container contact" id="contact" aria-labelledby="contact-title"><h2 class="section-title" id="contact-title">Contact</h2><p>For professional or research inquiries, please reach out by email.</p><a class="contact-email" href="mailto:${e(profile.email)}">${emailIcon}${e(profile.email)}</a><div class="button-row">${profileActions(true)}</div></section><footer class="container footer-inner"><p>© ${new Date().getFullYear()} ${e(profile.name)}. <a href="${other[0]}">${other[1]}</a></p></footer>`;
}

const toggle = document.querySelector('[data-theme-toggle]');
function updateToggle() {
  const dark = document.documentElement.dataset.theme === 'dark';
  toggle.innerHTML = dark ? moon : sun;
  toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  toggle.title = toggle.getAttribute('aria-label');
}
toggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('arman-theme', next); } catch { /* Optional storage. */ }
  updateToggle();
});
updateToggle();

document.querySelectorAll('[data-art]').forEach(target => { target.innerHTML = illustration(target.dataset.art); });
document.querySelectorAll('[data-choice-art]').forEach(target => { target.outerHTML = choiceIllustration(target.dataset.choiceArt); });
document.querySelectorAll('[data-hero-illustration]').forEach(target => { target.innerHTML = heroIllustration(target.dataset.heroIllustration); });
document.querySelectorAll('[data-profile-actions]').forEach(target => { target.innerHTML = profileActions(target.hasAttribute('data-include-linkedin')); });
if (profile.portraitUrl && safeUrl(profile.portraitUrl)) {
  document.querySelectorAll('[data-portrait]').forEach(target => {
    target.classList.remove('portrait-placeholder');
    target.removeAttribute('role');
    target.removeAttribute('aria-label');
    target.innerHTML = `<img src="${safeUrl(profile.portraitUrl)}" alt="Portrait of ${e(profile.name)}" width="960" height="1280">`;
  });
}
document.querySelectorAll('[data-education]').forEach(target => {
  target.innerHTML = profile.education.map(item => `<article class="panel education-item"><div><h3>${e(item.degree)}</h3><div class="education-meta">${e(item.institution)}</div></div><span class="education-date">${e(item.dates)}</span>${item.gpa || item.thesis ? `<ul>${item.gpa ? `<li><strong>GPA:</strong> ${e(item.gpa)}</li>` : ''}${item.thesis ? `<li><strong>Bachelor’s thesis:</strong> <a href="project.html?project=inverse-filter-design">${e(item.thesis)}</a></li>` : ''}</ul>` : ''}</article>`).join('');
  if (target.hasAttribute('data-education-summary')) {
    target.insertAdjacentHTML('beforeend', `<p class="education-summary"><strong>Focus areas:</strong> ${e(profile.educationSummary.focusAreas)}<br><strong>Relevant coursework:</strong> ${e(profile.educationSummary.coursework)}</p>`);
  }
});
document.querySelectorAll('[data-publications]').forEach(target => {
  target.innerHTML = profile.publications.map(publication => `<article class="panel publication"><div class="project-meta"><span class="badge badge-accent">Publication</span>${publication.year ? `<span class="badge">${e(publication.year)}</span>` : ''}</div><h3>${e(publication.title)}</h3><p>${e(publication.authors)}</p>${publication.venue ? `<p><em>${e(publication.venue)}</em></p>` : ''}<div class="button-row">${publication.url ? externalLink(publication.url,'View publication','link-chip') : ''}${publication.projectSlug ? `<a class="link-chip" href="project.html?project=${encodeURIComponent(publication.projectSlug)}">Related project ↗</a>` : ''}</div></article>`).join('');
});

initProfessionalContent();
initProjects();
initProjectPreview();
initNavigation();
initSectionTracking();
if (page === 'project') {
  const { initProjectDetail } = await import('./project-detail.js');
  initProjectDetail();
}
document.addEventListener('error', event => {
  const media = event.target;
  if (!(media instanceof HTMLImageElement || media instanceof HTMLVideoElement)) return;
  const message = document.createElement('p');
  message.className = 'empty-note';
  message.textContent = 'This media file is currently unavailable.';
  (media.closest('.image-zoom') || media).replaceWith(message);
}, true);
document.documentElement.dataset.ready = 'true';
