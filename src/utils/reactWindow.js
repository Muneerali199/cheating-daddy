const { BrowserWindow } = require('electron');
const path = require('path');

/**
 * Create a window for the React-based UI
 */
function createReactWindow() {
    const reactWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1000,
        minHeight: 700,
        frame: true,
        backgroundColor: '#050816',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, '../preload.js')
        },
        titleBarStyle: 'hiddenInset',
        show: false
    });

    // Load the React app
    reactWindow.loadFile(path.join(__dirname, '../react-app.html'));

    // Show window when ready
    reactWindow.once('ready-to-show', () => {
        reactWindow.show();
    });

    // Open DevTools in development
    if (process.env.NODE_ENV !== 'production') {
        reactWindow.webContents.openDevTools();
    }

    return reactWindow;
}

module.exports = { createReactWindow };
