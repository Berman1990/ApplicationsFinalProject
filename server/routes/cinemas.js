/**
 * Created by idan on 23/03/2016.
 */
var express = require('express');
var router = express.Router();
var controller = require('../controllers/cinema');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/all', function(req, res) {
    controller.findAll(function(ret){
        res.send(ret)});
});

router.post('/delete', function(req, res) {
    controller.deleteById(req.body._id, function(ret){
        res.send(ret)});
});

router.post('/add', function(req, res) {
    controller.add(req.body, function(ret){
        res.send(ret)});
});

router.post('/edit', function(req, res) {
    controller.edit(req.body, function(req){
            res.send(ret)
    });
});


module.exports = router;
