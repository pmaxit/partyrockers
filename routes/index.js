var express = require('express');
var router = express.Router();

var db = require('../model/db')
var access = require('../model/access')

router.get('/', function(req, res, next){
    res.render('index')
})


router.post('/register', function(req, res, next){

    console.log(req.body)
  if(! req.body.name || !req.body.token || !req.body.fbid  ){
      res.render('error')
  }

    var date = new Date();

    var user = new db.users({
        name: req.body.name,
        created_at: date,
        updated_at: date,
        token: req.body.token,
        fbid: req.body.fbid
    });

    db.users.update(
        { fbid: user.fbid},
        {name: user.name , updated_at: user.updated_at, token: user.token, fbid: user.fbid},
        {upsert: true, safe:true},
        function(err, data){
            if(err) res.render('error')
            else {
                console.log("User succesfully saved")

                req.session.user = user;
                res.redirect('/users')
            }
        }
    );

});

router.get('/login', function(req, res, next){

    if (!req.session.user)
        res.render('login')
    else
        res.redirect('/users')
})

router.get('/logout', function(req, res, next){
    req.session.destroy();
    res.redirect('/');
})

module.exports = router;
