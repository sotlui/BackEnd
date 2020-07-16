const express = require('express');
const router = express.Router();

const { SystemValidator } = require('../validators');
const { SystemController } = require('../controllers');
const { verifyToken } = require('../middlewares');

router.post('/systems',
    verifyToken,
    SystemValidator.create, SystemController.insert);