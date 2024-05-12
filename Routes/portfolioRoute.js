const express = require('express');
const router = express.Router();
const portfolioController = require('../Controllers/portfolioController');

router.post('', portfolioController.createPortfolio);
router.get('', portfolioController.getPortfolio);

module.exports = router;