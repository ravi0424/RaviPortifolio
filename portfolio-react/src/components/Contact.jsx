import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { profile } from '../data/resume'

export default function Contact() {
  const ref = useScrollReveal()
  return (
    <section id="contact">
      <div ref={ref} className="wrap reveal contact-cta">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>Get in touch</span>
        <h2>Let's build something reliable.</h2>
        <p className="section-lead">
          Open to DevOps and automation roles. The fastest way to reach me is email — I'll get back to you quickly.
        </p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}</a>
          <a href={`tel:${profile.phoneHref}`}><Phone size={17} />{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} />LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} />GitHub</a>
          <a href={profile.resume} download><Download size={17} />Download résumé</a>
        </div>
      </div>
    </section>
  )
}
