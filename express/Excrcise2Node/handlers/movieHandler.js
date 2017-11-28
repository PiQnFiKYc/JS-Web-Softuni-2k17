const fs = require('fs');
let db = require('../config/dataBase');

let addMovieFunc = (req,res)=>{
    fs.readFile('./views/addMovie.html',(err,data)=>{
        if(err){
            console.log(err)
            return
        }

        res.writeHead(200,{
            'content-type':'text/html'
        })
        res.write(data);
        res.end();
    })
}

module.exports = (req,res)=>{
    if(req.pathname==='/addMovie'&&req.method === 'GET'){
       addMovieFunc(req,res);
    }else if(req.pathname==='/viewAllMovies'&& req.method==='GET'){
        fs.readFile('./views/viewAll.html','utf8',(err,data)=>{
            if(err){
                console.log(err)
                return
            }
            res.writeHead(200,{
                'content-type':'text/html'
            })
            // console.log(data);
            // let div = data.getElementById('replaceMe');
            // for(let movie of db){
            //     div.innerHTML = `<div class="movie">
            //     <img class="moviePoster" src="${movie.moviePoster}"/>          
            //   </div>`
            // }
            res.write(data);
            res.end();
        })
    }
    else{
        return true
    }
}