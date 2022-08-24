import React from 'react';

const Featured = () => {
  return (
    <div className='m-5 items-center justify-center gap-5 sm:flex-col md:flex lg:flex lg:flex-row'>
      <article
        className='mb-3 flex h-[70vh] w-full max-w-2xl cursor-pointer flex-col items-center justify-center bg-cover bg-center p-10 md:mb-0'
        style={{
          backgroundImage: 'url(https://bit.ly/3dAHb66)',
        }}
      >
        <h1 className='min-h-33 mt-5 text-4xl font-bold text-white'>
          HOUSEPLANTS
        </h1>
        <button className='btn mt-5 cursor-pointer rounded-full border-none bg-white text-gray-500 hover:bg-slate-100'>
          SHOP NOW
        </button>
      </article>

      <article
        className='mb-3 flex h-[70vh] w-full max-w-2xl cursor-pointer flex-col items-center justify-center bg-cover bg-center p-10 md:mb-0'
        style={{
          backgroundImage: 'url(https://bit.ly/3bTLBoh)',
        }}
      >
        <h1 className='min-h-33 mt-5 text-4xl font-bold text-white'>
          SUCCULENTS
        </h1>
        <button className='btn mt-5 cursor-pointer rounded-full border-none bg-white text-gray-500 hover:bg-slate-100'>
          SHOP NOW
        </button>
      </article>

      <article
        className='flex h-[70vh] w-full max-w-2xl cursor-pointer flex-col items-center justify-center bg-cover bg-center p-10'
        style={{
          backgroundImage: 'url(https://bit.ly/3dMY7Xe)',
        }}
      >
        <h1 className='min-h-33 mt-5 text-4xl font-bold text-white'>
          SUPPLIES
        </h1>
        <button className='btn mt-5 cursor-pointer rounded-full border-none bg-white text-gray-500 hover:bg-slate-100'>
          SHOP NOW
        </button>
      </article>
    </div>
  );
};

export default Featured;
