import React, { useState, useEffect } from 'react';
import { getAPIHealth } from '../axios-services';

const Footer = () => {
  const [APIHealth, setAPIHealth] = useState('');

  useEffect(() => {
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? 'api is up! :D' : 'api is down :/');
    };

    getAPIStatus();
  }, []);

  console.log(APIHealth);
  return (
    <footer>
      <div className='container mx-auto px-6 py-4'>
        <div className='lg:flex'>
          <div className='-mx-6 w-full lg:w-2/5'>
            <div className='px-6'>
              <div className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  style={{ fill: 'forestgreen' }}
                >
                  <path fill='none' d='M0 0H24V24H0z' />
                  <path d='M21 3v2c0 9.627-5.373 14-12 14H5.243C5.08 19.912 5 20.907 5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0zm-8 2c-4.418 0-8 3.582-8 8 0 .362.003.711.01 1.046 1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C8.641 12.5 6.747 14.354 5.776 17H9c6.015 0 9.871-3.973 9.997-11.612-1.372.133-2.647.048-4.22-.188C13.627 5.027 13.401 5 13 5z' />
                </svg>
                <a href='#' className='text-xl font-bold'>
                  eCommerce.
                </a>
              </div>

              <p className='mt-2 max-w-md text-gray-500 dark:text-gray-400'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                labore, excepturi dolore fugiat nobis eaque at officia odit, ad
                voluptatem impedit itaque quos fugit officiis minus ipsa dolorum
                voluptate natus?
              </p>
            </div>
          </div>

          <div className='mt-6 lg:mt-0 lg:flex-1'>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4'>
              <div>
                <h3 className='font-bold uppercase text-gray-700 dark:text-white'>
                  Products
                </h3>
                <a
                  href='#'
                  className='mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400'
                >
                  Houseplants
                </a>
                <a
                  href='#'
                  className='mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400'
                >
                  Succulents
                </a>
                <a
                  href='#'
                  className='mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400'
                >
                  Supplies
                </a>
              </div>

              <div>
                <h3 className='font-bold uppercase text-gray-700 dark:text-white'>
                  Company
                </h3>
                <a
                  href='#'
                  className='mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400'
                >
                  About
                </a>
                <a
                  href='#'
                  className='mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400'
                >
                  Jobs
                </a>
                <a
                  href='#'
                  className='mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400'
                >
                  Terms
                </a>
              </div>

              <div>
                <h3 className='font-bold uppercase text-gray-700 dark:text-white'>
                  Useful Links
                </h3>
                <a
                  href='#'
                  className='mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400'
                >
                  My Account
                </a>
                <a
                  href='#'
                  className='mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400'
                >
                  Wishlist
                </a>
                <a
                  href='#'
                  className='mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400'
                >
                  Order Tracking
                </a>
              </div>

              <div>
                <h3 className='font-bold uppercase text-gray-700 dark:text-white'>
                  Contact
                </h3>
                <div className='mt-3 flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path d='M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' />
                  </svg>
                  <span className='ml-1 block text-sm text-gray-600 hover:underline dark:text-gray-400'>
                    123 Main St. Chicago, IL 60000
                  </span>
                </div>
                <div className='mt-3 flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z' />
                  </svg>
                  <span className='ml-1 block text-sm text-gray-600 hover:underline dark:text-gray-400'>
                    contact@eCommerce.dev
                  </span>
                </div>

                <div className='-mx-2 mt-4 flex flex-col lg:flex-row'>
                  <button
                    type='button'
                    className='dark:focus:ring-[#0a66c2]/55 mr-2 mb-2 inline-flex items-center rounded-2xl bg-[#0a66c2] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#0a66c2]/90 focus:outline-none focus:ring-4 focus:ring-[#0a66c2]/50'
                    onClick={() => {
                      window.open(
                        'https://www.linkedin.com/in/minsung-kim-015525241/',
                        '_blank'
                      );
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='mr-3 h-6 w-6'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z'
                        fill='white'
                      />
                    </svg>
                    <span className='border-l-2 border-gray-100 px-2 py-4 font-mono text-2xl text-gray-100'></span>
                    <div className='pt-0.5 font-mono text-xs font-bold md:text-sm lg:text-lg'>
                      @LinkedIn
                    </div>
                  </button>

                  <button
                    type='button'
                    className='dark:focus:ring-[#032151]/55 mr-2 mb-2 inline-flex items-center rounded-2xl bg-[#032151] px-5  py-2.5 text-center text-sm font-medium text-white hover:bg-[#032151]/90 focus:outline-none focus:ring-4 focus:ring-[#032151]/50'
                    onClick={() => {
                      window.open('https://github.com/MinFTW', '_blank');
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='mr-3 h-6 w-6'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z'
                        fill='white'
                      />
                    </svg>
                    <span className='border-l-2 border-gray-100 px-2 py-4 font-mono text-2xl text-gray-100'></span>
                    <div className='pt-0.5 font-mono text-xs font-bold md:text-sm lg:text-lg'>
                      @Github
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
