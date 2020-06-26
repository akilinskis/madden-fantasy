var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test-post', function(req, res) {
  console.log(req.body);
  res.status(200);
});

module.exports = router;
