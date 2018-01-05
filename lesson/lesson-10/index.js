/*
Express：
1.数据：GET、POST
2.中间件：使用、写、链式操作

----------------------------------------------------------------------------------------------------------------

GET-无需中间件
req.query

POST-需要"body-parser"
server.use(bodyParser.urlencoded({}));

server.use(function (){
	req.body
});

----------------------------------------------------------------------------------------------------------------

链式操作：

----------------------------------------------------------------------------------------------------------------

1.GET、POST
  req.query
  
  server.use(bodyParser.urlencoded({limit: }));
  server.use(function (req, res, next){
    req.body
  });

2.链式操作
  server.use(function (req, res, next){});
  server.get('/', function (req, res, next){});
  server.post(function (req, res, next){});

  next——下一个步骤
  next();

  server.use('/login', function (){
    mysql.query(function (){
      if(有错)
        res.emit('error');
      else
        next();
    });
  });

3.中间件(body-parser)、自己写中间件
  next();

  server.use(function (req, res, next){
    var str='';
    req.on('data', function (data){
      str+=data;
    });
    req.on('end', function (){
      req.body=querystring.parse(str);
      next();
    });
  });
*/ 