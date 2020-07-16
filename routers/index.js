const express = require('express');
const router = express.Router();

router.use(require('./SystemRouter'));
router.use(require('./UserRouter'));

module.exports = router;