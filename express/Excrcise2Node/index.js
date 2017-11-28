const http = require('http');
const url = require('url');
const handlers = require('./handlers')
const port = 2526

http.createServer((req,res)=>{
    req.pathname = url.parse(req.url).pathname;
    for(let handler of handlers){
        
        let task = handler(req,res)

        if(task!==true){
            break;
        }


    }
}).listen(port)

console.log("Server is listening on port 2526");