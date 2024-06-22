const invoiceService = require('../services/invoiceService');

exports.generateInvoice = async (req, res) => {
    try {
        const invoice = await invoiceService.generateInvoice(req.user.id);
        res.json(invoice);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
