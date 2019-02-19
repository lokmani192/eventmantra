const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user/user.model')
};