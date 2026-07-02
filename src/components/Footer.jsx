import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  )
}
