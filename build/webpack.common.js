const {
  scrPath,
  distPath,
  kitsPath,
  testPath
} = require("./paths")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: path.join(kitsPath, "index.js"),
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: kitsPath,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(testPath, 'index.html'),
      filename: 'index.html'
    })
  ]
}