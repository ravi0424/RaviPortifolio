import { useEffect, useRef } from 'react'

// Signature element: a fixed vertical line (the "pipeline") whose fill
// height tracks scroll progress through the page. Desktop only (hidden
// under 1180px via CSS).
export default function PipelineSpine() {
  const fillRef = useRef(null)

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0
      if (fillRef.current) fillRef.current.style.height = Math.min(100, pct) + '%'
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="spine" aria-hidden="true">
      <div className="track" />
      <div className="fill" ref={fillRef} />
    </div>
  )
}
