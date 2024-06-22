import React, { useEffect, useState } from 'react';
import axios from '../api';

const BillingInfo = () => {
    const [billing, setBilling] = useState(null);

    useEffect(() => {
        const fetchBilling = async () => {
            try {
                const response = await axios.get('/api/billing');
                setBilling(response.data);
            } catch (error) {
                console.error('Error fetching billing information:', error);
            }
        };

        fetchBilling();
    }, []);

    if (!billing) return <div className="loading">Loading...</div>;

    return (
        <div>
            <pre>{JSON.stringify(billing, null, 2)}</pre>
        </div>
    );
};

export default BillingInfo;
