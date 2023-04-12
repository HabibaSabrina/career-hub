import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

import Banner from '../Banner/Banner';

const Header = () => {
    
    return (
        <div className='bg-gray-50 md:p-10 p-5'>
            <div className=' md:mx-40'>
            <nav className='md:flex justify-between items-center'>
            <h1 className='text-2xl font-bold max-sm:text-center max-sm:pt-5'>PositionSeeker</h1>
            <div className='max-sm:my-5 max-sm:text-center'>
                <Link className='md:mx-5 mx-2'  to="/">Home</Link>
                <Link className='md:mx-5 mx-2' to="/statistics">Statistics</Link>
                <Link className='md:mx-5 mx-2' to="/appliedjobs">Applied jobs</Link>
                <Link className='md:mx-5 mx-2' to="/blog">Blog</Link>
            </div>
            <div className='max-sm:text-center'>
            <button className='bg-gradient-to-r from-indigo-400 to-violet-600 p-4 rounded-xl text-white font-semibold '>Start Applying</button>
            </div>
        </nav>
        </div>
        </div>
    );
};

export default Header;