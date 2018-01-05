const jade = require('jade');
const ejs = require('ejs');
const fs = require('fs');

// jade
// 同步
// pretty 美化
// var str = jade.renderFile('./views/1.jade',{pretty:true});
// console.log(str);

// ejs
// ejs.renderFile('./views/2.ejs',{name:'lijianfei'},(err,data)=>{
//     if(err)
//     {
//         console.log('编译失败');
//     }
//     else
//     {
//         console.log(data);
//     }
// });


var str = jade.renderFile('./views/1.jade',{pretty:true});
// console.log(str);
fs.writeFile('./build/1.html',str,(err)=>{
    if(err){
        console.log('写入失败')
    }
    else{
        console.log('写入成功')
    }
})