var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.resolve('../client/views/index.html'));
});

router.get('/about', function(req, res) {
  res.sendFile(path.resolve('../client/views/about.html'));
});

/* GET home page. */
router.get('/map', function(req, res) {
  res.sendFile(path.resolve('../client/views/map.html'));
});

/* GET home page. */
router.get('/findmovie', function(req, res) {
  res.sendFile(path.resolve('../client/views/findMovie.html'));
});

/* GET home page. */
router.get('/toprated', function(req, res) {
  res.sendFile(path.resolve('../client/views/topRated.html'));
});

/* GET home page. */
router.get('/map', function(req, res) {
  res.sendFile(path.resolve('../client/views/findMovie.html'));
});

/* GET home page. */
router.get('/admin', function(req, res) {
  res.sendFile(path.resolve('../client/views/admin.html'));
});

/*
router.get('/s', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
