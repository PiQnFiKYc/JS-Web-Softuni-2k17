const mongoose = require('mongoose');

let ObjectId = mongoose.Types.Schema.ObjectId;
// let ObjectId = mongoose.Types.Schema.ObjectId;

let meme = new mongoose.Schema({
    memeName:{type:String,required:true},
    memeTitle:[{type:String}],
    dateOfCreation:{type:Date,default:Date.now()}    
})

module.exports = mongoose.model('Memes',meme);