import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductDeleteModal from './ProductDeleteModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: parts, isLoading, refetch } = useQuery('carParts', () => fetch('http://localhost:5000/carParts', {
        method: 'GET',
        // headers: {
        //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-y-hidden px-2">
            <h1>Manage Products</h1>
            <div>
                <h2 className='text-2xl'>All Products:{parts.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Parts</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Available Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parts.map((part, index) => <ProductRow
                                    key={part._id}
                                    part={part}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteProduct={setDeleteProduct}
                                ></ProductRow>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deleteProduct && <ProductDeleteModal deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch} />
                }
            </div>
        </div>
    );
};

export default ManageProducts; 