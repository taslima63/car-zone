import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ order, index, setCancelOrder }) => {
    const { _id, name, unit_price
        , order_quantity, totalAmount, paid } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{unit_price}</td>
            <td>{order_quantity}</td>
            <td>{totalAmount}</td>
            <td>  {(order_quantity && !paid) &&
                <Link to={`/dashboard/payment/${_id}`}>
                    <button className='btn btn-xs btn-success'>Pay</button>
                </Link>}
                {(order_quantity && paid) &&
                    <span className='text-success'>Paid</span>
                }</td>
            <td>
                <label onClick={() => setCancelOrder(order)} htmlFor="cancel-confirm-modal" className="btn btn-xs btn-error">Cancel</label>
            </td>
        </tr>
    );
};

export default MyOrderRow;