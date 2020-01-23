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
    items: {
        helmet: {
            type: mongo.Schema.ObjectId
        },
        chest: {
            type: mongo.Schema.ObjectId
        },
        gloves: {
            type: mongo.Schema.ObjectId
        },
        legs: {
            type: mongo.Schema.ObjectId
        },
        ring_one: {
            type: mongo.Schema.ObjectId
        },
        ring_two: {
            type: mongo.Schema.ObjectId
        },
        shield: {
            type: mongo.Schema.ObjectId
        },

    },
    character_exp: {
        type: Number,
        default: 0
    },
    character_lvl: {
        type: Number,
        default: 1
    },
});

module.exports = mongo.model('UserChar', _userCharacter);