const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/services/start.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    target: "electron-main"
};