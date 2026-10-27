import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/portfolio'
import { useScrolled, useScrollProgress, useScrollSpy } from '../hooks/usePortfolio'

const SECTION_IDS = navItems.map((item) => item.id)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(8)
  const activeId = useScrollSpy(SECTION_IDS)
  const progress = useScrollProgress()

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close the drawer when the viewport grows back to desktop width.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 821px)')
    const onChange = (e) => e.matches && setMenuOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const initials = profile.name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label={`${profile.name} — home`}>
          <span className="nav__mark mono" aria-hidden="true">
            {initials}
          </span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Section navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${activeId === item.id ? 'is-active' : ''}`}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-drawer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <span
        className="nav__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        id="nav-drawer"
        className={`nav__drawer ${menuOpen ? 'is-open' : ''}`}
        hidden={!menuOpen}
      >
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav__drawer-link ${activeId === item.id ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="mono nav__drawer-index">
              {String(i + 1).padStart(2, '0')}
            </span>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}
