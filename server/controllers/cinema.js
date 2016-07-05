var cinemaModel = require('../models/cinema');



module.exports.add = function(cinema) {
    cinemaModel.add(cinema);
};

module.exports.edit = function(cinema) {
    var query = { _id: cinema._id };
    var updatedObject = {
        name: cinema.name,
        address: cinema.address,
        lat: cinema.lat,
        lng: cinema.lng,
        openingHourse: cinema.openingHourse
    };
    var options = { multi: true };
    cinemaModel.update(query, updatedObject, options, function(res){
        return;
    })
};


module.exports.findAll = function(callback){
    cinemaModel.findAll(function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};

module.exports.findById = function(id, callback){
    cinemaModel.findById(id, function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};

module.exports.deleteById = function(id, callback){
    cinemaModel.deleteById(id, function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};