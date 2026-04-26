# Portfolio Landing Page

A responsive developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

The site is designed to present production-ready work, highlight practical frontend skills, and provide clear contact paths for recruiters or collaborators.

## Purpose

- Present projects in a clean, professional format
- Demonstrate real-world frontend structure and UI implementation
- Provide a polished central hub for portfolio, contact, and professional links

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Vitest + Testing Library
- GitHub Pages for deployment

## Features

- Responsive layout across mobile and desktop
- Sticky navigation with active-section highlighting
- Scroll reveal animation for main content blocks
- Data-driven projects section with live demo and GitHub links
- Contact section with LinkedIn, GitHub, copy-email, and `mailto` access
- Minimal footer and production-ready build setup

## Local Development

Install dependencies with the lockfile:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

## Available Scripts

```bash
npm run dev
npm run lint
npm run test
npm run build
npm run preview
```

## Testing

This project includes lightweight component tests for key UI flows:

- navbar rendering and mobile menu behavior
- projects section rendering
- contact actions, including email copy and `mailto` link

Run the test suite with:

```bash
npm run test
```

## Pre-Deploy Checklist

Before deploying, run:

```bash
npm run lint
npm run test
npm run build
```

Then manually verify:

- navbar links and active section highlighting
- mobile menu behavior
- project links
- contact actions
- responsive layout at mobile and desktop widths

## Deployment Notes

The production build output is generated in `dist/`:

```bash
npm run build
```

That folder can then be deployed to GitHub Pages or any static hosting provider.

## Dependency Locking

Dependencies are intentionally pinned to exact versions in `package.json`, and the project includes a committed `package-lock.json`.

An `.npmrc` file is also included with `save-exact=true`, so future package installs are saved as exact versions instead of version ranges.
