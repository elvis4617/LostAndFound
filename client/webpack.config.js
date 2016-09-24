var path = require('path');

module.exports = {
  entry: './app/app.js',

  output: {
    path: path.resolve(__dirname, "build", "js"),
    publicPath: "/js/",
    filename: "app.js"
  },

  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
