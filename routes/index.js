var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/ps4/:leagueId/leagueteams', function(req, res) {
  console.log(req.params);
  console.log('League Teams');
  console.log('League Id: ', req.params.leagueId);
  console.log(req.body);
  res.status(200).send();
});

router.post('/ps4/:leagueId/standings', function(req, res) {
  console.log('Standings');
  console.log('League Id: ', req.params.leagueId);
  console.log(req.body);
  res.status(200).send();
});

router.post('/ps4/:leagueId', function(req, res) {
  console.log('Root POST URL HIT!')
  res.status(200).send();
});

router.get('/ps4/:leagueId', function(req, res) {
  console.log('Root GET URL HIT!')
  res.status(200).send();
});

module.exports = router;
