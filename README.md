## 常用js工具类



**更新自己的NPM包（模块）及readme.md**修改代码和readme.md后，执行命令：

```text
npm version patch 
npm publish
```


npm version后面参数说明： 
patch：小变动，比如修复bug等，版本号变动 **v1.0.0->v1.0.1** 
minor：增加新功能，不影响现有功能,版本号变动 **v1.0.0->v1.1.0** 
major：破坏模块对向后的兼容性，版本号变动 **v1.0.0->v2.0.0**

