# Mohammad Saad Portfolio

A personal cyberpunk portfolio website built with React, Vite, Framer Motion, and Tailwind CSS.

This project presents Mohammad Saad's landing page, engineering overview, and contact channel in a focused interactive experience.

## Live Experience

Run locally to view the neon interface with responsive layouts, animations, and a terminal-style command palette.

## Features

- Hero section with animated intro and social links
- Engineering overview module
- KavachG edge-AI case study
- Contact form section
- Cyberpunk neon grid, glow, and scanline visual system
- Terminal-style command palette for profile and contact links
- Entry loading screen with animated text system mark

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Anime.js

## Project Structure

- src/components: UI sections and reusable components
- src/constants: terminal command definitions
- src/assets: menu controls
- src/hoc: section wrappers and composition helpers
- src/utils: utility functions and icon helpers

## Getting Started

### Prerequisites

- Node.js 16 or newer
- npm 9 or newer

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Default local URL:

http://localhost:5173/

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Environment variables

This project uses Vite and expects environment variables prefixed with `VITE_` for client-side usage. Create a local `.env` (already ignored) with these keys:

```env
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_TO_EMAIL=you@yourdomain.com
```

Do NOT commit your `.env` — it is included in `.gitignore`.

If you use GitHub Actions to build & deploy, add the same keys to the repository **Secrets** (Settings → Secrets → Actions) with the exact names above.

## Customization Guide

Primary content lives in:

- src/constants/cliCommands.js
- src/index.css

Update these areas to customize quickly:

- Hero and short bio: src/components/Hero.jsx
- Engineering overview: src/pages/OverviewPage.jsx
- Contact behavior: src/components/Contact.jsx

## Usage Policy

This repository is not open source.

You may:

- View the source code
- Learn from the implementation
- Take inspiration for your own original work

You may not:

- Copy and paste this code in whole or in part
- Re-upload this codebase or modified versions
- Redistribute project assets, source files, or design sections
- Use this project as a template for direct reuse

See the full legal terms in [LICENSE](LICENSE).

## Deployment

Three common deployment options are described below. Choose one and follow the steps.

- Vercel (recommended):
	1. Sign in to https://vercel.com and create a new project.
	2. Import this GitHub repository.
	3. Under Project Settings → Environment Variables, add the same `VITE_` variables listed above.
	4. Vercel will automatically detect the Vite project and deploy on push.

- Netlify:
	1. Create a site from Git → GitHub and import the repo.
	2. Set the build command to `npm run build` and the publish directory to `dist`.
	3. Add the `VITE_` environment variables under Site Settings → Build & deploy → Environment.

- GitHub Pages (via GitHub Actions):
	- The workflow at `.github/workflows/deploy.yml` builds the site and publishes `dist` to `gh-pages` whenever `main` changes.
	- In repository Settings → Pages, set the source to **GitHub Actions**.
	- Add the four `VITE_` variables as **Repository secrets** to enable the contact form.
	- The expected site URL is `https://sonicSAAD.github.io/portfolio/`.

If you'd like, I can set up CI deployment to Netlify or Vercel for you (I can't set up external accounts, but I can create the configuration and instructions you can follow to connect them).

## Credits

Built and maintained by Mohammad Saad.

## Contact

- LinkedIn: https://www.linkedin.com/in/mohammad-saad-0b7b5b32a/
- GitHub: http://github.com/sonicSAAD
- LeetCode: https://leetcode.com/u/6e8oFGT8hK/
- Email: mohammadsaad65283@gmail.com
