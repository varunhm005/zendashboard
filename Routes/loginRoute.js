const express = require('express');
const router = express.Router();
const requirementController = require('../Controllers/loginController');

router.post('', requirementController.login);
router.post('/createUser', requirementController.createUser);
// router.get('', requirementController.getRequirement);

module.exports = router;