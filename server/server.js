require('dotenv').config();
var express = require('express');
var app = express();
const userController = require('./controllers/userController');
const weatherController = require('./controllers/weatherController');
const bodyParser = require('body-parser');
const http = require('http');

app.use(bodyParser.json());
app.get('/', express.static(__dirname + './../')); //serves the index.html

app.get('/signup', userController.signIn, function (req, res) {
    res.send('signup');
});

app.post('/weather', weatherController.getWeather, function (req, res) {
    res.send(JSON.stringify(res.locals.data));
});

app.listen(3000, function () {
    console.log('listening on port 3000');
}); //listens on port 3000 -> http://localhost:3000/