import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-white p-2 shadow'
          >
            <li tabIndex='0'>
              <a className='justify-between'>
                Shop
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </a>
              <ul className='bg-white p-2'>
                <li>
                  <a>Houseplants</a>
                </li>
                <li>
                  <a>Succulents</a>
                </li>
                <li>
                  <a>Supplies</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Care</a>
            </li>
            <li>
              <a>Learn</a>
            </li>
          </ul>
        </div>

        <ul className='menu menu-horizontal hidden p-0 lg:flex'>
          <li tabIndex='0'>
            <a>
              Shop
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </a>
            <ul className='bg-white p-2'>
              <li>
                <a>Houseplants</a>
              </li>
              <li>
                <a>Succulents</a>
              </li>
              <li>
                <a>Supplies</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Care</a>
          </li>
          <li>
            <a>Learn</a>
          </li>
        </ul>
      </div>

      <div className='navbar-center'>
        <Link
          to='/'
          className='btn btn-ghost text-xl font-bold normal-case md:text-4xl lg:text-4xl'
        >
          eCommerce.
        </Link>
      </div>

      <div className='navbar-end ml-10 md:ml-0 lg:ml-0'>
        <button className='btn btn-ghost btn-circle lg:mr-5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 lg:h-8 lg:w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
        <div className='flex-none'>
          <div className='dropdown dropdown-end'>
            <label tabIndex='0' className='btn btn-ghost btn-circle lg:mr-5'>
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className='h-5 w-5 lg:h-9 lg:w-9'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h4V8a6 6 0 0 1 6-6zm6.826 9H5.173l.667 8h12.319l.667-8zM13 13v4h-2v-4h2zm-4 0v4H7v-4h2zm8 0v4h-2v-4h2zm-5-9a4 4 0 0 0-3.995 3.8L8 8v1h8V8a4 4 0 0 0-3.8-3.995L12 4z' />
                </svg>
                <span className='badge indicator-item badge-sm bg-orange-500'>
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex='0'
              className='card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow'
            >
              <div className='card-body'>
                <span className='text-lg font-bold'>8 Items</span>
                <span className='text-info'>Subtotal: $999</span>
                <div className='card-actions'>
                  <button className='btn btn-outline btn-block bg-teal-600 text-white'>
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='dropdown dropdown-end'>
            <label tabIndex='0' className='avatar btn btn-ghost btn-circle'>
              <div className='w-7 rounded-full lg:w-10'>
                <img src='https://placeimg.com/80/80/people' />
              </div>
            </label>
            <ul
              tabIndex='0'
              className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
            >
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
