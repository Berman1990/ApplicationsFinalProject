/**
 * Created by idan on 23/03/2016.
 */
var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Movie', movieSchema);
var movieModel = mongoose.model('Movie');

module.exports.removeById = function(id, callback){
    movieModel.findByIdAndRemove(id, function (err, doc) {
        if(err){
            callback(err);
        }
        else{
            callback(null);
        }
    });
};

module.exports.add = function(compModel, callback){
    var newComputer = new movieModel(compModel);

    newComputer.save(function (err, rowAffected) {
        if(err){
            callback(err);
        }
        else{
            callback(null);
        }
    });
};

