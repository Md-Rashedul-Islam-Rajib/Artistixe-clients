import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCraftCards from '../components/AllCraftCards';

const AllCraft = () => {
    const data = useLoaderData();
    return (
        <div className="p-16">
            <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold">All Craft Items</h2>
    </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                data.map((item,idx)=><AllCraftCards key={idx} item={item}></AllCraftCards>)
            }
            </div>
        </div>
    );
};

export default AllCraft;