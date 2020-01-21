const mongo = require('mongoose');
const Schema = mongo.Schema;

const _characterSchema = Schema({
    character_gender: {
        type: String,
    },
    character_type: {
        type: String,
        unique: true
    },
    character_hp: {
        type: Number,
        default: 89
    },
    character_mp: {
        type: Number,
        default: 30
    },
    character_image: {
        type: String,
        default: 'null'
    },
    character_name: {
        type: String,
        unique: true
    },
});

module.exports = mongo.model('Character', _characterSchema);