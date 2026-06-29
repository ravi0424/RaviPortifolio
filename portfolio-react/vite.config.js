import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//
// `base` must match how GitHub Pages serves the site:
//   • Project page  → https://<user>.github.io/<repo>/   → base "/<repo>/"
//   • User/org page → https://<user>.github.io/          → base "/"
//
// In GitHub Actions, GITHUB_REPOSITORY is "owner/repo", so we derive the
// correct base automatically — no manual editing needed. Locally it stays "/".
function resolveBase() {
  const repo = process.env.GITHUB_REPOSITORY // e.g. "ravi/portfolio"
  if (!repo) return '/' // local dev / preview
  const name = repo.split('/')[1]
  // A "<user>.github.io" repo is served from the domain root.
  return name.endsWith('.github.io') ? '/' : `/${name}/`
}

export default defineConfig({
  plugins: [react()],
  base: resolveBase(),
})
