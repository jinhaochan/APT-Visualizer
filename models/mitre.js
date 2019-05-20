//models/mitre.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mitre_tactics = new Schema({
  name: String,
  ID: String,
});

module.exports = mongoose.model('mitre_tactics', mitre_tactics);
