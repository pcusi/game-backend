const Character = require('../models/schema_game/Character');
const UserChar = require('../models/user_character');
const CharSkill = require('../models/user_character_skills');
const moment = require('moment');

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
        character_dmg,
        character_wiz_dmg,
        character_precision

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
    character.character_precision = character_precision
    character.character_dmg = character_dmg
    character.character_wiz_dmg = character_wiz_dmg
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

async function _buildUserCharacter(req, res) {
    if (!req.user) {
        return res.status(200).send({
            message: 'No puedes crearte un personaje, primero inicia sesión'
        });
    }
    let {
        character,
        nick
    } = req.body;
    let build = new UserChar();
    build.user = req.user;
    build.character = character;
    build.nick = nick;
    build.created_at = moment().unix();
    await build.save().then(user_character => {
        res.status(200).send({
            user_character,
        });
    }).catch((err) => res.status(500).send({
        message: 'Error',
        err
    }));
}

module.exports = {
    _createCharacter,
    _buildUserCharacter
}