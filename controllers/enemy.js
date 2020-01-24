const Enemy = require('../models/schema_game/Enemy');

async function _createEnemy(req, res) {
    let enemy = new Enemy();
    let {
        enemy_type,
        enemy_hp,
        enemy_mp,
        enemy_lvl,
        enemy_name,
        enemy_exp,
        enemy_dmg,
        enemy_wiz_dmg,
        enemy_def
    } = req.body;
    enemy.enemy_type = enemy_type;
    enemy.enemy_hp = enemy_hp;
    enemy.enemy_mp = enemy_mp;
    enemy.enemy_lvl = enemy_lvl;
    enemy.enemy_name = enemy_name;
    enemy.enemy_exp = enemy_exp;
    enemy.enemy_dmg = enemy_dmg;
    enemy.enemy_wiz_dmg = enemy_wiz_dmg;
    enemy.enemy_def = enemy_def;
    await enemy.save().then(enemy => {
        res.status(200).send({
            enemy
        });
    }).catch(err => {
        res.status(500).send({
            message: 'Error',
            err
        })
    });
}

module.exports = {
    _createEnemy
}