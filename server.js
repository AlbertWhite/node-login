var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var passport = require("passport");
var mongoose = require("mongoose");
var flash    = require('connect-flash');
var database = require('./js/config/database.js');
var expressSession = require("express-session");

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));//use bodyParser for form 
app.use(bodyParser.json());
app.set('view engine', 'ejs');//use ejs template
app.use(expressSession({ secret: 'thisisasessionname' }));//set session screct
app.use(passport.initialize());//initialize passport
app.use(passport.session());

app.use(express.static(__dirname + '/views'));
app.use(flash()); //use flash information

mongoose.connect(database.url); 

require('./js/config/passport.js')(passport); 
require('./js/route.js')(app, passport); 

app.listen(port);
console.log("Now please open localhost:"+port);