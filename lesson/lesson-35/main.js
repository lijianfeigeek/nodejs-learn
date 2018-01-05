const express       = require('express');
const expressStatic = require('express-static');
const bodyParser    = require('body-parser');
const multer        = require('multer');
const cookieParser  = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate   = require('consolidate');
const mysql         = require('mysql');
const expressRoute  = require('express-route');

const multerObj = multer({dest:'./static/upload'})

var server = express();
server.listen('8080');

// 1. 获取请求数据
// get自带
server.use(bodyParser.urlencoded());
server.use(multerObj.any());

// 2. cookie、session
server.use(cookieParser());
{
    let keys = [];
    for(let i = 0;i<10000;i++){
        keys[i]='a_' + Math.random();
    }
    server.use(cookieSession({
        name:'seee_id',
        keys,
        maxAge:20*60*1000//20分钟
    }));
}
// 3. 模板
server.engine('html',consolidate.ejs);
server.set('views','template');
server.set('view engine','html');


// 4. route,独立小型子网站,拆分js文件
server.use('/',require('./route/web.js')());
server.use('/admin/',require('./route/admin/index')());

// 5. default:static
server.use(expressStatic('./static/'));

