const express = require('express');
const route = express.Router();

const _enemyController = require('../controllers/enemy');
route.post('/create-enemy', _enemyController._createEnemy);

module.exports = route;