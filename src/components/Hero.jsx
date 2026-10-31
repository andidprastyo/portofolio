import { profile, socials } from '../data/portfolio'
import { externalLinkProps, sanitizeHref } from '../lib/links'
import { Icon } from './Icon'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__main">
          <p className="hero__status">
            <span className="hero__dot" aria-hidden="true" />
            <span className="mono">{profile.availability}</span>
          </p>

          <h1 className="hero__name">{profile.name}</h1>

          <p className="hero__role">
            <span className="mono hero__role-prefix" aria-hidden="true">
              &gt;
            </span>
            {profile.role}
          </p>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__meta">
            <span className="hero__meta-item">
              <Icon name="pin" size={14} />
              {profile.location}
            </span>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View projects
              <Icon name="arrow-right" size={14} />
            </a>

            {profile.resumeUrl ? (
              <a
                href={sanitizeHref(profile.resumeUrl)}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="download" size={14} />
                Résumé
              </a>
            ) : (
              <a href="#contact" className="btn">
                Get in touch
              </a>
            )}
          </div>

          <ul className="hero__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={sanitizeHref(social.href)}
                  className="hero__social"
                  aria-label={social.label}
                  title={social.label}
                  {...externalLinkProps(social.href)}
                >
                  <Icon name={social.icon} size={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {profile.avatar && (
          <div className="hero__avatar-wrap">
            <img
              className="hero__avatar"
              src={profile.avatar}
              alt={`${profile.name} portrait`}
              width="240"
              height="240"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        )}
      </div>
    </section>
  )
}
