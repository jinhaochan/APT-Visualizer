var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mitre_tactics = new Schema({
  name: String,
  ID: String,
});

var initial_access = new Schema({
  name: String,
  ID: String,
});

var execution = new Schema({
  name: String,
  ID: String,
});

var persistence = new Schema({
  name: String,
  ID: String,
});

var privilege_escalation = new Schema({
  name: String,
  ID: String,
});

var defense_evasion = new Schema({
  name: String,
  ID: String,
});

var credential_access = new Schema({
  name: String,
  ID: String,
});

var discovery = new Schema({
  name: String,
  ID: String,
});

var lateral_movement = new Schema({
  name: String,
  ID: String,
});

var collection = new Schema({
  name: String,
  ID: String,
});

var command_control = new Schema({
  name: String,
  ID: String,
});

var exfiltration = new Schema({
  name: String,
  ID: String,
});

var impact = new Schema({
  name: String,
  ID: String,
});

var mitre_tactics = mongoose.model('mitre_tactics', mitre_tactics, 'mitre_tactics');
var initial_access = mongoose.model('initial_access', initial_access, 'initial_access');
var execution = mongoose.model('execution', execution, 'execution');
var persistence = mongoose.model('persistence', persistence, 'persistence');
var privilege_escalation = mongoose.model('privilege_escalation', privilege_escalation, 'privilege_escalation');
var defense_evasion = mongoose.model('defense_evasion', defense_evasion, 'defense_evasion');
var credential_access = mongoose.model('credential_access', credential_access, 'credential_access');
var discovery = mongoose.model('discovery', discovery, 'discovery');
var lateral_movement = mongoose.model('lateral_movement', lateral_movement, 'lateral_movement');
var collection = mongoose.model('collection', collection, 'collection');
var command_control = mongoose.model('command_control', command_control, 'command_control');
var exfiltration = mongoose.model('exfiltration', exfiltration, 'exfiltration');
var impact = mongoose.model('impact', impact, 'impact');

module.exports = {
	mitre_tactics:mitre_tactics,
	initial_access:initial_access,
	execution:execution,
	persistence:persistence,
	privilege_escalation:privilege_escalation,
	defense_evasion:defense_evasion,
	credential_access:credential_access,
	discovery:discovery,
	lateral_movement:lateral_movement,
	collection:collection,
	command_control:command_control,
	exfiltration:exfiltration,
	impact:impact
};
