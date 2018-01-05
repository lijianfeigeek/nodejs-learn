const express       = require('express');
const cookieParser  = require('cookie-parser')
const cookieSession = require('cookie-session')

var server = express();
server.listen('8080');


// cookieParser 中间件
server.use(cookieParser('asdqewzxc'));

// 循环访问秘钥
// 解析了cookie 才能解析sesstion
var arr = [];
for(var i = 0;i<100000;i++)
{
    arr.push('sig'+Math.random());
}//安全性
server.use(cookieSession({
    name:'count',
    keys : arr,
    maxAge: 2*3600*1000 // 2小时登录已经过期
    // 10分钟，20分钟，自动剔除
    // 停止活动，sesstion 消失
    // 越长，用户方便
    // 越短，安全性搞
    // PHP默认20分钟
}));

server.use('/',(req,res)=>{

    // console.log(req.cookies);

    // 发送一个cookie
    // res.cookie('user','lijianfei',{path:'/',maxAge:30*24*3600*1000});

    // cookie 加密
    // req.secret = 'asdqewzxc';   //签名 上面会赋值
    // res.cookie('user','lijianfei',{signed:true});
    // s%3Alijianfei.zm1qXB0FhpXl3rlFnhDHL0fmhjDXAVzHwWmJHZnZTmI
    // 后面是签名，防止串改，浪费空间

    // 签名的
    // console.log(req.signedCookies);
    // 无签名
    // console.log(req.cookies);

    // 删除cookie
    // res.clearCookie('user');

    // 签名的
    // console.log(req.signedCookies);
    // 无签名
    // console.log(req.cookies);

    // sesstion劫持 .keys required
    console.log(req.session['count']);
    if(req.session['count']==null){
        req.session['count']=1;
    }else{
        req.session['count']++;
    }

    // 删除sesstion 
    delete req.session['count'];

    // 读取cookie
    res.send('OK');
});