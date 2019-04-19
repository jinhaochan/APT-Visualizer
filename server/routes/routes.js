//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var APT = require('../../models/APT');

router.get('/', function(req, res){
  res.render('index')
});

router.route('/insert')
.post(function(req,res) {
  var apt = new APT();
  apt.description = req.body.description;
  apt.name = req.body.name;
  apt.aliases = req.body.aliases;
  apt.targets = req.body.targets;
  apt.associated_malware = req.body.malware;
  apt.vectors = req.body.vectors;

apt.save(function(err) {
      if (err)
        res.send(err);
      res.send('APT successfully added!');
  });

})

router.route('/update')
.post(function(req, res) {
  const doc = {
    description : req.body.description,
    name : req.body.name,
    aliases : req.body.aliases,
    targets : req.body.targets,
    associated_malware : req.body.malware,
    vectors : req.body.vectors
 };
 console.log(doc);
  APT.update({_id: req.body._id}, doc, function(err, result) {
      if (err)
        res.send(err);
      res.send('APT successfully updated!');
  });

});

router.get('/delete', function(req, res){
 var id = req.query.id;
 APT.find({_id: id}).remove().exec(function(err, apt) {
  if(err)
   res.send(err)
  res.send('APT successfully deleted!');
 })
});

router.get('/getAll',function(req, res) {
 var name = req.query.name;
 if(name != 'All'){
  APT.find({$and: [{name: name}]}, function(err, apt) {
   if (err)
    res.send(err);
   res.json(apt);
  });
 } else {
  APT.find({name: name}, function(err, apt) {
   if (err)
    res.send(err);
   res.json(apt);
  });
 }

});

module.exports = router;
