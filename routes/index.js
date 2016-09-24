var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blockchain for Babies' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET login page. */
router.post('/login', function(req, res, next) {
  res.render('login');
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

/* GET signup page. */
router.post('/signup', function(req, res, next) {
  res.render('signup');
});

module.exports = router;
