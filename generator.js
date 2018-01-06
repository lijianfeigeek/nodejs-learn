// Generator -- 生成器
// 是一个函数
// 可以遍历
// 语法
 function show1(){ //普通函数

 }

 function *show2(){ //generator 函数
    //  yield xxx
    yield 'hello';
    yield 'world';
    yield 'es6';

    return 'well';
 }
//  形式上
// 1.函数名字前有*
// 2.函数内部使用yield语句

var res = show2();
console.log(res.next());// {value: "hello", done: false}
console.log(res.next());// {value: "world", done: false}
console.log(res.next());// {value: "es6", done: false}
console.log(res.next());// {value: "well", done: true}
console.log(res.next());// {value: undefined, done: true}

// 总结 每次返回一个value和done结果
// value,每次yield后面的值
// done是一个布尔值，代表是佛循环结束了


// yield是否有返回值
// 没有返回值

function *show3(){ //generator 函数
    //  yield xxx
    var a= yield 'hello';
    return a;
}

// next 可以带参数 
// 给上一个yield值


function *fn(){
    for (var i=0;true;i++)
    {
        var a = yield i;
        if(a){i = -1};
    }
}

var d=fn();
console.log(d.next());
console.log(d.next());
console.log(d.next());
console.log(d.next(true));
console.log(d.next());

// for of 循环，Generator函数

function *fn(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5;
}

for (const v of fn()) {
    console.log(v);
}

var json = {
    *show(){
        yield 'a';
        yield 'b';
        return 'c';
    }
};
var res = json.show();
console.log(res.next());
console.log(res.next());
console.log(res.next());