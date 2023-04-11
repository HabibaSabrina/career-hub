import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({ appliedJob }) => {
    const { id, companyLogo, jobTitle, companyName, jobType, location, jobTiming, salary } = appliedJob
    return (
        <div className='border-2 p-5 rounded flex justify-between items-center'>
            <div className='flex gap-5 items-center'>
                <div className='bg-gray-50 px-10 py-20 rounded-xl'>
                <img className='w-32 h-8 mb-5' src={companyLogo} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>{jobTitle}</h1>
                    <p className='my-2 text-xl text-gray-500'>{companyName}</p>
                    <div className='flex gap-5 my-5'>
                        <p className='border-2 p-2 w-28 text-center rounded border-indigo-400 text-indigo-400 font-semibold'>{jobType}</p>
                        <p className='border-2 p-2 w-28 text-center rounded border-indigo-400 text-indigo-400 font-semibold'>{jobTiming}</p>
                    </div>
                    <div className='flex gap-5'>
                        <p className='flex text-gray-500'><MapPinIcon className="h-6 w-6 mr-1" /> {location}</p>
                        <p className='flex text-gray-500'><CurrencyDollarIcon className="h-6 w-6 mr-1" /> {salary}</p>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`}><button className='h-14 p-4 rounded-xl mt-5 text-white font-semibold bg-gradient-to-r from-indigo-400 to-violet-600'>View Details</button></Link>
        </div>
    );
};

export default AppliedJobsDetails;