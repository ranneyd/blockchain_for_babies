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

<<<<<<< HEAD
/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
=======
/* GET login page. */
router.post('/login', function(req, res, next) {
  res.render('login');
>>>>>>> d117fcee487d6dfb97bd242d8e16a0973f0adb00
});

module.exports = router;
