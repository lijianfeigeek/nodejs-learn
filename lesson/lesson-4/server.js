const http = require('http')
const querystring = require('querystring')
const urlLib = require('url')


http.createServer((req,res)=>{
    
    var obj = urlLib.parse(req.url,true);
    var url = obj.pathname;
    var GET = obj.query;

    // var GET = {};
    // console.log(req.url);
    // if(req.url.indexOf('?')!=-1){
    //     var arr = req.url.split('?');
    //     var url = arr[0];
    //     // var arr2 = arr[1].split('&');
    //     // for(let i = 0;i<arr2.length;i++){
    //     //     let arr3 = arr2[i].split('=');
    //     //     GET[arr3[0]]=arr3[1];
    //     // }
    //     GET = querystring.parse(arr[1])
    // }else{
    //     var url = req.url;
    // }

    console.log(url,GET);
    res.write('aaa');
    res.end();

}).listen(8080)