const express = require('express');
const router = express.Router();
const dashboardController = require('../Controllers/dashboardController');

router.post('', dashboardController.addSessionDetails);
router.get('/:day', dashboardController.getSessionByDay);
// router.get('', requirementController.getRequirement);

module.exports = router;