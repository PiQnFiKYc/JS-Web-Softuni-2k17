const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: { type: mongoose.Schema.Types.String, required: true},
    model: { type: mongoose.Schema.Types.String,required:true },
    year: { type: mongoose.Schema.Types.String,required:true },
    image:{type:mongoose.Schema.Types.String,required:true}
});


const Car = mongoose.model('Car', carSchema);


module.exports = Car;
