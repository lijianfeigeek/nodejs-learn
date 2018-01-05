const common = require('./libs/common')

var str = '123456';
var str2 = common.md5(str+common.MD5_SUFFIX);

console.log(str2);

