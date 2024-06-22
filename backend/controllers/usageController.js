const usageService = require('../services/usageService');

exports.getUsageDetails = async (req, res) => {
    try {
        const usageDetails = await usageService.getUsageDetails(req.user.id);
        res.json(usageDetails);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
