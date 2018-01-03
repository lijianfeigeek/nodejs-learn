/*

数据库：
SQL
四大操作语句-
1.删	DELETE
DELETE FROM 表 WHERE 条件

2.增	INSERT
INSERT INTO 表 (字段列表) VALUES(值列表)

3.改	UPDATE
UPDATE 表 SET 字段=值,字段=值,... WHERE 条件

4.查	SELECT
SELECT * FROM 表 WHERE 条件

------------------------------------------------------------------------------

子句：
WHERE 条件

WHERE name='blue'
WHERE age>18
WHERE age<=18
WHERE age>=18 AND score<60
WHERE cach>100 OR score>10000

ORDER 排序
ORDER BY age ASC/DESC
  ASC-升序(从小到大)
  DESC-降序(从大到小)

--------------------------

ORDER BY price ASC

*价格(price)升序排序，如果价格相同，再按销量(sales)降序排序
ORDER BY price ASC, sales DESC

--------------------------

GROUP	聚类-合并相同

*统计每个班人数
ID	class	name
"1"	"1"	"小明"
"2"	"2"	"小红"
"3"	"1"	"小刚"
"4"	"2"	"小华"
"5"	"3"	"小强"
"6"	"3"	"小四"
"7"	"1"	"小刘"
"8"	"1"	"小花"

SELECT * FROM student_table;
ID	class	name
"1"	"1"	"小明"
"2"	"2"	"小红"
"3"	"1"	"小刚"
"4"	"2"	"小华"
"5"	"3"	"小强"
"6"	"3"	"小四"
"7"	"1"	"小刘"
"8"	"1"	"小花"

SELECT * FROM student_table GROUP BY class;
ID	class	name
"1"	"1"	"小明"
"2"	"2"	"小红"
"5"	"3"	"小强"

SELECT class FROM student_table GROUP BY class;
class
"1"
"2"
"3"

SELECT class,COUNT(class) FROM student_table GROUP BY class;
class	COUNT(class)
1	4
2	2
3	2

--------------------------

WHERE子句
ORDER子句——多条件排序
GROUP子句——合并
  COUNT、MIN、MAX、AVG

--------------------------

GROUP

*/ 