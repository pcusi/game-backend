const express = require('express');
const route = express.Router();
const auth = require('../middlewares/auth');


const _itemController = require('../controllers/item');
route.post('/create-item', _itemController._createItem);


module.exports = route;