const express = require('express');
const route = express.Router();

const _npcController = require('../controllers/npc');
route.post('/create-npc', _npcController._createEnemy);

module.exports = route;