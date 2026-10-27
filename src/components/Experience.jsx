import { experience } from '../data/portfolio'
import { Icon } from './Icon'
import Section from './Section'

export default function Experience() {
  if (experience.length === 0) return null

  return (
    <Section
      id="experience"
      index={2}
      title="Experience"
      description="Where I've worked and what I shipped there."
      variant="tight"
    >
      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline__item" key={`${job.company}-${job.role}-${job.start}`}>
            <div className="timeline__rail" aria-hidden="true">
              <span className="timeline__node" />
            </div>

            <div className="timeline__content">
              <div className="timeline__head">
                <h3 className="timeline__role">{job.role}</h3>
                <span className="timeline__period mono">
                  {job.start} — {job.end}
                </span>
              </div>

              <p className="timeline__company">
                {job.company}
                {job.location && (
                  <span className="timeline__location">
                    <Icon name="pin" size={12} />
                    {job.location}
                  </span>
                )}
              </p>

              {job.summary && <p className="timeline__summary">{job.summary}</p>}

              {job.highlights?.length > 0 && (
                <ul className="timeline__highlights">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="timeline__highlight">
                      <Icon name="check" size={13} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {job.stack?.length > 0 && (
                <ul className="tags">
                  {job.stack.map((tech) => (
                    <li className="tag" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
