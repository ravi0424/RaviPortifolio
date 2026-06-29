import Section from './Section'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <Section id="experience">
      <span className="eyebrow">Deployment history</span>
      <h2 className="section-title">Experience</h2>
      <p className="section-lead">Each role is a stage in the pipeline — the live node marks where I am now.</p>

      <div className="pipeline">
        {experience.map((job, i) => (
          <article className={`stage ${job.live ? 'live' : ''}`} key={i}>
            <span className="node" />
            <div className="stage-head">
              <h3>
                {job.title} · <span className="co">{job.company}</span>
              </h3>
            </div>

            <div className="stage-meta">
              <span className={job.current ? 'now' : ''}>
                {job.current ? '● ' : ''}{job.period}
              </span>
              {job.detail && <span>{job.detail}</span>}
              {job.location && <span>{job.location}</span>}
            </div>

            {job.objective && <p className="obj">{job.objective}</p>}

            <ul>
              {job.points.map((p, j) => (
                // Bullet copy contains <strong> emphasis from the data file
                <li key={j} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </ul>

            <div className="tech-row">
              {job.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
