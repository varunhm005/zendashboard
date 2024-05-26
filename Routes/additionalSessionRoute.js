const express = require('express');
const router = express.Router();
const additionalSessionController = require('../Controllers/additionalSessionController');

router.post('', additionalSessionController.createAdditionals);
router.get('', additionalSessionController.getAllAdditionals);

module.exports = router;