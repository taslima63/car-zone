import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleParts from '../CarParts/SingleParts';
import Loading from '../Shared/Loading';



const HomeParts = () => {
    const { data: parts, isLoading, refetch } = useQuery('carParts', () => fetch(`http://localhost:5000/carParts`).then((res) => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-3xl text-yellow-300 text-center my-8 font-bold">Popular Tools And Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8'>
                {
                    parts.reverse().slice(0, 6).map((singlePart, index) => <SingleParts key={index + 1} singlePart={singlePart} refetch={refetch}></SingleParts>)
                }

            </div>
        </div>
    );
};

export default HomeParts;