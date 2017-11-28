const mongoose = require('mongoose');



let genre = new mongoose.Schema({
    genreName:{type:String,required:true},
    
})

module.exports = mongoose.model('Genre',genre);