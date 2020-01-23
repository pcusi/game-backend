const mongo = require('mongoose');

const _npcWorld = mongo.Schema({
    world: {
        type: mongo.Schema.ObjectId,
        ref: 'World'
    },
    npc: {
        type: mongo.Schema.ObjectId,
        ref: 'NPC'
    },
});

module.exports = mongo.model('NPCWorld', _npcWorld);