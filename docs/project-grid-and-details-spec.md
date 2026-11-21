# Project Grid and Detail Pages Specification

> The expanded detail-page content, carousel behavior, technology-logo strategy, and accessibility requirements are maintained in [Project Detail Page Experience](./project-detail-page-spec.md).

## Status

Approved specification. This document describes the planned implementation; it does not itself change application behavior.

## Goal

Improve the portfolio Projects section so it presents more projects at a glance, provides a consistent accessible visual system, and gives every project a dedicated detail page.

The existing black/red visual identity remains the foundation. The upgrade adds focused shadcn/ui primitives without replacing the portfolio’s overall design language.

## Scope

### Included

- shadcn/ui setup for the existing Next.js App Router project.
- Responsive project-card grid redesign.
- Data-driven project detail routes.
- Project metadata and sitemap updates.
- Accessibility-focused interaction and visual states.
- Tests for project cards, routes, metadata, and invalid slugs.

### Excluded

- CMS or external content management.
- API, database, authentication, or user accounts.
- Project filtering, search, pagination, or sorting.
- Changes to the Hero, About, Contact, or navigation sections beyond shared styling utilities.
- Vercel dashboard configuration; that process is documented separately.

## shadcn/ui integration

Use the existing `@/*` TypeScript alias, which maps to `src/*`.

Add the focused primitives required by this feature:

- `Card`
- `Badge`
- `Button` styles through `buttonVariants`

Add the supporting shadcn setup:

- `components.json`
- `src/components/ui/card.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/button.tsx`
- `src/lib/utils.ts`

Add the required packages:

- `shadcn`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react`
- `tw-animate-css`

Update the Tailwind v4 stylesheet imports according to the current shadcn setup. Preserve the existing black/red palette and use shadcn primitives as composable building blocks rather than replacing all current styles with the default theme.

Links must remain semantic anchors. Use `buttonVariants` to style internal and external links as buttons; do not use a button element for navigation.

References:

- [shadcn/ui Next.js installation](https://ui.shadcn.com/docs/installation/next)
- [shadcn/ui Tailwind v4 guidance](https://ui.shadcn.com/docs/tailwind-v4)
- [shadcn/ui Button guidance](https://ui.shadcn.com/docs/components/aria/button)

## Project data contract

Extend the existing `Project` type with:

```ts
slug: string;
highlights: string[];
```

Keep the existing fields:

- `id`
- `name`
- `description`
- `techTags`
- `liveDemoUrl`
- `githubUrl`
- `thumbnail`

Use these stable slugs:

| Project | Slug |
| --- | --- |
| KinetiQ | `kinetiq` |
| Job Applications Tracker | `job-applications-tracker` |
| Digital Clip Agency Portfolio | `digital-clip-agency` |
| TasteBoard | `tasteboard` |

Each project must include three to five concise `highlights` describing its main capabilities. Existing descriptions remain the overview copy for the first version of each detail page.

## Projects section

Replace the current two-column desktop layout with a balanced responsive grid:

```text
mobile: 1 column
sm and larger: 2 columns
xl and larger: 3 columns
```

Use consistent grid gaps and equal-height cards within each row.

### Card content

Each card contains:

1. Consistent aspect-ratio project thumbnail.
2. Accessible project image alternative text.
3. Project name.
4. Short project description.
5. Limited technology badge preview to keep cards compact.
6. Primary `Live Demo` external link when available.
7. Secondary `Details` internal link.

GitHub must not appear in the card action area. It remains available on the detail page.

### Card behavior

- Cards remain keyboard navigable.
- Links have visible `:focus-visible` states.
- Hover styles enhance the card but are not required for comprehension or interaction.
- Existing reduced-motion behavior remains respected.
- External links retain `target="_blank"` and `rel="noopener noreferrer"`.
- Internal detail links use Next.js `Link` for client navigation.

## Detail routes

Add a dynamic route:

```text
src/app/projects/[slug]/page.tsx
```

The route must:

- Generate static params from the project data.
- Resolve a project by its stable slug.
- Call `notFound()` when the slug does not exist.
- Render the project using a reusable detail layout.

### Detail page content

Each detail page contains:

1. Back navigation to the portfolio Projects section.
2. Project title.
3. Project overview.
4. Project thumbnail.
5. Key capability highlights.
6. Full technology stack.
7. Primary Live Demo action when available.
8. Secondary GitHub action when available.

The page must remain useful when an optional external URL is missing. Actions should be omitted rather than rendered as disabled or broken links.

### Metadata

Generate route-specific metadata from the project data:

- `title`: project name plus portfolio context.
- `description`: project description.
- Canonical URL using `/projects/[slug]`.
- Open Graph image using the project thumbnail when supported by the existing metadata setup.

### Sitemap

Add every project detail URL to `src/app/sitemap.ts` using the existing canonical site URL.

## Accessibility requirements

- Use semantic headings with a predictable heading hierarchy.
- Use descriptive image `alt` text.
- Ensure all actions are reachable and usable by keyboard.
- Preserve visible focus indicators against the dark background.
- Do not use color alone to communicate action state.
- Keep link purpose clear from its accessible name.
- Preserve reduced-motion behavior for existing reveal animations and any new transitions.

## Test and acceptance criteria

### Automated checks

- `pnpm lint` passes.
- `pnpm test` passes.
- `pnpm build` passes.
- Every project renders with a Details link using the expected slug.
- Live Demo is the primary card action.
- GitHub is available on the detail page rather than the card.
- Project lookup returns the correct project for every known slug.
- Unknown slugs trigger the not-found path.
- Detail metadata is generated from project data.
- Sitemap output includes every project detail URL.

### Manual checks

- Verify one-column layout on mobile.
- Verify two-column layout at tablet/desktop widths.
- Verify three-column layout at extra-large widths.
- Verify cards remain readable with long descriptions and many technology tags.
- Verify keyboard focus states on cards and detail-page actions.
- Verify reduced-motion behavior.
- Verify external links open correctly.
- Verify Vercel Preview behavior using the separate workflow specification.

## Assumptions

- Project content remains static and lives in `src/data/projects.ts`.
- No CMS or API is introduced.
- Existing project descriptions are suitable as initial overview copy.
- The existing black/red brand direction remains unchanged.
- GitHub links remain part of the project detail experience.
