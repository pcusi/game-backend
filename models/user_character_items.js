
const mongo = require('mongoose');

const _characterItemSchema = mongo.Schema({
    item: {
        type: mongo.Schema.ObjectId,
        ref: 'Item'
    },
    user_character: {
        type: mongo.Schema.ObjesctId,
        ref: 'UserChar'
    }
});

module.exports = mongo.model('CharItem', _characterItemSchema)
