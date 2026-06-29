import Section from './Section'
import { stats } from '../data/resume'

export default function About() {
  return (
    <Section id="about">
      <span className="eyebrow">About</span>
      <h2 className="section-title">Engineering reliability into every deployment</h2>
      <div className="about-grid">
        <div>
          <p>
            I'm a <strong>DevOps and Automation Engineer</strong> with hands-on experience deploying, managing, and
            automating scalable cloud infrastructure across <strong>AWS</strong> and <strong>Azure</strong>. My focus is
            the path from code to production: containerization, CI/CD pipeline design, and dependable test automation.
          </p>
          <p>
            Currently at <strong>Cognizant</strong> as an Automation Test Engineer, I design and maintain automated test
            solutions with Selenium WebDriver and Tricentis Tosca — building reusable frameworks that keep quality high
            as software ships. Earlier, I shipped containerized microservices to <strong>AWS EKS</strong> and built
            end-to-end CI/CD pipelines that cut deployment time and removed manual toil.
          </p>
          <p>
            I care about <strong>efficiency, reusability, and continuous improvement</strong>, and I collaborate closely
            with cross-functional teams to deliver software that's both fast and trustworthy.
          </p>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
