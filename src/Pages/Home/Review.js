import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = ({ review }) => {
    const [user] = useAuthState(auth);

    const { name, comment, rating, img } = review;



    return (

        <div className="card max-w-lg bg-base-100 text-primary-content shadow-md">
            <div className="avatar justify-center mt-8">
                <div className="w-24 rounded-full ring ring-yellow-400 ring-offset-base-100 ring-offset-2">
                    <img src={img} />
                </div>
            </div>
            <div className="card-body items-center">
                <h2 className="card-title text-lg text-zinc-600 capitalize">{name}</h2>
                <small className=' text-start '> {comment}</small>
                <small className=' text-start '>Rating : <small className='text-yellow-300'>{rating}</small>
                </small>
            </div>
        </div>

    );
};

export default Review;