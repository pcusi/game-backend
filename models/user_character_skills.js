const mongo = require('mongoose');

const _characterSkillSchema = mongo.Schema({
    skill: {
        type: mongo.Schema.ObjectId,
        ref: 'Skill'
    },
    user_character: {
        type: mongo.Schema.ObjectId,
        ref: 'UserChar'
    }
});

module.exports = mongo.model('CharSkill', _characterSkillSchema)