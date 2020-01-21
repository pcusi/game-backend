const mongo = require('mongoose');

const _userCharacter = mongo.Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    character: {
        type: Schema.ObjectId,
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
            type: Schema.ObjectId
        },
        chest: {
            type: Schema.ObjectId
        },
        gloves: {
            type: Schema.ObjectId
        },
        legs: {
            type: Schema.ObjectId
        },
        ring_one: {
            type: Schema.ObjectId
        },
        ring_two: {
            type: Schema.ObjectId
        },
        shield: {
            type: Schema.ObjectId
        },

    },
    character_exp: {
        type: Number,
        default: 0
    }
});

module.exports = mongo.model('UserChar', _userCharacter);