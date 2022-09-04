var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Marcus Bianchi Profile' });
});

router.get('/Profile', function(req, res){
  res.render('Profile')
});

router.get('/Portfolio', function(req, res){
  res.render('Portfolio')
});

router.get('/Education', function(req, res){
  res.render('Education')
});

router.post('/add', function(req, res){
});

module.exports = router;


