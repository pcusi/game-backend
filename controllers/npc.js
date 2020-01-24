const NPC = require('../models/schema_game/Npc');

async function _createNPC(req, res) {
    let npc = new NPC();
    let {
        npc_name
    } = req.body;

    npc.npc_name = npc_name;

    await npc.save().then(npc => {
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
    _createNPC
}