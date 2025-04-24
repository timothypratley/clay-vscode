# Clay-vscode

Adds Clay visualization commands and keybindings to Visual Studio Code.

## Usage

### Getting Started

Download and install from github.

1. Open the Extensions view (`Ctrl+Shift+X`).
2. Search for `Clay-vscode`.
3. Click on the `Install` button.
4. After installation, reload the window to activate the extension.
5. Open a Clojure file.
6. Use the command palette (`Ctrl+Shift+P`) and search for "Clay" to find and run the commands.
7. Use the keybindings to quickly visualize your code.

### Prerequisites

- [Calva](https://marketplace.visualstudio.com/items?itemName=ms-vscode.clojure-extension-pack) installed
- [Clay](https://github.com/scicloj/clay) added to deps.edn

### Commands

Use the command palette or keybindings to run the commands. The commands are:

- `clay.showTopLevelForm` `alt+c` Visualize a top-level form
- `clay.makeFile` `alt+shift+c` Visualize the current file as a notebook
- `clay.watch` `alt+shift+w` Toggle watching refresh on file changes

## Rationale

The goal of this extension is to provide a simple way to visualize Clojure code using Clay.
It adds commands and keybindings to make it easy to visualize top-level forms and files as notebooks.
The extension is designed to be lightweight and easy to use, with minimal configuration required.

## Contributing

PRs and issues are welcome!

- `package.json` contains the metadata for your extension, including the name, description, and commands.
- `src/extension.ts` contains the code that runs when your extension is activated.

### Hacking

- Run the build task (`Ctrl+Shift+B`) to compile the TypeScript code to JavaScript.
- Press `F5` to open a new window with your extension loaded.
- You can relaunch the extension from the debug toolbar after making changes to the files listed above.

### Installation

- Make sure you have [Node.js](https://nodejs.org/) installed.
- Install the [Visual Studio Code Extension Manager](https://code.visualstudio.com/docs/editor/extension-gallery#_installing-an-extension) (`vsce`) globally by running `npm install -g vsce`.
- Open a terminal and navigate to the root folder of your extension.
- Run `npm install` to install the dependencies.
- Run `npm run compile` to compile the TypeScript code to JavaScript.
- Run `vsce package` to create a `.vsix` file for your extension.
- The `.vsix` file will be created in the root folder of your extension.
- To install the extension, open Visual Studio Code and go to the Extensions view (`Ctrl+Shift+X`).
- Click on the `...` menu in the top right corner and select `Install from VSIX...`.
- Select the `.vsix` file you just created and click `Open`.
- The extension will be installed and activated automatically.
- You can also install the extension by running `code --install-extension <path to .vsix file>` in the terminal.
- To uninstall the extension, open the Extensions view, find your extension in the list, and click on the `Uninstall` button.
- To update the extension, run `vsce publish` to publish a new version to the marketplace.
