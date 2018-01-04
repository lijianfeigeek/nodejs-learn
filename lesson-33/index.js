/*

route：
普通用户-前台部分
管理员用户-后台管理部分

route：小型Express


定义：
url		300字

admin_table			管理员用户表
ID
username	varchar(32)
password	varchar(32)




banner_table			焦点图表
ID
title		varchar(32)
description	varchar(300)
href		varchar(300)

------------------------------------------------------------------------------

intro_table			产品介绍表
ID
title		varchar(32)
description	varchar(200)
href		varchar(300)

------------------------------------------------------------------------------

custom_evaluation_table		用户评价表
ID
title		varchar(32)
description	varchar(200)
src		varchar(300)

------------------------------------------------------------------------------

news_table			新闻表
ID
title		varchar(100)
summary		varchar(500)
ico_src		varchar(300)
big_pic_src	varchar(300)
content		text

------------------------------------------------------------------------------

blog_table			博文表
ID
title		varchar(100)
pic_src		varchar(300)
pic_big_src	varchar(300)
summary		varchar(500)
content		text
post_time	timestamp
author		varchar(32)
n_view		int

------------------------------------------------------------------------------

contact_table			地址表
ID
street		varchar(50)
phone		varchar(20)
fax		varchar(20)
email		varchar(64)
weibo		varchar(40)
wx		varchar(40)
map?		?

------------------------------------------------------------------------------

msg_table			发送信息表
ID
name		varchar(16)
email		varchar(64)
phone		varchar(20)
subject		text

------------------------------------------------------------------------------

aboutus_table			关于我们表
ID
title		varchar(200)
content		text
pic_src		varchar(300)
href		varchar(300)

------------------------------------------------------------------------------

拖库（数据库）：
正常

小米
CSDN
京东

数据库里面，不能存储明文密码
加密之后存储

MD5 - 签名算法

2次MD5 加密 更加安全
3次MD5 加密 更更安全



*/ 