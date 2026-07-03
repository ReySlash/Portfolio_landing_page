# Portfolio Landing Page

A responsive developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

The site is designed to present production-ready work, highlight practical full-stack and frontend skills, and provide clear contact paths for recruiters or collaborators.

## Purpose

- Present projects in a clean, professional format
- Demonstrate real-world React, Next.js, and product-focused development work
- Provide a polished central hub for portfolio, contact, and professional links

## Tech Stack

- React 19
- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Vitest + Testing Library
- Vercel for deployment

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
pnpm install --frozen-lockfile --ignore-scripts
```

Start the development server:

```bash
pnpm dev
```

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

This project is configured for standard Next.js deployment on Vercel.

For a production build:

```bash
pnpm build
pnpm start
```

## Dependency Locking

Dependencies are intentionally pinned to exact versions in `package.json`, and the project includes a committed `pnpm-lock.yaml`.

An `.npmrc` file is also included with `save-exact=true`, so future `pnpm add` installs are saved as exact versions instead of version ranges.
