const express = require('express');
const router = express.Router();

const { SystemValidator } = require('../validators');
const { SystemController } = require('../controllers');

router.post('/systems',
    SystemValidator.create, SystemController.insert);

router.get('/systems',
    SystemController.findAll);

router.get('/systems/:id',
    SystemValidator.findOneById, SystemController.findOneById);

router.patch('/systems/:id',
    SystemValidator.updateOne, SystemController.updateOne);

router.delete('/systems/:id',
    SystemValidator.deleteOne, SystemController.deleteOne);

module.exports = router;