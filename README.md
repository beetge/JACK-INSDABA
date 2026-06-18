# JACK

Static website snapshot for the CSI Indaba project.

## Project Structure

- `index.html` is the main website entry point.
- `assets/css/` contains page and component styles.
- `assets/js/` contains navigation, tabs, audio, and page behavior scripts.
- `.github/workflows/deploy.yml` deploys the site automatically with GitHub Actions.
- `mobile-tablet-responsive-issues.md` tracks known responsive issues.

## Deployment

This repo is configured for GitHub Pages deployment.

After the private GitHub repository is created and connected:

```powershell
git remote add origin <private-github-repo-url>
git push -u origin main
```

In GitHub, enable Pages with **GitHub Actions** as the source. After that, every push to `main` runs `.github/workflows/deploy.yml` and deploys the latest version.

You can also run the deployment manually from the GitHub **Actions** tab with **Deploy static site > Run workflow**.

## Collaboration Rules

Before starting work:

```powershell
git pull --rebase origin main
```

After completing every meaningful change:

```powershell
git status
git add .
git commit -m "Describe the change"
git push
```

Keep commits small and clear. Do not leave completed edits uncommitted.

## Instructions For AI Assistants

Any AI assistant working in this repo must follow these rules:

1. Inspect `git status` before making changes.
2. Preserve existing user or developer changes unless explicitly asked to revert them.
3. After every completed change, create a Git commit with a clear message.
4. Push only when the user has asked for shared GitHub collaboration or deployment.
5. Do not commit secrets, passwords, API keys, private certificates, or local machine files.
6. If the deployment workflow is changed, commit that workflow change separately or mention it clearly in the commit message.

Deployment happens from GitHub after changes are pushed to `main`. A local commit alone does not deploy until it is pushed.
