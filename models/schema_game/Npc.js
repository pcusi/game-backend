const mongo = require('mongoose');
const _npcSchema = mongo.Schema({
    npc_name: {
        type: String,
    }
});

module.exports = mongo.model('NPC', _npcSchema);