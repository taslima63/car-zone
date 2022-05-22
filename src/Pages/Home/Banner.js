import React from 'react';
import Features from './Features';

const Banner = () => {
    return (
        <div>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=8B7BCDC2" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=500B67FB" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=A89D0DE6" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=225E6693" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=9D9539E7" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=BDC01094" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A" alt="Pizza" />
                </div>
            </div>
            <div>
                <h1 className='text-3xl text-violet-700 text-center my-8 font-bold'>Welcome to Car Zone</h1>
                <p className='text-lg text-zinc-600 text-center my-3 font-semibold'>Your partner to provide quality products in cheaper price.</p>
            </div>
            <Features></Features>
        </div>
    );
};

export default Banner;