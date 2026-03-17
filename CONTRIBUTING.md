# Contributing to PyStatLab

Thanks for contributing. This document defines the expected workflow for code, assignments, and documentation updates.

## Ways to Contribute

- Add or improve Python assignments under `Assignments/`
- Improve frontend UX and components in `computational-statistics/src/`
- Improve backend API behavior in `computational-statistics-backend/`
- Improve documentation, setup instructions, and examples

## Local Setup

1. Fork and clone your fork.
2. Configure environment variables for frontend and backend.
3. Install dependencies:
   - `cd computational-statistics && npm install`
   - `cd ../computational-statistics-backend && npm install`
4. Run the apps:
   - Frontend: `npm run dev`
   - Backend: `node server.js`

## Branch Naming

Use focused branches:

- `feature/<short-topic>`
- `fix/<short-topic>`
- `docs/<short-topic>`
- `refactor/<short-topic>`

## Commit Guidance

- Write clear, scoped commit messages.
- Keep one logical change per commit where possible.
- Avoid mixing formatting-only edits with behavior changes.

Example:

```text
feat(labs): add edit flow for assignment problems
```

## Assignment Contribution Standard

- Place files in the correct topic folder inside `Assignments/`.
- Keep naming consistent (`1.py`, `2.py`, etc.) with the existing folder style.
- Prefer small, readable scripts with clear variable names.
- If an assignment expects specific input format, document it in comments at the top of the file.

## Pull Request Checklist

- [ ] Code builds and runs locally
- [ ] Frontend lint passes (`npm run lint` in `computational-statistics`)
- [ ] Updated documentation where behavior changed
- [ ] No secrets or private keys added to commits
- [ ] PR description explains what changed and why

## Security and Secrets

- Never commit real API keys, database credentials, or private tokens.
- Use local `.env` files and rotate secrets if exposure occurs.

## Review Expectations

- PRs should be focused and reviewable.
- Large PRs may be asked to split into smaller pieces.
- Feedback should be addressed with follow-up commits.
