var express = require('express');
var router = express.Router();
const controller = require ('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {key: req.session.key}/*{ title: 'MyCoin' }*/);
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {key: null, Privatekey:null});
});

router.post('/signup',controller.createWallet);


router.get('/login', function(req, res, next) {
  res.render('login', {key: null});
});

router.post('/login',controller.accessWallet);

module.exports = router;
