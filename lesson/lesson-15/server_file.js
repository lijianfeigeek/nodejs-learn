const express       = require('express');
const bodyParser    = require('body-parser');
const multer        = require('multer');
const fs            = require('fs');//改名
const pathLib       = require('path');//解析文件路径

// fs.rename('oldPath','newPath',(err)=>{})

// path

// base     文件名(包含扩展名)
// extname  扩展名 .html
// dir      文件路径   
// name     文件名(不包含扩展名)

var objMulter = multer({dest:'./www/upload'});

var server = express();
server.listen('8080');
// 错误
// server.use(bodyParser.urlencoded({extended:false}));
server.use(objMulter.any());

server.post('/',(req,res)=>{
    // console.log(req.body);
    // 1. 获取原始文件扩展名
    // 2. 重命名临时文件

    /*
    [ { fieldname: 'f1',
    originalname: 'icon.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: './www/upload',
    filename: 'd9b2e0cc3e9f6f5171ae2bacfe510cbe',
    path: 'www/upload/d9b2e0cc3e9f6f5171ae2bacfe510cbe',
    size: 6553 } ]
    */ 

    var oldName = req.files[0].path;
    var newName = req.files[0].path + pathLib.extname(req.files[0].originalname);
    fs.rename(oldName,newName,(err)=>{
        if(err)
        {
            res.send('上传失败');
        }
        else
        {
            res.send('上传成功')
        }
    });

});