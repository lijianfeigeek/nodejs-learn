const quertstring   = require('querystring')
module.exports = {
    aaa:(req,res,next)=>{

        return (req,res,next)=>{
            // req.a=12;
        var str = '';
        req.on('data',(data)=>{
            str += data;
        })
        req.on('end',()=>{
            req.body = quertstring.parse(str);
            next();
        });
        // req.body = {xxx};
    
        // next();
        } 
    }
} 

