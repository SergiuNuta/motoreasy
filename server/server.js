const express = require('express')
const connectDB = require('./DB/Connection');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = process.env.apiPort || 3000;

connectDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())
// app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));

app.get('/', (req, res) => {
    res.send('Hello Mother World!')
})

app.listen(apiPort, () => console.log(`Server is running on port ${apiPort}`))