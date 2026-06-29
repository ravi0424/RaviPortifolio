import Section from './Section'
import { certifications, education } from '../data/resume'

export default function Education() {
  return (
    <Section id="education">
      <span className="eyebrow">Credentials</span>
      <h2 className="section-title">Certifications &amp; education</h2>

      <div className="ce-grid">
        {/* Certifications */}
        <div>
          <h3 className="ce-subhead">Certifications</h3>
          <div className="cert-list">
            {certifications.map((c) => (
              <div className="cert" key={c.name}>
                <span className="yr">{c.yr}</span>
                <div>
                  <div className="name">{c.name}</div>
                  <div className="iss">{c.iss}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="ce-subhead">Education</h3>
          {education.map((e) => (
            <div className="edu-item" key={e.deg}>
              <div className="deg">{e.deg}</div>
              <div className="sch">{e.sch}</div>
              <div className="row">
                <span>{e.place}</span>
                <span>{e.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
