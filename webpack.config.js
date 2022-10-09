const path = require("path");

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', ".js", ".jsx"]
    },
    module: {
        rules: [
            {test: /\.ts|.tsx?$/, use: 'ts-loader'}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    externals: {
        react: "react",
        "react-dom": "react-dom"
    }
}