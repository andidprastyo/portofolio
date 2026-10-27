import { profile, socials } from '../data/portfolio'
import { externalLinkProps } from '../lib/links'
import { Icon } from './Icon'
import Section from './Section'

export default function Contact() {
  return (
    <Section
      id="contact"
      index={4}
      title="Contact"
      description="Have a role, a project, or a question? I read everything."
    >
      <div className="contact">
        <div className="contact__panel">
          <p className="contact__lede">
            The fastest way to reach me is email. I usually reply within a day.
          </p>

          <ul className="contact__list">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  className="contact__link"
                  href={social.href}
                  {...externalLinkProps(social.href)}
                >
                  <span className="contact__link-icon">
                    <Icon name={social.icon} size={16} />
                  </span>
                  <span className="contact__link-label">{social.label}</span>
                  <span className="contact__link-value mono">
                    {social.href.replace(/^mailto:/, '')}
                  </span>
                  <Icon name="arrow-right" size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="contact__aside">
          <h3 className="contact__aside-title mono">Availability</h3>
          <p className="contact__aside-status">
            <span className="dot dot--success" aria-hidden="true" />
            {profile.availability}
          </p>
          <p className="contact__aside-note">
            Based in {profile.location}. Open to remote and hybrid roles.
          </p>
        </aside>
      </div>
    </Section>
  )
}
