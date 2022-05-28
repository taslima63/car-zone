import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [cancelOrder, setCancelOrder] = useState(null);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const email = user.email;
    const { data: orders, isLoading, refetch } = useQuery('myOrder', () => fetch(`http://localhost:5000/myorder/${email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));

    if (isLoading) {
        console.log(orders);
        return <Loading></Loading>
    }
    return (
        <div className='m-3'>
            <h2 className='
        mb-5 text-xl font-semibold'>My Orders: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <MyOrderRow key={index} index={index} order={order} setCancelOrder={setCancelOrder}></MyOrderRow>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;