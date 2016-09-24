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

/* GET create parent page. */
router.get('/createparent', function(req, res, next) {
  res.render('createparent');
});

/* GET create parent page. */
router.post('/createparent', function(req, res, next) {
  res.render('createparent');
});

/* GET create baby page. */
router.get('/createbaby', function(req, res, next) {
  res.render('createbaby');
});

/* GET create parent page. */
router.post('/createbaby', function(req, res, next) {
  res.render('createbaby');
});

module.exports = router;
