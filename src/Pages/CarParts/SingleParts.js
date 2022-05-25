import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleParts = ({ singlePart }) => {
    const { _id, name, brand, price, description, MOQ, available, img } = singlePart;
    const navigate = useNavigate();
    const navigateToPartsDetail = (id) => {
        console.log("PartsId", id);
        navigate(`/carParts/${id}`);
    }

    return (

        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className='p-4'> <figure ><img src={img} alt={name} /></figure></div>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Brand : {brand}</p>
                <small>Price : {price}</small>
                <small>Available : {available}</small>
                <small>{description}</small>

                <div className="justify-center">
                    <button className="btn w-100 bg-yellow-400 border-0 text-white mt-4 capitalize" onClick={() => navigateToPartsDetail(_id)}>Order Now</button>
                </div>
            </div>

        </div>

    );
};

export default SingleParts;