var cinemaModel = require('../models/cinema');



module.exports.add = function(cinema) {
    cinema.save(function (err) {})
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
