const mongoose = require('mongoose');

const motoreasy = new mongoose.Schema({
    name: { type:String },
    tyres: { 
        size: { type:String}
     }
});

module.exports = Motoreasy = mongoose.model('motoreasy', motoreasy);