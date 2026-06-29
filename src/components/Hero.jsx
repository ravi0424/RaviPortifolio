import useScrollReveal from '../hooks/useScrollReveal'
import { profile } from '../data/resume'

export default function Hero() {
  const left = useScrollReveal()
  const right = useScrollReveal()

  return (
    <section id="hero" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div ref={left} className="reveal">
            <span className="status-line">
              <span className="pulse" />
              Status: {profile.status}
            </span>
            <h1>
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>
            <p className="role">{profile.role}</p>
            <p className="tagline">{profile.tagline}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects">View my work</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>

          {/* Decorative terminal grounded in the actual stack */}
          <div ref={right} className="terminal reveal" aria-hidden="true">
            <div className="terminal-bar">
              <i /><i /><i />
              <span>~/ravi — zsh</span>
            </div>
            <div className="terminal-body">
              <div><span className="prompt">➜</span> <span className="c">kubectl get deploy</span></div>
              <div><span className="k">cloud</span><span className="c">       :</span> <span className="v">AWS · Azure</span> <span className="ok">✔</span></div>
              <div><span className="k">containers</span><span className="c">  :</span> <span className="v">Docker · Kubernetes</span> <span className="ok">✔</span></div>
              <div><span className="k">pipelines</span><span className="c">   :</span> <span className="v">Jenkins · CodePipeline</span> <span className="ok">✔</span></div>
              <div><span className="k">testing</span><span className="c">     :</span> <span className="v">Selenium · Tosca</span> <span className="ok">✔</span></div>
              <div style={{ marginTop: '.5rem' }}><span className="prompt">➜</span> <span className="ok">deploy: passing</span> <span className="c">· ready to onboard</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
