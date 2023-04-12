import React, { useState } from 'react';
import { getStoredCart } from '../../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsDetails from '../AppliedJobsDetails/AppliedJobsDetails';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import SectionBanner from '../Banner/SectionBanner';


const AppliedJobs = () => {
    const { appliedJobsArr } = useLoaderData()
    const [filter, setFilter] = useState([...appliedJobsArr])
    const [open, setOpen] = useState(true)

    const handleFilter = data => {
        const filterJob = appliedJobsArr.filter(app => app.jobType == data)
        setFilter([...filterJob])
        setOpen(!open)

    }
    return (
        <div>
            <SectionBanner></SectionBanner>
            <h1 className=' text-center -mt-40 text-3xl font-bold'>List of Applied Jobs</h1>

           <div className=' absolute mt-56 right-0 mx-56 bg-gray-50'>
           <button onClick={() => setOpen(!open)} className=' p-3  w-28 flex justify-between items-center border-2 border-gray-400'>Filter By<span>
                    {
                        open === true ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronUpIcon className="h-5 w-5" />
                    }
                </span></button>
            <div>
                {!open &&
                    (
                        <div>
                            <button className='p-3 w-28 border-x-2 border-b-2 border-gray-400' onClick={() => handleFilter('Onsite')} >Onsite</button>
                            <br />
                            <button className='p-3 w-28 border-x-2 border-b-2 border-gray-400' onClick={() => handleFilter('Remote')} >Remote</button>
                        </div>
                    )}
            </div>
           </div>
            <div className='flex flex-col gap-5 md:mx-56 mx-5 mt-80'>
                {
                    filter.map(appliedJob => <AppliedJobsDetails key={appliedJob.id} appliedJob={appliedJob}></AppliedJobsDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;