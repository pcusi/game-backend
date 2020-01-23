const mongo = require('mongoose');
const _worldSchema = mongo.Schema({
    world_name: {
        type: String
    },
    world_lvl: {
        type: Number,
        default: 1
    },
});

module.exports = mongo.model('World', _worldSchema);