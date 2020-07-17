const express = require('express');

const router = express.Router();

const { MenuValidator } = require('../validators');
const { MenuController } = require('../controllers');

router.post('/menus',
    MenuValidator.create, MenuController.insert);

router.get('/menus',
    MenuController.findAll);

router.get('/menus/:id',
    MenuValidator.findOneById, MenuController.findOneById);

router.patch('/menus/:id',
    MenuValidator.updateOne, MenuController.updateOne);

router.delete('/menus/:id',
    MenuValidator.deleteOne, MenuController.deleteOne);

module.exports = router;