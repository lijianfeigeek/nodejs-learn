const express       = require('express');

var server = express();
server.listen('8080');

// 目录1 /user/
var routeUser = express.Router();

routeUser.get('/1.html',(req,res)=>{
    // 
    res.send('user1');
})

routeUser.get('/2.html',(req,res)=>{
    // 
    res.send('user2');
})
server.use('/user',routeUser);

// 目录2 /article/
var articleRouter = express.Router();
server.use('/article',articleRouter);

articleRouter.get('/10001.html',(req,res)=>{
    res.send('10001');
})

