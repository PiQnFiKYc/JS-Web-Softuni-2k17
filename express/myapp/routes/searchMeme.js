var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('searchMeme',{title:'Search For Meme'})
  })

module.exports = router;