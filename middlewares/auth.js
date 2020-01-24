const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'SECRET_$%!$$$"$%%"#';

exports._auth = function (req, res, next) {
    if (!req.headers.authorization) return res.status(402).send({
        message: 'No tienes autorización'
    });

    var token = req.headers.authorization.split(" ")[1];
    var payload = jwt.decode(token, secret);

    try {
        if (payload <= moment().unix()) {
            res.status(401).send({
                message: 'El token ha expirado'
            });
        }
    } catch {
        res.status(403).send({
            message: 'El token no existe'
        });
    }

    req.user = payload.sub;
    next();
}