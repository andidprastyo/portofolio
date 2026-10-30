import { useScrollProgress } from '../hooks/usePortfolio'

/** Purely presentational backdrop layer, hidden from assistive tech. */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true" />
  )
}
