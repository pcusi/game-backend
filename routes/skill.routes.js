const express = require('express');
const route = express.Router();


const _skillController = require('../controllers/skill');
route.post('/create-skill', _skillController._createSkill);
route.get('/warrior-skill', _skillController._getWarriorCharacterSkill);
route.get('/wizard-skill', _skillController._getWizardCharacterSkill);


module.exports = route;