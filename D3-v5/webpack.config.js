var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, "src");

var graph_type = ['Histogram' , 'Scatter']
var graph = [];


for(var i=0;i<graph_type.length;i++ )
{
    graph.push(
              new HtmlWebpackPlugin({
            title: graph_type[i],
            template:SRC_DIR + "/html/graph.html",
            inject:false,
            filename:DIST_DIR +"/html/" + graph_type[i]+".html",
            scriptPath:"\"/js/" +graph_type[i] + ".js\""
        }));
}


var config = {
    entry: {
        'Histogram':SRC_DIR + "/js/" +graph_type[0] + ".js",
               'Scatter':SRC_DIR + "/js/" +graph_type[1] + ".js",
    },
    output: {
        path: DIST_DIR + "/js/",
        filename: '[name].js',
        publicPath: "/js/"
    },
    plugins: graph,
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
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