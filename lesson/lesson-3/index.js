/**
http——模块

文件操作：fs——File System

fs

异步 vs 同步
异步——多个操作可以同时进行，前一次的操作没完事，后一次也能开始
同步——一次一个

readFile(文件名, function (err, data){})
writeFile(文件名, 内容, function (err){})

oBtn.onclick=function (){
	alert('a');
};

alert('b');

 */