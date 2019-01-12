const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Auth = {
    createToken: async function (data) {
        return jwt.sign({ data }, config.secret, { expiresIn: config.tokenExpirationTime });
    },
    verifyToken: async function (token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config.secret, (err, decodedToken) => {
                if (err || !decodedToken) {
                    return reject(err)
                }
                resolve(decodedToken)
            })
        });
    }

};
module.exports = Auth;
