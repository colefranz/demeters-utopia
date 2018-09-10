const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'client.bundle.js'
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            },
            include: [
                path.resolve(__dirname, 'client')
            ]
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './client/index.html',
            filename: './index.html'
        })
    ]
};
