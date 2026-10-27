import { focusAreas } from '../data/portfolio'

/**
 * Decorative ticker under the hero. The track is duplicated so the
 * translateX(-50%) loop is seamless; the whole strip is hidden from
 * assistive tech because the same focus areas are covered in About.
 */
export default function Marquee() {
  if (focusAreas.length === 0) return null

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[0, 1].map((copy) => (
          <ul className="ticker__group" key={copy}>
            {focusAreas.map((area) => (
              <li className="ticker__item" key={area.label} data-tone={area.tone}>
                <span className="ticker__dot" />
                {area.label}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
