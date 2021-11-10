import React from 'react';
import Card from '../../components/Card/Card';
import DisplayCar from '../../components/DisplayCar/DisplayCar';
import useCarData from '../../hooks/useCarData';

const AllCars = () => {
  const [cars] = useCarData();

  return (
    <div className="container section-container text-center mb-5">
      <h4 className="fw-bold text-start">Hand Picked</h4>
      <h1 className="fw-bold mb-5 text-start">All Listings</h1>
      <div className="all-car">
        {cars.map((car) => (
          <Card car={car} key={car._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCars;