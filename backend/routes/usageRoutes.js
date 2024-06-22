const express = require('express');
const usageController = require('../controllers/usageController');
const router = express.Router();

router.get('/usage', usageController.getUsageDetails);

module.exports = router;
