/*
模板引擎：
jade-破坏式、侵入式、强依赖
ejs-温和、非侵入式、弱依赖

------------------------------------------------------------------------------------------------------------

html				<html></html>

html				<html>
	head				<head>
		style				<style></style>
					</head>
	body				<body>
		div				<div></div>
		div				<div></div>
					</body>
				</html>

------------------------------------------------------------------------------------------------------------

1.根据缩进，规定层级
2.属性放在()里面，逗号分隔
3.内容空个格，直接往后堆

------------------------------------------------------------------------------------------------------------

属性

<script src="a.js"></script>
script(src="a.js")

------------------------------------------------------------------------------------------------------------

内容
<a href="http://www.zhinengshe.com/">官网</a>
a(href="http://www.zhinengshe.com/") 官网

------------------------------------------------------------------------------------------------------------

<div>
	xxxxx
	<div>
		aaaaa
		...
	</div>
</div>

------------------------------------------------------------------------------------------------------------

style="width:200px;height:200px;background:red;"
1.普通属性写法
2.用json

class="aaa left-swrap active"
1.普通属性写法
2.用arr

------------------------------------------------------------------------------------------------------------

简写

------------------------------------------------------------------------------------------------------------

模板引擎：生成页面
1.jade：破坏式
2.ejs：保留式

------------------------------------------------------------------------------------------------------------

jade
1.根据缩进划分层级
2.属性用()表示，用逗号分隔
  *style={}
  *class=[]
3.内容
  div xxx
    span xxx
      a(href="xxx") 链接

------------------------------------------------------------------------------------------------------------

jade.render('字符串');
jade.renderFile('模板文件名', 参数)

------------------------------------------------------------------------------------------------------------

*/ 