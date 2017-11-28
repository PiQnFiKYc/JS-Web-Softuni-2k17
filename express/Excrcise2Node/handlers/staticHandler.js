const fs = require('fs');

let fileType = (dataString)=>{
    let dataTypes ={
        '.css':'text/css',
        '.js':'application/javascript',
        '.png':'image/png',
        '.jpg':'image/jpg',
        '.ico':'image/x-icon'
    }
    for(let type in dataTypes){
        if(dataString.endsWith(type)){
            return dataTypes[type]
        }
    }
}

let resData = (req,res)=>{
    fs.readFile('.'+req.pathname,(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        res.writeHead(200,{
            'content-type':fileType(req.pathname)
        })
        res.write(data);
        res.end();
    })
}

let faviHendler = (req,res) =>{
    fs.readFile('./public/images/favicon.ico',(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        res.write(200,{
            'content-type':fileType(req.pathname)
        })
        res.write(data);
        res.end();
    })
}

module.exports= (req,res)=>{
    if(req.pathname === '/favicon.ico'&& req.method ==='GET'){
       faviHendler(req,res);
    }else if(req.pathname.startsWith('/public/')&&req.method==='GET'){
        resData(req,res);
    }
    else{
        res.end();
    }
}