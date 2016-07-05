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
    //pcModel.find({ 'att_cpu':query.att_cpu}, function(err, docs){
    //    console.log(docs);
    //    callback(docs);
    //});
    /*
    var query2 = pcModel.find();
    if (query.att_brand.length > 0){
        query2.where('att_brand').in(query.att_brand)
    }
    if (query.att_cpu !== undefined){
        query2.where('att_cpu', query.att_cpu);
    }
    if (query.att_screen_size !== undefined){
        query2.where('att_screen_size', query.att_screen_size);
    }

    query2.exec(function(err, docs){
        //console.log(docs);
        callback(docs);
    });
    */
};

module.exports.advancedSearch = function (query, callback) {
    console.log('query: ');
    console.log(query);
    //pcModel.find({ 'att_cpu':query.att_cpu}, function(err, docs){
    //    console.log(docs);
    //    callback(docs);
    //});
    /*
    var query2 = pcModel.find();
    if (query.att_brand.length > 0){
        query2.where('att_brand').in(query.att_brand)
    }
    if (query.att_cpu !== undefined){
        query2.where('att_cpu', query.att_cpu);
    }
    if (query.att_screen_size !== undefined){
        query2.where('att_screen_size', query.att_screen_size);
    }

    query2.exec(function(err, docs){
        //console.log(docs);
        callback(docs);
    });
*/
};
