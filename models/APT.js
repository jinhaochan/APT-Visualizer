//models/APT.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var APT_Info = new Schema({
  description: String,
  name: String,
  aliases: String,
  targets: String,
  associated_malware: String,
  vectors: String
});

module.exports = mongoose.model('APT_Info', APT_Info);
