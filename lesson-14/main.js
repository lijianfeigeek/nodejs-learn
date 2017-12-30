const ejs = require('ejs')

ejs.renderFile('./views/1.ejs',{
    name:"李剑飞",
    json:{

    },
    arr:[1,2,3],
    type:'admin'//'user'
},(err,data)=>{
    console.log(data);
})