// 例子
{
    let sleep = (time)=> {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, time);
        });
    };
    
    let start = async ()=> {
        // 在这里使用起来就像同步代码那样直观
        console.log('start');
        await sleep(3000);
        console.log('end');
    };
    
    // start();
}

// 基本规则
// 1. async 表示这是一个async函数，await只能用在这个函数里面。
// 2. await 表示在这里等待promise返回结果了，再继续执行。
// 3. await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）

// 获得返回值
// await等待的虽然是promise对象，但不必写.then(..)，直接可以得到返回值。
{
    let sleep = function (time) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // 返回 ‘ok’
                resolve('ok');
            }, time);
        })
    };
    
    let start = async function () {
        let result = await sleep(3000);
        console.log(result); // 收到 ‘ok’
    };
    // start();
}   

// 捕捉错误
// 既然.then(..)不用写了，那么.catch(..)也不用写，可以直接用标准的try catch语法捕捉错误。
{
    let sleep = function (time) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // 模拟出错了，返回 ‘error’
                reject('error');
            }, time);
        })
    };
    
    let start = async function () {
        try {
            console.log('start');
            await sleep(3000); // 这里得到了一个返回错误
            
            // 所以以下代码不会被执行了
            console.log('end');
        } catch (err) {
            console.error(err); // 这里捕捉到错误 `error`
        }
    };
    // start();
}
// 循环多个await
// await看起来就像是同步代码，所以可以理所当然的写在for循环里，不必担心以往需要闭包才能解决的问题。
{
    let sleep = function (time) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // 返回 ‘ok’
                resolve('ok');
            }, time);
        })
    };
    let start = async function () {
        for (var i = 1; i <= 10; i++) {
            console.log(`当前是第${i}次等待..`);
            await sleep(1000);
        }
    };
    // start();
}

// 值得注意的是，await必须在async函数的上下文中的。




