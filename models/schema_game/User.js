const mongo = require('mongoose');

const _userSchema = mongo.Schema({
    created_at: String,
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        unique: true
    },
    image: {
        type: String,
        default: 'null'
    }
});

module.exports = mongo.model('User', _userSchema);