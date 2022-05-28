import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrdersRow from './OrdersRow';

const ManageOrder = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-y-hidden px-2">
            <h1>Manage Orders</h1>
            <div>
                <h2 className='text-2xl'>All Orders:{orders.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Orders</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Total Amount</th>
                                <th>Payment</th>
                                <th>Order's Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <OrdersRow
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    refetch={refetch}

                                ></OrdersRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default ManageOrder;