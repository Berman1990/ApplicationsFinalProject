/**
 * Created by idan on 23/03/2016.
 */
var express = require('express');
var router = express.Router();
var Cinema = require('../models/cinema');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/all', function(req, res) {
    Cinema.find({},function(err, Cinemas) {
        res.send(Cinemas);
    });
});

router.get('/byId:id', function(req, res) {
    Cinema.find({'id' : req.param('id')},function(err, movies) {
        res.send(movies);
    });
});

router.get('/byId:id', function(req, res) {
    Cinema.find({'id' : req.param('id')},function(err, movies) {
        res.send(movies);
    });
});

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});



module.exports = router;
