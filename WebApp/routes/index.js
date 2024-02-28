var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res) {
  res.render('index', { title: 'Express', age: 30 });
});

module.exports = router;
