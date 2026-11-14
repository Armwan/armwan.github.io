import { experience, areasOfWork, skills } from './experience-data.js';
import { escapeHtml as e } from './utils.js';

export const experienceMarkup = () => experience.map(position => `<li class="experience-entry"><div class="experience-heading"><h3>${e(position.role)}</h3><span class="experience-meta">${e(position.dates)}</span></div><p class="experience-organization">${e(position.company)} · ${e(position.location)}</p><ul>${position.bullets.map(bullet => `<li>${e(bullet)}</li>`).join('')}</ul><div class="tags">${(position.technologies || []).map(item => `<span class="tag">${e(item)}</span>`).join('')}</div></li>`).join('\n');
export const areasMarkup = () => areasOfWork.map(area => `<div class="panel work-area"><h3>${e(area.title)}</h3><p>${e(area.description)}</p></div>`).join('\n');
const compactSkillLabel = item => ({ 'Sensor integration & fusion': 'Sensor integration/fusion', 'Hardware–software integration': 'HW/SW integration' }[item] || item);
export const skillsMarkup = () => skills.map(group => `<div class="panel skill-group"><h3>${e(group.title)}</h3><div class="tags">${group.items.map(item => `<span class="tag" title="${e(item)}" aria-label="${e(item)}">${e(compactSkillLabel(item))}</span>`).join('')}</div></div>`).join('\n');

export function initProfessionalContent() {
  const groups = [['[data-experience-timeline]', experienceMarkup], ['[data-work-areas]', areasMarkup], ['[data-skills]', skillsMarkup]];
  groups.forEach(([selector, render]) => document.querySelectorAll(selector).forEach(target => { target.innerHTML = render(); }));
  const entries = [...document.querySelectorAll('.experience-entry, .section .panel')];
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!entries.length || preference.matches || !('IntersectionObserver' in window)) return;
  // Timeline entries and supporting panels opt into motion only when an observer works.
  const observer = new IntersectionObserver(changes => {
    changes.forEach(change => {
      if (!change.isIntersecting) return;
      change.target.classList.add('is-visible');
      observer.unobserve(change.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -16px 0px' });
  entries.forEach(entry => { entry.classList.add('reveal-pending'); observer.observe(entry); });
  const showAll = () => {
    if (!preference.matches) return;
    observer.disconnect();
    entries.forEach(entry => entry.classList.add('is-visible'));
  };
  preference.addEventListener('change', showAll);
}
