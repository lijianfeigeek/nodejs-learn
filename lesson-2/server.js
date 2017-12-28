const http = require('http');

server = http.createServer((req,res)=>{
    console.log('有人来了')
    console.log(req.url);
    
    /*
    有人来了
    /index.html
    有人来了
    /favicon.ico
    */

    switch(req.url){
        case '/1.html':
        res.write('abc');
        break;

        default:
        res.write('404');
        break
    }
    
    // res.write('abc');
    res.end();
});

// 监听 --- 等着
// 端口 -- 数字
server.listen('8080');
// http://localhost:8080/
