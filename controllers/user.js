const User = require('../models/schema_game/User');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('../middlewares/jwt');

async function _createUser(req, res) {
    let user = new User();
    let {
        username,
        password,
        email
    } = req.body;
    user.username = username;
    user.email = email;
    user.created_at = moment().unix();
    await bcrypt.hash(password, 12).then(async hash => {
        user.password = hash;
        await user.save().then(user => {
            res.status(200).send({
                user
            });
        }).catch(err => {
            res.status(500).send({
                err
            });
        });
    });
}

async function _logIn(req, res) {
    let {
        username,
        password
    } = req.body
    User.findOne({
        'username': username,
        'status': true,
    }).then(user => {
        if (user) {
            bcrypt.compare(password, user.password).then(isset => {
                if (isset) res.status(200).send({
                    token: jwt.createToken(user)
                });
            }).catch(() => res.status(500).send({
                message: 'Contraseñas inválidas'
            }));
        } else {
            user.password = null;
            return res.status(200).send({
                user
            });
        }
    }).catch(() => res.status(500).send({
        message: 'No existe el usuario'
    }));
}

module.exports = {
    _createUser,
    _logIn
}