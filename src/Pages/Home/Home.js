import React from 'react';
import Banner from './Banner';
import HomeParts from './HomeParts';
import ProductShowcase from './ProductShowcase';

const Home = () => {
    return (
        <div className='px-6'>
            <Banner />
            <ProductShowcase />
            <HomeParts />

        </div>
    );
};

export default Home;