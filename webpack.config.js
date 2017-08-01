const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            __dirname + '/build',
            'node_modules',
        ],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'awesome-typescript-loader',
                }],

            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"electron"'
            }
        })
    ],

    target: 'electron',
    
    plugins: [new HtmlWebpackPlugin({
        template: "src/index.html",
    })],
};
