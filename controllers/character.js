const Character = require('../models/schema_game/Character');

async function _createCharacter(req, res) {
    let character = new Character();
    let {
        character_name,
        character_gender,
        character_type,
        character_hp,
        character_mp,
        character_str,
        character_agi,
        character_def,
        character_speed_mov,
        character_weapon,

    } = req.body;
    character.character_name = character_name
    character.character_gender = character_gender
    character.character_type = character_type
    character.character_hp = character_hp
    character.character_mp = character_mp
    character.character_str = character_str
    character.character_agi = character_agi
    character.character_def = character_def
    character.character_speed_mov = character_speed_mov
    character.character_weapon = character_weapon
    await character.save().then(character => {
        res.status(200).send({
            character
        });
    }).catch(err => {
        res.status(500).send({
            err
        });
    });
}

module.exports = {
    _createCharacter
}