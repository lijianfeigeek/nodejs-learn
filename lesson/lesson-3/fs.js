const fs = require('fs');

// 异步 readFile(文件名,回调函数)
fs.readFile('./aaa.txt',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        // data 二进制数据
        console.log(data.toString());
    }

});

// writeFile(文件名，内容，回调函数)
fs.writeFile('bbb.txt','李昭爱李剑飞',(err)=>{
    console.log(err);
});