import React from 'react';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/PQt90sV/showcase.jpg" className="lg:max-w-lg rounded-lg shadow-2xl" />
                <div className='pe-12'>
                    <h1 className="text-3xl font-bold text-zinc-600">Find The Right Parts Faster!</h1>
                    <p className="py-6">Get back on the road faster with CarParts.com. At CarParts.com, we're confident that you'll be able to find the right part or accessory for your car, truck or SUV. </p>
                    <Link to='/carParts' className="btn bg-yellow-400 text-white border-0">Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;