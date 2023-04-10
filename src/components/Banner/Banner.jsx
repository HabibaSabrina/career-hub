import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-50 p-10'>
            <div className='flex gap-20 items-center mx-40'>
            <div>
                <h1 className='text-5xl font-bold leading-snug'>One Step <br/>Closer To Your <br /><span className='text-indigo-400'>Dream Job</span></h1>
                <p className='my-5 leading-7 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='bg-indigo-400 mb-16 p-4 rounded-xl text-white font-semibold '>Get Started</button>

            </div>
            <img src="banner.png" alt="" />
        </div>
        </div>
    );
};

export default Banner;