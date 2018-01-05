const jade = require('jade')
const fs = require('fs')

// var a = jade.renderFile('./views/1.jade',{
//     pretty:true,
//     name:'李剑飞',
//     a:12,
//     b:5,
//     json:{
//         width:'200px',
//         height:'200px',
//     },
//     arr:[
//         'aaa',
//         'bbb'
//     ],
//     content:"<h2>我的h2</h2> <script src></script>"
// })

// console.log(a)

var str = jade.renderFile('./views/index.jade',{pretty:true})

fs.writeFile('./build/index.html',str,(err)=>{
    if(err)
    {
        console.log('编译失败')
    }
    else{
        console.log("编译成功")
    }
});