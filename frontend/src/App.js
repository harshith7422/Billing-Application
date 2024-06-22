import React from 'react';
import './App.css';
import Login from './components/Login';
import UsageDetails from './components/UsageDetails';
import BillingInfo from './components/BillingInfo';
import InvoiceGeneration from './components/InvoiceGeneration';

function App() {
    return (
        <div className="App">
            <h1>Billing Platform</h1>
            <section>
                <Login />
            </section>
            <section>
                <h2>Usage Details</h2>
                <UsageDetails />
            </section>
            <section>
                <h2>Billing Information</h2>
                <BillingInfo />
            </section>
            <section>
                <h2>Generate Invoice</h2>
                <InvoiceGeneration />
            </section>
        </div>
    );
}

export default App;
