const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, 'src/services/start.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    target: "electron-main"
};