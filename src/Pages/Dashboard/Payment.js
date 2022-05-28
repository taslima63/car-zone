import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1O2gCzxCDpiMWLrTnQD5LcqLENkY7AgZLo1It7M1cBOWgebpNZYem3jqmSv1Am8Bx2S2AeAioci0BHK5W4WhS400T51Grwa7');
const Payment = () => {
    const { id } = useParams();
    console.log("order", id);
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mx-auto'>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success'> Hello {order.userName},</p>
                    <h2 className="card-title">Pay For : {order.name}</h2>
                    <p>Your Order : <span className='text-orange-600'>{order.totalAmount}</span> at <span className='text-orange-600'>{order.order_quantity}</span></p>
                    <p>Please pay : {order.totalAmount}¥</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Pay</button>
                    </div>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;