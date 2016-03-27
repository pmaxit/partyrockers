var express = require('express');
var router = express.Router();

var defjs = require('../default')

/* GET users listing. */
router.get('/', defjs.requireLogin, function(req, res, next) {
  res.render('users/home');
});

router.get('events', defjs.requireLogin, function(req, res, next){
    res.render('users/events')
});

router.post('create', defjs.requireLogin, function(req, res, next){

})

module.exports = router;