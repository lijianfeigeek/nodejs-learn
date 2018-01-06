// Promise -- 承诺
// 就是一个对象，用来传递异步操作的数据(消息)
// 异步：多个操作可以同时进行
// pending (等待，处理中)-> Resolve(完成)
//                     -> Rejected(拒绝，失败)

// 使用
{
    var p1 = new Promise((resolve,reject)=>{
        //  resolve
        resolve(1);
        //  reject
        // reject(2);
        // throw ('err');
    });
    p1.then((resolve)=>{
        // 成功
        console.log('resolve:'+resolve)
    },(reject)=>{
        // 失败
        console.log('reject:'+reject);
    });

    // 捕获错误
    p1.catch((err)=>{
        console.log('err:'+err)
    });
}



// all 全部，用于将多个promise对象，组合，包装成一个全新的promise对象
// all 里面只要有错误，就走错误回调函数
Promise.all([true,p1]).then((resolve)=>{
    console.log('all resolve:'+resolve[1])
},(reject)=>{
    console.log('all reject:'+reject);
});

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