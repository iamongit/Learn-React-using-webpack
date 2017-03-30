const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './App.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        query: {
          presets:['react','es2015']
        },
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};