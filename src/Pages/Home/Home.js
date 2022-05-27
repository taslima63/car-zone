import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeParts from './HomeParts';
import HomeReview from './HomeReview';
import ProductShowcase from './ProductShowcase';

const Home = () => {
    return (
        <div className='px-6'>
            <Banner />
            <ProductShowcase />
            <HomeParts />
            <BusinessSummary />
            <HomeReview />

        </div>
    );
};

export default Home;