/**
 * Created by idan on 23/03/2016.
 */
var express = require('express');
var router = express.Router();
var movie = require('../models/movie');
var http = require('http');


/* GET movies listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource moviessss');
});

router.get('/all', function(req, res) {
    movie.find({},function(err, movies) {
        res.send(movies);
    });
});

router.get('/byDirector/:directorName', function(req, res) {
    movie.find({'Director' : req.param('directorName')},function(err, movies) {
        res.send(movies);
    });
});

router.get('/byYear/:year', function(req, res) {
    movie.find({'Year' : req.param('year')},function(err, movies) {
        console.log(movies);
        res.send(movies);
    });
});

router.get('/byGenre/:genre', function(req, res) {
    movie.find({'Genre' : req.param('genre')},function(err, movies) {
        res.send(movies);
    });
});

router.get('/new/:movieName', function(req, res) {
    getMoviefromService(req.param('movieName'));
});

function getMoviefromService(movieName) {
    var optionsget = {
        host : 'www.omdbapi.com',
        port : 80,
        path: '/?t=' + movieName + '&y=&plot=short&r=json',
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

