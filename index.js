const express = require('express');
const app = express();
const _parser = require('body-parser');

app.use(_parser.urlencoded({
    extended: false
}));

app.use(_parser.json());

const _userRoute = require('./routes/user.routes');
app.use('/api', [_userRoute])

const mongo = require('mongoose');
mongo.Promise = global.Promise;

const _port = 4500;

mongo.connect('mongodb://localhost:27017/game-backend', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}, () => console.log('MongoDB Connected'), 
app.listen(_port, () => console.log(`http://localhost:${_port}/api`)));

