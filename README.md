# Rayyan Ahmed — Generative AI Engineer

A responsive, accessible React + TypeScript portfolio grounded in `Rayyan_Ahmed_AI_Engineer_Resume.docx` (November 2026). Content lives in `src/data/profile.ts`.

## Local development

Requires Node.js 22.12+ (Node 24 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

## Verification

```sh
npx playwright install chromium
npm test
npm run typecheck
npm run format:check
npm run build
npm audit
```

Playwright launches isolated servers on ports 4180 and 4181. Tests cover desktop/mobile navigation, resume delivery, project filters and native case studies, keyboard focus, narrow viewports, reduced motion, automated accessibility, native validation, draft preservation, and mocked EmailJS failure/retry. Test email requests are intercepted; no real messages are sent. The configured/unconfigured scenarios intentionally skip tests that do not apply.

## Contact delivery

Without EmailJS configuration, the form prepares an encoded email draft and preserves the visitor's message. The visitor explicitly opens and sends the draft using their own mail client. Nothing is reported as delivered at that stage.

For direct delivery, copy `.env.example` to `.env.local` and configure your own EmailJS service, template, and public key. The template must use `fullName`, `email`, and `message`, with reply-to mapped to `email`. Vite variables are public browser configuration; do not put private secrets in them. Restrict allowed origins in EmailJS and use its abuse protections before enabling a production form. Actual inbox delivery requires validation against your service.

## Content and metadata

The latest resume is the source of truth for the three case studies, career history, skills, education, and award. Private projects expose only resume-level summaries. There are no Q&A widgets, testimonials, or dynamically claimed GitHub statistics.

The canonical URL in `index.html`, `public/robots.txt`, `public/sitemap.xml`, and `src/data/profile.ts` comes from the resume's Portfolio hyperlink: https://rayyan-portfolio-mu.vercel.app/. Update all four if the domain changes. `public/social-preview.png` is a 1200 × 630 capture of the portfolio hero.

This task is local only: no deployment or Git commit is part of the implementation workflow.
