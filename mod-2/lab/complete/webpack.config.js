const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
            test: /.ts$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
};