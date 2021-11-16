import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCarData from '../../hooks/useCarData';
import Card from '../Card/Card';
import './FeaturedCar.css';

const DisplayCar = () => {

  const [cars] = useCarData();
  console.log(cars);

  return (
    <div className="container section-container text-center">
      <h4 className="fw-bold text-start">Hand Picked</h4>
      <h1 className="fw-bold mb-5 text-start">Featured Listings</h1>
      <div className="all-car">
        {cars.slice(0, 6).map((car) => (
          <Card car={car} key={car._id}></Card>
        ))}
      </div>
      <NavLink to="/all-cars">
        <Button className="button-dark mt-5">See All</Button>
      </NavLink>
    </div>
  );
};

export default DisplayCar;