# Contributing

## Branches and commits

Create a short-lived branch from `main` for each change. Use [Conventional Commits](https://www.conventionalcommits.org/) in English, for example `fix: handle a changed profile statistic`.

## Pull requests

Keep each pull request focused. Explain the visible result and how you checked it on a Letterboxd profile. Include a link to the related issue when there is one.

## Code style

- Keep the extension dependency-free and limited to the profile statistic.
- Use two-space indentation and plain JavaScript.
- Run `node --check content.js` and `npx --yes web-ext lint --source-dir .` before opening a pull request.
- Preserve the original Letterboxd count and link; add only the day-of-year and pace difference.
