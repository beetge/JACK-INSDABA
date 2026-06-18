# AI Assistant Rules for this Repository

Any AI assistant working in this repo must follow these rules:

- Inspect git status before making changes.
- Preserve existing user or developer changes unless explicitly asked to revert them.
- After every completed change, create a Git commit with a clear message.
- Push only when the user has asked for shared GitHub collaboration or deployment.
- Do not commit secrets, passwords, API keys, private certificates, or local machine files.
- If the deployment workflow is changed, commit that workflow change separately or mention it clearly in the commit message.
