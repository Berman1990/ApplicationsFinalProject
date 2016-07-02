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
    res.send(controller.findAll());
});

router.get('/byId:id', function(req, res) {
        res.send(controller.findById(req.param('id')));
});

module.exports = router;
