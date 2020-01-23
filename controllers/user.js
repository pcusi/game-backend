const User = require('../models/schema_game/User');
const bcrypt = require('bcryptjs');
const moment = require('moment');

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

module.exports = {
    _createUser
}