const express = require('express');
const route = express.Router();


const _userController = require('../controllers/user');
route.post('/create-user', _userController._createUser);
route.post('/logIn', _userController._logIn);

module.exports = route;