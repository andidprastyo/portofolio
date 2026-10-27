/**
 * Link helpers shared by every component that renders an anchor.
 *
 * The `target`/`rel` pair used to be duplicated inline in three components;
 * centralising it keeps the behaviour (and the `noopener` hardening) identical
 * everywhere and removes the chance of one call site drifting.
 */

/**
 * Allow only URL schemes used by this site. Invalid values fall back to a
 * harmless in-page anchor instead of being passed to an anchor element.
 */
export function sanitizeHref(href = '') {
  if (typeof href !== 'string') return '#'

  const value = href.trim()
  if (/^(https?:\/\/|mailto:|tel:|#|\/)/i.test(value)) return value

  return '#'
}

/** True for absolute http(s) URLs — the only links that leave the site. */
export function isExternalUrl(href = '') {
  return /^https?:\/\//i.test(sanitizeHref(href))
}

/**
 * Props to spread onto an `<a>` so external links open safely in a new tab.
 * Yields `{}` for in-page anchors and `mailto:` links, which stay in-tab.
 */
export function externalLinkProps(href) {
  return isExternalUrl(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}
