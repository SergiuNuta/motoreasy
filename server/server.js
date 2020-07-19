const express = require('express');
const server = express();
const cors = require('cors');



const body_parser = require("body-parser");
server.use(cors())
server.use(body_parser.json());

const port = 3000;

// db setup
const db = require('./DB/Connection');
const dbName = "motoreasy";
const collectionName = "Brands";

// db init
db.initialize(dbName, collectionName, function (dbCollection) {
    dbCollection.find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    // get all the items from database
    server.get("/items", (request, response) => {
      
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
        });
    });

}, function (err) {
    throw (err);
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
})