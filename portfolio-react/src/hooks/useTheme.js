import { useEffect, useState } from 'react'

// Manages light/dark theme: saved choice -> system preference -> light.
// Writes data-theme onto <html> and persists the choice (guarded for
// sandboxed environments where storage may be unavailable).
export default function useTheme() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    let saved = null
    try { saved = localStorage.getItem('theme') } catch (e) { /* ignore */ }
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    setTheme(saved || (prefersDark ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch (e) { /* ignore */ }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
