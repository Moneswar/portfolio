# Moneswar Sundareswaran — Portfolio

A personal portfolio built with React (Vite), Tailwind CSS v4, and Framer Motion.
All content (About, Skills, Projects, Education, Contact info) is sourced directly
from the resume — nothing fabricated.

## Tech Stack

- **React 19** (Vite) — JavaScript, no TypeScript
- **Tailwind CSS v4** — CSS-first config via `@theme` in `src/index.css`
- **Framer Motion** — page/scroll/hover animations
- **React Icons** — icon set

## Getting Started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Folder Structure

```
src/
  components/
    Navbar/Navbar.jsx        Sticky nav, animated underline, mobile menu
    Hero/Hero.jsx             Intro, typing effect, floating profile mark
    About/About.jsx           Career objective + areas of interest
    Skills/Skills.jsx         Skill groups as animated glass cards
    Projects/Projects.jsx     Project cards (features, tech, links)
    Education/Education.jsx   Vertical timeline
    Contact/Contact.jsx       Contact info + message form
    Footer/Footer.jsx         Closing section
    shared/                   Reusable: Button, SectionHeading,
                               AnimatedBackground, CursorGlow, ScrollProgressBar
  data/
    resumeData.js              Single source of truth for all content
  hooks/
    useActiveSection.js        Scroll-spy for navbar highlighting
    useTypewriter.js            Hero typing effect
  index.css                    Design tokens + global styles (Tailwind v4 @theme)
  App.jsx                      Composes all sections
  main.jsx                     React entry point
public/
  resume/                      Downloadable resume PDF
  favicon.svg
```

## Editing Content

Everything text-based lives in `src/data/resumeData.js`. Update your name,
links, skills, projects, or education there — every component reads from
this file, so there's no need to touch the components themselves for
content changes.

## Contact Form

The contact form currently composes a `mailto:` link with the filled-in
details, so it works with zero configuration. To wire it up to a real
inbox without opening the visitor's email client, swap the `handleSubmit`
body in `src/components/Contact/Contact.jsx` for an EmailJS (or similar)
API call once you have a service ID, template ID, and public key.

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. Vercel detects all of this automatically.
4. Click **Deploy** — done.

### Alternative: Vercel CLI

```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # subsequent production deploys
```

### Alternative: Netlify

1. `npm run build`
2. Drag the generated `dist/` folder into app.netlify.com/drop,
   or connect the GitHub repo with build command `npm run build` and
   publish directory `dist`.
