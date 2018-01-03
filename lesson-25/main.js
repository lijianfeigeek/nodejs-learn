/*
数据库

GROUP-合并

*统计每个班的平均分
>SELECT * FROM student_table;
ID	class	name	score
1	1	小明	34
2	2	小红	98
3	1	小刚	26
4	2	小华	99
5	3	小强	18
6	3	小四	95
7	1	小刘	57
8	1	小花	100

>SELECT * FROM student_table GROUP BY class;
ID	class	name	score
1	1	小明	34
2	2	小红	98
5	3	小强	18

>SELECT class,AVG(score) FROM student_table GROUP BY class;
class	score
1	54.25
2	98.5
3	56.5

*每个班级的最高、最低分
>SELECT class,MAX(score),MIN(score) FROM student_table GROUP BY class;
ID	class	name	score
1	1	小明	34
2	2	小红	98
3	1	小刚	26
4	2	小华	99
5	3	小强	18
6	3	小四	95
7	1	小刘	57
8	1	小花	100

------------------------------------------------------------------------------

*每个人的消费总额
ID	name	price
1	blue	3
2	blue	5
3	张三	28000
4	李四	81000
5	blue	4
6	张三	46000
7	李四	38000
8	赵六	18

SELECT name,SUM(price) FROM sales_table GROUP BY name;

SELECT name,SUM(price) FROM sales_table GROUP BY name ORDER BY SUM(price) DESC;
name	SUM(price)
李四	119000
张三	74000
赵六	18
blue	12

SELECT name,SUM(price) FROM sales_table GROUP BY name ORDER BY SUM(price) ASC;

------------------------------------------------------------------------------

WHERE
ORDER
GROUP
*LIMIT-分页

*/ 