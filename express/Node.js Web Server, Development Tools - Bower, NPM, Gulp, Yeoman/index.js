const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 5000;


http.createServer((req,res)=>{
    let path = url.parse(req.url).pathname;
    console.log(path);
    if(path==='/'||path==='/home'){
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                console.log(err);
                return
            }

            res.writeHead(200,{
                'content-type':'text/html'
            })
            res.write(data);
            res.end();
        })
    }
}).listen(port)

console.log("Server is listening on port 5000");    