import React from 'react';
import Features from './Features';

const Banner = () => {
    return (
        <div className='mt-1'>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src="https://i.ibb.co/WfjVFyV/c33.jpg" alt="engine" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/mvPrRnS/c22.jpg" alt="tire" />
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/rsVcyt8/c44.jpg" alt="headlight" />
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-3xl text-violet-700 text-center mb-5 font-bold'>Welcome to Car Zone</h1>
                <p className='text-lg text-zinc-600 text-center my-3 font-semibold'>Your partner to provide quality products in cheaper price.</p>
            </div>
            <Features></Features>
        </div>
    );
};

export default Banner;