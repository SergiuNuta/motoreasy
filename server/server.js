const express = require('express');
const server = express();

const body_parser = require("body-parser");

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

    // << db CRUD routes >>
    server.get("/items", (request, response) => {
        // return updated list
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


// const express = require('express')
// const connectDB = require('./DB/Connection');
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const app = express()
// const apiPort = 3000;

// connectDB()

// const tyresRouter = require('./Api/TyresRouter');

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cors())
// app.use(bodyParser.json())
// app.use(express.json({ extended: false }));
// // app.use('/api/userModel', require('./Api/TyresControler'));
// app.use('/api', tyresRouter);

// app.get('/', (req, res) => {
//     res.send('Hello Mother World!')
// })

// app.listen(apiPort, () => console.log(`Server is running on port ${apiPort}`))