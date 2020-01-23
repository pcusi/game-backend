const mongo = require('mongoose');

const _enemyWorld = mongo.Schema({
    world: {
        type: mongo.Schema.ObjectId,
        ref: 'World'
    },
    enemy: {
        type: mongo.Schema.ObjectId,
        ref: 'Enemy'
    },
});

module.exports = mongo.model('EnemyWorld', _enemyWorld);