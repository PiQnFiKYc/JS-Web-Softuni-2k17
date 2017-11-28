var express = require('express');
var router = express.Router();

const Genre = require('./../models/GenreSchema')

router.get('/', function(req, res, next) {
  res.render('addGenre');
}).post('/',function(req,res,next){

    let objParams = req.body;

    Genre.create(objParams).then((obj)=>{
        res.render('addGenre')
    });
})

module.exports = router;
