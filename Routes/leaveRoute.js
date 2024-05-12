const express = require('express');
const router = express.Router();
const leaveController = require('../Controllers/leaveController');

router.post('', leaveController.createLeave);
router.get('', leaveController.getAllLeave);

module.exports = router;