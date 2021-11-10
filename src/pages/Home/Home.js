import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import DisplayCarSection from '../../components/DisplayCarSection/DisplayCarSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <DisplayCarSection></DisplayCarSection>
      <Banner></Banner>
    </div>
  );
};

export default Home;