var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname,'dist');
var SRC_DIR = path.resolve(__dirname,"src");

var graph_type = ['Histogram','Scatter','Line','Pie','Area','Confusion_matrix' , 'OrdinalLine']
var graph = [];
var entry = {}

for (var i = 0;i < graph_type.length;i++)
{
  graph.push(
          new HtmlWebpackPlugin({
            title:graph_type[i],
            template:SRC_DIR + "/html/graph.html",
            inject:false,
            filename:DIST_DIR + "/html/" + graph_type[i] + ".html",
            scriptPath:"\"../js/" + graph_type[i] + ".js\"",
            vendorPath:"\"../js/vendors.js\""
          }));

  entry[graph_type[i]] = SRC_DIR + "/js/" + graph_type[i] + ".js";
}


var config = {
  entry:entry,
  output:{
    path:DIST_DIR + "/js/",
    filename:'[name].js',
    publicPath:"/js/"
  },
  plugins:graph,
  devServer:{
    contentBase:path.join(__dirname,"dist/"),
    port:7000,
  },
  module:{
    rules:[
      {
        test:/\.js?/,exclude:/node_modules/,
        include:SRC_DIR,
      }
    ]
  },
  optimization:{
    splitChunks:{
      chunks:'all',
      name:"vendors",
    }
  }
}

module.exports = config;