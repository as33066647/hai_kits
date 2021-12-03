const path = require('path')
const {
  merge
} = require('webpack-merge');
const {
  scrPath,
  distPath,
  kitsPath,
  testPath
} = require('./paths');
const webpackCommonConf = require("./webpack.common")


module.exports = merge(webpackCommonConf, {
  mode: "development",
  // 入口文件配置
  entry: path.join(kitsPath, "index"),
  devServer: {
    port: 8999,
    static: {
      directory: distPath,
    },
    open: true, // 自动打开浏览器
    compress: true, // 启动 gzip 压缩

    // proxy: {
    //   // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
    //   '/api': 'http://localhost:3000',

    //   // 将本地 /api2/xxx 代理到 localhost:3000/xxx
    //   '/api2': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '/api2': ''
    //     }
    //   }
    // }
  }

})