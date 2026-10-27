import { useReveal } from '../hooks/usePortfolio'

/**
 * Standard page section: numbered monospace eyebrow, hairline rule, heading,
 * then content. The numbered index and rule are the strongest Blueprint cues.
 *
 * `variant` changes density/ground so five sections in a row don't read as
 * one continuous metronome:
 *   undefined  default padding on the app background
 *   "band"     full-bleed sunken background — a visual break mid-page
 *   "tight"    reduced vertical padding for denser content
 *   "roomy"    extra breathing room
 *
 * `actions` renders in the header row (e.g. the Projects view toggle).
 */
export default function Section({
  id,
  index,
  title,
  description,
  actions,
  variant,
  tone = 'blue',
  children,
}) {
  const ref = useReveal()

  return (
    <section
      id={id}
      data-tone={tone}
      className={`section ${variant ? `section--${variant}` : ''}`}
    >
      <div className="container">
        <header className="section__header">
          <span className="section__index mono">{String(index).padStart(2, '0')}</span>
          <h2 className="section__title">{title}</h2>
          <span className="section__rule" aria-hidden="true" />
          {actions && <div className="section__actions">{actions}</div>}
        </header>

        {description && <p className="section__description">{description}</p>}

        <div ref={ref} className="reveal">
          {children}
        </div>
      </div>
    </section>
  )
}
