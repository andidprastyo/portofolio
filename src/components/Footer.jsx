import { footerNote, navItems, profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__note mono">{footerNote}</span>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="footer__link">
              {item.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy mono">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  )
}
