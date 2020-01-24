const mongo = require('mongoose');
const _worldSchema = mongo.Schema({
    world_name: {
        type: String
    },
    world_min_lvl: {
        type: Number,
        default: 1
    },
    world_max_lvl: {
        type: Number,
        default: 10
    }
});

module.exports = mongo.model('World', _worldSchema);