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
// const ejs           = require('ejs');
// const jade          = require('jade');

const consolidate = require('consolidate');


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
// server.use('/',(req,res,next)=>{
//     // res.cookie()
//     // GET,POST,文件,COOKIES,SESSION
//     console.log(req.query,req.body,req.files,req.cookies,req.session);
// });

// 4. 配置模板引擎
// set 对服务进行全局配置
// 输出什么东西
server.set('view engine','html');
// 模板文件放在哪了
server.set('views','./views');
// 哪种模板引擎
server.engine('html',consolidate.ejs);

// 接受用户请求
server.get('/index',(req,res)=>{
    // if(req.session.userid){
    //     // 登录过
    //     res.render('1.ejs',{name:'lijianfei'});
    // }else{
    //     // 没有登录过
    //     res.render('login.ejs',{});
    // }
    res.render('1.ejs',{name:'lijianfei'});

});

// 5. static 数据
server.use(expressStatic('./www'))