const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    getByMobileNo,
    getByEmail,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password, loginMethod }) {
    let user;
    if (loginMethod == 'phoneLogin') {
        user = await User.findOne({ mobileNo:username });
    }
    if (loginMethod == 'emailLogin') {
        user = await User.findOne({ email:username });
    }
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret, {expiresIn:config.tokenExpirationTime});
        return {
            ...userWithoutHash,
            id:user.id,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function getByMobileNo({ mobileNo }) {
    const user = await User.findOne({ mobileNo });
    let mobileNoExist = false;
    if (user) {
        mobileNoExist = true;
    }
    return {
        mobileNoExist: mobileNoExist
    }
}
async function getByEmail({ email }) {
    const user = await User.findOne({ email: email });
    let emailExist = false;
    if (user) {
        emailExist = true;
    }
    return {
        emailExist: emailExist
    }
    
}

async function create(userParam) {
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}