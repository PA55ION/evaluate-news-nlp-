const dotenv = require('dotenv')
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
var aylien = require("aylien_textapi");

// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)



app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
   
})

// designates what port the app will listen to for incoming requests
// app.listen(8000, function () {
//     console.log('Example app listening on port 8000!')
// })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)

  
})


app.post('/api', (req, res) => {
    const url = `${req.body.url}`;
    textapi.extract({
        url: url
    }, function(error, response) {
        if(error === null) {
            console.log(response)
            res.send(response)
        }
    })
})

module.exports = app