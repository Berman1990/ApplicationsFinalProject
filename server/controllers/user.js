var usersModel = require('../models/user');



module.exports.add = function(user) {
    user.save(
        function (err) {})
};

module.exports.findAll = function(callback){
    usersModel.findAll(function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};

module.exports.findById = function(id, callback){
    usersModel.findById(id, function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};

module.exports.deleteById = function(id, callback){
    usersModel.deleteById(id, function (err, cinemas) {
        if (err) {
            callback("server error");
        }
        else {
            callback(cinemas);
        }
    });
};