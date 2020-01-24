const mongo = require('mongoose');

const _itemSchema = mongo.Schema({
    item_name: {
        type: String,
        unique: true
    },
    item_image: {
        type: String,
        default: 'null'
    },
    item_type: {
        type: String,
    },
    item_lvl: {
        type: Number
    },
    item_class: {
        type: String,
    },
    item_dmg: {
        type: Number
    },
    item_speed: {
        type: Number
    },
    item_dbty: {
        type: Number,
        default: 100
    },
    item_def: {
        type: Number,
    },
    item_effect: {
        type: String,
    },
});

module.exports = mongo.model('Item', _itemSchema);