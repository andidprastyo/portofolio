import { useRef, useState } from 'react'
import { experience } from '../data/portfolio'
import { Icon } from './Icon'
import Section from './Section'

/* Role explorer: a tabbed workbench instead of a résumé timeline. Every panel
   stays mounted so print output keeps the full history. */
export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef([])

  const count = String(experience.length).padStart(2, '0')

  if (experience.length === 0) {
    return (
      <Section id="experience" index={3} title="Experience" tone="violet">
        <p className="section__empty">Role history is being updated.</p>
      </Section>
    )
  }

  function onTabKeyDown(event, index) {
    const last = experience.length - 1
    let next = null

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        next = index === last ? 0 : index + 1
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        next = index === 0 ? last : index - 1
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = last
        break
      default:
        return
    }

    event.preventDefault()
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section
      id="experience"
      index={3}
      title="Experience"
      description="A few roles, the problems I was handed, and what came out the other side."
      tone="violet"
    >
      <div className="xp">
        <div className="xp__rail">
          <p className="xp__rail-label eyebrow">Roles</p>

          <div className="xp__tabs" role="tablist" aria-label="Roles">
            {experience.map((job, index) => (
              <button
                key={`${job.company}-${job.role}-${job.start}`}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                type="button"
                role="tab"
                id={`xp-tab-${index}`}
                aria-selected={index === activeIndex}
                aria-controls={`xp-panel-${index}`}
                tabIndex={index === activeIndex ? 0 : -1}
                className={`xp__tab ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                <span className="xp__tab-body">
                  <span className="xp__tab-role">{job.role}</span>
                  <span className="xp__tab-company">{job.company}</span>
                  <span className="xp__tab-period mono">
                    {job.start} to {job.end}
                  </span>
                </span>
                <span className="xp__tab-arrow" aria-hidden="true">
                  <Icon name="arrow-right" size={13} />
                </span>
              </button>
            ))}
          </div>

          <p className="xp__rail-foot mono" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, '0')} / {count}
          </p>
        </div>

        <div className="xp__stage">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.role}-${job.start}`}
              role="tabpanel"
              id={`xp-panel-${index}`}
              aria-labelledby={`xp-tab-${index}`}
              hidden={index !== activeIndex}
              className={`xp__panel ${index === activeIndex ? 'is-active' : ''}`}
            >
              <header className="xp__head">
                <div className="xp__head-main">
                  <p className="xp__company mono">{job.company}</p>
                  <h3 className="xp__role">{job.role}</h3>
                </div>

                <div className="xp__head-meta">
                  <span className="xp__period mono">
                    {job.start} to {job.end}
                  </span>
                  {job.location && (
                    <span className="xp__location">
                      <Icon name="pin" size={12} />
                      {job.location}
                    </span>
                  )}
                </div>
              </header>

              {job.summary && <p className="xp__summary">{job.summary}</p>}

              {job.highlights?.length > 0 && (
                <div className="xp__section">
                  <h4 className="xp__label mono">Impact</h4>
                  <ul className="xp__impacts">
                    {job.highlights.map((highlight, i) => (
                      <li className="xp__impact" key={i}>
                        <span className="xp__impact-index mono" aria-hidden="true">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.stack?.length > 0 && (
                <div className="xp__section">
                  <h4 className="xp__label mono">Toolkit</h4>
                  <ul className="tags">
                    {job.stack.map((tech) => (
                      <li className="tag" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
