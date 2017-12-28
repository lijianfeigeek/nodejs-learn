const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{

    // req.url = '/index.html'

    var file_Name = './www'+req.url;

    // 异步
    fs.readFile(file_Name,(err,data)=>{
        if(err){
            res.write('404');
        }
        else{
            res.write(data);
        }
        res.end();
    })
    // 不重启服务器，加文件是可以的

}).listen('8888');