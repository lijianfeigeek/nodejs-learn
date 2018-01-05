/*

数据库

NodeJS不支持MySQL

npm

服务端：
客户端：
	node的mysql模块

1.连接
2.查询

SQL=>Structured Query Language(结构化查询语句)

SQL：
4大查询语句——增删改查

增-INSERT
INSERT INTO 表 (字段列表) VALUES(值列表)
INSERT INTO `user_table` (`ID`, `username`, `password`) VALUES(0, 'blue2', '987654');

删-DELETE

改-UPDATE

查-SELECT
SELECT 什么 FROM 表
SELECT * FROM `user_table`;

SQL标准写法：
1.关键字大写
2.库、表、字段需要加上``

------------------------------------------------------------------------------

1.下载mysql模块(client)
2.连接
	var db=mysql.createConnection(host, port, user, password, database)	//?
3.查询
	db.query(SQL, (err, data)=>{})
4.SQL语句
	增删改查

------------------------------------------------------------------------------

*/ 