/**
 * Created by idan on 23/03/2016.
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var controller = require('../controllers/movie');
var movie = require('../models/movie');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/all', function(req, res) {
    controller.findAll(function(ret){
        res.send(ret)});
});

router.post('/removeById/:id', function(req, res) {
    controller.removeById(req.params.id, function(ret){
        res.send(ret)});
});

router.get('/byDirector/:directorName', function(req, res) {
    controller.findByDirector(req.params.directorName, function(ret){
        res.send(ret)});
});

router.get('/byYear/:year', function(req, res) {
    controller.findByYear(req.params.year, function(ret){
        res.send(ret)});
});

router.get('/byGenre/:genre', function(req, res) {
    controller.findByGenre(req.params.genre, function(ret){
        res.send(ret)});
});

router.get('/new/:movieName', function(req, res) {
    getMoviefromService(req.param('movieName'));
});

router.post('/search/normal', function(req, res) {

    controller.normalSearch(req.body, function(ret){
        res.send(ret);
    });
});

router.get('/groupbyyears', function(req, res) {
    controller.groupByYears(function(ret){
        res.send(ret);
    });
});

router.post('/search/advanced', function(req, res) {
    controller.advancedSearch(req.body, function(ret){
        res.send(ret);
    });
});

function getMoviefromService(movieName) {
    var optionsget = {
        host : 'www.omdbapi.com',
        port : 80,
        path: '/?t=' + encodeURIComponent(movieName) + '&y=&plot=short&r=json',
        method : 'GET' // do GET
    };

    // do the GET request
    var reqGet = http.request(optionsget, function(res) {
        console.log("statusCode: ", res.statusCode);

        res.on('data', function(d) {
            console.info('GET result:\n');
            //process.stdout.write(d);
            console.log(JSON.parse(d));
            var newMovie = new movie(JSON.parse(d));
            newMovie.save(function (err) {
                if (err) {
                    console.log(err);
                    return err;
                }
                else {
                    console.log("Post saved");
                }
            });
            console.info('\n\nCall completed');
        });
    });

    reqGet.end();
    reqGet.on('error', function(e) {
        console.error(e);
    });
}

module.exports = router;

