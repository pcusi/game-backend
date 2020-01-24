const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'SECRET_$%!$$$"$%%"#';

exports.createToken = function (user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    }
    try {
        return jwt.encode(payload, secret);
    } catch {
        return status(500).send({
            message: 'El token del usuario no es válido'
        })
    }
}