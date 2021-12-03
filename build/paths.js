/**
 * 
 * @description 常用文件夹路径
 *  
 */

const path = require("path")

const scrPath = path.join(__dirname, "..", "src")
const distPath = path.join(__dirname, "..", "dist")
const kitsPath = path.join(__dirname, "..", "kits")
const testPath = path.join(__dirname, "..", "test")

module.exports = {
  kitsPath,
  scrPath,
  distPath,
  testPath
}