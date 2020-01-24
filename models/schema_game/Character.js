const mongo = require('mongoose');

const _characterSchema = mongo.Schema({
    character_name: {
        type: String,
        unique: true
    },
    character_gender: {
        type: String,
    },
    character_image: {
        type: String,
        default: 'null'
    },
    character_type: {
        type: String,
    },
    character_hp: {
        type: Number,
        default: 89
    },
    character_mp: {
        type: Number,
        default: 30
    },
    character_dmg: {
        type: Number
    },
    character_wiz_dmg: {
        type: Number
    },
    character_str: {
        type: Number,
    },
    character_agi: {
        type: Number
    },
    character_def: {
        type: Number
    },
    character_speed_mov: {
        type: Number,
    },
    character_precision: {
        type: Number,
    },
    character_weapon: {
        type: String,
        required: true,
    }
});

module.exports = mongo.model('Character', _characterSchema);