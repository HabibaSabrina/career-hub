import React from 'react';

const JobCategoryCards = ({category}) => {
    const {categoryName, jobsAvailable, categoryLogo} = category
    return (
        <div className='bg-gray-50 p-10 rounded-xl w-64'>
            <img className='bg-indigo-50 p-3 mb-5 rounded-xl' src={categoryLogo} alt="" />
            <h1 className='my-3 text-xl font-semibold'>{categoryName}</h1>
            <p className='text-gray-500'>{jobsAvailable}+ Jobs Available</p>  
        </div>
    );
};

export default JobCategoryCards;