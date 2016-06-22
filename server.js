var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var passport = require("passport");

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());// get information from html forms
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(__dirname + '/views'));//set the path for ejs template


require('./js/route.js')(app, passport); // load route in our application

app.listen(port);
console.log("Now please open localhost:"+port);