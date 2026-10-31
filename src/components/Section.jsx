import { useReveal } from '../hooks/usePortfolio'

/* Page section: numbered mono eyebrow, rule, heading, then content.
   `variant`: band (sunken full-bleed), tight, or roomy. `actions` sits in the header. */
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
