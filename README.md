# AI Terminal Launchers

VS Code extension that adds clickable toolbar buttons in the editor title area for launching **Codex** and **Gemini** CLI tools in new terminal tabs — similar to the Claude Code button.

| Button | Icon | Command | Shortcut |
|--------|------|---------|----------|
| Codex | OpenAI Blossom | `codex` | `Cmd+Alt+C` |
| Gemini | Google Spark | `gemini` | `Cmd+Alt+G` |

Each button opens a new terminal in its own split view with the branded icon in the tab title.

---

## Quick Install (5 minutes)

### 1. Install the CLI tools

You need `codex` and `gemini` available in your terminal. Skip any you already have.

**Codex** (requires Node.js 22+):
```bash
npm install -g @openai/codex
```

**Gemini** (requires Node.js 20+):
```bash
npm install -g @anthropic-ai/gemini-cli
# or via Homebrew:
brew install gemini
```

Verify they work:
```bash
codex --version
gemini --version
```

### 2. Clone this repo

```bash
git clone https://github.com/jmstew3/vscode-ai-launchers.git
cd vscode-ai-launchers
```

### 3. Install dependencies and compile

```bash
npm install
npm run compile
```

### 4. Package and install the extension

```bash
npx @vscode/vsce package
code --install-extension ai-terminal-launchers-0.0.1.vsix
```

### 5. Reload VS Code

Open VS Code, press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux), type **"Reload Window"**, and press Enter.

### 6. Done

You should now see the Codex and Gemini icons in the top-right toolbar area whenever you have a file open. Click either one to launch a terminal.

---

## Troubleshooting

**Buttons don't appear?**
- Make sure you have a file open in the editor (buttons appear in the editor title bar)
- Try reloading VS Code (`Cmd+Shift+P` → "Reload Window")

**Terminal opens but command fails?**
- Make sure `codex` / `gemini` are installed and on your PATH
- Test by opening a regular terminal in VS Code and typing `codex` or `gemini`

**Keyboard shortcuts conflict?**
- `Cmd+Alt+C` (Codex) and `Cmd+Alt+G` (Gemini) can be rebound in VS Code:
  `Cmd+Shift+P` → "Open Keyboard Shortcuts" → search for "Open Codex Terminal" or "Open Gemini Terminal"

---

## Updating

If you pull a newer version of this repo:

```bash
git pull
npm install
npm run compile
npx @vscode/vsce package
code --install-extension ai-terminal-launchers-0.0.1.vsix
```

Then reload VS Code.

---

## Development

To test changes without installing permanently:

```bash
npm install
npm run compile
```

Open this folder in VS Code and press **F5** — an Extension Development Host window will open with your changes loaded.

---

## Uninstall

```bash
code --uninstall-extension undefined-publisher.ai-terminal-launchers
```

Or: VS Code → Extensions sidebar → search "AI Terminal Launchers" → Uninstall.
