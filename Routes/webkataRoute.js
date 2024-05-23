const express = require('express');
const router = express.Router();
const webkataController = require('../Controllers/webkataController');

router.post('', webkataController.createWebkata);
router.get('', webkataController.getAllWebkata);

module.exports = router;