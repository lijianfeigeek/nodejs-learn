// ES6
// 定义变量,let
// var a = 12;
// console.log('a='+a);
// let  用来定义变量
// let b = 13;
// console.log('b='+b);
// 代码块：{}包起来的代码,形成了一个作用域，块级作用域
// 比如 if for while 
// 特点：只能在代码块里面使用，作用于
// var 只有函数作用域
// {
//     let c = 1;
// }
// console.log(c);
// {
//     var d = 2;
// }
// console.log('d='+d);

// var f = 12;
// var f = 5;
// console.log('f='+f);

// let e = 12;
// let e = 13;
// console.log('e'+e);

// 1. let 具有块级别作用域
// 2. 不允许重复声明
// 总结：其实let 才是接近其他语言的变量

// if(true){
//     var g = 12;
// }
// console.log('g='+g);

// 封闭空间
// (function(){
//     var h =12;
//     console.log('h='+h);
// })();

// {
//     let a1=12;
//     console.log('a1='+a1);
// }
// for 循环里的 i问题：
// 块级作用域，其实就是匿名函数立即调用

// let a2 = 12;
// a2 = 13;
// console.log('a2='+a2);
// =============================================
// const 不可修改，定义常量
// const a3 = 12;
// a3 = 14;
// console.log('a3='+a3);
// const 必须给初始值,因为以后再也没办法赋值了            
// =============================================
// 字符串链接
// 反单引号
// var a = '爱';
// var str = `李剑飞${a}李昭`;//字符串模板
// console.log(str);
// =============================================
// 解构赋值
// var a=12;
// var b=5;
// var c=101

// var [a,b,c] = [12,5,101];
// console.log(a,b,c);

// var {a,b,c} = {a:12,b:5,c:101};  //跟顺序无关

// 模式匹配,左侧的样子和右侧一样
//    var[a,[b,c],d] = [12,[1,2],5];
//    console.log(a,b,c,d);
//  交互----数据解析,对应名字不能变
// var json = {s:[1,2,3],a:'abc'}
// var {s,a} = json;

// 解构赋值还可以给默认值
// var {time=12,id=0} = {};

// 复制数组
// var arr = [1,2,3];
// var arr2 = Array.from(arr);

// var arr = [1,2,3];
// var arr2 = [...arr];

// function show(...arguments){
//     console.log(arguments);
// }
// show(1,2,3,4);

// =============================================
// 循环
// for
// for in 
// for of 循环, 可以循环数组，不能循序json
// 真正是为了循环map对象
// map对象：和json相似，也是key-value形势
// map对象为了和for of 结合生成的

// 遍历(迭代、循环)整个对象，表现类似于for in
// var arr = ['apple','orange','peer'];
// for(var i in arr){//索引
//     console.log(i);
// }

// for (var i of arr){//对象
//     console.log(i);
// }

// map 不能使用 for in
// var map = new Map;
// map.set('a','apple');
// map.set('b','banner');
// for (const i of map) {
//     console.log(i);
// }
// // 本质
// for (const i of map.entries()) {
//     console.log(i);
// }

// for (const key of map.keys()) {
//     console.log(key);
// }

// for (const value of map.values()) {
//     console.log(value);
// }

// for (const [key,value] of map) {
//     console.log(key,value);
// }

// // delete 可以删jsob
// // delete map.a;
// map.delete('a');
// console.log(map.get('a'));

// 数组
// var arr = ['红楼梦','西游记','肉蒲团'];
// for (const name of arr) {
//     console.log(name);
// }
// for (const name of arr.keys()) {
//     console.log(name);
// }
// for (const name of arr.entries()) {
//     console.log(name);
// }

// =============================================
// 函数

// function show(a){

// }
// show(12);

// 箭头函数
// 注意的地方 this问题
// var show = ()=>{

// };
// 在箭头函数里argments 不能使用

// =============================================
// 对象：
// 对象语法简洁话

// 单例模式
// var person = {
//     name:'abc',
//     showName(){
//         alert(this.name);
//     }
// };
// person.showName();

// 面向对象

// 之前
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.showName=function(){
//     return this.name;
// };  
// Person.prototype.shoWAge=function(){
//     return this.age;
// };
// var p1 = new Person('abc',10);
// alert(p1.showName());

// 类，构造函数

// ES6
// 类
// 构造函数 constructor 生成完实例以后，自己就执行的函数
// class Person{ // 类
//     constructor(name='defualt',age=20){
//         this.name=name;
//         this.age=age;
//     }
//     showName(){
//         return this.name;
//     }
//     showAge(){
//         return this.age;
//     }
// }

// var p1 = new Person('abc',10);
// var p2 = new Person('aaa',20);
// alert(p1.showName==p2.showName);

// 函数给默认值
// function move(obj={},json={},optins={}){

// }
// move();

// 继承
// class Woker extends Person{
//     constructor(name,age){
//         super(name,age);
//     }
// }
// var w1 = new Woker('mm',56);
// alert(w1.name);

// ES6自带导出模块


// Promise -- 承诺
// 就是一个对象，用来传递异步操作的数据(消息)
// 异步：多个操作可以同时进行
// pending (等待，处理中)-> Resolve(完成)
//                     -> Rejected(拒绝，失败)

// 使用
// var p1 = Promise((resolve,reject)=>{
//     //  resolve

//     //  reject
// });
// p1.then((resolve)=>{
//     // 成功
// },(reject)=>{
//     // 失败
// });

// 捕获错误
// p1.catch((err)=>{

// });

// all 全部，用于将多个promise对象，组合，包装成一个全新的promise对象
// all 里面只要有错误，就走错误回调函数
// Promise.all([true,p1]).then(()=>{

// },()=>{

// });

// race 返回也是一个promise
// 最先能执行的promise结果，哪个最快用哪个
// Promise.race([p1,p2]).then();

// 生成错误的一个promise
// Promise.resolve().then(()=>{

// },()=>{

// });
// 生成一个成功的promise
// Promise.reject().then(()=>{

// },()=>{

// });

// ====================================================================
// Generator -- 生成器
// 是一个函数
// 可以遍历
// 语法
//  function show1(){ //普通函数

//  }

//  function *show2(){ //generator 函数
//     //  yield xxx
//     yield 'hello';
//     yield 'world';
//     yield 'es6';

//     return 'well';
//  }
//  形式上
// 1.函数名字前有*
// 2.函数内部使用yield语句

// var res = show2();
// console.log(res.next());// {value: "hello", done: false}
// console.log(res.next());// {value: "world", done: false}
// console.log(res.next());// {value: "es6", done: false}
// console.log(res.next());// {value: "well", done: true}
// console.log(res.next());// {value: undefined, done: true}

// 总结 每次返回一个value和done结果
// value,每次yield后面的值
// done是一个布尔值，代表是佛循环结束了


// yield是否有返回值
// 没有返回值

// function *show3(){ //generator 函数
//     //  yield xxx
//     var a= yield 'hello';
//     return a;
// }

// next 可以带参数 
// 给上一个yield值


// function *fn(){
//     for (var i=0;true;i++)
//     {
//         var a = yield i;
//         if(a){i = -1};
//     }
// }

// var d=fn();
// console.log(d.next());
// console.log(d.next());
// console.log(d.next());
// console.log(d.next(true));
// console.log(d.next());

// for of 循环，Generator函数

// function *fn(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     return 5;
// }

// for (const v of fn()) {
//     console.log(v);
// }

// var json = {
//     *show(){
//         yield 'a';
//         yield 'b';
//         return 'c';
//     }
// };
// var res = json.show();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());