# Agent Guide

## Project

- Next.js App Router project using React, TypeScript, and Tailwind CSS v4.
- Application routes live in `src/app/`; reusable UI lives in `src/components/`.
- Static project content lives in `src/data/projects.ts`.
- Local images are imported from `src/assets/` or `src/data/thumbnails/`.
- The `@/*` alias maps to `src/*`.

## Commands

Use pnpm, not npm:

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm test
pnpm build
```

Dependencies are pinned exactly. Keep `pnpm-lock.yaml` synchronized with `package.json`.

## Workflow

- `main` is production.
- `test` is the Vercel Preview validation branch.
- `dev` is the development baseline.
- Feature branches start from `dev` and promote through `test` to `main`.
- Do not change Vercel settings or create branches unless explicitly requested.

## Documentation

Read [`docs/README.md`](./docs/README.md) and its linked specifications before changing the project grid, project detail pages, shadcn/ui setup, or deployment workflow.

## Constraints

- Preserve the existing black/red visual identity unless a redesign is explicitly requested.
- Keep navigation semantic and keyboard accessible; preserve visible focus states and reduced-motion behavior.
- Do not edit `.next/`, `dist/`, or other generated output.
- Verify changes with lint, tests, and build as appropriate.
- There is no repository `vercel.json`; Vercel branch and environment settings are dashboard-managed.
