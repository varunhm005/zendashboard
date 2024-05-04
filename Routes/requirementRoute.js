const express = require('express');
const router = express.Router();
const requirementController = require('../Controllers/requirementController');

router.post('/', requirementController.createRequirement);
router.get('', requirementController.getRequirement);

module.exports = router;