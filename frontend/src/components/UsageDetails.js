import React, { useEffect, useState } from 'react';
import axios from '../api';

const UsageDetails = () => {
    const [usage, setUsage] = useState(null);

    useEffect(() => {
        const fetchUsage = async () => {
            try {
                const response = await axios.get('/api/usage');
                setUsage(response.data);
            } catch (error) {
                console.error('Error fetching usage details:', error);
            }
        };

        fetchUsage();
    }, []);

    if (!usage) return <div className="loading">Loading...</div>;

    return (
        <div>
            <pre>{JSON.stringify(usage, null, 2)}</pre>
        </div>
    );
};

export default UsageDetails;
