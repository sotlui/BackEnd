const express = require('express');

const router = express.Router();
const { verifyToken } = require('../middlewares');

router.use(require('./AuthRouter'));
router.use(require('./UserRouter'));
router.use(require('./MenuRouter'));
router.use(require('./ModuloRouter'));

router.use(verifyToken);
router.use(require('./SystemRouter'));



module.exports = router;