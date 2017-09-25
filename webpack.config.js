var path = require('path')

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './'
  }
}
