const express = require('express');

const router = express.Router();

const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');

router.post('/users',
    UserValidator.create, UserController.insert);

router.get('/users',
    UserController.findAll);

router.get('/users/:id',
    UserValidator.findOneId, UserController.findOneById);

router.patch('/users/:id',
    UserValidator.updateOne, UserController.updateOne);

router.delete('/users/:id',
    UserValidator.deleteOne, UserController.deleteOne);

module.exports = router;