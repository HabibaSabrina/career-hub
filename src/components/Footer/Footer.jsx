import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black mt-32'>
            <div className='grid md:grid-cols-5 gap-10 p-20 md:mx-20'>
                <div>
                    <h1 className='text-white text-2xl font-semibold'>PositionSeeker</h1>
                    <p className='text-gray-400 my-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="/group.png" alt="" />
                </div>
                <div className='leading-9'>
                    <h1 className='text-white text-xl'>Company</h1>
                    <p className='text-gray-400'>About us</p>
                    <p className='text-gray-400'>Work</p>
                    <p className='text-gray-400'>Latest News</p>
                    <p className='text-gray-400'>Career</p>
                </div>
                <div className='leading-9'>
                    <h1 className='text-white text-xl'>Product</h1>
                    <p className='text-gray-400'>Prototype</p>
                    <p className='text-gray-400'>Plans & Pricing</p>
                    <p className='text-gray-400'>Customers</p>
                    <p className='text-gray-400'>Integrations</p>

                </div>
                <div className='leading-9'>
                    <h1 className='text-white text-xl'>Support</h1>
                    <p className='text-gray-400'>Help Desk</p>
                    <p className='text-gray-400'>Sales</p>
                    <p className='text-gray-400'>Become a Partner</p>
                    <p className='text-gray-400'>Developers</p>

                </div>
                <div className='leading-9'>
                    <h1 className='text-white text-xl'>Contact</h1>
                    <p className='text-gray-400'>524 Broadway , NYC</p>
                    <p className='text-gray-400'>+1777-978-5570</p>
                </div>
            </div>
            <div className='md:flex justify-between mx-10 md:mx-40 border-t-2 border-gray-400 pb-20'>
            <p className='text-gray-400 mt-5'>@2023 CareerHub. All Rights Reserved</p>
            <p className='text-gray-400 mt-5'>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;