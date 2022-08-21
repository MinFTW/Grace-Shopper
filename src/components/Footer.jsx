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

              <div className='-mx-2 mt-4 flex'>
                <a
                  href='#'
                  className='mx-2 text-gray-700 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400'
                  aria-label='Linkden'
                  style={{ fill: '#0a66c2', cursor: 'pointer' }}
                >
                  <svg className='fill-none h-8 w-8' viewBox='0 0 512 512'>
                    <path d='M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z' />
                  </svg>
                </a>

                <a
                  href='#'
                  className='mx-2 text-gray-700 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400'
                  aria-label='Github'
                  style={{ fill: 'black' }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='32'
                    height='32'
                    style={{ cursor: 'pointer' }}
                  >
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path d='M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z' />
                  </svg>
                </a>
              </div>
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
                    <path d='M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z' />
                  </svg>
                  <span className='ml-1 block text-sm text-gray-600 hover:underline dark:text-gray-400'>
                    +1 526 654 8965
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
                <img className='mt-5' src='https://bit.ly/3AooImb' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
