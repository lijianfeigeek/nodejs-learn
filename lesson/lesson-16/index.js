/*
express整合

body-parser
multer

模板引擎

express  模板引擎


consolidate-适配

-------------------------------------------------------------------------------------------------------------------------

模板引擎：适配
1.consolidate

consolidate=require

server.set('view engine', 'html');
server.set('views', '模板文件目录');
server.engine('html', consolidate.ejs);

server.get('/', function (req, res){
	res.render('模板文件', 数据);
});

-------------------------------------------------------------------------------------------------------------------------

route-路由：
把不同的目录，对应到不同的模块

xxxx.com/aaa/		mod1
xxxx.com/news/	    mod_news
	    post			news_post
	    list			news_list
	    content		    news_content
xxxx.com/user/		mod_users

-------------------------------------------------------------------------------------------------------------------------

server.get();
server.use()
server.post()

Router——迷你server
router.get();
router.post();
router.use();

-------------------------------------------------------------------------------------------------------------------------

Router——拆
/user/....		mod_user
/item/....		mod_item

//1.创建router
var router=express.Router();

//2.把router添加到server
server.use('/user', router);

//3.router内部
router.get('/1.html')
router.post('/2.html')

-------------------------------------------------------------------------------------------------------------------------

consolidate

server.set('view engine', 'html');
server.set('views', '模板目录');
server.engine('html', consolidate.ejs);

server.use(function (req, res){
	res.render('模板文件', 数据);
});

-------------------------------------------------------------------------------------------------------------------------

Router——子服务

var router1=express.Router();
server.use('/user', router1);

var r=express.Router();
router1.use('/user_mod', r);
router1.use('/user_reg', function (){});
http://www.xxxx.com/user/user_mod
http://www.xxxx.com/user/user_reg
http://www.xxxx.com/user/user_login

var router2=express.Router();
server.use('/news', router2);
http://www.xxxx.com/news/list
http://www.xxxx.com/news/post
http://www.xxxx.com/news/content

var router3=express.Router();
server.use('/item', router3);
http://www.xxxx.com/item/buy
http://www.xxxx.com/item/mod
http://www.xxxx.com/item/del

-------------------------------------------------------------------------------------------------------------------------
*/ 