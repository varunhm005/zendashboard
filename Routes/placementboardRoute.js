const express = require('express');
const router = express.Router();
const placementboardController = require('../Controllers/placementboardController');

router.post('', placementboardController.createPlacementboard);
router.get('', placementboardController.getAllPlacementboard);

module.exports = router;