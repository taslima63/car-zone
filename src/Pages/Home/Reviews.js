import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch(`http://localhost:5000/reviews`).then((res) => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-3xl text-yellow-300 text-center my-8 font-bold">Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8'>
                {
                    reviews.map((review, index) => <Review key={index + 1} review={review} ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;