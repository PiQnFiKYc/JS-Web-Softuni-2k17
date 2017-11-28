var express = require('express');
var router = express.Router();

const Genre = require('./../models/GenreSchema');

router.get('/',function(req,res,next){
  res.render('addMeme',{title:'Add New Movie'});
  
}).post('/',function(req,res,next){
  console.log(req.files);
});

module.exports = router;
