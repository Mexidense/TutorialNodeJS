var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aprendiendo en MakingDevelopers.com' });
});

module.exports = router;
