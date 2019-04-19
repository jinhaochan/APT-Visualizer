//models/APT.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var APTSchema = new Schema({
  description: String,
  name: String,
  aliases: String,
  targets: String,
  associated_malware: String,
  vectors: String
});

module.exports = mongoose.model('APT', APTSchema);
