import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';


const Home = () => {
    const jobs = useLoaderData()
    const [seeAll, setSeeAll] = useState(false)
    const handleSeeAll = () =>{
        setSeeAll(true)
    }
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
                    jobs?.slice(0, seeAll ? 10 : 4).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className='text-center my-5'>
                {!seeAll && (
                <button onClick={handleSeeAll} className=' p-4 rounded-xl mt-5 text-white font-semibold bg-gradient-to-r from-indigo-400 to-violet-600 '>See all jobs</button>
                )}
            </div>

        </div>
    );
};

export default Home;