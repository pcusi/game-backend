const express = require('express');
const route = express.Router();

const _worldController = require('../controllers/world');
route.post('/create-npc', _worldController._createWorld);

module.exports = route;