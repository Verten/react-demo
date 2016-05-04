var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var debug = process.env.NODE_ENV !== "production"; // or dev


module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  entry: debug ? ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')] : [path.resolve(__dirname, './app/main.js')],
  resolve: {
    extensions: ['', '.js', '.json', '.scss'],
    alias: {
      'react': pathToReact,
      'react-dom': pathToReactDOM
    }
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }],
    noParse:[pathToReact,pathToReactDOM]
  }
};
