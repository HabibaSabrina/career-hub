import React from 'react';

const Banner = () => {
    return (
        <div className='flex gap-20 items-center'>
            <div>
                <h1 className='text-5xl font-bold mt-20 leading-snug'>One Step <br/>Closer To Your <br /><span className='text-indigo-400'>Dream Job</span></h1>
                <p className='my-5 leading-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='bg-indigo-400 p-4 rounded-xl text-white font-semibold '>Get Started</button>

            </div>
            <img src="banner.png" alt="" />
        </div>
    );
};

export default Banner;