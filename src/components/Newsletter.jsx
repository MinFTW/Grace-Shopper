import React from 'react';

const Newsletter = () => {
  return (
    <div className='flex h-[40vh] flex-col items-center justify-center bg-red-50 p-5'>
      <h1 className='mb-10 text-5xl font-bold'>Newsletter</h1>
      <div className='flex flex-col items-center justify-between'>
        <p className='mb-5 text-lg'>
          Join our mailing list to get updates about your favorite products!
        </p>
        <div className='flex items-center justify-center'>
          <input className='h-12 rounded md:w-[50vw] lg:w-[35vw]'></input>
          <button className='btn w-16 border-none bg-teal-600 lg:w-24'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='h-8 w-8 fill-white'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
