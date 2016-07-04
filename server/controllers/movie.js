var movieModel = require('../models/movie');

module.exports.add = function(movie) {
    movie.save(function (err) {})
};

module.exports.removeById = function(id, callback){
    movieModel.findByIdAndRemove(id, function (err, doc) {
        if (err) {
            callback("server error");
        }
        else {
            callback("ok");
        }
    });
};

module.exports.removeById = function(id, callback){
    movieModel.removeById(id, function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};

module.exports.findAll = function(callback){
    movieModel.findAll(function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};

module.exports.findByDirector = function(directorName, callback){
    movieModel.findByDirector(directorName, function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};

module.exports.findByYear = function(year, callback){
    movieModel.findByYear(year, function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};

module.exports.findByGenre = function(genre, callback){
    movieModel.findByGenre(genre, function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};