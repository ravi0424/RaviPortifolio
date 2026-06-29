import useScrollReveal from '../hooks/useScrollReveal'

// Wraps a <section> with the standard .wrap container and scroll-reveal.
// `bare` skips the inner .wrap (used where a component needs custom layout).
export default function Section({ id, children, className = '' }) {
  const ref = useScrollReveal()
  return (
    <section id={id}>
      <div ref={ref} className={`wrap reveal ${className}`}>
        {children}
      </div>
    </section>
  )
}
