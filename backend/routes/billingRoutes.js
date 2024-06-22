const express = require('express');
const router = express.Router();

// Mock billing data
const billingData = {
  currentBillingCycle: '2024-06',
  cumulativeUsage: 1500, // e.g., in hours
  totalAmountDue: 450.00, // e.g., in dollars
};

router.get('/', (req, res) => {
  res.json({ success: true, data: billingData });
});

module.exports = router;
