import React from 'react';

const Newsletter = () => {
  return (
    <div className='flex h-[40vh] flex-col items-center justify-center bg-pink-50 p-4'>
      <h1 className='mb-5 text-5xl font-bold md:text-5xl lg:text-7xl'>
        Newsletter
      </h1>
      <p className='mb-5 text-base md:text-lg lg:text-xl'>
        Get updates about your favorite products.
      </p>
      <div className='flex h-10 justify-between border-gray-400 bg-white md:w-1/2'>
        <input className='md:flex-8 border-none pl-5' />
        <button className='flex w-10 items-center justify-center border-none bg-teal-600 md:w-20'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            style={{ fill: 'white' }}
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
