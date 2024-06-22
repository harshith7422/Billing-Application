import React, { useState } from 'react';
import axios from '../api';

const InvoiceGeneration = () => {
    const [invoice, setInvoice] = useState(null);

    const generateInvoice = async () => {
        try {
            const response = await axios.post('/api/invoice');
            setInvoice(response.data);
        } catch (error) {
            console.error('Error generating invoice:', error);
        }
    };

    return (
        <div>
            <button onClick={generateInvoice}>Generate Invoice</button>
            {invoice && <pre>{JSON.stringify(invoice, null, 2)}</pre>}
        </div>
    );
};

export default InvoiceGeneration;
