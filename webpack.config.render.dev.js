const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/ui/app.tsx'),
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
    target: "electron-renderer",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/ui/index.html')
        })
    ]
};