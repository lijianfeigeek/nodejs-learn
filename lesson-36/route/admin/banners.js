const express = require('express');
const mysql = require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'learn'
})

module.exports = ()=>{
    let router = express.Router();
    
    router.get('/',(req,res)=>{
        switch(req.query.act){
            case 'mod':
            {
                db.query(`select * from banner_table where ID='${req.query.id}'`,(err,data)=>{
                    if(err){
                        console.error(err);
                        res.status(500).send('数据库错误').end();
                    }else{
                        if(data.length == 0){
                            res.status(400).send('数据没找到').end();
                        }else{
                            console.log(data);
                            db.query(`select * from banner_table`,(err,banners)=>{
                                // console.log(banners);
                                if(err){
                                    console.error(err);
                                    res.status(500).send('数据库错误').end();
                                }else{
                                    res.render('admin/banners.ejs',{
                                        banners,
                                        mod_data:data[0]
                                    });
                                }
                            });
                        }
                    }
                })
            }
            break;
            case 'del':
            {
                db.query(`delete from banner_table where ID='${req.query.id}'`,(err,data)=>{
                    if(err){
                        console.error(err);
                        res.status(500).send('数据库错误').end();
                    }else{
                        res.redirect('/admin/banners')
                    }
                })
            }
            break;
            default:
            {
                db.query(`select * from banner_table`,(err,banners)=>{
                    // console.log(banners);
                    if(err){
                        console.error(err);
                        res.status(500).send('数据库错误').end();
                    }else{
                        res.render('admin/banners.ejs',{banners});
                    }
                });
            }
            break;
        }
    })
    router.post('/',(req,res)=>{
        // console.log(req.body);
        var id = req.body.id;
        var title = req.body.title;
        var description = req.body.description;
        var href = req.body.href;


        if(req.body.mod_id){
            let mod_id = req.body.mod_id;
            // 修改
            if(!title || !description || !href || !mod_id){
                res.status(400).send('参数错误').end();
            }else{
                db.query(`update banner_table set \
                 title='${title}',\ 
                 description='${description}',\
                 href='${href}' where ID='${mod_id}'`,(err,data)=>{
                    if(err){
                        console.error(err);
                        res.status(500).send('数据库错误').end();
                    }else{
                        // get
                        res.redirect('/admin/banners')
                    }
                });
            }
        }else{
            // 添加
            if(!title || !description || !href){
                res.status(400).send('参数错误').end();
            }else{
                db.query(`insert into banner_table(title,description,href) value('${title}','${description}','${href}')`,(err,data)=>{
                    if(err){
                        console.error(err);
                        res.status(500).send('数据库错误').end();
                    }else{
                        // get
                        res.redirect('/admin/banners')
                    }
                });
            }
        }
    })

    return router;
}