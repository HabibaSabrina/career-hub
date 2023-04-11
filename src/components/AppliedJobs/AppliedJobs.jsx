import React from 'react';
import { getStoredCart } from '../../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsDetails from '../AppliedJobsDetails/AppliedJobsDetails';
import {ChevronDownIcon } from '@heroicons/react/24/outline'


const AppliedJobs = () => {
    const { appliedJobsArr } = useLoaderData()
    return (
        <div>
            <h1 className='bg-gray-50 text-center p-20 text-3xl font-bold'>List of Applied Jobs</h1>
            <div className='flex flex-col gap-5 mx-56 my-20'>
            {
                appliedJobsArr.map(appliedJob => <AppliedJobsDetails key={appliedJob.id} appliedJob={appliedJob}></AppliedJobsDetails>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;