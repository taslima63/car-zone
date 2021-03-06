import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRotateLeft, faShieldAlt, faTags } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <div className='bg-zinc-600 flex flex-col  justify-around items-center md:flex-row shadow'>
            <div className='flex items-center my-5'> <FontAwesomeIcon size="lg" icon={faTags} className="px-3 text-yellow-500 " />
                <a target="_blank" href='#' className='font-semibold text-yellow-500 underline '>Price Match Gurantee</a>
            </div>
            <div className='flex items-center my-5'> <FontAwesomeIcon size="lg" icon={faArrowRotateLeft} className="px-3 text-yellow-500 " />
                <a target="_blank" href='#' className='font-semibold text-yellow-500 underline '>90-Day Returns</a>
            </div>
            <div className='flex items-center my-5'> <FontAwesomeIcon size="lg" icon={faShieldAlt} className="px-3 text-yellow-500 " />
                <a target="_blank" href='#' className='font-semibold text-yellow-500 underline '>Lifetime Replacement</a>
            </div>
        </div>
    );
};

export default Features;