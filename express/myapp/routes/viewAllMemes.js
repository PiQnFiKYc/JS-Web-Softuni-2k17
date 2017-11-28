var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('viewAllMemes',{title:'Here are your memes'})
  })

module.exports = router;