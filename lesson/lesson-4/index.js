/**
http
fs

数据请求——
前台->form、ajax、jsonp
后台->一样

前台 <-> 后台
http

请求方式：
1.GET		数据在url中
2.POST		数据不在url中

------------------------------------------------------------------

req.url=>"/aaa?user=blue&pass=123456"
/aaa
user=blue&pass=123456

------------------------------------------------------------------

GET数据解析
1.自己切
2.querystring		xxx=xx&xxx=xxx
3.urlLib			aaa?xxx=xx&xx=12

urlLib.parse(url, true);	pathname
			query

------------------------------------------------------------------

POST数据

 */