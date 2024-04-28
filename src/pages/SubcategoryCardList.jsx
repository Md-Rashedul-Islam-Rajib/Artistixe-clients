import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubCategoryCard from '../components/SubCategoryCard';

const SubcategoryCardList = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {data.map((item,idx)=><SubCategoryCard key={idx} item={item}></SubCategoryCard>)}
            </div>
        </div>
    );
};

export default SubcategoryCardList;