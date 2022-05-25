import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderModal from './OrderModal';

const PartDetails = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const [user] = useAuthState(auth);


    useEffect(() => {
        const url = `http://localhost:5000/carParts/${partId}`;
        // console.log(partId);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPart(data);
            });
    }, [])

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='max-w-lg rounded-md'> <figure ><img className="p-8" src={part.img} alt={part.name} /></figure></div>
                <div className="card max-w-lg bg-base-100 shadow-xl">

                    <div className="card-body">
                        <h2 className="card-title">Name : {part.name}</h2>
                        <p>Brand : {part.brand}</p>

                        <small className='text-zinc-600 '>Price : <span className='text-zinc-600 font-semibold '>{part.price}</span> </small>
                        <small className='text-zinc-600 '>Available : <span className='text-zinc-600 font-semibold '>{part.available}</span> </small>
                        <small className='text-zinc-600 '>Menufacturer : <span className='text-zinc-600 font-semibold '>{part.menufacturer}</span> </small>
                        <small className='text-zinc-600 '>Warranty : <span className='text-zinc-600 font-semibold '>{part.Warranty}</span> </small>

                        <small>{part.description}</small>
                        <div className="justify-center">
                            <label htmlFor="order-modal" className="btn modal-button w-100 bg-yellow-400 border-0 text-white mt-4 capitalize">Order Now</label>
                        </div>
                    </div>
                    {
                        (user && part.available > 0) && <OrderModal user={user} part={part} ></OrderModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default PartDetails;