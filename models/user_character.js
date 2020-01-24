const mongo = require('mongoose');

const _userCharacter = mongo.Schema({
    user: {
        type: mongo.Schema.ObjectId,
        ref: 'User'
    },
    character: {
        type: mongo.Schema.ObjectId,
        ref: 'Character'
    },
    nick: {
        type: String,
        unique: true,
    },
    created_at: {
        type: String,
    },
    character_exp: {
        type: Number,
        default: 0
    },
    character_lvl: {
        type: Number,
        default: 1
    },
    character_abilities_point: {
        type: Number,
        default: 1
    }
});

module.exports = mongo.model('UserChar', _userCharacter);