// requier 引入系统模块
// requier 引入自己的模块 需要加 当前目录下 ./  或着放在node_modules文件夹里
// nodejs里全是js，.js后缀可以不加
const mod = require('./mod')

console.log(mod);

console.log(module.exports == exports);