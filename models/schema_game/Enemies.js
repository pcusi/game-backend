const mongo = require('mongoose');

const _enemySchema = new mongo.Schema({
    enemy_type: {
        type: String,
        unique: true
    },
    enemy_hp: {
        type: Number,
        default: 105
    },
    enemy_mp: {
        type: Number,
        default: 55
    },
    enemy_lvl: {
        type: Number,
        default: 1
    },
    enemy_image: {
        type: String,
        default: 'null'
    },
    enemy_name: {
        type: String,
        unique: true
    },
});

//Export the model
module.exports = mongo.model('Enemie', _enemySchema);