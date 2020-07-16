const mongoose = require('mongoose');

const URI = "mongodb+srv://serghei_05:Password1@cluster0.jhtts.mongodb.net/Tyres?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
    console.log("database is connected !!!!!!")
}

module.exports = connectDB;

