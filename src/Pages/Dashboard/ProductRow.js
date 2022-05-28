import React from 'react';

const ProductRow = ({ part, index, refetch, setDeleteProduct }) => {
    const { _id, name, img, brand, available } = part;

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={`parts ${name}`} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{brand}</td>
            <td>{available}</td>
            <td>
                <label onClick={() => setDeleteProduct(part)} htmlFor="product-delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;