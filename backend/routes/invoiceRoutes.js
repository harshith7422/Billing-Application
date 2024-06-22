const express = require('express');
const invoiceController = require('../controllers/invoiceController');
const router = express.Router();

router.post('/invoice', invoiceController.generateInvoice);

module.exports = router;
