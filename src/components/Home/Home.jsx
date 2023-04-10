import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';


const Home = () => {
    const jobs = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <div className='text-center'>
                <h1 className='text-3xl font-bold mt-20'>Featured Jobs</h1>
                <p className='my-5 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-5 mx-52'>
                {
                    jobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default Home;