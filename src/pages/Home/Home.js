import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import DisplayCar from '../../components/DisplayCar/DisplayCar';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <DisplayCar></DisplayCar>
      <Banner></Banner>
      <Contact></Contact>
    </div>
  );
};

export default Home;