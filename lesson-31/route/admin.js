const express = require('express')
const common = require('../libs/common')
const mysql = require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'learn'
})

module.exports = function(){
    let router = express.Router();

    // 检查登录状态
    // 所有访问拦截
    router.use((req,res,next)=>{
        if(!req.session['admin_id'] && req.url != '/login'){ //没有登录
            res.redirect('/admin/login');
        }else{
            next();
        }
    })

    router.get('/login',(req,res)=>{
        res.render('admin/login.ejs',{});
    })
    router.post('/login',(req,res)=>{
        console.log(req.body);
        var username = req.body.username;
        var password = common.md5(req.body.password+common.MD5_SUFFIX);

        if(username != '' && password != ''){
            db.query(`select * from admin_table where username='${username}'`,(err,data)=>{
                if(err){
                    console.error(err);
                    res.status(500).send('数据库错误').end();
                }else{
                    if(data.length==0){
                        res.status(400).send('不存在这个admin').end();
                    }else{
                        if(data[0].password==password){
                            //成功
                            req.session['admin_id'] = data[0].ID;
                            res.redirect('/admin/');
                        }else{
                            res.status(400).send('密码错误').end();
                        }
                    }
                }
            })
        }else{
            res.status(400).send('输入正确的用户名和密码').end();
        }
    })

    router.get('/',(req,res)=>{
        res.render('admin/index.ejs',{});
    })

    router.get('/banners',(req,res)=>{
        res.render('admin/banners.ejs',{});
    })

    return router;
}