const path = require('path')
const {
  merge
} = require("webpack-merge")
const webpackCommonConf = require("./webpack.common")
const {
  scrPath,
  distPath,
  kitsPath
} = require("./paths")
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin")


module.exports = merge(webpackCommonConf, {
  mode: 'production',
  // 出口文件配置项
  output: {
    // 输出的路径，webpack2起就规定必须是绝对路径
    path: distPath,
    // 输出文件名字
    filename: 'bundle.[hash].js', // 打包代码时，加上 hash 戳
    // filename: 'bundle.js', // 打包代码时，加上 hash 戳
    library: {
      name: 'Kits', //umd模式 最终打包到特定的对象上(在htmlcdn直接引用会赋值给这个对象)
      type: 'umd',
      umdNamedDefine: true,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
})