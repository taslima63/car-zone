import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleParts from './SingleParts';
const CarParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carParts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);
    return (
        <div>
            <h1 className="text-3xl text-yellow-300 text-center my-8 font-bold">Car Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8'>
                {
                    parts.reverse().slice(0, 6).map((singlePart, index) => <SingleParts key={index + 1} singlePart={singlePart}></SingleParts>)
                }

            </div>
        </div>
    );
};

export default CarParts;