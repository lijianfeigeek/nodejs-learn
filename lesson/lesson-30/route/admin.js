const express = require('express')

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

    return router;
}