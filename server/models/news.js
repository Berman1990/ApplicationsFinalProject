/**
 * Created by idan on 23/03/2016.
 */
var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
    News : String
});

module.exports = mongoose.model('News', movieSchema);
var movieModel = mongoose.model('News');

module.exports.findAll = function(callback){
    movieModel.find({}, {'News' : 1}, function (err, doc) {
        if(err){
            callback(err);
        }
        else{
            callback(null);
        }
    });
};

