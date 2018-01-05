// var APP_ID = 'iaBGcTArJmxORDYabRD8nstz-gzGzoHsz';
// var APP_KEY = 'SLhUVOMPCfhguq3lLuonLSS2';
// var AV = require('leancloud-storage');

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })


const mysql = require('mysql');

// 1. 连接
// createConnection(哪台服务器，用户名，密码)
var db = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'nodejs'
});
// console.log(db)

// 2. 查询
// query(干啥,回调)
// insert into user_table (username,password) value ('李昭','123456')
// 
db.query("SELECT * FROM `user_table`",(err,data)=>{
    if(err){
        console.log('错误',err)
    }else{
        console.log('成功了\n')
        console.log(JSON.stringify(data))
    }
});


