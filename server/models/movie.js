/**
 * Created by idan on 23/03/2016.
 */
var mongoose = require('mongoose');
var db = require('../app').db;

var schema = new db.Schema({
    Title : String,
    Year : Number,
    Rated : String,
    Released : Date,
    Runtime : String,
    Genre : [String],
    Director : String,
    Writer : [String],
    Actors : [String],
    Plot : String,
    Language : [String],
    Country : String,
    Awards : String,
    Poster : String,
    Metascore : Number,
    imdbRating : Number,
    imdbVotes : String,
    imdbID : {type:String, unique: true}
});

var movieModel = db.model('movies', schema);
module.exports = movieModel;

module.exports.removeById = function(id, callback){
    movieModel.findByIdAndRemove(id, callback);
};

module.exports.add = function(movie) {
    new movieModel(movie).save(function (err) {})
};

module.exports.findAll = function(callback){
    movieModel.find({}, callback);
};

module.exports.groupByYears = function(callback){
    movieModel.aggregate([
        {
            $group: {
                _id: '$Year',  //$region is the column name in collection
                count: {$sum: 1}
            }
        }
    ], callback);
};



module.exports.findByDirector = function(Director, callback){
    movieModel.find({'Director' : Director}, callback);
};

module.exports.findByYear = function(Year, callback){
    movieModel.find({'Year' : Year}, callback);
};

module.exports.findByGenre = function(Genre, callback){
    movieModel.find({'Genre' : Genre}, callback);
};


module.exports.normalSearch = function (query, callback) {
    console.log('query: ');
    console.log(query);

    var search = movieModel.find();
    if (query.name !== undefined && query.name.length != 0){
        search.where('Title').regex(new RegExp(query.name,"i"));
    }
    if (query.director !== undefined && query.director.length != 0){
        search.where('Director').regex(new RegExp(query.director,"i"));
    }
    if (query.year !== undefined && query.year.length != 0){
        search.where('Year').equals(query.year);
    }

    search.exec(function(err, docs){
        //console.log(docs);
        callback(docs);
    });

};

module.exports.advancedSearch = function (query, callback) {
    console.log('query: ');
    console.log(query);

    var search = movieModel.find();
    if (query.actor !== undefined && query.actor.length != 0){
        search.where('Title').regex('/' + query.name + '/i');
    }
    if (query.ganre !== undefined && query.ganre.length != 0){
        search.where('Ganre').regex('/' + query.ganre + '/i');
    }
    if (query.rating !== undefined && query.rating.length != 0){
        search.where('imdbRating').gte(query.rating);
    }
    if (query.award !== undefined && query.Award.length != 0){
        search.where('Awards',query.Award);
    }

    search.exec(function(err, docs){
        //console.log(docs);
        callback(docs);
    });

};
