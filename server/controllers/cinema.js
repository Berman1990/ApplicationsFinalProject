var cinemaModel = require('../models/cinema');



module.exports.add = function(cinema) {
    cinema.save(function (err) {})
};

module.exports.findAll = function(){
    cinemaModel.findAll(function (err, cinemas) {
        if (err) {
            return "server error";
        }
        else {
            return cinemas;
        }
    });
};

module.exports.findById = function(id){
    cinemaModel.findById(id, function (err, cinemas) {
        if (err) {
            return "server error";
        }
        else {
            return cinemas;
        }
    });
};
