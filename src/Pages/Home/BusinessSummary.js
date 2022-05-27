import React from 'react';
import { faAward, faBusinessTime, faScrewdriverWrench, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinessSummary = () => {
    return (
        <div className="my-10">
            <h1 className="text-3xl text-yellow-300 text-center my-8 font-bold">Our Business Summary</h1>
            <div className="flex justify-center">
                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat bg-zinc-500  text-center text-white">
                        <div className="font-semibold ">Renowned Brands </div>
                        <div className="font-bold text-3xl text-yellow-500">50+</div>
                        <div className="mt-3"><FontAwesomeIcon icon={faAward} size="xl" /></div>


                    </div>

                    <div className="stat bg-zinc-500 text-white text-center">
                        <div className="font-semibold ">Parts &#38; Tools Collection</div>
                        <div className="font-bold text-3xl text-yellow-500">30k+</div>
                        <div className=" mt-3"><FontAwesomeIcon icon={faScrewdriverWrench} size="xl" /></div>
                    </div>

                    <div className="stat bg-zinc-500 text-white text-center">
                        <div className="font-semibold ">Served Customers</div>
                        <div className="font-bold  text-3xl text-yellow-500">4,200+</div>
                        <div className="mt-3"><FontAwesomeIcon icon={faUserGroup} size="xl" /></div>
                    </div>

                    <div className="stat bg-zinc-500 text-white text-center">
                        <div className="font-semibold text-white">Service Hour</div>
                        <div className="font-bold text-3xl text-yellow-500">24/7</div>
                        <div className="mt-3"><FontAwesomeIcon icon={faBusinessTime} size="xl" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;