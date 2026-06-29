import Section from './Section'
import { skillGroups } from '../data/resume'

export default function Skills() {
  return (
    <Section id="skills">
      <span className="eyebrow">Toolchain</span>
      <h2 className="section-title">Skills &amp; capabilities</h2>
      <p className="section-lead">
        The technologies and practices I reach for across the build, ship, and verify stages of delivery.
      </p>

      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div className="skill-cat card" key={g.title}>
            <h3>
              {g.title} <span className="badge">{g.badge}</span>
            </h3>
            <p className="desc">{g.desc}</p>
            <div className="chips">
              {g.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
