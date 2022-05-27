import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Review from './Review';

const HomeReview = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch(`http://localhost:5000/reviews`).then((res) => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-yellow-300 text-center my-8 font-bold">Testimonial by Our Customers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8'>
                {
                    reviews.slice(0, 6).map((review, index) => <Review key={index + 1} review={review} ></Review>)
                }

            </div>
            <div>
                <Link to='/reviews' className="btn bg-yellow-400 text-white border-0 text-center">See More Reviews</Link>
            </div>

        </div>
    );
};

export default HomeReview;