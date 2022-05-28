import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, _id } = deleteProduct;
    console.log("deleteUser", deleteProduct);
    const handleDelete = () => {

        const url = `http://localhost:5000/carParts/${_id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`User: ${name} is deleted.`)
                    setDeleteProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="product-delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="product-delete-confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg ">Do you want to Delete <span className='text-red-500'>{name}</span> ?</h3>
                    <p className="py-4">You can't get back Part's data if you delete once</p>
                    <div className="modal-action">
                        <label htmlFor="product-delete-confirm-modal" className="btn btn-error btn-sm">Cancel</label>
                        <button onClick={() => handleDelete()} className="btn btn-sm btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};



export default ProductDeleteModal;