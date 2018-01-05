/*
GET数据：
req.url——urlLib.parse(, true)

http 头部 <32k 
POST 1G

POST数据接收：POST数据比GET大得多

整体
POST很大——分段 

分段发送
分段接受
data	一段数据
end	全部到达


req.url	=>	'/aaa?a=12&b=5'

obj={
	pathname: '/aaa'
	query: {a: 12, b: 5}
}
*/