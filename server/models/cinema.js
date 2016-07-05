/**
 * Created by idan on 23/03/2016.
 */
var db = require('../app').db;

var schema = new db.Schema({
    name: String,
    address: String,
    lat: Number,
    lng: Number,
    openingHourse: String
});

var cinemaModel = db.model('cinemas', schema);
module.exports = cinemaModel;

module.exports.add = function(cinema) {
    new cinemaModel(cinema).save(function (err) {

        console.log(err);
    })
};

module.exports.findAll = function(callback){
    cinemaModel.find({}, callback);
};

module.exports.findById = function(id, callback){
    cinemaModel.find({'id' : id}, callback);
};

module.exports.deleteById = function(id, callback){
    cinemaModel.find({'id' : id}).remove(callback);
};

