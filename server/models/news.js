/**
 * Created by idan on 23/03/2016.
 */
var db = require('../app').db;

var newsSchema = new db.Schema({
    news : String
});

var newsModel = db.model('news', newsSchema);
module.exports = newsModel;

module.exports.findAll = function(){
    newsModel.find({} ,function (err, docs)
    {
        return docs;
        if(err){
        }
        else{
            return docs;
        }
    });
};

module.exports.shapirov = function()
{
    var small = new newsModel({ news: 'small' });
    console.log(small);
    small.save(function (err) {
        console.log(err);
    })
}