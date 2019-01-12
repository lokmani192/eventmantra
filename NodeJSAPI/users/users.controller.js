const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const common = require('../_lib/common');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.post('/checkMobileNo', getByMobileNo);
router.post('/checkEmail', getByEmail);
router.put('/:id', update);
router.delete('/:id', _delete);
router.post('/sendMessage',sendMessage);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function sendMessage(req,res,next) {
    common.sendMessage(req.body.msg, req.body.phonenos).then(status => {
        console.log(status);
        res.json(status);
    }).catch(err => next(err));
}
function register(req, res, next) {
    userService.create(req.body)
        .then(() => {
            common.sendMessage();
            common.sendEmail('"Lokmani Kumar" <lokmani.kumar@letsplanevent.com', 'lokmani.kumar@gmail.com', 'Hello', 'Hi, This is Test');
            res.json({

            });
        })
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}
function getByMobileNo(req, res, next) {
    userService.getByMobileNo(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}
function getByEmail(req, res, next) {
    userService.getByEmail(req.body)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}