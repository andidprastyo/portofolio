import { profile } from '../data/portfolio'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" index={1} title="About">
      <div className="about">
        <div className="about__body">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="about__aside">
          <h3 className="about__aside-title mono">Details</h3>
          <dl className="about__facts">
            <div className="about__fact">
              <dt>Role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div className="about__fact">
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="about__fact">
              <dt>Status</dt>
              <dd className="about__fact-status">
                <span className="dot dot--success" aria-hidden="true" />
                {profile.availability}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  )
}
