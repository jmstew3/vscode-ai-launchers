import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const extPath = context.extensionPath;

  context.subscriptions.push(
    vscode.commands.registerCommand('aiTerminalLaunchers.openCodex', () => {
      launchTerminal('Codex', 'codex', {
        light: vscode.Uri.file(path.join(extPath, 'resources', 'blossom-black.svg')),
        dark: vscode.Uri.file(path.join(extPath, 'resources', 'blossom-white.svg')),
      });
    }),
    vscode.commands.registerCommand('aiTerminalLaunchers.openGemini', () => {
      launchTerminal('Gemini', 'gemini', {
        light: vscode.Uri.file(path.join(extPath, 'resources', 'gemini-spark-light.svg')),
        dark: vscode.Uri.file(path.join(extPath, 'resources', 'gemini-spark-dark.svg')),
      });
    })
  );
}

function launchTerminal(
  name: string,
  command: string,
  iconPath: { light: vscode.Uri; dark: vscode.Uri }
) {
  const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  const terminal = vscode.window.createTerminal({
    name,
    cwd,
    location: { viewColumn: vscode.ViewColumn.Beside },
    iconPath,
  });
  terminal.show();
  terminal.sendText(command, true);
}

export function deactivate() {}
