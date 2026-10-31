import { focusAreas } from '../data/portfolio'

/* Focus-area strip under the hero: static, readable, and exposed to assistive tech. */
export default function Marquee() {
  if (focusAreas.length === 0) return null

  return (
    <div className="ticker">
      <div className="container">
        <ul className="ticker__group" aria-label="Focus areas">
          {focusAreas.map((area) => (
            <li className="ticker__item" key={area.label} data-tone={area.tone}>
              <span className="ticker__dot" aria-hidden="true" />
              {area.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
