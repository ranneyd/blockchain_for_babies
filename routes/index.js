var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('landing', { title : "Blockchain for Babies" });
});
router.get('/home', function (req, res) {
    res.render('home', { title : "Blockchain for Babies" });
});

router.get('/signup', function(req, res) {
    res.render('signup', {  });
});

router.post('/signup', function(req, res) {
    console.log(req.body);
    if(req.body.password !== req.body.password2) {
        return res.render('signup', { error : "Passwords don't match" });
    }
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            return res.render('signup', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/home');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/home');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;