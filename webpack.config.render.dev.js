const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/ui/app.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'render.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts(x)?$/, use: 'ts-loader' }
        ]
    },
    target: "electron-renderer"
};