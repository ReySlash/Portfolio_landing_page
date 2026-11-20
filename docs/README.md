# Portfolio Upgrade Documentation

This directory contains the approved specifications for the next portfolio upgrade and its validation workflow.

## Specifications

- [Project grid and detail pages](./project-grid-and-details-spec.md)
- [Branching and Vercel Preview workflow](./branching-and-vercel-preview-workflow.md)

## Repository workflow

- `main`: production branch
- `test`: Vercel Preview validation branch
- `dev`: development baseline branch
- Feature branches: short-lived branches created from `dev`

Promotion flow:

```text
feature/* → test → main
```

The application code, Git branches, and Vercel settings remain unchanged until the specifications are implemented and the preview workflow is configured.
