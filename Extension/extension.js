// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    const panel = vscode.window.createWebviewPanel(
        'smoothcode',
        'Smooth Code',
        vscode.ViewColumn.One,
        {}
    )

    function getWebviewContent(link){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SmoothCode</title>
        </head>
        <body>
            <div>Hello</div>
        </body>
        </html>`;
    }



	var disposable = vscode.commands.registerCommand('smoothcode.stackOverflow', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }

        const url = 'https://stackoverflow.com/search';
        let text = "";

        var selection = editor.selection;
        if (!selection.isEmpty) {
            text = editor.document.getText(selection);
        } else {
            const position = editor.selection.active;
            const range = editor.document.getWordRangeAtPosition(position);
            text = editor.document.getText(range);
        }

        if (text.length == 0) {
            vscode.window.showErrorMessage('Null string in text variable.');
            return;
        }
        if (text.indexOf('\n') >= 0) {
          vscode.window.showErrorMessage('Multiline selection not allowed for your security.');
          return;
        }

        let uri = vscode.Uri.parse(url + "?q=" + text);
        panel.webview.html = getWebviewContent(uri);
    }); 
    
    var disposable = vscode.commands.registerCommand('smoothcode.devDocs', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }

        const url = 'https://devdocs.io/';
        let text = "";

        var selection = editor.selection;
        if (!selection.isEmpty) {
            text = editor.document.getText(selection);
        } else {
            const position = editor.selection.active;
            const range = editor.document.getWordRangeAtPosition(position);
            text = editor.document.getText(range);
        }

        if (text.length == 0) {
            vscode.window.showErrorMessage('Null string in text variable.');
            return;
        }
        if (text.indexOf('\n') >= 0) {
          vscode.window.showErrorMessage('Multiline selection not allowed for your security.');
          return;
        }

        let uri = vscode.Uri.parse(url + "#q=" + text);
        vscode.commands.executeCommand('vscode.open', uri);
    });
    
    var disposable = vscode.commands.registerCommand('smoothcode.reddit', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }

        const url = 'https://reddit.com/search/';
        let text = "";

        var selection = editor.selection;
        if (!selection.isEmpty) {
            text = editor.document.getText(selection);
        } else {
            const position = editor.selection.active;
            const range = editor.document.getWordRangeAtPosition(position);
            text = editor.document.getText(range);
        }

        if (text.length == 0) {
            vscode.window.showErrorMessage('Null string in text variable.');
            return;
        }
        if (text.indexOf('\n') >= 0) {
          vscode.window.showErrorMessage('Multiline selection not allowed for your security.');
          return;
        }

        let uri = vscode.Uri.parse(url + "?q=" + text);
        vscode.commands.executeCommand('vscode.open', uri);
    });
    
    var disposable = vscode.commands.registerCommand('smoothcode.pypi', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }

        const url = 'https://pypi.org/project/';
        let text = "";

        var selection = editor.selection;
        if (!selection.isEmpty) {
            text = editor.document.getText(selection);
        } else {
            const position = editor.selection.active;
            const range = editor.document.getWordRangeAtPosition(position);
            text = editor.document.getText(range);
        }

        if (text.length == 0) {
            vscode.window.showErrorMessage('Null string in text variable.');
            return;
        }
        if (text.indexOf('\n') >= 0) {
          vscode.window.showErrorMessage('Multiline selection not allowed for your security.');
          return;
        }

        let uri = vscode.Uri.parse(url + text);
        vscode.commands.executeCommand('vscode.open', uri);
    });

    var disposable = vscode.commands.registerCommand('smoothcode.npm', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }

        const url = 'https://www.npmjs.com/package/';
        let text = "";

        var selection = editor.selection;
        if (!selection.isEmpty) {
            text = editor.document.getText(selection);
        } else {
            const position = editor.selection.active;
            const range = editor.document.getWordRangeAtPosition(position);
            text = editor.document.getText(range);
        }

        if (text.length == 0) {
            vscode.window.showErrorMessage('Null string in text variable.');
            return;
        }
        if (text.indexOf('\n') >= 0) {
          vscode.window.showErrorMessage('Multiline selection not allowed for your security.');
          return;
        }

        let uri = vscode.Uri.parse(url + text);
        vscode.commands.executeCommand('vscode.open', uri);
    });

    var disposable = vscode.commands.registerCommand('smoothcode.youtube', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }

        const url = 'https://www.youtube.com/results';
        let text = "";

        var selection = editor.selection;
        if (!selection.isEmpty) {
            text = editor.document.getText(selection);
        } else {
            const position = editor.selection.active;
            const range = editor.document.getWordRangeAtPosition(position);
            text = editor.document.getText(range);
        }

        if (text.length == 0) {
            vscode.window.showErrorMessage('Null string in text variable.');
            return;
        }
        if (text.indexOf('\n') >= 0) {
          vscode.window.showErrorMessage('Multiline selection not allowed for your security.');
          return;
        }

        let uri = vscode.Uri.parse(url + "?search_query=" + text);
        vscode.commands.executeCommand('vscode.open', uri);
    });

    var disposable = vscode.commands.registerCommand('smoothcode.geeks', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }

        const url = 'https://www.geeksforgeeks.org/';
        let text = "";

        var selection = editor.selection;
        if (!selection.isEmpty) {
            text = editor.document.getText(selection);
        } else {
            const position = editor.selection.active;
            const range = editor.document.getWordRangeAtPosition(position);
            text = editor.document.getText(range);
        }

        if (text.length == 0) {
            vscode.window.showErrorMessage('Null string in text variable.');
            return;
        }
        if (text.indexOf('\n') >= 0) {
          vscode.window.showErrorMessage('Multiline selection not allowed for your security.');
          return;
        }

        let uri = vscode.Uri.parse(url + "?s=" + text);
        vscode.commands.executeCommand('vscode.open', uri);
    });
    


	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
