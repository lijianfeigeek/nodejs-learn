const express       = require('express');
const expressStatic = require('express-static');
const cookieParser  = require('cookie-parser');
const cookieSession = require('cookie-session');
// POST
// 1.上传数据
// 2.上传文件
// bodyParser 只能 解析数据
const bodyParser    = require('body-parser');
const multer        = require('multer');
const ejs           = require('ejs');
const jade          = require('jade');


var server = express();
server.listen('8080');

// 1. 解析cookie
server.use(cookieParser('lijianfei-miyao'));
// 2. 使用session
keys=[];
for(var i=0;i<100000;i++) keys.push('keys'+Math.random());
server.use(cookieSession({
    name:'lijianfei_id',
    keys,
    maxAge:20*3600*1000
}))
// 3. post数据
server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest:'./www/upload'}).any());

// 用户请求
server.use('/',(req,res,next)=>{
    // res.cookie()
    // GET,POST,文件,COOKIES,SESSION
    console.log(req.query,req.body,req.files,req.cookies,req.session);
});

// 4. static 数据
server.use(expressStatic('./www'))