var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /.ts$/,
            use:  'ts-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
};