import React from 'react';
import SectionBanner from '../Banner/SectionBanner';

const Blog = () => {
    return (
        <div>
            <SectionBanner></SectionBanner>
            <h1 className=' text-center -mt-40 text-3xl font-bold'>Blog</h1>
            <div className='md:mx-64 mx-5 leading-7 mt-56'>
                <p className='text-2xl font-bold mt-5 mb-3'><span className='text-violet-600'>1.</span> When should you use context API?</p>
                <p className='ml-8'>When I need to access data by many components at different nesting levels. I can avoid to pass props through many levels by <b>context API</b>.</p>
                <p className='text-2xl font-bold mt-5 mb-3'><span className='text-violet-600'>2.</span> What is a custom hook?</p>
                <p className='ml-8'><b>Custom hook</b> is a function which has input and output. Its name starts with <b>use</b> and can be used to call other hooks. Custom hook returns a normal non-jsx data and it can use other hooks as well. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook such as <b>useFetch</b>.</p>
                <p className='text-2xl font-bold mt-5 mb-3'><span className='text-violet-600'>3.</span> What is useRef?</p>
                <p className='ml-8'><b>useRef()</b> is a built-in React hook that accepts one argument as the initial value and returns a reference. It allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                <p className='text-2xl font-bold mt-5 mb-3'><span className='text-violet-600'>4.</span> What is useMemo?</p>
                <p className='ml-8'><b>useMemo()</b> is a function that returns a memoized value of a passed in resource-intensive function.Think of memoization as caching a value so that it does not need to be recalculated. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations. The useMemo hook is used to optimize the performance of a component by memoizing the results of a calculation or function. It stores the result of a calculation between re-renders.
                </p>
            </div>

        </div>
    );
};

export default Blog;