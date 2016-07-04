var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUser/:userId', function(req, res, next) {
  res.send('respond with a resource2' + req.params.userId);
});

router.post('/add', function(req, res) {
  controller.add(req.body, function(ret){
    res.send(ret)});
});

module.exports = router;
