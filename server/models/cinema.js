/**
 * Created by idan on 23/03/2016.
 */
var db = require('../app').db;

var schema = new db.Schema({
    id: { type: Number, unique: true },
    name: String,
    address: String,
    lat: Number,
    lng: Number,
    openingHourse: String
});

var cinemaModel = db.model('cinemas', schema);
module.exports = cinemaModel;

module.exports.add = function(cinema)
{
    cinema.save(function (err) {
    })
};