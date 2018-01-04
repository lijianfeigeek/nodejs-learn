const crypto = require('crypto');



module.exports = {
    MD5_SUFFIX:'123ASDO&^%^%$%@QIOE90p破解死全家908-3-2234./,.,Q2334234-==-0[]]./.#@%$#^$*',
    md5:(str)=>{
        var obj = crypto.createHash('md5');
        obj.update(str);
        return obj.digest('hex')
    }
}