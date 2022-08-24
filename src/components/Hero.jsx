import React from 'react';

const Hero = () => {
  return (
    <div className='hero min-h-[90vh] bg-sky-50'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src='https://bit.ly/3QviaHQ'
          className='rounded-lg shadow-2xl sm:max-w-md lg:max-w-3xl'
        />
        <div className='ml-5'>
          <h1 className='text-6xl font-bold'>SUMMER SALE!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn rounded-full bg-orange-500 hover:bg-orange-600'>
            START SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
