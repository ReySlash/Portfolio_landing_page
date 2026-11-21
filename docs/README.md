# Portfolio Upgrade Documentation

This directory contains the specifications and current implementation notes for the portfolio UI, project detail experience, and preview workflow.

## Specifications

- [Project grid and detail pages](./project-grid-and-details-spec.md)
- [Project detail page experience](./project-detail-page-spec.md)
- [Branching and Vercel Preview workflow](./branching-and-vercel-preview-workflow.md)

## Repository workflow

- `main`: production branch
- `test`: Vercel Preview validation branch, created and pushed
- `dev`: documented development baseline; create it before the next feature cycle if it does not exist remotely
- Feature branches: short-lived branches created from `dev`

Promotion flow:

```text
feature/* → test → main
```

The project is connected to Vercel and Preview deployments are available. The Vercel CLI can create a Preview from `test`, but the dedicated automatic branch behavior must still be verified in Vercel project settings.
