# Project Detail Page Experience Specification

## Status

Implemented baseline with local screenshot fallbacks. Additional project screenshots can be added to the data model without changing the page layout.

## Purpose

Give each portfolio project a focused, accessible page that explains the problem it solves, how it works, and the technologies used while providing a visual preview of the product.

## Page structure

Every `/projects/[slug]` page contains, in this order:

1. Back navigation to `/#projects`.
2. Project title and short description.
3. Full project overview.
4. Screenshot carousel.
5. Problem statement.
6. Solution explanation.
7. Key capability highlights.
8. Full technology stack with logos and names.
9. CTA row with Live Demo first and GitHub second.

The page does not render a redundant Details action because the visitor is already on the detail page.

## Project data contract

The static project model includes:

```ts
type ProjectScreenshot = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

type ProjectTechnology = {
  name: string;
  iconKey: TechnologyIconKey;
};
```

Each project also provides:

- `problem`: the user or business problem.
- `solution`: how the project addresses that problem.
- `screenshots`: local screenshot assets with descriptive alternative text.
- `technologies`: the complete technology list.

The existing thumbnail is used as a safe one-slide fallback until three to five representative screenshots are supplied for each project.

## Screenshot carousel

The carousel uses the shadcn carousel primitive with Embla Autoplay.

- Previous and next controls are available when multiple slides exist.
- Slide indicators allow direct selection.
- Arrow-key navigation, keyboard focus, and touch/swipe interaction are supported.
- Autoplay advances every five seconds.
- Autoplay pauses on pointer hover and keyboard focus.
- Autoplay is disabled when `prefers-reduced-motion: reduce` is active.
- A single screenshot remains valid and hides unnecessary controls.
- Every image has descriptive `alt` text.
- Captions render only when supplied.

## Technology badges

Technology badges use shadcn `Badge` and a centralized Simple Icons registry. Each badge contains the technology logo and name. Technologies without a matching brand icon use the generic fallback icon while preserving the full technology name.

## Visual and accessibility requirements

- Preserve the black/red portfolio identity.
- Use shadcn `Card`, `Badge`, and carousel primitives.
- Keep the layout responsive with a single carousel slide on mobile and a constrained presentation on larger screens.
- Preserve visible focus indicators and semantic headings.
- Keep Live Demo as the primary CTA and GitHub as the secondary CTA.
- Preserve reduced-motion behavior for carousel transitions and existing reveal animations.
- Omit unavailable external actions rather than rendering broken or disabled links.

## Metadata and routing

The dynamic route generates static params from project data, returns `notFound()` for unknown slugs, and generates route-specific title, description, canonical URL, and Open Graph image metadata.

Every project detail URL is included in the sitemap.

## Acceptance criteria

- Every known project has problem and solution content.
- Every screenshot has descriptive alternative text.
- Every technology has a name and icon key.
- Known slugs generate static detail pages.
- Invalid slugs resolve through the not-found path.
- Carousel controls and indicators work with multiple screenshots.
- Autoplay pauses on hover/focus and respects reduced motion.
- Live Demo precedes GitHub on detail pages.
- GitHub is absent from project cards and present on detail pages.
- `pnpm lint`, `pnpm test`, and `pnpm build` pass.
