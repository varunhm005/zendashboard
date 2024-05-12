const express = require('express');
const router = express.Router();
const capstoneController = require('../Controllers/capstoneController');

router.post('', capstoneController.createCapstone);
router.get('', capstoneController.getAllCapstone);

module.exports = router;