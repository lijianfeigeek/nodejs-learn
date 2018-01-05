const express       = require('express');
const expressStatic = require('express-Static') // 中间件，帮你查找静态文件
const bodyParser    = require('body-parser');
const myBodyParser  = require('./Libs/my-body-parser')


var server = express();
server.listen('8080');


// server.use(bodyParser.urlencoded({
//     extended:false,         // 扩展
//     limit:2*1024*1024       // 限制 POST提交数据大小,默认是100k,2M
// }));

// server.use('/',(req,res)=>{

//     // GET 无需中间件
//     // console.log(req.query)//GET

//     // POST 需要中间件  body-parser
//     // 1. 引入
//     // 2. 解析body数据
//     // 3. 使用body数据
//     // console.log(req.body)//POST

// });

// 链式操作
// server.use('/',(req,res,next)=>{
//     console.log('a');
//     next();
// })

// server.use('/',(req,res,next)=>{
//     console.log('b')
// })


// server.use('/',()=>{})
// server.use((req,res,next)=>{
//     // req.a=12;
//     var str = '';
//     req.on('data',(data)=>{
//         str += data;
//     })
//     req.on('end',()=>{
//         req.body = quertstring.parse(str);
//         next();
//     });
//     // req.body = {xxx};

//     // next();
// })// 所有路径都有反应

server.use(myBodyParser.aaa());
server.use('/',(req,res)=>{
    // console.log(req.a);
    console.log(req.body);
})
