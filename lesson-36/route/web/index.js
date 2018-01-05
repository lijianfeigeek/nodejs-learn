const express = require('express')
const common=require('../../libs/common');
const mysql=require('mysql');

var db=mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    database: 'learn'
});

module.exports = function(){
    let router = express.Router();
    
    router.get('/',(req,res)=>{
        res.send('我是web').end()
    })

    router.get('/get_banners',(req,res)=>{
        db.query(`select * from banner_table`,(err,data)=>{
            if(err){
                res.status(500).send('数据库错误').end()
            }else{
                res.send({data}).end();
            }

        });
    })
    
    return router;
}