const express = require('express');
const router = express.Router();
const codekataController = require('../Controllers/codekataController');

router.post('', codekataController.createCodekata);
router.get('', codekataController.getAllCodekata);

module.exports = router;