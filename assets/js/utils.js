export function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}
// Content fields accept local paths, anchors, mailto links, and HTTP(S) URLs only.
export function safeUrl(value) {
  if (!value || typeof value !== 'string') return '';
  try {
    const url = new URL(value, window.location.href);
    return ['http:', 'https:', 'mailto:'].includes(url.protocol) ? escapeHtml(value) : '';
  } catch { return ''; }
}
export function externalLink(url, label, className = 'text-link') {
  const href = safeUrl(url);
  if (!href) return '';
  return `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span class="arrow" aria-hidden="true">↗</span></a>`;
}
