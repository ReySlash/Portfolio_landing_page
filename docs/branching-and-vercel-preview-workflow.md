# Branching and Vercel Preview Workflow

## Status

Partially configured workflow. The `test` branch exists remotely and has been used for Preview validation. Vercel is connected to the repository and Preview deployments are available, but dedicated automatic behavior for the `test` branch must be verified in the Vercel dashboard.

## Branch roles

### `main`

- Production branch.
- Connected to the production Vercel deployment.
- Receives only approved changes promoted from `test`.
- Must remain deployable.

### `test`

- Preview validation branch.
- Every push should create or update a Vercel Preview deployment automatically.
- Used for browser, responsive, accessibility, and regression testing.
- Acts as the approval gate before production.

### `dev`

- Development baseline branch.
- Used as the starting point for feature branches and local integration.
- Is not the preview approval gate.
- May contain work that is not yet ready for `test`.

### Feature branches

- Use short-lived branches created from `dev`.
- Use descriptive names such as:
  - `feature/project-detail-pages`
  - `feature/shadcn-card-system`
  - `fix/project-grid-mobile-layout`
- Open pull requests targeting `test` when the work is ready for preview validation.

## Promotion flow

```text
feature/* → test → main
```

### Feature development

1. Update local references and fetch remote branches.
2. Start from the latest `dev`.
3. Create a feature branch.
4. Implement and test locally.
5. Run the required checks.
6. Open a pull request targeting `test`.

### Preview validation

1. Merge the approved feature pull request into `test`.
2. Wait for Vercel to create or update the Preview deployment.
3. Test the Preview URL manually.
4. Record any issues against the feature branch or follow-up fix.
5. Repeat until the Preview is accepted.

### Production promotion

1. Confirm the `test` branch is green and the Preview has been accepted.
2. Open a pull request from `test` to `main`.
3. Review the complete change set.
4. Merge into `main`.
5. Confirm the production deployment succeeds.
6. Perform a smoke test on the production URL.

## Initial branch setup

The current repository has `main` and `test` available. The documented `dev` baseline should be created if it does not already exist before starting the next feature cycle. The intended setup commands are:

```bash
git fetch origin
git switch main
git pull --ff-only origin main

git switch -c dev
git push --set-upstream origin dev

git switch main
git switch -c test
git push --set-upstream origin test
```

If either branch already exists remotely, use the existing branch instead of recreating it.

## Required local checks

Before opening or updating a pull request targeting `test`, run:

```bash
pnpm lint
pnpm test
pnpm build
```

The branch must have a clean working tree before it is reviewed.

## Vercel prerequisites

Configure or verify these settings in the Vercel project dashboard:

- Connect the GitHub repository.
- Set `main` as the Production Branch.
- Enable Preview deployments for non-production branches.
- Confirm that pushes to `test` create Preview deployments automatically.
- Confirm that the Preview deployment is associated with the `test` Git branch rather than only an ad-hoc CLI deployment.
- Configure Preview environment variables separately from Production variables.
- Confirm the Preview build uses the same install and build commands as the repository.
- Verify the project root and output settings for the Next.js application.

There is currently no `vercel.json` in the repository. Branch behavior and environment configuration must therefore be verified in the Vercel project settings unless a future decision introduces repository-managed Vercel configuration.

The Vercel CLI can deploy the checked-out `test` state directly to a Preview, but it does not expose a setting for designating a special Preview branch. Automatic branch behavior remains dashboard-managed.

## Preview validation checklist

For every approved `test` Preview:

- Confirm the deployment status is successful.
- Open the Preview URL on desktop and mobile widths.
- Verify the home page loads without console errors.
- Verify the Projects grid at mobile, tablet, and extra-large widths.
- Verify every Details link resolves to the correct project route.
- Verify invalid project slugs show the not-found experience.
- Verify Live Demo and GitHub links.
- Verify keyboard navigation and visible focus states.
- Verify reduced-motion behavior.
- Verify metadata and canonical URLs where applicable.
- Verify the sitemap contains the project detail routes.
- Check for layout regressions in Hero, About, Contact, and Footer sections.

## Production promotion checklist

Before merging `test` into `main`:

- All required local checks pass.
- The latest `test` Preview has been manually accepted.
- No unresolved Preview regressions remain.
- The pull request contains only approved changes.
- Production environment variables are confirmed.
- A rollback commit or known-good production deployment is identified.

After merging:

- Confirm the production Vercel deployment completes successfully.
- Smoke-test the production URL.
- Verify the Projects section and at least one detail page.
- Confirm no production-only environment or routing issue exists.

## Rollback guidance

If production fails after promotion:

1. Identify the last known-good commit on `main`.
2. Prefer reverting the promotion commit through a reviewed pull request.
3. Confirm the resulting `main` deployment succeeds.
4. Re-test the production smoke-test checklist.
5. Keep the failed change available for diagnosis on its feature branch.

Avoid rewriting shared branch history unless a repository maintainer explicitly approves it.

## Assumptions

- `main` remains the production branch.
- `test` is the Vercel Preview approval gate.
- `dev` is the development baseline.
- Feature branches target `test` when ready for review.
- Vercel is configured through its dashboard rather than a repository `vercel.json`.
- Preview and Production environment variables may differ and must be managed independently.
