# AI Terminal Launchers

VS Code extension that adds clickable toolbar buttons in the editor title area for launching Codex and Gemini CLI tools in new terminal tabs — similar to the Claude Code button.

## Buttons

| Button | Icon | Command | Shortcut |
|--------|------|---------|----------|
| Codex | OpenAI Blossom | `codex` | `Cmd+Alt+C` |
| Gemini | Google Spark | `gemini` | `Cmd+Alt+G` |

Each button opens a new terminal in its own split view (via `ViewColumn.Beside`) with the branded icon in the tab title.

## Prerequisites

- [codex](https://github.com/openai/codex) and [gemini](https://github.com/google-gemini/gemini-cli) CLIs installed and on your PATH
- macOS (keybindings use `Cmd`)

## Development Setup

```bash
npm install
npm run compile
```

Press **F5** to open the Extension Development Host and test.

## Install Permanently

Package and install so the buttons persist across all VS Code sessions:

```bash
npm run compile
npx @vscode/vsce package
code --install-extension ai-terminal-launchers-0.0.1.vsix
```

Reload VS Code (`Cmd+Shift+P` → "Reload Window") after installing.

## Updating

After making changes:

```bash
npm run compile
npx @vscode/vsce package
code --install-extension ai-terminal-launchers-0.0.1.vsix
```

Bump the `version` in `package.json` if you want to track versions.
