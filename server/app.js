var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var appDB = require('mongoose');
var config = require('./config');
var app = undefined;


appDB.connect(config.MONGO_URI);
appDB.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});
module.exports.db = appDB;

var app = express();
//var homeRoute = require('./routes/home');
//var searchRoute = require('./routes/search');
//var mediaRoute = require('./routes/media');
//var userRoute = require('./routes/user');
//var statisticsRoute = require('./routes/statistics');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// serve the static client files
app.use(express.static(path.join(__dirname, '../client')));
app.use(cookieParser());

// set up the routes
require('./routes')(app);

// start the server
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

// application -------------------------------------------------------------
app.get('*', function(req, res) {
  res.sendFile(path.resolve('../client/views/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports.app = app;

// News
 var newsModel = require('./controllers/news');
 newsModel.realtimePushService();
