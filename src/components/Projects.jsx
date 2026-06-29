import Section from './Section'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <Section id="projects">
      <span className="eyebrow">Selected work</span>
      <h2 className="section-title">Projects</h2>
      <p className="section-lead">Hands-on builds across CI/CD, cloud, IoT, and workflow automation.</p>

      <div className="proj-grid">
        {projects.map((p) => (
          <article className="proj card" key={p.title}>
            <div className="proj-num">{p.label}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="outcome">{p.outcome}</span>
            <div className="tech-row">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
