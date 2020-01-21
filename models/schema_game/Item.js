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
    item_lvl: {
        type: Number
    },
    item_damage: {
        type: Number
    },
    item_speed: {
        type: Number
    },
    item_durability: {
        type: Number,
        default: 100
    }
});

module.exports = mongo.model('Item', _itemSchema);