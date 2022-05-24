import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = ({ review }) => {
    const [user] = useAuthState(auth);

    const { name, comment, rating, img } = review;



    return (

        <div class="card max-w-lg bg-base-100 text-primary-content shadow-md">
            <div class="avatar justify-center mt-8">
                <div class="w-24 rounded-full ring ring-yellow-400 ring-offset-base-100 ring-offset-2">
                    <img src={img} />
                </div>
            </div>
            <div class="card-body items-center">
                <h2 class="card-title text-lg text-zinc-600 capitalize">{name}</h2>
                <small className=' text-start '> {comment}</small>
                <small className=' text-start '>Rating : {
                    rating}
                </small>
            </div>
        </div>

    );
};

export default Review;