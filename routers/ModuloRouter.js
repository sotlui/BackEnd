const express = require('express');

const router = express.Router();

const { ModuloValidator } = require('../validators');
const { ModuloController } = require('../controllers');

router.post('/modulos',
    ModuloValidator.create, ModuloController.insert);

router.get('/modulos',
    ModuloController.findAll);

router.get('/modulos/:id',
    ModuloValidator.findOneById, ModuloController.findOneById);

router.patch('/modulos/:id',
    ModuloValidator.updateOne, ModuloController.updateOne);

router.delete('/modulos/:id',
    ModuloValidator.deleteOne, ModuloController.deleteOne);

module.exports = router;