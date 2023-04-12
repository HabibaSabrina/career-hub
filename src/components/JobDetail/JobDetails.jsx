import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { addToDb } from '../../utilities/fakeDb';
import SectionBanner from '../sectionBanner/sectionBanner';

const JobDetails = () => {
    const jobsData= useLoaderData()
    const jobId = useParams()
    const jobDetail =  jobsData.find(detail => detail.id === jobId.id)
    const {id, description, responsibility, eduRequirements, experience, contact, salary, jobTitle, location} = jobDetail
    const handleAppliedJobs = id =>{
        addToDb(id)

    }
    
    return (
        <div>
            
            <h1 className='bg-gray-50 text-center p-24 text-3xl font-bold'>Job Details</h1>
            <div className='grid md:grid-cols-3 my-20 md:mx-44 mx-5 gap-5'>
                <div className='leading-7 col-span-2'>
                    <p className='mb-5'><span className='font-semibold'>Job Description:</span> <span className='text-gray-500'>{description}</span></p>
                    <p className='mb-5'><span className='font-semibold'>Job Responsibility:</span> <span className='text-gray-500'>{responsibility}</span></p>
                    <p className='mb-5'><span className='font-semibold'>Educational Requirements:</span> <span className='text-gray-500'><br />{eduRequirements}</span></p>
                    <p className='mb-5'><span className='font-semibold'>Experiences:</span> <span className='text-gray-500'><br />{experience}</span></p>
                </div>
                <div>
                <div className='bg-gray-50 p-5 rounded'>
                    <h1 className='text-xl font-semibold'>Job Details</h1>
                    <hr className='my-5' />
                    <p className='flex gap-1'><CurrencyDollarIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'>Salary:</span><span className='text-gray-500'>{salary} (Per Month)</span></p>
                    <p className='flex gap-1 mt-2'><CalendarDaysIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'>Job Title:</span><span className='text-gray-500'>{jobTitle}</span></p>
                    <h1 className='text-xl font-semibold mt-5'>Contact Information</h1>
                    <hr className='my-5' />
                    <p className='flex gap-1'><PhoneIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'>Phone:</span><span className='text-gray-500'>{contact.phone}</span></p>
                    <p className='flex gap-1 my-2'><EnvelopeIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'>Email:</span><span className='text-gray-500'>{contact.email}</span></p>
                    <p className='flex gap-1 mb-5'><MapPinIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'>Address:</span><span className='text-gray-500'>{location}</span></p>
                </div>
                <button onClick={() => handleAppliedJobs(id)} className='w-full p-4 rounded-xl mt-5 text-white font-semibold bg-gradient-to-r from-indigo-400 to-violet-600'>Apply Now</button>

                </div>
            </div>

           
        </div>
    );
};

export default JobDetails;