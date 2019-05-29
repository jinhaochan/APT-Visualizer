var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema_skeleton = {
  external_references: [{ external_id : String,
                source_name: String,
                url: String}],
  description: String,
  x_mitre_data_sources: [String],
  x_mitre_detection: String,
  x_mitre_platforms: [String],
  name: String,
}

var mitre_tactics = new Schema(schema_skeleton);
var initial_access = new Schema(schema_skeleton);
var execution = new Schema(schema_skeleton);
var persistence = new Schema(schema_skeleton);
var privilege_escalation = new Schema(schema_skeleton);
var defense_evasion = new Schema(schema_skeleton);
var credential_access = new Schema(schema_skeleton);
var discovery = new Schema(schema_skeleton);
var lateral_movement = new Schema(schema_skeleton);
var collection = new Schema(schema_skeleton);
var command_and_control = new Schema(schema_skeleton);
var exfiltration = new Schema(schema_skeleton);
var impact = new Schema(schema_skeleton);

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
var command_and_control = mongoose.model('command_and_control', command_and_control, 'command_and_control');
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
	command_and_control:command_and_control,
	exfiltration:exfiltration,
	impact:impact
};
