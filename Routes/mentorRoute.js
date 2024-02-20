const express = require('express');
const router = express.Router();
const mentorController = require('../Controllers/mentorController');

router.post('/', mentorController.createMentor);
router.post('/:mentorId', mentorController.assignStudent);
router.get('/:mentorId', mentorController.getStudentByMentorId);

module.exports = router;