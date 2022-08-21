import React from 'react';
import {
  Navbar,
  Banner,
  Hero,
  Featured,
  Newsletter,
  Footer,
} from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <Featured />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
