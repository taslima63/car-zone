import React from 'react';
import { useQuery } from 'react-query';
const CarParts = () => {
    const { data: services, isLoading, refetch } = useQuery('available', () => fetch(``).then((res) => res.json())
    );
    return (
        <div>


        </div>
    );
};

export default CarParts;