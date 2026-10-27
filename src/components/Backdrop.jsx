import { useScrollProgress } from '../hooks/usePortfolio'

/**
 * Fixed decorative backdrop sitting behind all content: corner colour
 * washes, a blueprint grid with occasional plus-marks, a slow aurora
 * drift, and a film-grain finish. Purely presentational — hidden from
 * assistive tech and removed entirely for print.
 *
 * The whole layer eases upward as you scroll (parallax) via the
 * `--parallax` custom property, driven by useScrollProgress.
 */
export default function Backdrop() {
  const progress = useScrollProgress()

  return (
    <div
      className="backdrop"
      aria-hidden="true"
      style={{ '--parallax': progress.toFixed(4) }}
    >
      <span className="backdrop__wash" />
      <span className="backdrop__grid" />
      <span className="backdrop__aurora" />
      <span className="backdrop__marks" />
      <span className="backdrop__grain" />
    </div>
  )
}
