import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='hero min-h-[90vh] bg-sky-50 lg:flex lg:justify-center'>
      <div className='hero-content flex flex-col lg:flex-row'>
        <img
          src='https://bit.ly/3QviaHQ'
          className='rounded-lg shadow-2xl lg:h-4/5 lg:w-4/5'
        />
        <div className='md:flex md:flex-col md:items-center md:justify-center lg:ml-20 lg:items-start lg:justify-start'>
          <h1 className='text-6xl font-bold'>SUMMER SALE!</h1>
          <p className='py-6 md:w-2/3'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className='btn rounded-full bg-orange-500 hover:bg-orange-600'
            onClick={() => navigate('/products')}
          >
            START SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
