/*
express：
1.主体
2.cookie、session
3.数据
4.模板引擎

body-parser	解析post数据
multer		解析post文件

--------------------------------------------------------------------------------------------------------------

body-parser	解析post数据	application/x-www-form-urlencoded
server.use(bodyParse.urlencode());
	req.body



multer		解析post文件	multipart/form-data
var obj=multer({dest: 'upload/'});

server.use(obj.any());

server.use(function (req, res){
	req.files[0].originalname
	req.files[0].path
});

把扩展名加上
		//'upload/aadfaew324we34' + '.txt'
		//'upload/aadfaew324we34.txt'
var newName=file.path+pathLib.parse(file.originalname).ext;

fs.rename(老名, 新名, function (err){});

*/ 