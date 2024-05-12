const express = require('express');
const router = express.Router();
const interviewController = require('../Controllers/interviewController');

router.post('', interviewController.createInterview);
router.get('', interviewController.getAllInterview);

module.exports = router;