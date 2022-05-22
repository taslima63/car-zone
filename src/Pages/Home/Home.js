import React from 'react';
import Banner from './Banner';
import ProductShowcase from './ProductShowcase';

const Home = () => {
    return (
        <div className='px-6'>
            <Banner />
            <ProductShowcase />

        </div>
    );
};

export default Home;