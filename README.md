# Harshita Sharma — Portfolio

A premium, single-page portfolio for an AI/ML engineer. Dark-first "quiet lab, loud signal" design with an ambient signal-mesh hero, role rotator, and a featured case study (OmniGuard AI).

Built with **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion**. Deploys on **Vercel**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

**All content lives in one file: [`data/profile.ts`](./data/profile.ts).** Edit there — never in components. Numbers shown as facts are real only (the design rule: no invented metrics).

### Before you go live — replace the placeholders
All live links are filled in — GitHub repos, the HuggingFace chatbot demo, LinkedIn, and all six certificate Drive files.

The one thing left before launch: set your real domain in three spots — `app/layout.tsx` (`SITE_URL`), `app/sitemap.ts`, `app/robots.ts`.

### Certificates
All six certificates link out to Google Drive via `certifications[].url` (shared "Anyone with the link → Viewer").

### Resume
Served from `public/resume.pdf`. Replace that file to update the Resume button download.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects **Next.js** — no config needed. Click **Deploy**.
4. After the first deploy, set your custom domain (optional) and update `SITE_URL` in the three files above, then redeploy.

## Structure

```
app/            layout, page, globals.css, sitemap.ts, robots.ts, opengraph-image
components/      Nav, Hero, SignalMesh, RoleRotator, About, Skills, Experience,
                Projects, Achievements, Certifications, Education, GitHub, Contact,
                Footer, Section/Reveal, SignalDivider, ThemeProvider
data/profile.ts SINGLE source of all content
public/         resume.pdf
```

## Accessibility
AA contrast, visible keyboard focus rings, semantic landmarks, ≥44px tap targets, and a full `prefers-reduced-motion` path (mesh freezes, rotator stops, counters skip animation).
