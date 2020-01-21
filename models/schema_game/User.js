const mongo = require('mongoose');

const _userSchema = mongo.Schema({
    created_at: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    status: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        unique: true
    },
});

module.exports = mongo.model('User', _userSchema);