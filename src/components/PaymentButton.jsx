import React, { useState } from 'react';
import { createPaymentIntent } from '../services/geniusPayService';

const PaymentButton = ({ amount, currency = 'XOF', productName }) => {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    const handlePayment = async () => {
        setStatus('processing');
        setError(null);
        try {
            const data = await createPaymentIntent({
                amount: amount,
                currency: currency,
                description: `Achat de ${productName}`,
            });

            if (data && (data.payment_url || data.checkout_url)) {
                window.location.href = data.payment_url || data.checkout_url;
            } else {
                console.log('Payment Intent created:', data);
                setStatus('succeeded');
            }
        } catch (err) {
            console.error('Payment error:', err);
            setError(err.message);
            setStatus('error');
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <button
                onClick={handlePayment}
                disabled={status === 'processing'}
                className={`w-full py-3 text-center font-heading font-bold uppercase text-sm tracking-wider rounded transition-all flex items-center justify-center gap-2 ${status === 'processing'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-accent text-white hover:bg-orange-600'
                    }`}
            >
                {status === 'processing' ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Traitement...
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                        Payer avec Genius
                    </>
                )}
            </button>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default PaymentButton;
