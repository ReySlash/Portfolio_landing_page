# Portfolio Landing Page

A responsive developer portfolio built with Next.js App Router, React 19, TypeScript, and Tailwind CSS 4.

The site is designed to present production-ready work, highlight practical full-stack and frontend skills, and provide clear contact paths for recruiters or collaborators.

## Purpose

- Present projects in a clean, professional format
- Demonstrate real-world Next.js, React, and product-focused development work
- Provide a polished central hub for portfolio, contact, and professional links

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Next Image for local asset optimization
- PostCSS
- Vitest + Testing Library
- ESLint 9
- pnpm

## Architecture Notes

- Single-route portfolio rendered from `src/app/page.tsx`
- Client components are used only where browser APIs are required:
  - navigation section tracking
  - reveal-on-scroll animation
  - clipboard copy interaction
- Static project data lives in `src/data/projects.ts`
- Local images are handled through Next.js static imports

## Features

- Responsive layout across mobile and desktop
- Sticky navigation with active-section highlighting
- Scroll reveal animation for main content blocks
- Data-driven projects section with live demo, GitHub links, and project thumbnails
- Updated messaging around full-stack and Next.js capabilities
- Contact section with LinkedIn, GitHub, copy-email, and `mailto` access
- Minimal footer and production-ready build setup

## Local Development

Enable Corepack if needed, then install dependencies with the lockfile:

```bash
corepack enable
pnpm install --frozen-lockfile
```

Start the development server:

```bash
pnpm dev
```

Note: this branch uses `next dev --webpack` and `next build --webpack`. That is intentional in this repo because Turbopack hit environment-specific permission issues during the migration.

## Available Scripts

```bash
pnpm dev
pnpm lint
pnpm test
pnpm build
pnpm start
```

## Testing

This project includes lightweight component tests for key UI flows:

- navbar rendering and mobile menu behavior
- projects section rendering
- contact actions, including email copy and `mailto` link

Run the test suite with:

```bash
pnpm test
```

## Pre-Deploy Checklist

Before deploying, run:

```bash
pnpm lint
pnpm test
pnpm build
```

Then manually verify:

- navbar links and active section highlighting
- mobile menu behavior
- project links
- contact actions
- responsive layout at mobile and desktop widths

## Deployment Notes

The application code is now structured for standard Next.js hosting.

Recommended target:
- Vercel
- Canonical production domain: `https://reyslash.com`

Current repo state:
- GitHub Actions deployment has been removed from this repo
- deployment is expected to be handled directly through Vercel instead of a repo-managed Pages pipeline

For a production build locally:

```bash
pnpm build
pnpm start
```

If deployment is migrated next, the workflow or hosting target should be updated before treating this branch as production-ready.

## Dependency Locking

Dependencies are intentionally pinned to exact versions in `package.json`, and the project includes a committed `pnpm-lock.yaml`.

An `.npmrc` file is also included with `save-exact=true`, so future `pnpm add` installs are saved as exact versions instead of version ranges.
