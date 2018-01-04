/*

1.首页
	banner
	产品介绍
	用户评价
2.技术
3.blog
4.联系
	地址+地图
	发送联系消息
5.关于我们
    
========================================================

定义：
url		300字

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
href		varchar(300)
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


------------------------------------------------------------------------------

msg_table			发送信息表


------------------------------------------------------------------------------

aboutus_table			关于我们表


------------------------------------------------------------------------------


*/ 