const mongoose = require('mongoose');
const path = 'mongodb://localhost/myapp'

mongoose.Promise = global.Promise

module.exports = mongoose.createConnection(path,{
    useMongoClient:true
})