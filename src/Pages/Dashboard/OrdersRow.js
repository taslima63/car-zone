import React from 'react';
import { toast } from 'react-toastify';

const OrdersRow = ({ order, index, refetch }) => {
    const { _id, name, brand, totalAmount, paid, userName, shipped } = order;
    // console.log(order);
    const handleOrderStatus = (id) => {
        // alert(id);
        fetch(`http://localhost:5000/orderlist/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to update status');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    refetch();
                    toast.success(`Successfully updated status`);
                }
            })
    }

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{brand}</td>
            <td>{totalAmount}</td>
            <td>{userName}</td>
            <td>
                {paid}
            </td>
            <td>
                {(paid && !shipped) && <button onClick={() => handleOrderStatus(_id)} className="btn btn-xs bg-green-600 border-0 text-white">Pending</button>}
                {(paid && shipped) && <span className="btn btn-xs bg-zinc-600 text-white">Shipped</span>}
                {!paid && <span className="btn btn-xs bg-zinc-600 text-white">Not Paid</span>}
            </td>
        </tr>
    );
};

export default OrdersRow;