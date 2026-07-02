import { useEffect } from 'react'

// Dark-mode-only site: always apply the dark theme on mount.
export default function useTheme() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])
}
