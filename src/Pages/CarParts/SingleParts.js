import React from 'react';

const SingleParts = ({ singlePart }) => {
    const { name, brand, price, description, MOQ, available, Warranty, img } = singlePart;
    return (

        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className='p-4'> <figure ><img src={img} alt={name} /></figure></div>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Brand : {brand}</p>
                <small>Price : {price}</small>
                <small>{description}</small>
                <small>Warranty : {Warranty}</small>
                <div className="card-actions justify-center">
                    <button className="btn w-100 bg-yellow-400 border-0 text-white mt-4 capitalize">Order Now</button>
                </div>
            </div>
        </div>

    );
};

export default SingleParts;