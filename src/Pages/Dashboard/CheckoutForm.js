import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const [cardErr, setCardErr] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { _id, totalAmount, user, userName, order_quantity } = order;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalAmount })

        })
            .then(res => res.json()
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                }))
    }, [totalAmount])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardErr(error?.message || '');
        setSuccess('');
        setProcessing(true);

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: user
                    },
                },
            },
        );

        if (intentError) {
            setCardErr(intentError?.message);
            setProcessing(false)
        } else {
            setTransactionId(paymentIntent.id);
            setCardErr('');
            setSuccess('Your Payment is successfully completed');

            // store payment on database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })
        }

    };
    return (
        <>  <form onSubmit={handleSubmit} className="mt-5">
            <CardElement className='w-50'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                                margin: '0px 3px'
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                            margin: '0px 3px'
                        },
                    },
                }}
            />
            <div className='flex justify-center'>
                <button type="submit" className='btn btn-warning btn-sm my-8 px-6 text-white' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
        </form>
            {
                cardErr && <p className='text-red-500'>{cardErr}</p>
            }
            {
                success && <div className="text-green-500">
                    <p >{success}</p>
                    <p>Your Transaction Id Is <span className="text-orange-500 font-bold">{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;