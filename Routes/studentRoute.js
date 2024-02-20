const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentController');

router.post('/', studentController.createStudent);
router.get('/unAssigned', studentController.getStudent);

module.exports = router;