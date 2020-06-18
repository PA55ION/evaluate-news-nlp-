// const dotenv = require('dotenv');
// dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
var aylien = require("aylien_textapi");

if (process.env.NODE_ENV !== 'production') { 
    require('dotenv').config()
 }


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

app.use('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, x-access-token, x-user-pathway, x-mongo-key, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    next();
  });



app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
   
})

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