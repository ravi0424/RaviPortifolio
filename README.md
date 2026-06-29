# Ravi Kiran Gunnabattula — Portfolio (React + Vite)

A modern, responsive personal portfolio for a DevOps & Automation Engineer.
The design treats the career as a **deployment pipeline** — a vertical "pipeline
spine" fills as you scroll, and work history renders as pipeline *stages* with a
live, pulsing node on the current role.

## Tech stack
- **React 18** + **Vite** (fast dev server, optimized production build)
- **lucide-react** for icons
- Hand-crafted CSS with design tokens (no Tailwind build step required)
- Dark mode, scroll-spy nav, scroll-reveal animations, mobile menu
- Accessible: keyboard focus, `prefers-reduced-motion` respected, semantic HTML
- SEO-ready: meta description, keywords, Open Graph tags

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

> Requires Node.js 18+.

## Project structure

```
portfolio-react/
├── index.html               # HTML shell: meta tags + font links
├── package.json
├── vite.config.js
├── public/
│   └── RaviResume.pdf        # served at /RaviResume.pdf (Résumé download)
└── src/
    ├── main.jsx              # React entry point
    ├── index.css            # design tokens + all component styles
    ├── App.jsx              # composes every section
    ├── data/
    │   └── resume.js        # ← single source of truth for all content
    ├── hooks/
    │   ├── useTheme.js       # dark/light theme + persistence
    │   └── useScrollReveal.js# fade-in-on-scroll
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Section.jsx       # reusable section wrapper w/ scroll-reveal
        └── PipelineSpine.jsx # the signature scroll-progress spine
```

## Editing content
All text — profile, skills, experience, projects, certs, education — lives in
**`src/data/resume.js`**. Update values there and every section re-renders
automatically. No need to touch the components for routine content changes.

> Note: the GitHub URL in `resume.js` (`github.com/Ravi0424`) is a best guess —
> update it if your handle differs. The LinkedIn URL is already set.

## Deploy to GitHub Pages (automated)

This repo ships a workflow at `.github/workflows/deploy.yml` that builds and
publishes the site on every push to `main`. The Vite `base` path is detected
automatically in CI, so it works for both repo types with no config edits.

**One-time setup:**
1. Create a repo and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Push any commit to `main` (or run the workflow manually from the **Actions** tab).

The Actions run builds the site and deploys it. Your URL will be:
- **Project repo** (e.g. `portfolio`): `https://<username>.github.io/portfolio/`
- **User site** (repo named `<username>.github.io`): `https://<username>.github.io/`

That's it — no `base` editing, no `gh-pages` branch, no `dist` commits.

### Manual alternative
If you'd rather not use Actions:
```bash
npm install
npm run build      # outputs to /dist
```
Then publish `/dist` however you like (e.g. push it to a `gh-pages` branch).
Note: for a manual local build the `base` is `/`, so for a project repo you'd
need to build with `GITHUB_REPOSITORY=you/repo npm run build` to get the right
asset paths.
