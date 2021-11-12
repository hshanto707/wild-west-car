import React from 'react';
import DisplayCar from '../../components/DisplayCar/DisplayCar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AllCars = () => {
  return (
    <div>
      <Header></Header>
      <DisplayCar></DisplayCar>
      <Footer></Footer>
    </div>
  );
};

export default AllCars;