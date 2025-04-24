import * as vscode from 'vscode';

/**
 * Safely executes a Calva command and shows user-friendly errors.
 * @param command The Calva command (e.g., 'calva.customREPLCommand').
 * @param args Optional arguments for the command.
 */
export async function executeCalvaCommand(
  command: string,
  ...args: string[]
): Promise<boolean> {
  try {
    // Attempt to run the Calva command
    const result = await vscode.commands.executeCommand(command, ...args);
    return result !== undefined; // Assume `undefined` means failure
  } catch (error) {
    // Handle missing Calva or command errors
    const calvaExtension = vscode.extensions.getExtension('betterthantomorrow.calva');
    if (!calvaExtension) {
      vscode.window.showErrorMessage(
        `Calva is not installed. This feature requires Calva.`
      );
    } else if (!calvaExtension.isActive) {
      vscode.window.showErrorMessage(
        `Calva is not active. Please ensure it's enabled.`
      );
    } else {
      vscode.window.showErrorMessage(
        `Failed to run Calva command '${command}': ${error}`
      );
    }
    return false;
  }
}

export function activate(context: vscode.ExtensionContext) {
  const register = (name: string, ...args: string[]) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(name, () => executeCalvaCommand("calva.runCustomREPLCommand", ...args))
    );
  };

  console.log('Congratulations, your extension "clay" is now active!');
  register('clay.showTopLevelForm', ',');
  register('clay.makeFile', 'n');
  register('clay.watch', 'w');
}

export function deactivate() {}
