
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
const mysql = require('mysql');
const common= require('./libs/common')

// 连接池
const db = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'blog'
});

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
server.set('views','./template');
// 哪种模板引擎
server.engine('html',consolidate.ejs);

// 接受用户请求
server.get('/',(req,res,next)=>{
    // 查询banner的东西
    db.query("select * from banner_table",(err,data)=>{
        if(err){ 
            // console.log(err);
            res.status(500).send('databese error').end(); 
        }else{
            // console.log(data);
            
            // 查询新闻列表
            res.banners = data;
            next();
            // res.render('index.ejs',{banners: data});
        }
    });
});
server.get('/',(req,res,next)=>{
    // 查询新闻列表
    // console.log(res.banners);
    db.query('select ID,title,summery from article_table',(err,data)=>{
        if(err){
            console.log(err)
            res.status(500).send('databese error').end(); 
        }else{
            res.article=data;

            res.render('conText.ejs',{
                article_data:res.article
            })
            next();
        }
    });
})
server.get('/',(req,res,next)=>{
    console.log('lijianfei')
    console.log({bannners:res.banners,article:res.article})
    res.render('index.ejs',{banners:res.banners,article:res.article})
})

server.get('/article',(req,res,next)=>{

    if(req.query.id){
        db.query(`select * from article_table where ID=${req.query.id}`,(err,data)=>{
            if(err){
                res.status(500).send('数据有问题').end();
            }else{
                if(data.length == 0){
                    res.status(404).send('请求的文章找不到').end();
                }else{
                    var article_data = data[0];
                    article_data.oDate = common.time2date(article_data.post_time);
                    article_data.content = article_data.content.replace(/^/gm,'<p>').replace(/^/gm,'<p>'); 
                    res.render('conText.ejs',{article_data})
                }
            }
        })
    }else{
        res.status(404).send('请求的文章找不到').end();
    }
})

// 5. static 数据
server.use(expressStatic('./www'))