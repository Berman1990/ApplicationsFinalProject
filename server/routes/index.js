var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile(path.resolve('../client/views/index.html'));
});

/* GET home page. */
router.get('/map', function(req, res) {
  res.sendfile(path.resolve('../client/views/map.html'));
});

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile(path.resolve('../client/views/index.html'));
});

/*
router.get('/s', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
