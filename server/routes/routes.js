//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var APT = require('../../models/APT');

var mitre = require('../../models/mitre');

router.get('/', function(req, res){
  res.render('index')
});

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/getHeader',function(req, res) {
  mitre['mitre_tactics'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getInitialAccess',function(req, res) {
  mitre['initial_access'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getExecution',function(req, res) {
  mitre['execution'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getPersistence',function(req, res) {
  mitre['persistence'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getPrivilegeEscalation',function(req, res) {
  mitre['privilege_escalation'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getDefenseEvasion',function(req, res) {
  mitre['defense_evasion'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getCredentialAccess',function(req, res) {
  mitre['credential_access'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getDiscovery',function(req, res) {
  mitre['discovery'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getLateralMovement',function(req, res) {
  mitre['lateral_movement'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getCollection',function(req, res) {
  mitre['collection'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getExfiltration',function(req, res) {
  mitre['exfiltration'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getCommandControl',function(req, res) {
  mitre['command_and_control'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

router.get('/getImpact',function(req, res) {
  mitre['impact'].find(function(err, data) {
   if (err)
    res.send(err);
   res.json(data);
 }).sort({"external_references.external_id" :1})
});

module.exports = router;
