const express = require('express');
const route = express.Router();
const auth = require('../middlewares/auth');


const _characterController = require('../controllers/character');
route.post('/create-character', _characterController._createCharacter);
route.post('/build-character', auth._auth, _characterController._buildUserCharacter);
route.post('/user_character-log', auth._auth, _characterController._userCharacterLogged);

module.exports = route;