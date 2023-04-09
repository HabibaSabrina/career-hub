import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-10 mx-44'>
            <nav className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>PositionSeeker</h1>
            <div>
                <Link className='mx-5'  to="/">Home</Link>
                <Link className='mx-5' to="/statistics">Statistics</Link>
                <Link className='mx-5' to="/appliedjobs">Applied jobs</Link>
                <Link className='mx-5' to="/blog">Blog</Link>
            </div>
            <button className='bg-indigo-500 p-4 rounded-xl text-white font-semibold '>Start Applying</button>
        </nav>
        </div>
    );
};

export default Header;