//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var APT = require('../../models/APT');
var mitre_tactics = require('../../models/mitre');

router.get('/', function(req, res){
  res.render('index')
});

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/getHeader',function(req, res) {
  mitre_tactics.find(function(err, apt) {
   if (err)
    res.send(err);
   res.json(apt);
 })
});

module.exports = router;
