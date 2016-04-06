/**
 * Created by idan on 23/03/2016.
 */
var mongoose = require('mongoose');

var cinemaSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    address: String,
    lat: Number,
    lng: Number,
    openingHourse: String
});

var Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = mongoose.model('Cinema', cinemaSchema);