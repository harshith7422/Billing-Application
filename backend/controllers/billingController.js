const billingService = require('../services/billingService');

exports.getBillingInfo = async (req, res) => {
    try {
        const billingInfo = await billingService.getBillingInfo(req.user.id);
        res.json(billingInfo);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
