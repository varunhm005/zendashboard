const express = require('express');
const router = express.Router();
const queryController = require('../Controllers/queryController');

router.post('', queryController.createQuery);
router.get('', queryController.getAllQuery);

module.exports = router;