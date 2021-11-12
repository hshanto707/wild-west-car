import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import FeaturedCar from '../../components/DisplayCar/DisplayCar';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <FeaturedCar></FeaturedCar>
      <Banner></Banner>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;