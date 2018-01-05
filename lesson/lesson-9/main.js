const express = require('express')
const expressStatic = require('express-Static') // 中间件，帮你查找静态文件


// 1. 创建服务
// 2. 监听
// 3. 处理请求

// 3种方法
// get('/',(req.res)=>{})
// post('/',(req.res)=>{})
// 通吃
// use('/',(req.res)=>{})

// 创建服务
var server = express()
server.listen('8080');

// 非侵入式,只是填添加了东西
// server.use('/',(req,res)=>{
//     console.log(req.url);
//     res.send({a:12,b:5});
//     res.end();
// })

// server.use('/a.html',(req,res)=>{
//     res.send('abc');
//     res.end();
// })

// 对接口进行相应
// 对文件进行相应
// 中间件=插件

// server.use('a.html',(req,res)=>{

// });

// 用户数据

// 接口
/*
/login?user=xxx&pass=xxx
=>{ok: true/false, msg: '原因'}
*/ 

var users = {
    'lijianfei':'123',
    'lizhao':'321'
};

server.use('/login',(req,res)=>{
    // console.log(req.query);
    // { user: 'lijianfei', pass: '123' }
    var user = req.query['user'];
    var pass = req.query['pass'];
    if(users[user]==null){
        res.send({ok: false, msg: '此用户不存在'});
    }else {
        if(users[user] != pass){
            res.send({ok: false, msg: '密码错了'});
        }
        else{
            res.send({ok: true, msg: '成功'})
        }
    }
})

server.use(expressStatic('./www'),()=>{

});
 











