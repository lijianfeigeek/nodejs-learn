const express = require('express');
const mysql = require('mysql')
const common = require('../../libs/common')
const pathLib = require('path');
const fs = require('fs');



const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'learn'
})

module.exports = ()=>{
    var router = express.Router();

    router.get('/',(req,res)=>{
        db.query(`select * from custom_evaluation_table`,(err,evaluations)=>{
            if(err){
                console.error(err);
                res.status(500).send('数据库错误').end();
            }else{
                console.log(evaluations);
                res.render('./admin/custom.ejs',{evaluations});
            }
        })
    })

    router.post('/',(req,res)=>{
        var id = req.body.id;
        var title = req.body.title;
        var description = req.body.description;

        var ext = pathLib.parse(req.files[0].originalname).ext;
        var oldPath = req.files[0].path;
        var newPath = req.files[0].path + ext;
        var newFileName = req.files[0].filename + ext;
        console.log(newFileName);

        fs.rename(oldPath,newPath,(err)=>{
            if(err){
                res.status(500).send('文件操作错误').end();
            }else{
                if(req.body.mod_id){
                    // 修改
                }else{
                    // 添加
                    db.query(`insert into custom_evaluation_table \
                    (title,description,src) \
                    values('${title}','${description}','${newFileName}')`,(err,data)=>{
                        if(err){
                            console.error(err);
                            res.status(500).send('数据库错误').end();
                        }else{
                            res.redirect('/admin/custom')
                        }
                    });
                }
            }
        })
    })


    return router;
};