const mongo = require('mongoose');
const _skillSchema = mongo.Schema({
    skill_name: {
        type: String,
        unique: true
    },
    skill_lvl: {
        type: Number
    },
    skill_cost: {
        type: Number,
        default: 0
    },
    skill_range: {
        type: String,
        default: 'Basic'
    },
    character: {
        type: mongo.Schema.ObjectId,
        ref: 'Character'
    }
});

module.exports = mongo.model('Skill', _skillSchema);