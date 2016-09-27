var path = require('path');
var Webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

const port = 3018;

module.exports = {
    port: port,
    devtool: '#eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',

        APP_DIR + '/index.jsx',
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '/static/',
        filename: 'bundle.js',
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({ alwaysNotify: true }),
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: APP_DIR,
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ],
    },
};
