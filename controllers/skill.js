const Skill = require('../models/schema_game/Skill');


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

module.exports = {
    _createSkill
}