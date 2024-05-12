const express = require('express');
const router = express.Router();
const leaderboardController = require('../Controllers/leaderboardController');

router.post('', leaderboardController.createLeaderboard);
router.get('', leaderboardController.getAllLeaderboard);

module.exports = router;