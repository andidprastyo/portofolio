import { projects } from '../data/portfolio'
import { externalLinkProps, isExternalUrl } from '../lib/links'
import { statusLabel } from '../lib/status'
import { Icon } from './Icon'
import Section from './Section'

function StatusBadge({ status }) {
  return (
    <span className={`badge badge--${status}`}>
      <span className="badge__dot" aria-hidden="true" />
      {statusLabel(status)}
    </span>
  )
}

/** GitHub links get the brand mark; everything else gets a link glyph. */
function linkIcon(link) {
  if (link.icon === 'github') return 'github'
  return isExternalUrl(link.href) ? 'external' : 'link'
}

function ProjectCard({ project }) {
  return (
    <article className={`card ${project.featured ? 'card--featured' : ''}`}>
      {project.image && (
        <div className="card__media">
          <img
            src={project.image}
            alt={project.imageAlt ?? `${project.title} preview`}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className="card__content">
        <div className="card__head">
          <h3 className="card__title">{project.title}</h3>
          <div className="card__meta">
            <span className="card__year mono">{project.year}</span>
            <StatusBadge status={project.status} />
          </div>
        </div>

        {/* Two columns on a featured card so the full-width span earns its width. */}
        <div className="card__body">
          <div className="card__main">
            <p className="card__description">{project.description}</p>
          </div>

          <div className="card__aside">
            {project.metrics?.length > 0 && (
              <dl className="card__metrics">
                {project.metrics.map((metric) => (
                  <div className="card__metric" key={metric.label}>
                    <dt className="card__metric-label mono">{metric.label}</dt>
                    <dd className="card__metric-value mono">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {project.stack?.length > 0 && (
              <ul className="tags">
                {project.stack.map((tech) => (
                  <li className="tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {project.links?.length > 0 && (
          <div className="card__links">
            {project.links.map((link) => (
              <a
                className="card__link"
                key={link.label}
                href={link.href}
                {...externalLinkProps(link.href)}
              >
                <Icon name={linkIcon(link)} size={13} />
                {link.label}
                <Icon name="arrow-right" size={13} className="card__link-arrow" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  if (projects.length === 0) return null

  return (
    <Section
      id="projects"
      index={2}
      title="Projects"
      description="Selected work — internal platforms, tools, and experiments."
      variant="band"
      tone="cyan"
    >
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
