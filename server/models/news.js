/**
 * Created by idan on 23/03/2016.
 */
var db = require('../app').db;

var schema = new db.Schema({
    news : String
});

var newsModel = db.model('news', schema);
module.exports = newsModel;

module.exports.findAll = function(callback){
    newsModel.find({}, 'news' ,callback);
};

module.exports.add = function(strNewsText)
{
    var newNewsDoc = new newsModel({ news: strNewsText });
    newNewsDoc.save(function (err) {
    })
};