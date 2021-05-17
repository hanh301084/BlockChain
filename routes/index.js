var express = require('express');
var router = express.Router();
const controller = require ('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', /*{ title: 'MyCoin' }*/);
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {key: req.key});
});

router.post('/signup',controller.createWallet);

module.exports = router;
