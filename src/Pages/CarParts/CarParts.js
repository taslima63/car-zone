import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleParts from './SingleParts';
const CarParts = () => {
    const { data: parts, isLoading } = useQuery('carParts', () => fetch(`http://localhost:5000/carParts`).then((res) => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-3xl text-yellow-300 text-center my-8 font-bold">Car Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8'>
                {
                    parts.map((singlePart, index) => <SingleParts key={index + 1} singlePart={singlePart}></SingleParts>)
                }

            </div>
        </div>
    );
};

export default CarParts;