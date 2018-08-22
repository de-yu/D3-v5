var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, "src");


var config = {
    entry: SRC_DIR + "/js/index.js",
    output: {
        path: DIST_DIR + "/js/",
        filename: "bundle.js",
        publicPath: "/js/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'assets/admin.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 7000,
    },
    module: {
        rules: [
            {
                test: /\.js?/, exclude: /node_modules/,
                include: SRC_DIR,
            }
        ]
    }
}

module.exports = config;