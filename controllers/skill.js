const Skill = require('../models/schema_game/Skill');
const Character = require('../models/schema_game/Character');


async function _createSkill(req, res) {
    let skill = new Skill();
    let {
        skill_name,
        skill_lvl,
        skill_cost,
        skill_range,
        character
    } = req.body;
    skill.skill_name = skill_name;
    skill.skill_lvl = skill_lvl;
    skill.skill_cost = skill_cost;
    skill.skill_range = skill_range;
    skill.character = character;
    await skill.save().then(skill => {
        res.status(200).send({
            skill
        });
    }).catch(err => {
        res.status(500).send({
            err
        });
    });
}

function _getWarriorCharacterSkill(req, res) {

    Character.findOne({
        'character_type': 'Guerrero',
        'character_type': 'Guerrera',
    }).then(character => {
        if (character) {
            Skill.find({
                'character': {
                    $in: [character._id]
                }
            }).then(skill => {
                return res.status(200).send({
                    skill
                });
            });
        } else {
            return res.status(401).send({
                message: 'no existe esa clase'
            });
        }
    });

}

function _getWizardCharacterSkill(req, res) {
    Character.findOne({
        'character_type': 'Mago',
        'character_type': 'Maga',
    }).then(character => {
        if (character) {
            Skill.find({
                'character': {
                    $in: [character._id]
                }
            }).then(skill => {
                return res.status(200).send({
                    skill
                });
            });
        } else {
            return res.status(401).send({
                message: 'no existe esa clase'
            });
        }
    });
}

module.exports = {
    _createSkill,
    _getWarriorCharacterSkill,
    _getWizardCharacterSkill
}