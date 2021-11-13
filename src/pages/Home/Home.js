import React from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import FeaturedCar from '../../components/FeaturedCar/FeaturedCar';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReviewSection from '../../components/ReviewSection/ReviewSection';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <FeaturedCar></FeaturedCar>
      <Banner></Banner>
      <ReviewSection></ReviewSection>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;