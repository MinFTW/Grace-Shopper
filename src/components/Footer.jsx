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
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <p>API Status: {APIHealth}</p>
    </div>
  );
};

export default Footer;