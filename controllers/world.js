const World = require('../models/schema_game/World');

async function _createWorld(req, res) {
    let world = new World();
    let {
        world_name,
        world_min_lvl,
        world_max_lvl,
    } = req.body;

    world.world_name = world_name;
    world.world_min_lvl = world_min_lvl;
    world.world_max_lvl = world_max_lvl;
    await world.save().then(npc => {
        res.status(200).send({
            npc
        });
    }).catch(err => {
        res.status(500).send({
            err
        });
    });
}

module.exports = {
    _createWorld
}