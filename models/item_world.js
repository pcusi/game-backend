const mongo = require('mongoose');

const _itemWorld = mongo.Schema({
    world: {
        type: mongo.Schema.ObjectId,
        ref: 'World'
    },
    item: {
        type: mongo.Schema.ObjectId,
        ref: 'Item'
    },
});

module.exports = mongo.model('ItemWorld', _itemWorld);