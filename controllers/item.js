const Item = require('../models/schema_game/Item');
const jwt = require('../middlewares/jwt');

async function _createItem(req, res) {
    let item = new Item();
    let {
        item_name,
        item_lvl,
        item_class,
        item_dmg,
        item_speed,
        item_def,
        item_effect,
    } = req.body;

    item.item_name = item_name;
    item.item_lvl = item_lvl;
    item.item_class = item_class;
    item.item_dmg = item_dmg;
    item.item_speed = item_speed;
    item.item_def = item_def;
    item.item_effect = item_effect;

    await item.save().then(item => {
        res.status(200).send({
            item
        });
    }).catch(err => {
        res.status(500).send({
            err
        });
    });
}

module.exports = {
    _createItem
}