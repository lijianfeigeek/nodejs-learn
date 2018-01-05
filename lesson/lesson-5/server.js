const http = require('http');
const querystring = require('querystring');

http.createServer((req,res)=>{

    // 接受数据
    var str = '';
    // POST -- req
    // data 有一段数据到达(很多次)
    var i = 0;
    req.on('data',(data)=>{
        // console.log(`第${i++}收到数据`);
        str += data;
    });
    // end 数据全部到达(一次)
    req.on('end',()=>{
        var PSOT = querystring.parse(str);
        console.log(PSOT);
    });
    
}).listen('8080');