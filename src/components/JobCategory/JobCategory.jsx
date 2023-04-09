import React, { useEffect, useState } from 'react';
import JobCategoryCards from '../JobCategoryCards/JobCategoryCards';

const JobCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <h1 className='text-3xl font-bold mt-20'>Job Category List</h1>
            <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex gap-7 justify-center my-10'>
                {
                    categories.map(category => <JobCategoryCards key={category.id} category={category}></JobCategoryCards>)
                }
            </div>
        </div>
    );
};

export default JobCategory;